import { motion } from "framer-motion";
import { Bot, Code2, Wrench, Check } from "lucide-react";
import { skillsData } from "../data/portfolioData";

export default function Skills() {
  const sections = [
    {
      data: skillsData.aiAutomation,
      icon: Bot,
      accentLabel: "Intelligent Systems"
    },
    {
      data: skillsData.development,
      icon: Code2,
      accentLabel: "Engineering & Frontend"
    },
    {
      data: skillsData.toolsPlatforms,
      icon: Wrench,
      accentLabel: "Cloud & Integrations"
    }
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "7.5rem 0",
        position: "relative",
        borderTop: "1px solid var(--border-subtle)"
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "4rem" }}>
          <span className="section-tag">Core Competencies</span>
          <h2 className="section-title">Skills & Expertise.</h2>
          <p className="section-subtitle">
            A focused inventory of technologies, frameworks, and APIs I genuinely use to build production software solutions.
          </p>
        </div>

        {/* 3 Modern Skill Group Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2.5rem"
          }}
        >
          {sections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="card-dark"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "2.5rem"
                }}
              >
                {/* Category Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "rgba(183, 255, 53, 0.08)",
                      border: "1px solid var(--accent-lime-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-lime)"
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--accent-lime)",
                      fontWeight: 700
                    }}
                  >
                    {sec.accentLabel}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.55rem",
                    fontWeight: 800,
                    color: "var(--text-white)",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.025em"
                  }}
                >
                  {sec.data.category}
                </h3>

                <p style={{ fontSize: "0.94rem", color: "#C5CBC6", marginBottom: "2rem", lineHeight: 1.6 }}>
                  {sec.data.description}
                </p>

                {/* Skills Item List with Refined Hover Interactions */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "auto" }}>
                  {sec.data.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        padding: "1rem 1.15rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--bg-surface-elevated)",
                        border: "1px solid var(--border-subtle)",
                        transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
                        cursor: "default"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent-lime)";
                        e.currentTarget.style.transform = "translateX(5px)";
                        e.currentTarget.style.backgroundColor = "rgba(183, 255, 53, 0.04)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-subtle)";
                        e.currentTarget.style.transform = "translateX(0)";
                        e.currentTarget.style.backgroundColor = "var(--bg-surface-elevated)";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                        <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.02rem", color: "var(--text-white)" }}>
                          {skill.name}
                        </span>
                        <Check size={15} color="var(--accent-lime)" />
                      </div>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", lineHeight: 1.45 }}>
                        {skill.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
