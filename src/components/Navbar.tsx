import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Training", to: "/training" },
  { label: "Placement", to: "/placement" },
  { label: "Contact", to: "/contact" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `relative whitespace-nowrap py-2 text-sm transition-colors duration-300 ${
    isActive
      ? "text-cyan"
      : "text-white/70 hover:text-white"
  }`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-40 w-full px-4 pt-5 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/10 bg-black/55 px-5 py-3.5 shadow-[0_8px_40px_rgba(0,0,0,0.2)] backdrop-blur-2xl md:px-7">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-2"
        >
          <span className="text-xl font-bold tracking-tight text-white md:text-2xl">
            Inspire<span className="text-amethyst transition-colors duration-300 group-hover:text-cyan">ITC</span>
          </span>
          <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_#00E5FF]" />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
            >
              {({ isActive }) => (
                <span className="relative block">
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-cyan transition-all duration-300 ${
                      isActive
                        ? "w-full shadow-[0_0_10px_#00E5FF]"
                        : "w-0"
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="group hidden shrink-0 items-center gap-2 rounded-full border border-amethyst/60 bg-amethyst px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-cyan/60 hover:bg-amethyst/80 hover:shadow-[0_0_25px_rgba(139,44,245,0.4)] sm:flex"
        >
          Let's Talk
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-amethyst/60 hover:bg-amethyst/15 sm:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-black/90 shadow-[0_15px_50px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all duration-300 sm:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
        style={{
          maxHeight: menuOpen ? "360px" : "0px",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col gap-1 p-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-amethyst/15 text-cyan"
                    : "text-white/75 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_#00E5FF]" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-amethyst px-4 py-3 text-sm font-medium text-white transition hover:bg-amethyst/80"
          >
            Let's Talk <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}