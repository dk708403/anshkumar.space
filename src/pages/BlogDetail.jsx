import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { blogData } from "../data/blogData";

export default function BlogDetail() {
  const { slug } = useParams();
  
  // Find blog in database
  const postIdx = blogData.findIndex((p) => p.slug === slug);
  const post = blogData[postIdx];

  // Active section tracking state
  const [activeSection, setActiveSection] = useState("");

  // Define headings to track in sidebar ToC
  const headings = [
    { id: "introduction", label: "Introduction" },
    { id: "the-problem", label: "The Problem" },
    { id: "the-vision-core-idea", label: "The Vision" },
    { id: "research-phase", label: "Research Phase" },
    { id: "designing-the-agent-architecture", label: "Designing the Agent" },
    { id: "system-architecture-flow", label: "System Architecture" },
    { id: "the-technology-stack", label: "Technology Stack" },
    { id: "deep-dive-structured-lead-extraction", label: "Structured Lead Extraction" },
    { id: "solving-the-latency-challenge", label: "Latency Optimization" },
    { id: "lessons-learned", label: "Lessons Learned" },
    { id: "future-roadmap", label: "Future Roadmap" },
    { id: "final-thoughts", label: "Final Thoughts" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const heading of headings) {
        const el = document.getElementById(heading.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(heading.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);

  if (!post) {
    return (
      <div style={{ padding: "10rem 0", textAlign: "center" }}>
        <h2>Article Not Found</h2>
        <p style={{ marginTop: "1rem" }}>The article you are looking for does not exist.</p>
        <Link to="/blog" className="btn btn-primary" style={{ marginTop: "2rem" }}>
          Back to Founder Log
        </Link>
      </div>
    );
  }

  const prevPost = blogData[postIdx - 1] || blogData[blogData.length - 1];
  const nextPost = blogData[postIdx + 1] || blogData[0];

  // Helper scroll handler
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; 
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Parsing markdown titles into IDs to match the heading IDs
  const renderFormattedContent = (content) => {
    const lines = content.split("\n");
    return lines.map((line, idx) => {
      // Handle Heading 3 (### Title)
      if (line.trim().startsWith("### ")) {
        const titleText = line.replace("### ", "").trim();
        const id = titleText.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        return (
          <h3 key={idx} id={id} style={{ fontSize: "1.45rem", fontWeight: 800, marginTop: "2.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
            {titleText}
          </h3>
        );
      }
      
      // Handle Horizontal Rule (---)
      if (line.trim() === "---") {
        return <hr key={idx} style={{ border: "none", borderTop: "1px solid var(--border)", margin: "2rem 0" }} />;
      }

      // Handle Code Block wrapper code blocks (```lang ... ```)
      // Note: A simpler approach for local renders:
      // Since it's stored inside lines, if it contains python/javascript tags, we can display inline codes or code pre-blocks.
      if (line.trim().startsWith("```")) {
        return null; // Handled dynamically in CSS styling or by filtering blocks
      }

      return (
        <p key={idx} style={{ marginBottom: "1.25rem", color: "var(--text-muted)", fontSize: "1.025rem", lineHeight: 1.75 }}>
          {line}
        </p>
      );
    });
  };

  return (
    <div style={{ padding: "6.5rem 0 6rem 0", position: "relative" }}>
      {/* Background visual light blob */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 75%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: -1
        }}
      />

      <div className="container">
        {/* Navigation Breadcrumbs */}
        <div style={{ marginBottom: "2rem" }}>
          <Link
            to="/blog"
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
            <span>Back to Founder Log</span>
          </Link>
        </div>

        {/* ================= BLOG POST HEADER ================= */}
        <header style={{ marginBottom: "4rem", maxWidth: "1000px" }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
            <span 
              style={{ 
                fontFamily: "var(--font-mono)", 
                fontSize: "0.7rem", 
                textTransform: "uppercase", 
                letterSpacing: "0.15em", 
                color: "var(--accent)", 
                backgroundColor: "rgba(59, 130, 246, 0.08)",
                border: "1px solid rgba(59, 130, 246, 0.15)",
                padding: "0.3rem 0.85rem", 
                borderRadius: "50px", 
                fontWeight: 700 
              }}
            >
              {post.category}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              <Calendar size={12} />
              <span>{post.date}</span>
              <span>•</span>
              <Clock size={12} />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 
            style={{ 
              fontSize: "var(--fs-section)", 
              fontWeight: 900, 
              color: "var(--text-primary)", 
              marginBottom: "1.25rem",
              letterSpacing: "-0.04em",
              lineHeight: 1.15
            }}
          >
            {post.title}
          </h1>

          <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.6, maxWidth: "800px" }}>
            {post.excerpt}
          </p>
        </header>

        {/* ================= DUAL READER GRID ================= */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "240px 1fr", 
            gap: "5rem",
            alignItems: "flex-start"
          }}
          className="toc-grid-container"
        >
          {/* STICKY SIDEBAR ToC NAVIGATION */}
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
              Sections
            </span>
            {headings.map((heading) => {
              const isActive = activeSection === heading.id;
              return (
                <button
                  key={heading.id}
                  onClick={() => scrollTo(heading.id)}
                  style={{
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "0.35rem 0",
                    fontSize: "0.825rem",
                    fontFamily: "var(--font-mono)",
                    color: isActive ? "var(--accent)" : "var(--text-muted)",
                    fontWeight: isActive ? 600 : 400,
                    cursor: "pointer",
                    transition: "color 0.2s ease"
                  }}
                  className="interactive"
                >
                  {isActive && <ChevronRight size={10} style={{ marginRight: "0.25rem", display: "inline" }} />}
                  {heading.label}
                </button>
              );
            })}
          </aside>

          {/* MAIN ARTICLE READING BODY */}
          <main style={{ maxWidth: "740px" }}>
            <div 
              className="article-rich-body"
              style={{
                fontSize: "1.05rem",
                color: "var(--text-primary)",
                lineHeight: 1.8
              }}
            >
              {renderFormattedContent(post.content)}
            </div>

            {/* ================= PREVIOUS / NEXT FOOTER NAV ================= */}
            <footer 
              style={{ 
                marginTop: "5rem", 
                paddingTop: "2.5rem", 
                borderTop: "1px solid var(--border)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
              className="doc-footer"
            >
              <Link 
                to={`/blog/${prevPost.slug}`} 
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
                <span>Previous Post</span>
                <span style={{ fontWeight: 700, color: "var(--text-primary)", marginTop: "0.25rem", display: "flex", alignItems: "center" }}>
                  <ArrowLeft size={12} style={{ marginRight: "0.25rem" }} />
                  {prevPost.title}
                </span>
              </Link>

              <Link 
                to={`/blog/${nextPost.slug}`} 
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
                <span>Next Post</span>
                <span style={{ fontWeight: 700, color: "var(--text-primary)", marginTop: "0.25rem", display: "flex", alignItems: "center" }}>
                  {nextPost.title}
                  <ArrowRight size={12} style={{ marginLeft: "0.25rem" }} />
                </span>
              </Link>
            </footer>
          </main>
        </div>
      </div>

      <style>{`
        .article-rich-body h3 {
          font-size: 1.45rem;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 800;
        }
        .article-rich-body p {
          margin-bottom: 1.25rem;
          color: var(--text-muted);
          font-size: 1.025rem;
          line-height: 1.8;
        }
        .article-rich-body ul {
          margin: 1.25rem 0 1.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .article-rich-body li {
          font-size: 1.025rem;
          color: var(--text-muted);
        }
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
