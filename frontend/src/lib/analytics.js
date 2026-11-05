// Google Analytics 4. Set REACT_APP_GA_MEASUREMENT_ID (e.g. G-XXXXXXXXXX) in
// the Vercel project's environment variables and redeploy to switch it on.
const GA_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

export const initAnalytics = () => {
  if (!GA_ID || typeof window === "undefined" || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // Page views are sent on every route change by trackPageView.
  window.gtag("config", GA_ID, { send_page_view: false });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(s);
};

export const trackPageView = (path) => {
  if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};
