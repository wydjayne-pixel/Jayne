import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/works", label: "Works" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="relative z-50 mx-auto w-full max-w-[1200px] px-5 sm:px-12">
      <div className="flex items-center justify-between py-6 sm:py-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          aria-label="Louiez Jayne Julian — Home"
          title="Louiez Jayne Julian"
          className="group flex items-center gap-2.5"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-gradient-to-br from-[#4665ef] to-[#67c9e8] text-[12px] font-black leading-none tracking-tighter text-white shadow-[0_0_20px_-4px_rgba(91,120,255,0.6)] transition-transform duration-300 group-hover:scale-105">
            LJ
          </span>
          <span className="text-lg font-bold tracking-tighter text-white sm:text-xl">
            Louiez Jayne
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden gap-8 text-sm md:flex">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `group relative transition-colors duration-300 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`pointer-events-none absolute -bottom-1.5 left-0 h-[2px] rounded-full transition-all duration-300 ease-out ${
                      isActive
                        ? "w-full bg-primary opacity-100"
                        : "w-0 bg-primary/50 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right-side actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full border border-gray-700 bg-[#1f1f1f] px-6 py-2 text-sm transition hover:border-primary/50 hover:bg-[#2a2a2a] sm:inline-flex"
          >
            Let's Talk
          </Link>

          {/* Burger / Close (mobile + tablet) */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-[#1f1f1f] text-white transition hover:border-primary/50 hover:bg-[#2a2a2a] md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-5 top-[calc(100%+8px)] z-50 overflow-hidden rounded-[25px] border border-white/[0.06] bg-[#141414] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.85)] transition-all duration-300 ease-out sm:inset-x-12 md:hidden ${
          isOpen
            ? "max-h-[420px] opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 p-3">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-[15px] font-medium transition ${
                  isActive
                    ? "bg-white/[0.06] text-white"
                    : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center justify-center rounded-xl border border-gray-700 bg-[#1f1f1f] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2a2a2a] sm:hidden"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
