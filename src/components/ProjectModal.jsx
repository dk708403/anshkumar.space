import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Terminal, Cpu, Sparkles, Layers } from "lucide-react";

export default function ProjectModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(9, 11, 10, 0.92)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1.5rem"
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "90vh",
            overflowY: "auto",
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--accent-lime-border)",
            borderRadius: "var(--radius-lg)",
            padding: "2.5rem",
            position: "relative",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.95), 0 0 35px -5px rgba(183, 255, 53, 0.15)"
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "rgba(245, 247, 242, 0.06)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "50%",
              width: "38px",
              height: "38px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-white)",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-lime)";
              e.currentTarget.style.color = "#090B0A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(245, 247, 242, 0.06)";
              e.currentTarget.style.color = "var(--text-white)";
            }}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Status Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.25rem 0.75rem",
                borderRadius: "var(--radius-full)",
                backgroundColor: "rgba(183, 255, 53, 0.12)",
                color: "var(--accent-lime)",
                border: "1px solid var(--accent-lime)"
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--accent-lime)", boxShadow: "0 0 8px var(--accent-lime)" }} />
              {item.status}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                padding: "0.2rem 0.6rem",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--bg-surface-elevated)"
              }}
            >
              {item.phase}
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              color: "var(--text-white)",
              marginBottom: "0.5rem",
              letterSpacing: "-0.03em"
            }}
          >
            {item.title}
          </h2>

          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--accent-lime)", marginBottom: "1.5rem" }}>
            // {item.tagline}
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "#D4D9D5",
              marginBottom: "1.75rem"
            }}
          >
            {item.description}
          </p>

          {/* Focus Area & Notes */}
          <div style={{ marginBottom: "2rem", padding: "1.25rem", backgroundColor: "var(--bg-surface-elevated)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-subtle)" }}>
            <div style={{ marginBottom: "0.75rem" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent-lime)", display: "block", marginBottom: "0.25rem" }}>
                Primary Technical Focus
              </span>
              <p style={{ fontSize: "0.95rem", color: "var(--text-white)", margin: 0, fontWeight: 600 }}>
                {item.focusArea}
              </p>
            </div>

            {item.notes && (
              <div style={{ paddingTop: "0.75rem", borderTop: "1px solid var(--border-subtle)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)", display: "block", marginBottom: "0.25rem" }}>
                  Engineering Observations
                </span>
                <p style={{ fontSize: "0.88rem", color: "#C6CCC7", margin: 0, lineHeight: 1.5 }}>
                  {item.notes}
                </p>
              </div>
            )}
          </div>

          {/* Technology Tags */}
          <div style={{ marginBottom: "2.25rem" }}>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--text-muted)",
                marginBottom: "0.75rem"
              }}
            >
              Technologies & Frameworks
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    padding: "0.35rem 0.8rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--bg-surface-elevated)",
                    color: "var(--text-white)",
                    border: "1px solid var(--border-medium)"
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={onClose}
              className="btn-outline-white"
              style={{ borderRadius: "var(--radius-sm)" }}
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
