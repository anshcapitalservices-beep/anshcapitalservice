import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "../mock/mock";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_6px_24px_-12px_rgba(11,31,58,0.25)]" : "border-b border-slate-100"
      }`}
    >
      <nav className="max-w-[1360px] mx-auto px-4 md:px-6 h-[76px] flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenMenu(link.label)}
              onMouseLeave={() => link.dropdown && setOpenMenu(null)}
            >
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-[14.5px] font-medium transition-colors duration-200 py-2 ${
                    isActive
                      ? "text-gold"
                      : "text-navy hover:text-gold"
                  }`
                }
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openMenu === link.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </NavLink>

              {link.dropdown && openMenu === link.label && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-56 z-50">
                  <div className="bg-white rounded-xl shadow-[0_20px_50px_-15px_rgba(11,31,58,0.35)] border border-slate-100 py-2 overflow-hidden">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-cream hover:text-gold transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-[#d89626] hover:bg-[#c4841d] text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-sm"
          >
            <Phone className="h-4 w-4 fill-white text-white" />
            Talk to an Expert
          </Link>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 text-navy"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0 bg-white">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <Logo />
              </div>
              <div className="py-3">
                {navLinks.map((link) => (
                  <MobileItem key={link.label} link={link} />
                ))}
                <div className="px-5 mt-4">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-5 py-3 rounded-md w-full"
                  >
                    Talk to an Expert
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

const MobileItem = ({ link }) => {
  const [open, setOpen] = useState(false);
  if (!link.dropdown) {
    return (
      <NavLink
        to={link.to}
        end={link.to === "/"}
        className={({ isActive }) =>
          `block px-5 py-3 text-[15px] font-medium ${
            isActive ? "text-gold" : "text-navy"
          }`
        }
      >
        {link.label}
      </NavLink>
    );
  }
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-3 text-[15px] font-medium text-navy"
      >
        {link.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="bg-cream/60">
          {link.dropdown.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block pl-9 pr-5 py-2.5 text-sm text-slate-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
