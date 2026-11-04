import React, { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import TickerBar from "./TickerBar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import { applyHead } from "../seo/head";
import { trackPageView } from "../lib/analytics";

const Layout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    applyHead(pathname);
    trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar />
      <TickerBar />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
