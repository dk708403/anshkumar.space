import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Journey", href: "#journey", id: "journey" },
    { label: "Contact", href: "#contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "projects", "skills", "journey", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "0.85rem 0" : "1.5rem 0",
        backgroundColor: scrolled ? "rgba(9, 11, 10, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(245, 247, 242, 0.08)" : "1px solid transparent",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
      }}
    >
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* AK. Brand Logo with Ansh's Photo on left side */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            gap: "0.65rem"
          }}
          aria-label="Ansh Kumar Home"
        >
          {/* Ansh's Photo Avatar with Lime Glow Ring */}
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid var(--accent-lime)",
              boxShadow: "0 0 14px rgba(183, 255, 53, 0.45)",
              backgroundColor: "var(--bg-surface)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              src="/ansh-topbar.jpg"
              alt="Ansh Kumar"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 15%",
                filter: "grayscale(100%) contrast(1.15)"
              }}
            />
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontFamily: "var(--font-heading)",
              fontSize: "1.45rem",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--text-white)",
              gap: "1px"
            }}
          >
            <span>AK</span>
            <span style={{ color: "var(--accent-lime)" }}>.</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "2.25rem"
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "var(--accent-lime)" : "var(--text-muted)",
                  textDecoration: "none",
                  position: "relative",
                  padding: "0.25rem 0",
                  transition: "color 0.2s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-white)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "var(--accent-lime)" : "var(--text-muted)")}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "var(--accent-lime)",
                      borderRadius: "1px"
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop "Let's Talk" CTA Button */}
        <div style={{ display: "none", alignItems: "center" }} className="desktop-nav">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn-primary-lime btn-sm"
            style={{ borderRadius: "var(--radius-full)" }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-sm)",
            padding: "0.45rem",
            color: "var(--text-white)",
            cursor: "pointer",
            outline: "none"
          }}
          className="mobile-nav-toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} color="var(--accent-lime)" /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              overflow: "hidden",
              backgroundColor: "rgba(9, 11, 10, 0.98)",
              borderBottom: "1px solid var(--border-subtle)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)"
            }}
          >
            <div className="container" style={{ padding: "1.5rem 1.5rem 2rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.2rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "var(--accent-lime)" : "var(--text-white)",
                      textDecoration: "none",
                      padding: "0.5rem 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid rgba(245, 247, 242, 0.04)"
                    }}
                  >
                    <span>{link.label}</span>
                    {isActive && <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--accent-lime)" }} />}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="btn-primary-lime"
                style={{ marginTop: "0.5rem", width: "100%", justifyContent: "center" }}
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
