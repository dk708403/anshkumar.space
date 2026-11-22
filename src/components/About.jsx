import { motion } from "framer-motion";
import { Cpu, Code2, Compass, MapPin, CheckCircle2, Terminal } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  const pillars = [
    {
      icon: Cpu,
      title: "My Core Interests",
      text: "Exploring low-latency AI telephony, autonomous voice agents, and event-driven automation architectures that replace manual repetitive business overhead."
    },
    {
      icon: Code2,
      title: "What I Build",
      text: "Practical software solutions: conversational voice bots, webhook automation gateways, high-converting commercial web platforms, and fast browser utilities."
    },
    {
      icon: Compass,
      title: "Problem-Solving Philosophy",
      text: "Functionality first. I prioritize clean codebases, sub-second responses, and software that delivers measurable operational clarity and time savings."
    }
  ];

  return (
    <section
      id="about"
      style={{
        padding: "7.5rem 0",
        position: "relative",
        borderTop: "1px solid var(--border-subtle)",
        backgroundColor: "rgba(17, 20, 18, 0.4)"
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="section-tag">About Ansh Kumar</span>
          <h2 className="section-title">More Than Just Code.</h2>
          <p className="section-subtitle">
            An independent technology builder focused on solving tangible business problems through intelligent software and automation.
          </p>
        </div>

        {/* Visual Prominence Intro Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          style={{
            padding: "2rem 2.25rem",
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--accent-lime-border)",
            borderLeft: "4px solid var(--accent-lime)",
            borderRadius: "var(--radius-md)",
            marginBottom: "4rem",
            boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.6)"
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
              fontWeight: 700,
              lineHeight: 1.5,
              color: "var(--text-white)",
              margin: 0
            }}
          >
            "I build software that eliminates manual friction — transforming complex AI integrations and operational workflows into fast, dependable tools that solve real business problems."
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--accent-lime)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent-lime)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Builder Manifesto • Delhi NCR
            </span>
          </div>
        </motion.div>

        {/* Narrative & Media Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "4rem",
            alignItems: "center",
            marginBottom: "4.5rem"
          }}
          className="about-grid"
        >
          {/* Left Narrative Column with Enhanced Readability */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3
              style={{
                fontSize: "1.9rem",
                fontWeight: 800,
                color: "var(--text-white)",
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em"
              }}
            >
              Independent Technology Builder from Delhi NCR.
            </h3>

            <p style={{ fontSize: "1.06rem", lineHeight: 1.75, marginBottom: "1.35rem", color: "#D4D9D5" }}>
              My path into software development didn't start with formal courses; it began out of pure curiosity. I started by writing basic Python scripts to automate daily desktop chores, rename files, and organize directory structures. Seeing lines of code replace manual clicks instantly hooked me into programming.
            </p>

            <p style={{ fontSize: "1.06rem", lineHeight: 1.75, marginBottom: "1.35rem", color: "#C6CCC7" }}>
              That spark quickly evolved into building end-to-end full-stack applications, working with real-time WebSockets, configuring Twilio phone systems for conversational agents, and deploying commercial client websites such as <strong style={{ color: "var(--text-white)" }}>Freshco Mushroom</strong>, <strong style={{ color: "var(--text-white)" }}>Kaushik Traders</strong>, and the utility platform <strong style={{ color: "var(--text-white)" }}>OTool</strong>.
            </p>

            <p style={{ fontSize: "1.06rem", lineHeight: 1.75, color: "#C6CCC7" }}>
              I believe great software is defined by whether it solves a tangible bottleneck, saves actual hours of operational toil, and performs reliably when real users interact with it.
            </p>
          </motion.div>

          {/* Right Portrait & Quick Specs Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div
              className="card-dark about-spec-card"
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "1.75rem",
                alignItems: "center",
                padding: "1.75rem",
                border: "1px solid var(--accent-lime-border)"
              }}
            >
              {/* Personal Portrait Thumbnail */}
              <div
                style={{
                  width: "140px",
                  height: "175px",
                  borderRadius: "var(--radius-sm)",
                  overflow: "hidden",
                  border: "1.5px solid var(--accent-lime-border)",
                  backgroundColor: "#000",
                  flexShrink: 0
                }}
              >
                <img
                  src={personalInfo.portrait}
                  alt="Ansh Kumar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 20%",
                    filter: "grayscale(100%) contrast(1.15)"
                  }}
                />
              </div>

              <div>
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
                  Builder Specs
                </span>
                <h4 style={{ fontSize: "1.4rem", fontWeight: 800, margin: "0.35rem 0 0.85rem 0", color: "var(--text-white)" }}>
                  {personalInfo.name}
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.88rem", color: "#C6CCC7" }}>
                    <MapPin size={15} color="var(--accent-lime)" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.88rem", color: "#C6CCC7" }}>
                    <CheckCircle2 size={15} color="var(--accent-lime)" />
                    <span>AI Voice & Workflow Automation</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.88rem", color: "#C6CCC7" }}>
                    <Terminal size={15} color="var(--accent-lime)" />
                    <span>Full-Stack Web (React, FastAPI)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Pillars: Interests, What I Build, Problem Solving */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem"
          }}
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-dark"
                style={{ padding: "2.25rem" }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "rgba(183, 255, 53, 0.08)",
                    border: "1px solid var(--accent-lime-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.35rem",
                    color: "var(--accent-lime)"
                  }}
                >
                  <Icon size={22} />
                </div>
                <h4
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-white)",
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.02em"
                  }}
                >
                  {pillar.title}
                </h4>
                <p style={{ fontSize: "0.96rem", lineHeight: 1.65, color: "#C5CBC6" }}>
                  {pillar.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 500px) {
          .about-spec-card {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .about-spec-card img {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
