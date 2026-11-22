import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight, Globe } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // Prevent navigating if clicking a nested interactive anchor or button
    if (e.target.closest("a") || e.target.closest("button")) {
      return;
    }
    navigate(`/projects/${project.slug}`);
  };

  // Framer Motion variants for card hover
  const cardVariants = {
    initial: { y: 0 },
    hover: { 
      y: -4,
      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const arrowVariants = {
    initial: { x: 0, y: 0, opacity: 0.35 },
    hover: { 
      x: 2, 
      y: -2, 
      opacity: 1, 
      color: "var(--accent)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      style={{ height: "100%" }}
    >
      <div 
        onClick={handleCardClick}
        style={{ cursor: "pointer", height: "100%", display: "block" }}
      >
        <SpotlightCard 
          style={{ 
            height: "100%", 
            display: "flex", 
            flexDirection: "column",
            padding: "1.25rem 1.5rem",
            backgroundColor: "var(--bg-secondary)", // Flat theme-adaptive secondary background
            backdropFilter: "none",                 // No frosted glass blur
            WebkitBackdropFilter: "none",
            border: "1px solid var(--border)",
            borderRadius: "14px",                   // Smaller card corners
            boxShadow: "none",                      // No drop shadows
            position: "relative",
            minHeight: "260px",
            transition: "border-color 0.25s ease"
          }}
        >
          {/* Category & Status Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
            <span 
              style={{ 
                fontFamily: "var(--font-mono)", 
                fontSize: "0.65rem", 
                textTransform: "uppercase", 
                letterSpacing: "0.1em",
                color: "var(--accent)",
                fontWeight: 700
              }}
            >
              {project.category}
            </span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              {project.stat}
            </span>
          </div>

          {/* Title with morphing Arrow */}
          <h3 
            style={{ 
              fontSize: "1.15rem", 
              fontWeight: 700, 
              marginBottom: "0.5rem", 
              letterSpacing: "-0.02em", 
              color: "var(--text-primary)",
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between" 
            }}
          >
            <span>{project.title}</span>
            <motion.span variants={arrowVariants} style={{ display: "inline-flex" }}>
              <ArrowUpRight size={15} />
            </motion.span>
          </h3>

          {/* Short Description (micro-sized) */}
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.25rem", lineHeight: 1.5, flexGrow: 1 }}>
            {project.shortDescription}
          </p>

          {/* Tech Stack bullet list (aligned at the bottom) */}
          <div 
            style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              alignItems: "center", 
              gap: "0.25rem", 
              fontFamily: "var(--font-mono)", 
              fontSize: "0.7rem", 
              color: "var(--text-muted)",
              marginTop: "auto"
            }}
          >
            {project.techStack.map((tech, idx) => (
              <span key={idx} style={{ display: "flex", alignItems: "center" }}>
                {idx > 0 && <span style={{ margin: "0 0.3rem", opacity: 0.3 }}>•</span>}
                <span style={{ color: "var(--text-muted)" }}>{tech}</span>
              </span>
            ))}
          </div>

          {/* Action bottom link: Dynamic button label */}
          {project.liveLink && (
            <div style={{ marginTop: "0.75rem", display: "flex", justifyContent: "flex-end" }}>
              {project.liveLink.startsWith("http") ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // Stop click bubbling to parent card Link
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.2rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  <Globe size={11} />
                  <span>{project.liveLinkText || "Live Site"}</span>
                </a>
              ) : (
                <Link
                  to={project.liveLink}
                  onClick={(e) => e.stopPropagation()} // Stop click bubbling to parent card Link
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.2rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  <Globe size={11} />
                  <span>{project.liveLinkText || "Live Site"}</span>
                </Link>
              )}
            </div>
          )}
        </SpotlightCard>
      </div>
    </motion.div>
  );
}
