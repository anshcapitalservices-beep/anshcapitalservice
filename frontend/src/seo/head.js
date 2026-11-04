import { BUSINESS, businessSchema, getPageMeta } from "./site";

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// JSON inside <script> must not be able to close the tag.
export const jsonLd = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");

/** <head> tags for a route, as an HTML string (used at build time). */
export const renderHeadTags = (pathname) => {
  const m = getPageMeta(pathname);
  const tags = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<link rel="canonical" href="${esc(m.canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(BUSINESS.name)}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${esc(m.canonical)}" />`,
    `<meta property="og:image" content="${esc(m.image)}" />`,
    `<meta name="twitter:card" content="summary" />`,
  ];
  if (m.path === "/") {
    tags.push(`<script type="application/ld+json">${jsonLd(businessSchema())}</script>`);
  }
  return tags.join("\n        ");
};

const setMeta = (attr, key, value) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

/** Keep <head> in step with client-side navigation. */
export const applyHead = (pathname, override = {}) => {
  const m = { ...getPageMeta(pathname), ...override };
  document.title = m.title;
  setMeta("name", "description", m.description);
  setMeta("property", "og:title", m.title);
  setMeta("property", "og:description", m.description);
  setMeta("property", "og:url", m.canonical);
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", m.canonical);
};
