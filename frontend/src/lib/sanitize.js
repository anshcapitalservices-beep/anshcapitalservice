import DOMPurify from "dompurify";

// Links that open a new tab must not get a handle on this window.
DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if (node.tagName === "A" && node.getAttribute("target") === "_blank") {
    node.setAttribute("rel", "noopener noreferrer");
  }
});

/** Strip scripts, event handlers and javascript: URLs from rich-text HTML. */
export const sanitizeHtml = (html) =>
  DOMPurify.sanitize(html || "", {
    USE_PROFILES: { html: true },
    FORBID_TAGS: ["style", "form", "input", "button", "textarea", "select"],
    ADD_ATTR: ["target"],
  });
