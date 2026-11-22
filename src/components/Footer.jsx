import { ArrowUp, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        backgroundColor: "var(--bg-primary)",
        padding: "5rem 0 3.5rem 0",
        position: "relative"
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: "3.5rem",
            marginBottom: "4rem"
          }}
          className="footer-grid"
        >
          {/* Brand & Short Description */}
          <div>
            <a
              href="#hero"
              style={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--text-white)",
                marginBottom: "1rem"
              }}
            >
              <span>AK</span>
              <span style={{ color: "var(--accent-lime)" }}>.</span>
            </a>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-muted)", maxWidth: "340px" }}>
              Ansh Kumar is a technology builder creating practical AI solutions, web products and workflow automations for real-world businesses.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--accent-lime)",
                marginBottom: "1.25rem"
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    style={{
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-white)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--accent-lime)",
                marginBottom: "1.25rem"
              }}
            >
              Connect
            </h4>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              {[
                { icon: Github, url: personalInfo.socials.github, label: "GitHub" },
                { icon: Linkedin, url: personalInfo.socials.linkedin, label: "LinkedIn" },
                { icon: Twitter, url: personalInfo.socials.twitter, label: "Twitter" },
                { icon: Instagram, url: personalInfo.socials.instagram, label: "Instagram" }
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--bg-surface)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-muted)",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#090B0A";
                      e.currentTarget.style.backgroundColor = "var(--accent-lime)";
                      e.currentTarget.style.borderColor = "var(--accent-lime)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.backgroundColor = "var(--bg-surface)";
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                    }}
                    aria-label={s.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>

            <button
              onClick={scrollToTop}
              className="btn-outline-white btn-sm"
              style={{ borderRadius: "var(--radius-full)", gap: "0.4rem" }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Credit */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-subtle)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.82rem",
            fontFamily: "var(--font-mono)",
            color: "var(--text-muted)"
          }}
        >
          <span>&copy; {currentYear} Ansh Kumar. All rights reserved.</span>
          <span style={{ color: "var(--text-white)" }}>
            Built with Black, Lime Green & White.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
