import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "anshkumar590423@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: "7.5rem 0 6rem 0", position: "relative" }}>
      <div className="bg-mesh-glow" />

      <div className="container" style={{ maxWidth: "600px" }}>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem", textAlign: "center" }}
        >
          <h1 style={{ fontSize: "var(--fs-section)", fontWeight: 800, marginBottom: "1rem" }}>
            Let's Collaborate
          </h1>
          <p style={{ maxWidth: "500px", margin: "0 auto", fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
            Have a project in mind? Drop me an email and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            padding: "2.5rem",
            border: "1px solid var(--border)",
            borderRadius: "24px",
            backgroundColor: "var(--card-bg)",
            boxShadow: "var(--shadow-md)",
            textAlign: "center"
          }}
        >
          {/* Mail Icon */}
          <div style={{
            width: "56px",
            height: "56px",
            borderRadius: "16px",
            backgroundColor: "var(--accent-soft)",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1.5rem"
          }}>
            <Mail size={24} color="var(--accent)" />
          </div>

          {/* Email Address */}
          <p style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            fontFamily: "var(--font-mono)",
            color: "var(--text-primary)",
            marginBottom: "1.5rem",
            letterSpacing: "-0.01em"
          }}>
            {emailAddress}
          </p>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            {/* Send Email Button */}
            <a
              href={`mailto:${emailAddress}`}
              className="btn btn-accent btn-glow interactive"
              style={{
                padding: "0.7rem 1.5rem",
                borderRadius: "8px",
                border: "none",
                fontSize: "0.95rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              <span>Send Email</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Copy Button */}
            <button
              onClick={handleCopyEmail}
              className="btn btn-secondary interactive"
              style={{
                padding: "0.7rem 1.5rem",
                borderRadius: "8px",
                fontSize: "0.95rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                cursor: "pointer"
              }}
            >
              {copied ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
              <span>{copied ? "Copied!" : "Copy Email"}</span>
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
