import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Send, ArrowUpRight, Github, Linkedin, Instagram, Twitter, Globe, AlertCircle, CheckCircle2 } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formState.name.trim()) {
      errs.name = "Please enter your full name.";
    }
    if (!formState.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formState.subject.trim()) {
      errs.subject = "Please enter a subject.";
    }
    if (!formState.message.trim()) {
      errs.message = "Please write your message.";
    } else if (formState.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus({ state: "submitting", message: "" });

    try {
      // Use Formspree API endpoint with real error handling
      const response = await fetch("https://formspree.io/f/xovqzzkg", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          _replyto: formState.email
        })
      });

      if (response.ok) {
        // Real success verification: only show success if backend accepted the dispatch!
        setStatus({
          state: "success",
          message: "Thank you! Your message has been sent successfully. I will get back to you within 24 hours."
        });
        setFormState({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Submission rejected by service");
      }
    } catch (err) {
      // Authentic error handling: Never show fake success!
      setStatus({
        state: "error",
        message: "Could not deliver message via the automated service. Please send your message directly to hello@anshkumar.space or click below."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDirectMailto = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formState.subject || "Project Discussion"}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
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
          <span className="section-tag">Let's Connect</span>
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
            Whether you need a custom AI voice agent, an automated operational system, or a high-converting web presence, let's talk.
          </p>
        </div>

        {/* Contact Layout: Info Box & Functional Form */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.25fr",
            gap: "3.5rem",
            alignItems: "flex-start"
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Verified Credentials & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {/* Primary Email Card */}
            <div className="card-dark" style={{ padding: "2rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--accent-lime)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 700
                }}
              >
                Verified Inbox
              </span>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, margin: "0.5rem 0 1rem 0", color: "var(--text-white)" }}>
                Direct Communication
              </h3>

              <div
                style={{
                  padding: "0.85rem 1rem",
                  backgroundColor: "var(--bg-surface-elevated)",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <Mail size={16} color="var(--accent-lime)" />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem", color: "var(--text-white)", fontWeight: 600 }}>
                    {personalInfo.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--text-muted)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-mono)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "4px"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-lime)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  aria-label="Copy primary email"
                >
                  {copied ? <Check size={14} color="var(--accent-lime)" /> : <Copy size={14} />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.88rem", color: "#C6CCC7" }}>
                <Globe size={15} color="var(--accent-lime)" />
                <span>Primary Domain: <strong style={{ color: "var(--text-white)" }}>{personalInfo.website}</strong></span>
              </div>
            </div>

            {/* Social Link Placeholders */}
            <div className="card-dark" style={{ padding: "2rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--accent-lime)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 700
                }}
              >
                Online Presence
              </span>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, margin: "0.5rem 0 1.25rem 0", color: "var(--text-white)" }}>
                Social Channels
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
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
                        padding: "0.85rem 1rem",
                        backgroundColor: "var(--bg-surface-elevated)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-sm)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: "var(--text-white)",
                        textDecoration: "none",
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.92rem",
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
                      <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Icon size={16} />
                        {item.name}
                      </span>
                      <ArrowUpRight size={14} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Functional Contact Form with Backend Integration & Error Handling */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="card-dark"
            style={{ padding: "2.5rem" }}
          >
            <h3 style={{ fontSize: "1.55rem", fontWeight: 800, color: "var(--text-white)", marginBottom: "0.5rem" }}>
              Send a Direct Inquiry
            </h3>
            <p style={{ fontSize: "0.94rem", color: "#C5CBC6", marginBottom: "2rem" }}>
              Please provide your project details below. All submissions are validated and processed.
            </p>

            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Name */}
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-white)", marginBottom: "0.4rem" }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="input-dark"
                />
                {errors.name && <span style={{ color: "#FF5C5C", fontSize: "0.76rem", marginTop: "0.25rem", display: "block" }}>{errors.name}</span>}
              </div>

              {/* Email */}
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-white)", marginBottom: "0.4rem" }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="input-dark"
                />
                {errors.email && <span style={{ color: "#FF5C5C", fontSize: "0.76rem", marginTop: "0.25rem", display: "block" }}>{errors.email}</span>}
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-white)", marginBottom: "0.4rem" }}>
                  Subject *
                </label>
                <input
                  type="text"
                  placeholder="AI Voice Agent / Web App / Automation project"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="input-dark"
                />
                {errors.subject && <span style={{ color: "#FF5C5C", fontSize: "0.76rem", marginTop: "0.25rem", display: "block" }}>{errors.subject}</span>}
              </div>

              {/* Message */}
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-white)", marginBottom: "0.4rem" }}>
                  Message *
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your project, timeline, and requirements..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="input-dark"
                  style={{ resize: "vertical" }}
                />
                {errors.message && <span style={{ color: "#FF5C5C", fontSize: "0.76rem", marginTop: "0.25rem", display: "block" }}>{errors.message}</span>}
              </div>

              {/* Real Success Notice */}
              {status.state === "success" && (
                <div
                  style={{
                    padding: "0.85rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "rgba(183, 255, 53, 0.12)",
                    border: "1px solid var(--accent-lime)",
                    color: "var(--text-white)",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem"
                  }}
                >
                  <CheckCircle2 size={18} color="var(--accent-lime)" style={{ flexShrink: 0 }} />
                  <span>{status.message}</span>
                </div>
              )}

              {/* Error Handling Notice with Direct Mailto fallback */}
              {status.state === "error" && (
                <div
                  style={{
                    padding: "1rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "rgba(255, 92, 92, 0.1)",
                    border: "1px solid rgba(255, 92, 92, 0.4)",
                    color: "var(--text-white)",
                    fontSize: "0.88rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <AlertCircle size={16} color="#FF5C5C" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span>{status.message}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleDirectMailto}
                    className="btn-outline-white btn-sm"
                    style={{ alignSelf: "flex-start", fontSize: "0.8rem", padding: "0.4rem 0.85rem" }}
                  >
                    Open Mail Client Directly
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary-lime"
                style={{ width: "100%", marginTop: "0.5rem" }}
              >
                <span>{isSubmitting ? "Delivering..." : "Submit Message"}</span>
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
