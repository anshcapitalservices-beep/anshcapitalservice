/* eslint-disable no-console */
// Build-time pre-rendering.
//
// Runs after `craco build`. It compiles src/ssr.js for Node with the same
// webpack config as the browser build (so image URLs are identical), renders
// every route in src/seo/site.js to static HTML, and writes:
//   build/index.html, build/<route>/index.html  - finished pages with their own <head>
//   build/spa.html                              - empty shell for client-only routes
//   build/sitemap.xml, build/robots.txt
//
// Usage: node scripts/prerender.js
process.env.NODE_ENV = "production";
process.env.BABEL_ENV = "production";
process.env.GENERATE_SOURCEMAP = "false";

const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const ROOT = path.resolve(__dirname, "..");
const BUILD = path.join(ROOT, "build");
const SSR_OUT = path.join(ROOT, "build-ssr");

function ssrWebpackConfig() {
  const configFactory = require("react-scripts/config/webpack.config");
  const config = configFactory("production");

  config.entry = path.join(ROOT, "src/ssr.js");
  config.target = "node";
  config.devtool = false;
  config.output = {
    ...config.output,
    path: SSR_OUT,
    filename: "ssr.js",
    chunkFilename: "ssr.[id].js",
    library: { type: "commonjs2" },
    clean: true,
  };
  config.resolve.alias = { ...config.resolve.alias, "@": path.join(ROOT, "src") };
  config.optimization = { minimize: false, splitChunks: false, runtimeChunk: false };
  config.performance = { hints: false };
  // Never share webpack's on-disk cache with the browser build: a Node-target
  // cache entry would make the next browser build resolve Node-only modules.
  config.cache = false;

  const drop = new Set([
    "HtmlWebpackPlugin",
    "InlineChunkHtmlPlugin",
    "InterpolateHtmlPlugin",
    "WebpackManifestPlugin",
    "GenerateSW",
    "InjectManifest",
    "ESLintWebpackPlugin",
    "ForkTsCheckerWebpackPlugin",
  ]);
  config.plugins = config.plugins.filter((p) => !drop.has(p.constructor.name));
  // One file: React.lazy imports are bundled in so they resolve synchronously.
  config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }));
  return config;
}

function compile(config) {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) return reject(err);
      if (stats.hasErrors()) return reject(new Error(stats.toString({ all: false, errors: true })));
      resolve(stats);
    });
  });
}

const outFile = (route) =>
  route === "/" ? path.join(BUILD, "index.html") : path.join(BUILD, route.replace(/^\//, ""), "index.html");

async function main() {
  const template = fs.readFileSync(path.join(BUILD, "index.html"), "utf8");
  if (!template.includes('<div id="root"></div>')) {
    throw new Error("build/index.html is not the CRA template (already prerendered?). Run the full build again.");
  }

  // Empty shell for routes we do not prerender (e.g. /blog/<slug>).
  fs.writeFileSync(path.join(BUILD, "spa.html"), template);

  console.log("Prerender: compiling server bundle…");
  await compile(ssrWebpackConfig());
  const ssr = require(path.join(SSR_OUT, "ssr.js"));

  const stripHead = (html) =>
    html
      .replace(/<title>[\s\S]*?<\/title>/, "")
      .replace(/<meta name="description"[^>]*>/, "")
      .replace(/<meta property="og:[^"]+"[^>]*>/g, "");

  const base = stripHead(template);
  for (const route of ssr.PRERENDER_ROUTES) {
    const { html, head } = await ssr.render(route);
    if (!html || html.length < 1000) throw new Error(`Prerender produced almost no HTML for ${route}`);
    const page = base
      .replace("</head>", `${head}\n        <noscript><style>.reveal{opacity:1!important;transform:none!important}</style></noscript>\n    </head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    const file = outFile(route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, page);
    console.log(`  ${route.padEnd(22)} ${(page.length / 1024).toFixed(0)} KB`);
  }

  // sitemap.xml
  const today = new Date().toISOString().slice(0, 10);
  const urls = ssr.PRERENDER_ROUTES.filter((r) => !ssr.SITEMAP_EXCLUDE.has(r))
    .map((r) => `  <url><loc>${ssr.SITE_URL}${r === "/" ? "/" : r}</loc><lastmod>${today}</lastmod></url>`)
    .join("\n");
  fs.writeFileSync(
    path.join(BUILD, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );

  // robots.txt
  fs.writeFileSync(
    path.join(BUILD, "robots.txt"),
    `User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/\n\nSitemap: ${ssr.SITE_URL}/sitemap.xml\n`
  );

  fs.rmSync(SSR_OUT, { recursive: true, force: true });
  console.log(`Prerender: wrote ${ssr.PRERENDER_ROUTES.length} pages, sitemap.xml and robots.txt`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
