import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, ChevronDown, ChevronRight, Phone } from "lucide-react";
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
  const [openSubMenu, setOpenSubMenu] = useState(null);
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
    setOpenSubMenu(null);
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
              onMouseLeave={() => {
                if (link.dropdown) {
                  setOpenMenu(null);
                  setOpenSubMenu(null);
                }
              }}
            >
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-[14.5px] font-medium transition-colors duration-200 py-2 relative ${
                    isActive
                      ? "text-[#d89626] font-semibold after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-[2px] after:bg-[#d89626] after:rounded-full"
                      : "text-[#0b1f3a] hover:text-[#d89626]"
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

              {/* First-level dropdown */}
              {link.dropdown && openMenu === link.label && (
                <div className="absolute left-0 top-full pt-2 w-64 z-50">
                  <div className="bg-white rounded-xl shadow-[0_20px_50px_-15px_rgba(11,31,58,0.25)] border border-slate-100 py-2">
                    {link.dropdown.map((item) => (
                      <div
                        key={item.label}
                        className="relative group/sub"
                        onMouseEnter={() => item.subItems && setOpenSubMenu(item.label)}
                        onMouseLeave={() => item.subItems && setOpenSubMenu(null)}
                      >
                        <Link
                          to={item.to}
                          className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-[#faf6ee] hover:text-[#d89626] transition-colors"
                        >
                          <span>{item.label}</span>
                          {item.subItems && (
                            <ChevronRight className="h-4 w-4 text-slate-400 group-hover/sub:text-[#d89626] group-hover/sub:translate-x-0.5 transition-all" />
                          )}
                        </Link>

                        {/* Sub-hover flyout menu */}
                        {item.subItems && (
                          <div className="absolute left-full top-0 pl-1.5 w-64 hidden group-hover/sub:block z-50">
                            <div className="bg-white rounded-xl shadow-[0_20px_50px_-15px_rgba(11,31,58,0.25)] border border-slate-100 py-2">
                              {item.subItems.map((sub) => (
                                <Link
                                  key={sub.label}
                                  to={sub.to}
                                  className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-[#faf6ee] hover:text-[#d89626] transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
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
                className="lg:hidden p-2 text-[#0b1f3a]"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] p-0 bg-white overflow-y-auto">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <Logo />
              </div>
              <div className="py-3">
                {navLinks.map((link) => (
                  <MobileItem key={link.label} link={link} />
                ))}
                <div className="px-5 mt-4 pb-6">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 bg-[#d89626] hover:bg-[#c4841d] text-white text-sm font-semibold px-5 py-3 rounded-lg w-full shadow-sm"
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
  const [subOpen, setSubOpen] = useState({});

  const toggleSub = (label) => {
    setSubOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  if (!link.dropdown) {
    return (
      <NavLink
        to={link.to}
        end={link.to === "/"}
        className={({ isActive }) =>
          `block px-5 py-3 text-[15px] font-medium ${
            isActive ? "text-[#d89626]" : "text-[#0b1f3a]"
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
        className="w-full flex items-center justify-between px-5 py-3 text-[15px] font-medium text-[#0b1f3a]"
      >
        <span>{link.label}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180 text-[#d89626]" : ""}`}
        />
      </button>

      {open && (
        <div className="bg-slate-50/80 border-y border-slate-100">
          {link.dropdown.map((item) => (
            <div key={item.label}>
              {item.subItems ? (
                <div>
                  <div className="flex items-center justify-between pl-8 pr-5 py-2.5">
                    <Link
                      to={item.to}
                      className="text-sm font-semibold text-[#0b1f3a] hover:text-[#d89626]"
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() => toggleSub(item.label)}
                      className="p-1 text-slate-400 hover:text-[#d89626]"
                    >
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          subOpen[item.label] ? "rotate-180 text-[#d89626]" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {subOpen[item.label] && (
                    <div className="bg-white/80 pl-11 pr-5 py-1 space-y-2 border-l-2 border-[#d89626] ml-8 mb-2">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.to}
                          className="block text-xs font-medium text-slate-600 hover:text-[#d89626] py-1"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.to}
                  className="block pl-8 pr-5 py-2.5 text-sm font-semibold text-[#0b1f3a] hover:text-[#d89626]"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
