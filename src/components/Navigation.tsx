import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/#about" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "education", label: "Education", href: "/#education" },
  { id: "contact", label: "Contact", href: "/contact" }
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Update active section on route changes
  useEffect(() => {
    const { pathname, hash } = location;
    if (pathname === "/") {
      if (hash && hash.startsWith("#")) {
        setActiveSection(hash.slice(1));
      } else {
        setActiveSection("hero");
      }
    } else if (pathname === "/social") {
      setActiveSection("social");
    } else if (pathname === "/contact") {
      setActiveSection("contact");
    } else {
      setActiveSection("hero");
    }
  }, [location]);

  // Scroll handling only on the homepage
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount to set correct initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (item: { id: string; href: string }) => {
    if (isMobileOpen) setIsMobileOpen(false);
    if (item.href.startsWith('/')) {
      window.location.href = item.href;
    } else {
      scrollToSection(item.id);
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "glass-nav py-4" : "py-6"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="cyber-text font-bold text-xl">
            Mohammed Thanfees
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={cn(
                  "nav-link",
                  activeSection === item.id && "active"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Removed CV download button */}
          
          {/* Mobile menu button */}
          <button
            className="md:hidden glass-button p-2"
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={isMobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="md:hidden mt-4 glass-card border border-glass-border/40 rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col divide-y divide-glass-border/30">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={cn(
                    "text-left px-4 py-3 hover:bg-glass-bg/60 transition-colors",
                    activeSection === item.id && "text-cyber-cyan"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
