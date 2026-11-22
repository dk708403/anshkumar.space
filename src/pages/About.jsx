import { motion } from "framer-motion";
import { ArrowLeft, User, Heart, Target, Sparkles, MapPin, Milestone } from "lucide-react";
import { Link } from "react-router-dom";
import SpotlightCard from "../components/SpotlightCard";

export default function About() {
  const values = [
    {
      title: "Build in Public",
      desc: "I believe in sharing my development logs, design choices, system mockups, and client stories openly. It builds authentic trust.",
      icon: User
    },
    {
      title: "Extreme Speed",
      desc: "Latency is the difference between a tool that feels alive and one that feels broken. I optimize APIs, WebSockets, and database triggers.",
      icon: Target
    },
    {
      title: "Practical Utility",
      desc: "Software isn't just about syntactical elegance; it's about solving real problems, saving actual hours, and growing revenue.",
      icon: Heart
    }
  ];

  const milestones = [
    { year: "2024", title: "The Discovery", desc: "Wrote first scripts in Python, starting to understand control flow and basic automation." },
    { year: "2025", title: "Full-Stack Expansion", desc: "Learned React, databases, and API integrations, building static landings and dashboard projects." },
    { year: "2026", title: "Intelligent Systems", desc: "Pivoted to building low-latency AI agents, voice integrations, and robust automated flows." },
    { year: "Future", title: "Product Launching", desc: "Designing and scaling self-contained micro-SaaS products that help businesses automate work." }
  ];

  return (
    <div style={{ padding: "7.5rem 0 6rem 0", position: "relative" }}>
      {/* Background Glow */}
      <div className="bg-mesh-glow" />

      <div className="container">
        {/* Back Link */}
        <div style={{ marginBottom: "2rem" }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s"
            }}
            className="interactive"
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Title */}
        <div style={{ marginBottom: "4rem" }}>
          <h1 style={{ fontSize: "var(--fs-section)", fontWeight: 800, marginBottom: "1rem" }}>
            My Story
          </h1>
          <p style={{ maxWidth: "600px", fontSize: "1.1rem" }}>
            A look behind the code: who I am, how I build, and where I'm headed next.
          </p>
        </div>

        {/* Narrative & Quick Facts Grid */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "1.2fr 0.8fr", 
            gap: "4rem", 
            marginBottom: "5rem" 
          }}
          className="about-grid"
        >
          {/* Story Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
              Hey, I'm Ansh Kumar.
            </h2>
            <p style={{ marginBottom: "1.5rem", fontSize: "1.05rem", lineHeight: 1.7 }}>
              I'm a 19-year-old software builder based in Delhi NCR, India. My journey into programming started exactly 1.5 years ago. Out of pure curiosity, I wrote basic Python scripts to automate folder organization and clean my desktop downloads. That small feeling of commanding the machine instantly hooked me.
            </p>
            <p style={{ marginBottom: "1.5rem", fontSize: "1.05rem", lineHeight: 1.7 }}>
              Since then, I have transitioned from simple scripting to building full-stack web applications, designing Stripe-inspired checkout components, and developing voice interfaces using WebSockets. I focus on creating clean layouts, micro-animations, and fast response endpoints.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
              I believe that software should be functional first. Beautiful code is great, but code that saves a business 12 hours a week or qualification pipelines is what truly drives value. Currently, I'm working with local clients, setting up automated lead processes, and building products.
            </p>
          </motion.div>

          {/* Quick Facts Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <SpotlightCard style={{ padding: "2.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1.5rem", fontFamily: "var(--font-heading)" }}>
                Quick Specs
              </h3>
              
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { label: "Age", val: "19" },
                  { label: "Location", val: "Delhi NCR, India 🇮🇳" },
                  { label: "Focus", val: "AI Agents & Web Automation" },
                  { label: "Main Stack", val: "FastAPI • React • n8n" },
                  { label: "Availability", val: "Freelance & Collaborations" }
                ].map((spec, i) => (
                  <li key={i} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "0.75rem" }}>
                    <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{spec.label}</span>
                    <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>{spec.val}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <MapPin size={16} color="var(--accent)" />
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Based in Delhi NCR, India</span>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div style={{ marginBottom: "5rem", paddingTop: "4rem", borderTop: "1px solid var(--border)" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, textAlign: "center", marginBottom: "3.5rem" }}>
            Core Philosophy
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem" }}>
            {values.map((v, idx) => {
              const IconComponent = v.icon;
              return (
                <div key={idx} style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "20px", backgroundColor: "var(--bg-secondary)" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", backgroundColor: "var(--bg-primary)", border: "1px solid var(--border)", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "1.25rem" }}>
                    <IconComponent size={20} color="var(--accent)" />
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Milestones Roadmap */}
        <div style={{ paddingTop: "4rem", borderTop: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "3.5rem" }}>
            <Milestone size={24} color="var(--accent)" />
            <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>The Roadmap</h2>
          </div>

          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
              gap: "2rem" 
            }}
          >
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  padding: "1.75rem",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  backgroundColor: "var(--card-bg)",
                  position: "relative"
                }}
              >
                {/* Year Marker Tag */}
                <span 
                  style={{ 
                    fontFamily: "var(--font-mono)", 
                    fontSize: "0.8rem", 
                    fontWeight: 700, 
                    color: "var(--accent)", 
                    backgroundColor: "var(--accent-soft)", 
                    padding: "0.2rem 0.6rem", 
                    borderRadius: "4px",
                    display: "inline-block",
                    marginBottom: "1rem"
                  }}
                >
                  {m.year}
                </span>
                
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                  {m.title}
                </h4>
                
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
}
