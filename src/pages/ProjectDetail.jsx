import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  ArrowRight,
  Globe, 
  Layers, 
  HelpCircle, 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  Sparkles, 
  Compass, 
  BookOpen, 
  Cpu, 
  Terminal,
  ChevronRight,
  Code2
} from "lucide-react";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import SpotlightCard from "../components/SpotlightCard";

export default function ProjectDetail() {
  const { slug } = useParams();
  
  // Find project in database
  const projectIdx = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIdx];

  // Active section tracker for sticky TOC
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);

  if (!project) {
    return (
      <div style={{ padding: "10rem 0", textAlign: "center" }}>
        <h2>Project Case Study Not Found</h2>
        <p style={{ marginTop: "1rem" }}>The case study you are looking for does not exist.</p>
        <Link to="/projects" className="btn btn-primary" style={{ marginTop: "2rem" }}>
          Back to Projects
        </Link>
      </div>
    );
  }

  // Get previous & next projects
  const prevProject = projectsData[projectIdx - 1] || projectsData[projectsData.length - 1];
  const nextProject = projectsData[projectIdx + 1] || projectsData[0];

  // Documentation sections list
  const sections = [
    { id: "overview", label: "Project Overview" },
    { id: "problem", label: "Problem Statement" },
    { id: "solution", label: "Proposed Solution" },
    { id: "features", label: "Key Features" },
    { id: "timeline", label: "How It Works" },
    { id: "architecture", label: "Technical Architecture" },
    { id: "tech-stack", label: "Technology Stack" },
    ...(project.type === "experimental" ? [{ id: "conversation", label: "Example Conversation" }] : []),
    { id: "impact", label: "Business Impact" },
    { id: "use-cases", label: "Target Use Cases" },
    { id: "challenges", label: "Key Challenges" },
    { id: "roadmap", label: "Future Roadmap" },
    { id: "lessons", label: "Lessons Learned" }
  ];

  // Helper scroll handler
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; 
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Helper mock data triggers depending on project types
  const isAgent = project.type === "experimental";

  return (
    <div style={{ padding: "6.5rem 0 6rem 0", position: "relative" }}>
      {/* Background radial overlays */}
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, transparent 80%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: -1
        }}
      />

      <div className="container">
        {/* Back navigation header link */}
        <div style={{ marginBottom: "2rem" }}>
          <Link
            to="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s"
            }}
            className="interactive"
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
          >
            <ArrowLeft size={14} />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* ================= HERO SECTION ================= */}
        <header style={{ marginBottom: "4.5rem", borderBottom: "1px solid var(--border)", paddingBottom: "3rem" }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.25rem" }}>
            <span 
              style={{ 
                fontFamily: "var(--font-mono)", 
                fontSize: "0.7rem", 
                textTransform: "uppercase", 
                letterSpacing: "0.15em", 
                color: "var(--accent)", 
                backgroundColor: "rgba(59, 130, 246, 0.08)",
                border: "1px solid rgba(59, 130, 246, 0.15)",
                padding: "0.35rem 0.9rem", 
                borderRadius: "50px", 
                fontWeight: 700 
              }}
            >
              {project.category}
            </span>
            <span 
              style={{ 
                fontFamily: "var(--font-mono)", 
                fontSize: "0.7rem", 
                textTransform: "uppercase", 
                letterSpacing: "0.1em",
                color: "var(--text-muted)" 
              }}
            >
              • {isAgent ? "Experimental Agent" : "Live Product"}
            </span>
          </div>

          <h1 
            style={{ 
              fontSize: "var(--fs-hero)", 
              fontWeight: 900, 
              color: "var(--text-primary)", 
              marginBottom: "1rem",
              letterSpacing: "-0.04em",
              lineHeight: 1.1
            }}
          >
            {project.title}
          </h1>

          <p 
            style={{ 
              fontSize: "var(--fs-body)", 
              color: "var(--text-muted)", 
              lineHeight: 1.6, 
              maxWidth: "800px", 
              marginBottom: "2.5rem" 
            }}
          >
            {project.shortDescription}
          </p>

          {/* Metadata Grid */}
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", 
              gap: "1.5rem", 
              marginBottom: "3rem",
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "1.5rem"
            }}
          >
            <div>
              <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Status</div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.25rem" }}>
                {isAgent ? "Private Prototype" : "Active Production"}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Industry</div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.25rem" }}>
                {isAgent ? "AI Automation" : "Commercial Web"}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Core Technologies</div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.25rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {project.techStack.slice(0, 3).join(", ")}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Last Updated</div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.25rem" }}>
                {project.date}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button 
              onClick={() => scrollTo("architecture")} 
              className="btn btn-accent interactive" 
              style={{ borderRadius: "50px", border: "none" }}
            >
              <Cpu size={16} />
              <span>View Architecture</span>
            </button>
            <button 
              onClick={() => scrollTo("overview")} 
              className="btn btn-secondary interactive" 
              style={{ borderRadius: "50px" }}
            >
              <BookOpen size={16} />
              <span>Read Documentation</span>
            </button>
            {project.liveLink && project.liveLink.startsWith("http") && (
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary interactive"
                style={{ borderRadius: "50px", textDecoration: "none", color: "var(--text-primary)" }}
              >
                <Globe size={16} />
                <span>Visit Live Platform</span>
              </a>
            )}
          </div>
        </header>

        {/* ================= DOCUMENT LAYOUT GRID ================= */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "240px 1fr", 
            gap: "5rem",
            alignItems: "flex-start"
          }}
          className="toc-grid-container"
        >
          {/* STICKY TABLE OF CONTENTS SIDEBAR */}
          <aside 
            style={{ 
              position: "sticky", 
              top: "100px", 
              display: "flex", 
              flexDirection: "column", 
              gap: "0.65rem",
              borderRight: "1px solid var(--border)",
              paddingRight: "1.5rem"
            }}
            className="toc-sidebar"
          >
            <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
              Documentation
            </span>
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollTo(sec.id)}
                  style={{
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "0.35rem 0",
                    fontSize: "0.85rem",
                    fontFamily: "var(--font-mono)",
                    color: isActive ? "var(--accent)" : "var(--text-muted)",
                    fontWeight: isActive ? 600 : 400,
                    cursor: "pointer",
                    transition: "color 0.2s ease"
                  }}
                  className="interactive"
                >
                  {isActive && <ChevronRight size={10} style={{ marginRight: "0.25rem", display: "inline" }} />}
                  {sec.label}
                </button>
              );
            })}
          </aside>

          {/* MAIN DOCUMENT CONTENTS COLUMN */}
          <main style={{ maxWidth: "780px", display: "flex", flexDirection: "column", gap: "6rem" }}>
            
            {/* 1. PROJECT OVERVIEW */}
            <section id="overview">
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Compass size={20} color="var(--accent)" />
                <span>Project Overview</span>
              </h2>
              <div style={{ lineHeight: 1.7, fontSize: "0.95rem", color: "var(--text-primary)", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p>
                  {project.description}
                </p>
                <p>
                  This project was initiated to build high-performance systems capable of eliminating repetitive operations. Designed for businesses seeking to optimize client workflows, this agent handles lead capture pipelines, state management, and real-time operations without manual labor.
                </p>
                <div style={{ marginTop: "1rem", padding: "1.25rem", borderLeft: "3px solid var(--accent)", backgroundColor: "var(--bg-secondary)", borderRadius: "0 8px 8px 0" }}>
                  <strong style={{ display: "block", fontSize: "0.85rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: "0.25rem" }}>Target Audience</strong>
                  <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                    {isAgent ? "Modern agencies, clinic receptionists, and scaling SaaS platforms looking for hands-free operations." : "D2C brands, agriculture operations, and digital trade businesses."}
                  </span>
                </div>
              </div>
            </section>

            {/* 2. PROBLEM STATEMENT */}
            <section id="problem">
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <HelpCircle size={20} color="#EF4444" />
                <span>Problem Statement</span>
              </h2>
              <p style={{ lineHeight: 1.6, fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
                Businesses lose a high percentage of buyers because inbound communications go unanswered, scheduling appointments creates excessive friction, and custom software systems require constant manual synchronizations.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="doc-subgrid">
                <div style={{ padding: "1.25rem", border: "1px solid var(--border)", borderRadius: "12px", backgroundColor: "var(--bg-secondary)" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⚠️</div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>Manual Overhead</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.5 }}>Repetitive customer sorting and manual schedule inputs drain team focus and lead to human errors.</p>
                </div>
                <div style={{ padding: "1.25rem", border: "1px solid var(--border)", borderRadius: "12px", backgroundColor: "var(--bg-secondary)" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📈</div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>Lack of Scalability</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.5 }}>Standard support channels cannot manage sudden volume spikes, causing client fallout.</p>
                </div>
              </div>
            </section>

            {/* 3. PROPOSED SOLUTION */}
            <section id="solution">
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <ShieldCheck size={20} color="#10B981" />
                <span>Proposed Solution</span>
              </h2>
              <div style={{ lineHeight: 1.7, fontSize: "0.95rem", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p>
                  To counter these pain points, I engineered a modular agent system that handles natural conversations, coordinates scheduling availability, indexes private knowledge parameters, and runs operations instantly.
                </p>
                <p>
                  The system relies on asynchronous endpoints that coordinate state changes across APIs, database tables, and real-time messaging pipelines. When complex queries occur, the engine triggers automated vector-similarity checks or passes the call to humans seamlessly.
                </p>
              </div>
            </section>

            {/* 4. KEY FEATURES */}
            <section id="features">
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Sparkles size={20} color="var(--accent)" />
                <span>Key Features</span>
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="doc-subgrid">
                {project.techStack.map((feat, idx) => (
                  <div 
                    key={idx}
                    style={{ 
                      padding: "1.25rem", 
                      border: "1px solid var(--border)", 
                      borderRadius: "12px", 
                      backgroundColor: "var(--bg-secondary)"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <span style={{ color: "var(--accent)", fontSize: "1.1rem" }}>✦</span>
                      <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>{feat}</h4>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.4 }}>
                      Integrated functionality optimizing execution speeds, state reliability, and developer modifications.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. PROCESS TIMELINE */}
            <section id="timeline">
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Zap size={20} color="var(--accent)" />
                <span>How It Works</span>
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
                A step-by-step trace of client request flows and database sync operations:
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative" }}>
                {[
                  { step: "User Contacts Platform", desc: "Inbound requests land on webhook triggers or conversational sockets." },
                  { step: "Intent & Content Analyzed", desc: "LLMs classify user intents and perform semantic keyword vector lookups." },
                  { step: "Database Action Executed", desc: "FastAPI updates Supabase database tables or schedules calendar bookings." },
                  { step: "System Notification Dispatched", desc: "Leads sync with target CRMs and alert notifications trigger via email APIs." }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div 
                        style={{ 
                          width: "24px", 
                          height: "24px", 
                          borderRadius: "50%", 
                          backgroundColor: "var(--accent)", 
                          color: "#FFFFFF", 
                          display: "flex", 
                          justifyContent: "center", 
                          alignItems: "center",
                          fontSize: "0.75rem",
                          fontWeight: 700
                        }}
                      >
                        {idx + 1}
                      </div>
                      {idx < 3 && (
                        <div style={{ width: "2px", height: "40px", backgroundColor: "var(--border)", marginTop: "4px" }} />
                      )}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>{item.step}</h4>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. TECHNICAL ARCHITECTURE */}
            <section id="architecture">
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Cpu size={20} color="var(--accent)" />
                <span>Technical Architecture</span>
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "2.5rem" }}>
                This data-flow mapping illustrates how the front-end clients, FastAPI backend server, and Supabase database coordinate:
              </p>

              <SpotlightCard style={{ padding: "2.25rem", backgroundColor: "var(--bg-secondary)", borderRadius: "16px", boxShadow: "none" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {project.architecture ? (
                    project.architecture.map((node, i) => (
                      <div key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                        <div 
                          style={{ 
                            fontFamily: "var(--font-mono)", 
                            fontSize: "0.7rem", 
                            color: "var(--accent)", 
                            backgroundColor: "rgba(59, 130, 246, 0.08)",
                            padding: "0.25rem 0.5rem", 
                            borderRadius: "4px",
                            fontWeight: 700
                          }}
                        >
                          Step 0{i + 1}
                        </div>
                        <div>
                          <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.2rem" }}>
                            {node.step}
                          </h4>
                          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.45 }}>
                            {node.description}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Architecture pipeline details loading...</p>
                  )}
                </div>
              </SpotlightCard>
            </section>

            {/* 7. TECHNOLOGY STACK */}
            <section id="tech-stack">
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Terminal size={20} color="var(--accent)" />
                <span>Technology Stack</span>
              </h2>
              <div 
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
                  gap: "1.5rem" 
                }}
                className="doc-subgrid"
              >
                <div>
                  <h4 style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>Engine Layers</h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {project.techStack.slice(0, 3).map((t, idx) => (
                      <li key={idx} style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>⚙️ {t}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>Data & State</h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <li style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>🗄️ Supabase</li>
                    <li style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>⚡ PostgreSQL</li>
                    <li style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>🔗 Webhooks</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>Deploy</h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <li style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>☁️ Vercel</li>
                    <li style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>🐳 Docker</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 8. EXAMPLE DIALOGUE (Only for Agents) */}
            {isAgent && (
              <section id="conversation">
                <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <MessageSquare size={20} color="var(--accent)" />
                  <span>Example Conversation</span>
                </h2>
                <div 
                  style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: "1rem", 
                    backgroundColor: "var(--bg-secondary)", 
                    borderRadius: "16px", 
                    padding: "2rem",
                    border: "1px solid var(--border)"
                  }}
                >
                  <div style={{ alignSelf: "flex-start", maxWidth: "80%" }}>
                    <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>Customer</span>
                    <div style={{ backgroundColor: "var(--border)", padding: "0.75rem 1rem", borderRadius: "0 14px 14px 14px", marginTop: "0.25rem", fontSize: "0.9rem", color: "var(--text-primary)" }}>
                      "I'd like to schedule a quick trade service consultation."
                    </div>
                  </div>
                  <div style={{ alignSelf: "flex-end", maxWidth: "80%", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--accent)" }}>AI Agent</span>
                    <div style={{ backgroundColor: "var(--accent)", padding: "0.75rem 1rem", borderRadius: "14px 0 14px 14px", marginTop: "0.25rem", fontSize: "0.9rem", color: "#FFFFFF" }}>
                      "Certainly! What date works best for you? We have open slots on Friday afternoon."
                    </div>
                  </div>
                  <div style={{ alignSelf: "flex-start", maxWidth: "80%" }}>
                    <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>Customer</span>
                    <div style={{ backgroundColor: "var(--border)", padding: "0.75rem 1rem", borderRadius: "0 14px 14px 14px", marginTop: "0.25rem", fontSize: "0.9rem", color: "var(--text-primary)" }}>
                      "Friday afternoon at 3 PM works perfectly."
                    </div>
                  </div>
                  <div style={{ alignSelf: "flex-end", maxWidth: "80%", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--accent)" }}>AI Agent</span>
                    <div style={{ backgroundColor: "var(--accent)", padding: "0.75rem 1rem", borderRadius: "14px 0 14px 14px", marginTop: "0.25rem", fontSize: "0.9rem", color: "#FFFFFF" }}>
                      "Done. I've locked in your appointment for Friday at 3:00 PM UTC and sent a calendar confirmation."
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* 9. BUSINESS IMPACT */}
            <section id="impact">
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <TrendingUp size={20} color="var(--accent)" />
                <span>Business Impact</span>
              </h2>
              <div 
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
                  gap: "1.5rem" 
                }}
                className="doc-subgrid"
              >
                <div style={{ padding: "1.5rem", border: "1px solid var(--border)", borderRadius: "16px", backgroundColor: "var(--bg-secondary)", textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--accent)" }}>24/7</div>
                  <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "0.5rem" }}>Inbound Coverage</div>
                </div>
                <div style={{ padding: "1.5rem", border: "1px solid var(--border)", borderRadius: "16px", backgroundColor: "var(--bg-secondary)", textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#10B981" }}>-60%</div>
                  <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "0.5rem" }}>Manual Data Work</div>
                </div>
                <div style={{ padding: "1.5rem", border: "1px solid var(--border)", borderRadius: "16px", backgroundColor: "var(--bg-secondary)", textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--text-primary)" }}>98%</div>
                  <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "0.5rem" }}>Lead Sync Accuracy</div>
                </div>
              </div>
            </section>

            {/* 10. USE CASES */}
            <section id="use-cases">
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Layers size={20} color="var(--accent)" />
                <span>Target Use Cases</span>
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {["Real Estate Agents", "Dental Clinics", "Marketing Agencies", "Consultancy Operations", "SaaS Platforms"].map((useCase, idx) => (
                  <span 
                    key={idx}
                    style={{ 
                      fontSize: "0.85rem", 
                      fontFamily: "var(--font-mono)", 
                      border: "1px solid var(--border)", 
                      padding: "0.4rem 1rem", 
                      borderRadius: "50px", 
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-primary)"
                    }}
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </section>

            {/* 11. KEY CHALLENGES */}
            <section id="challenges">
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <HelpCircle size={20} color="#EF4444" />
                <span>Key Challenges</span>
              </h2>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", padding: 0 }}>
                {project.challenges.map((challenge, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.95rem", color: "var(--text-muted)" }}>
                    <span style={{ color: "#EF4444", fontSize: "1.25rem", lineHeight: 1 }}>•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 12. FUTURE ROADMAP */}
            <section id="roadmap">
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Code2 size={20} color="var(--accent)" />
                <span>Future Roadmap</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { title: "Long-term Memory Persistence", desc: "Allowing agents to recall conversation context across distinct sessions." },
                  { title: "Agent-to-Agent Coordination", desc: "Enabling autonomous workflow handoffs between specialized support and booking receptionists." },
                  { title: "Advanced Analytics Telemetry", desc: "Deploying click-rate and voice response telemetry charts directly into the customer dashboard." }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      padding: "1.25rem", 
                      border: "1px solid var(--border)", 
                      borderRadius: "12px", 
                      backgroundColor: "var(--bg-secondary)",
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start"
                    }}
                  >
                    <span style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--accent)" }}>Q{idx + 1}</span>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>{item.title}</h4>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 13. LESSONS LEARNED */}
            <section id="lessons">
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <ShieldCheck size={20} color="#10B981" />
                <span>Lessons Learned</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  "Knowledge base quality directly determines model accuracy. Dynamic chunking vectors deliver far better search contexts.",
                  "Conversation design matters. Users appreciate quick feedback signals rather than long silences.",
                  "Real-time logging telemetry is essential. Catching API disconnects at the edge prevents workflow collapse."
                ].map((lesson, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.95rem", color: "var(--text-muted)" }}>
                    <span style={{ color: "#10B981", fontSize: "1.1rem" }}>✓</span>
                    <span>{lesson}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ================= DOCUMENTATION FOOTER ================= */}
            <footer 
              style={{ 
                marginTop: "4rem", 
                paddingTop: "2.5rem", 
                borderTop: "1px solid var(--border)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
              className="doc-footer"
            >
              <Link 
                to={`/projects/${prevProject.slug}`} 
                style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "flex-start", 
                  textDecoration: "none", 
                  color: "var(--text-muted)",
                  fontSize: "0.85rem"
                }}
                className="interactive"
              >
                <span>Previous Case Study</span>
                <span style={{ fontWeight: 700, color: "var(--text-primary)", marginTop: "0.25rem", display: "flex", alignItems: "center" }}>
                  <ArrowLeft size={12} style={{ marginRight: "0.25rem" }} />
                  {prevProject.title}
                </span>
              </Link>

              <Link 
                to={`/projects/${nextProject.slug}`} 
                style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "flex-end", 
                  textDecoration: "none", 
                  color: "var(--text-muted)",
                  fontSize: "0.85rem"
                }}
                className="interactive"
              >
                <span>Next Case Study</span>
                <span style={{ fontWeight: 700, color: "var(--text-primary)", marginTop: "0.25rem", display: "flex", alignItems: "center" }}>
                  {nextProject.title}
                  <ArrowRight size={12} style={{ marginLeft: "0.25rem" }} />
                </span>
              </Link>
            </footer>

          </main>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .toc-grid-container {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .toc-sidebar {
            display: none !important;
          }
        }
        @media (max-width: 580px) {
          .doc-subgrid {
            grid-template-columns: 1fr !important;
          }
          .doc-footer {
            flex-direction: column;
            gap: 2rem;
            align-items: center;
            text-align: center;
          }
          .doc-footer a {
            align-items: center !important;
          }
        }
      `}</style>
    </div>
  );
}
