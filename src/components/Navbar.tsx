import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/95 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
            MT
          </div>
          <span className="text-white font-semibold text-sm tracking-wide group-hover:text-cyan-400 transition-colors">
            Thanfees
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === link.href.replace("#", "")
                  ? "text-cyan-400 bg-cyan-400/10"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:thanfees@gmail.com"
            className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0f1e]/98 border-t border-cyan-500/20 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:thanfees@gmail.com"
            className="block mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
