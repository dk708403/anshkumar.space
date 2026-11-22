import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Bot, Terminal, Compass, ArrowRight, Layers, Cpu, Wrench } from "lucide-react";
import { exploratoryWork } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeModalItem, setActiveModalItem] = useState(null);

  const sections = [
    {
      id: "building",
      key: "currentlyBuilding",
      title: "1. Currently Building",
      badge: "In Active Development",
      icon: Sparkles,
      tagline: "Active projects and product concepts currently in development.",
      items: exploratoryWork.currentlyBuilding
    },
    {
      id: "experiments",
      key: "experiments",
      title: "2. Experiments & Prototypes",
      badge: "Functional Lab",
      icon: Bot,
      tagline: "Focused prototypes, sandbox architectures, and proof-of-concept builds.",
      items: exploratoryWork.experiments
    },
    {
      id: "exploration",
      key: "exploration",
      title: "3. Learning & Exploration",
      badge: "Active Research",
      icon: Compass,
      tagline: "Deep dives into low-latency protocols, system architectures, and engineering skills.",
      items: exploratoryWork.exploration
    }
  ];

  const visibleSections = activeTab === "all"
    ? sections
    : sections.filter((s) => s.id === activeTab);

  return (
    <section
      id="projects"
      style={{
        padding: "7.5rem 0",
        position: "relative",
        borderTop: "1px solid var(--border-subtle)"
      }}
    >
      <div className="container">
        {/* Section Header as requested */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="section-tag">Work in Progress</span>
          <h2 className="section-title">Exploring. Building. Learning.</h2>
          <p className="section-subtitle">
            An evolving collection of ideas, experiments and products I'm working on.
          </p>
        </div>

        {/* Section Filter Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.65rem",
            marginBottom: "4rem"
          }}
        >
          <button
            onClick={() => setActiveTab("all")}
            className={`filter-btn ${activeTab === "all" ? "active" : ""}`}
          >
            All Sections
          </button>
          <button
            onClick={() => setActiveTab("building")}
            className={`filter-btn ${activeTab === "building" ? "active" : ""}`}
          >
            Currently Building
          </button>
          <button
            onClick={() => setActiveTab("experiments")}
            className={`filter-btn ${activeTab === "experiments" ? "active" : ""}`}
          >
            Experiments & Prototypes
          </button>
          <button
            onClick={() => setActiveTab("exploration")}
            className={`filter-btn ${activeTab === "exploration" ? "active" : ""}`}
          >
            Learning & Exploration
          </button>
        </div>

        {/* 3 Elegant Stacked Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4.5rem" }}>
          {visibleSections.map((sec, secIdx) => {
            const SectionIcon = sec.icon;
            return (
              <motion.div
                key={sec.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: secIdx * 0.1 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.75rem"
                }}
              >
                {/* Subsection Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    borderBottom: "1px solid var(--border-subtle)",
                    paddingBottom: "1rem",
                    flexWrap: "wrap",
                    gap: "0.75rem"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.3rem" }}>
                      <SectionIcon size={20} color="var(--accent-lime)" />
                      <h3
                        style={{
                          fontSize: "1.65rem",
                          fontWeight: 800,
                          color: "var(--text-white)",
                          letterSpacing: "-0.03em"
                        }}
                      >
                        {sec.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", margin: 0 }}>
                      {sec.tagline}
                    </p>
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--accent-lime)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "var(--radius-full)",
                      backgroundColor: "rgba(183, 255, 53, 0.08)",
                      border: "1px solid var(--accent-lime-border)"
                    }}
                  >
                    {sec.badge}
                  </span>
                </div>

                {/* Subsection Cards Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
                    gap: "2rem"
                  }}
                >
                  {sec.items.map((item) => (
                    <div
                      key={item.id}
                      className="card-dark"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "2rem",
                        position: "relative",
                        border: "1px solid var(--border-subtle)",
                        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent-lime-border)";
                        e.currentTarget.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-subtle)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {/* Status & Phase Header */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "1rem"
                        }}
                      >
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: "var(--accent-lime)",
                            backgroundColor: "rgba(183, 255, 53, 0.1)",
                            padding: "0.2rem 0.65rem",
                            borderRadius: "var(--radius-full)",
                            border: "1px solid rgba(183, 255, 53, 0.3)"
                          }}
                        >
                          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--accent-lime)", boxShadow: "0 0 8px var(--accent-lime)" }} />
                          {item.status}
                        </span>

                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.72rem",
                            color: "var(--text-muted)"
                          }}
                        >
                          Phase: {item.phase}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h4
                        style={{
                          fontSize: "1.35rem",
                          fontWeight: 800,
                          color: "var(--text-white)",
                          letterSpacing: "-0.025em",
                          marginBottom: "0.35rem"
                        }}
                      >
                        {item.title}
                      </h4>

                      {/* Tagline */}
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          color: "var(--accent-lime)",
                          marginBottom: "1rem",
                          lineHeight: 1.4
                        }}
                      >
                        // {item.tagline}
                      </p>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: "0.95rem",
                          lineHeight: 1.65,
                          color: "#C5CBC6",
                          marginBottom: "1.5rem",
                          flexGrow: 1
                        }}
                      >
                        {item.description}
                      </p>

                      {/* Focus Area Capsule */}
                      <div
                        style={{
                          padding: "0.75rem 0.95rem",
                          backgroundColor: "var(--bg-surface-elevated)",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--border-subtle)",
                          marginBottom: "1.5rem"
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.68rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "var(--text-muted)",
                            display: "block",
                            marginBottom: "0.2rem"
                          }}
                        >
                          Core Focus
                        </span>
                        <span style={{ fontSize: "0.85rem", color: "var(--text-white)", fontWeight: 600 }}>
                          {item.focusArea}
                        </span>
                      </div>

                      {/* Tech Tags */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.4rem",
                          marginBottom: "1.5rem"
                        }}
                      >
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.72rem",
                              padding: "0.25rem 0.55rem",
                              borderRadius: "4px",
                              backgroundColor: "var(--bg-surface-elevated)",
                              color: "#E2E7E3",
                              border: "1px solid var(--border-subtle)"
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* View Concept Detail Action */}
                      <div
                        style={{
                          paddingTop: "1rem",
                          borderTop: "1px solid var(--border-subtle)",
                          marginTop: "auto"
                        }}
                      >
                        <button
                          onClick={() => setActiveModalItem(item)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "var(--text-white)",
                            fontFamily: "var(--font-heading)",
                            fontSize: "0.88rem",
                            fontWeight: 700,
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            padding: 0,
                            transition: "color 0.2s ease"
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-lime)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-white)")}
                        >
                          <span>Explore Concept</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Preview for Detailed Concept Breakdown */}
      {activeModalItem && (
        <ProjectModal
          item={activeModalItem}
          onClose={() => setActiveModalItem(null)}
        />
      )}
    </section>
  );
}
