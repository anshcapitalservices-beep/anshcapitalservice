// Server-side entry used only at build time by scripts/prerender.js.
// It renders a route to static HTML so search engines and link previews
// receive the full page text without running JavaScript.
import React from "react";
import { prerenderToNodeStream } from "react-dom/static.node";
import { StaticRouter } from "react-router-dom";
import { AppRoutes, AppShell } from "./App";
import { renderHeadTags } from "./seo/head";

export { PRERENDER_ROUTES, SITEMAP_EXCLUDE, SITE_URL } from "./seo/site";

const streamToString = async (stream) => {
  const chunks = [];
  for await (const chunk of stream) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks).toString("utf8");
};

export async function render(url) {
  const { prelude } = await prerenderToNodeStream(
    <React.StrictMode>
      <AppShell>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </AppShell>
    </React.StrictMode>
  );
  return { html: await streamToString(prelude), head: renderHeadTags(url) };
}
