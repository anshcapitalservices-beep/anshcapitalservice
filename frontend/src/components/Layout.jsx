import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import TickerBar from "./TickerBar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

const Layout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const titles = {
      "/": "ANSH Capital Services",
      "/about": "About Us | ANSH Capital Services",
      "/services": "Services & Products | ANSH Capital Services",
      "/why-choose-us": "Why Choose Us | ANSH Capital Services",
      "/blog": "Financial Insights & Blog | ANSH Capital Services",
      "/faq": "FAQ | ANSH Capital Services",
      "/contact": "Contact Us | ANSH Capital Services",
    };
    if (titles[pathname]) {
      document.title = titles[pathname];
    } else if (!pathname.startsWith("/blog/") && !pathname.startsWith("/services/") && !pathname.startsWith("/products/")) {
      document.title = "ANSH Capital Services";
    }

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
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
