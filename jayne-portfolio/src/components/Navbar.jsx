import React from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/works", label: "Works" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-8 px-5 sm:px-12 w-full max-w-[1200px] mx-auto">
      {/* Logo */}
      <Link
        to="/"
        aria-label="Louiez Jayne Julian — Home"
        title="Louiez Jayne Julian"
        className="group flex items-center gap-2.5"
      >
        {/* Monogram badge (LJ) */}
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-gradient-to-br from-[#4665ef] to-[#67c9e8] text-[12px] font-black leading-none tracking-tighter text-white shadow-[0_0_20px_-4px_rgba(91,120,255,0.6)] transition-transform duration-300 group-hover:scale-105">
          LJ
        </span>

        {/* Brand name */}
        <span className="text-xl font-bold tracking-tighter text-white">
          Louiez Jayne
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-sm">
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

      {/* Let's Talk Button */}
      <Link
        to="/contact"
        className="bg-[#1f1f1f] hover:bg-[#2a2a2a] border border-gray-700 hover:border-primary/50 text-sm py-2 px-6 rounded-full transition"
      >
        Let's Talk
      </Link>
    </nav>
  );
};

export default Navbar;
