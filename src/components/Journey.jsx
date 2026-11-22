import { motion } from "framer-motion";
import { journeyMilestones } from "../data/portfolioData";
import { Calendar, CheckCircle2 } from "lucide-react";

export default function Journey() {
  return (
    <section
      id="journey"
      style={{
        padding: "7.5rem 0",
        position: "relative",
        borderTop: "1px solid var(--border-subtle)",
        backgroundColor: "rgba(17, 20, 18, 0.4)"
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "5rem" }}>
          <span className="section-tag">Documented Path</span>
          <h2 className="section-title">My Journey.</h2>
          <p className="section-subtitle">
            An authentic, verified timeline showing how initial scripting curiosity evolved into building production AI systems and web platforms.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div
          style={{
            position: "relative",
            maxWidth: "880px",
            margin: "0 auto"
          }}
        >
          {/* Central Vertical Guide Line */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              bottom: "16px",
              left: "24px",
              width: "2px",
              backgroundColor: "rgba(183, 255, 53, 0.28)",
              zIndex: 0
            }}
          />

          {/* Timeline Milestones */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem", position: "relative", zIndex: 1 }}>
            {journeyMilestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: "1.75rem",
                  alignItems: "flex-start"
                }}
              >
                {/* Node Milestone Indicator */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "var(--bg-primary)",
                    border: "2px solid var(--accent-lime)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-lime)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    boxShadow: "0 0 16px rgba(183, 255, 53, 0.3)",
                    flexShrink: 0
                  }}
                >
                  {item.phase}
                </div>

                {/* Milestone Content Card */}
                <div
                  className="card-dark"
                  style={{
                    padding: "2rem",
                    border: "1px solid var(--border-subtle)",
                    transition: "border-color 0.25s ease, transform 0.25s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-lime-border)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {/* Verified Year Badge */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.76rem",
                        fontWeight: 700,
                        color: "var(--accent-lime)",
                        backgroundColor: "rgba(183, 255, 53, 0.08)",
                        border: "1px solid var(--accent-lime-border)",
                        padding: "0.22rem 0.65rem",
                        borderRadius: "var(--radius-full)"
                      }}
                    >
                      <Calendar size={13} />
                      {item.year}
                    </span>

                    {item.stage.includes("Past Venture") && (
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "#A2A8A4",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "var(--radius-full)",
                          backgroundColor: "rgba(245, 247, 242, 0.05)",
                          border: "1px solid rgba(245, 247, 242, 0.15)"
                        }}
                      >
                        Archived Venture
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "var(--text-white)",
                      letterSpacing: "-0.025em",
                      marginBottom: "0.75rem"
                    }}
                  >
                    {item.stage}
                  </h3>

                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.65,
                      color: "#D4D9D5",
                      marginBottom: "0.6rem"
                    }}
                  >
                    {item.summary}
                  </p>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      color: "var(--text-muted)"
                    }}
                  >
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
