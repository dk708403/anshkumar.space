import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, Instagram, Twitter, Globe, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [copiedEmail1, setCopiedEmail1] = useState(false);
  const [copiedEmail2, setCopiedEmail2] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 1) {
      setCopiedEmail1(true);
      setTimeout(() => setCopiedEmail1(false), 2000);
    } else {
      setCopiedEmail2(true);
      setTimeout(() => setCopiedEmail2(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "7.5rem 0",
        position: "relative",
        borderTop: "1px solid var(--border-subtle)"
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "4.5rem", textAlign: "center" }}>
          <span className="section-tag">Direct Contact</span>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              color: "var(--text-white)",
              margin: "0.5rem 0 1rem 0"
            }}
          >
            HAVE AN IDEA? <span className="highlight-lime">LET'S BUILD IT.</span>
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#C5CBC6",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6
            }}
          >
            Have a project in mind, an automation problem to solve, or an idea to discuss? Reach out directly via email or connect on social platforms.
          </p>
        </div>

        {/* Contact Layout: Email Options & Social Channels */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2.5rem",
            alignItems: "stretch",
            maxWidth: "980px",
            margin: "0 auto"
          }}
          className="contact-grid"
        >
          {/* Card 1: Primary Custom Domain Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="card-dark"
            style={{
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              border: "1px solid var(--accent-lime-border)",
              boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.6)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  color: "var(--accent-lime)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 700
                }}
              >
                Official Domain Inbox
              </span>
              <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--accent-lime)", boxShadow: "0 0 8px var(--accent-lime)" }} />
            </div>

            <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--text-white)", marginBottom: "0.75rem" }}>
              hello@anshkumar.space
            </h3>

            <p style={{ fontSize: "0.94rem", color: "#C5CBC6", lineHeight: 1.6, marginBottom: "2rem", flexGrow: 1 }}>
              Official inbox for project discussions, product inquiries, business collaborations, and general outreach.
            </p>

            <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginTop: "auto" }}>
              <button
                onClick={() => handleCopy("hello@anshkumar.space", 1)}
                className="btn-primary-lime btn-sm"
                style={{ flexGrow: 1, justifyContent: "center" }}
              >
                {copiedEmail1 ? <Check size={15} /> : <Copy size={15} />}
                <span>{copiedEmail1 ? "Email Copied!" : "Copy Email"}</span>
              </button>

              <a
                href="mailto:hello@anshkumar.space"
                className="btn-outline-white btn-sm"
                style={{ flexGrow: 1, justifyContent: "center" }}
              >
                <span>Send Mail</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Direct Gmail Inbox */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-dark"
            style={{
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              border: "1px solid var(--border-subtle)",
              boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.6)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  color: "var(--text-white)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 700
                }}
              >
                Direct Personal Inbox
              </span>
              <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#5A625C" }} />
            </div>

            <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--text-white)", marginBottom: "0.75rem", wordBreak: "break-all" }}>
              anshkumar590423@gmail.com
            </h3>

            <p style={{ fontSize: "0.94rem", color: "#C5CBC6", lineHeight: 1.6, marginBottom: "2rem", flexGrow: 1 }}>
              Direct secondary inbox for quick messages, developer questions, and real-time correspondence.
            </p>

            <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginTop: "auto" }}>
              <button
                onClick={() => handleCopy("anshkumar590423@gmail.com", 2)}
                className="btn-outline-white btn-sm"
                style={{ flexGrow: 1, justifyContent: "center" }}
              >
                {copiedEmail2 ? <Check size={15} color="var(--accent-lime)" /> : <Copy size={15} />}
                <span>{copiedEmail2 ? "Copied!" : "Copy Gmail"}</span>
              </button>

              <a
                href="mailto:anshkumar590423@gmail.com"
                className="btn-outline-white btn-sm"
                style={{ flexGrow: 1, justifyContent: "center" }}
              >
                <span>Send Mail</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Social Links Bar Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            maxWidth: "980px",
            margin: "3rem auto 0 auto",
            padding: "2rem",
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-md)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem"
          }}
          className="contact-social-bar"
        >
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent-lime)", textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: "0.25rem" }}>
              Network & Profiles
            </span>
            <p style={{ fontSize: "0.95rem", color: "var(--text-white)", margin: 0, fontWeight: 700 }}>
              Connect with Ansh Kumar across the web
            </p>
          </div>

          <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
            {[
              { name: "LinkedIn", url: personalInfo.socials.linkedin, icon: Linkedin },
              { name: "GitHub", url: personalInfo.socials.github, icon: Github },
              { name: "Instagram", url: personalInfo.socials.instagram, icon: Instagram },
              { name: "Twitter (X)", url: personalInfo.socials.twitter, icon: Twitter }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.6rem 1rem",
                    backgroundColor: "var(--bg-surface-elevated)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-sm)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--text-white)",
                    textDecoration: "none",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-lime)";
                    e.currentTarget.style.color = "var(--accent-lime)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.color = "var(--text-white)";
                  }}
                >
                  <Icon size={15} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-social-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
