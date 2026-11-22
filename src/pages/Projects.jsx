import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI Agents", "Automation", "Full Stack", "Landing Pages"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: "7.5rem 0 5rem 0", position: "relative" }}>
      {/* Mesh Glows */}
      <div className="bg-mesh-glow" />

      <div className="container">
        {/* Header Back Button */}
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

        {/* Title */}
        <div style={{ marginBottom: "4rem" }}>
          <h1 style={{ fontSize: "var(--fs-section)", fontWeight: 800, marginBottom: "1rem" }}>
            All Projects
          </h1>
          <p style={{ maxWidth: "600px", fontSize: "1.1rem" }}>
            Explore software solutions, voice agents, and background integration systems I've designed and shipped.
          </p>
        </div>

        {/* Search & Filters Bar */}
        <div 
          style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            justifyContent: "space-between", 
            alignItems: "center", 
            gap: "1.5rem",
            marginBottom: "3rem"
          }}
        >
          {/* Categories Tab Pill List */}
          <div 
            style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: "0.5rem" 
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "0.5rem 1.2rem",
                    borderRadius: "50px",
                    border: "1px solid",
                    borderColor: isActive ? "var(--accent)" : "var(--border)",
                    backgroundColor: isActive ? "var(--accent)" : "#FFFFFF",
                    color: isActive ? "#FFFFFF" : "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  className="interactive"
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input Box */}
          <div 
            style={{ 
              position: "relative",
              minWidth: "260px"
            }}
            className="search-wrapper"
          >
            <Search 
              size={16} 
              color="var(--text-muted)"
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none"
              }}
            />
            <input
              type="text"
              placeholder="Search stack, description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.6rem 1rem 0.6rem 2.5rem",
                borderRadius: "50px",
                border: "1px solid var(--border)",
                fontSize: "0.9rem",
                color: "var(--text-primary)",
                outline: "none",
                backgroundColor: "#FFFFFF",
                boxShadow: "var(--shadow-sm)",
                transition: "border-color 0.2s"
              }}
              onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
              onBlur={(e) => e.target.style.borderColor = "var(--border)"}
            />
          </div>
        </div>

        {/* Project Cards Grid / Dual sections */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            activeCategory === "All" && !searchQuery ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
                {/* 1. Live Projects Section */}
                <div>
                  <div style={{ marginBottom: "2rem", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
                    <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-primary)" }}>Deployed Live Projects</h2>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>Fully deployed client products, websites, and commercial integrations.</p>
                  </div>
                  <motion.div 
                    layout
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
                      gap: "2.5rem"
                    }}
                  >
                    {filteredProjects.filter(p => p.type === "live").map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </motion.div>
                </div>

                {/* 2. Experimental Section */}
                <div>
                  <div style={{ marginBottom: "2rem", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
                    <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-primary)" }}>AI Agents & Experimental Projects</h2>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginTop: "0.25rem", maxWidth: "800px", lineHeight: 1.5 }}>
                      I design and build conversational AI systems, automation workflows, and custom business tools. Some projects are deployed products, while others are internal prototypes and demonstrations exploring new capabilities.
                    </p>
                  </div>
                  <motion.div 
                    layout
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
                      gap: "2.5rem"
                    }}
                  >
                    {filteredProjects.filter(p => p.type === "experimental").map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                    
                    {/* More Projects active development card placeholder */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      style={{ height: "100%" }}
                    >
                      <div
                        style={{
                          height: "100%",
                          minHeight: "260px",
                          border: "2px dashed var(--border)",
                          borderRadius: "14px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "1.25rem 1.5rem",
                          textAlign: "center",
                          backgroundColor: "var(--bg-secondary)"
                        }}
                      >
                        <span style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🚀</span>
                        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.25rem", color: "var(--text-primary)" }}>More Projects</h3>
                        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", maxWidth: "260px", lineHeight: 1.45 }}>
                          Additional experiments and products involving AI systems, automation workflows, landing pages, and custom software solutions are currently under active development.
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            ) : (
              // Standard search query / filtered category view
              <motion.div 
                layout
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
                  gap: "2.5rem"
                }}
              >
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            )
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                textAlign: "center",
                padding: "5rem 0",
                color: "var(--text-muted)"
              }}
            >
              <SlidersHorizontal size={36} style={{ marginBottom: "1rem", opacity: 0.5 }} />
              <h3>No projects found matching search filters</h3>
              <p style={{ fontSize: "0.95rem", marginTop: "0.5rem" }}>
                Try adjusting your search keywords or switching filters.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 500px) {
          .search-wrapper {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
