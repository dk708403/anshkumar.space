import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, Clock, X, ArrowLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { blogData } from "../data/blogData";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [
    "All",
    "AI",
    "Development",
    "Automation",
    "Business",
    "Thoughts",
    "Writing",
    "Founder Journey"
  ];

  const filteredBlogs = blogData.filter((post) => {
    return activeCategory === "All" || post.category === activeCategory;
  });

  return (
    <div style={{ padding: "7.5rem 0 5rem 0", position: "relative" }}>
      {/* Mesh background glow */}
      <div className="bg-mesh-glow" />

      <div className="container">
        {/* Navigation Breadcrumb */}
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

        {/* Header Title */}
        <div style={{ marginBottom: "4rem" }}>
          <h1 style={{ fontSize: "var(--fs-section)", fontWeight: 800, marginBottom: "1rem" }}>
            Founder Log
          </h1>
          <p style={{ maxWidth: "600px", fontSize: "1.1rem" }}>
            Writing about artificial intelligence, API automations, frontend visual code, and my journey building in public.
          </p>
        </div>

        {/* Filter categories tabs list */}
        <div 
          style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "0.5rem",
            marginBottom: "3.5rem",
            borderBottom: "1px solid var(--border)",
            paddingBottom: "1.5rem"
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "0.5rem 1.1rem",
                  borderRadius: "50px",
                  border: "1px solid",
                  borderColor: isActive ? "var(--accent)" : "transparent",
                  backgroundColor: isActive ? "var(--accent-soft)" : "transparent",
                  color: isActive ? "var(--accent)" : "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
                className="interactive"
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = "var(--text-muted)";
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Blog cards grid */}
        {filteredBlogs.length > 0 ? (
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
              gap: "2.5rem"
            }}
          >
            {filteredBlogs.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <BlogCard post={post} />
              </Link>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "5rem 0", color: "var(--text-muted)" }}>
            <BookOpen size={36} style={{ marginBottom: "1rem", opacity: 0.5 }} />
            <h3>No articles found in this category</h3>
          </div>
        )}
      </div>

      <style>{`
        .article-body h3 {
          font-size: 1.35rem;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }
        .article-body code {
          background-color: var(--bg-secondary);
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          border: 1px solid var(--border);
        }
        .article-body pre {
          background-color: var(--bg-secondary);
          padding: 1.25rem;
          border-radius: 8px;
          overflow-x: auto;
          margin: 1.5rem 0;
          border: 1px solid var(--border);
        }
        .article-body pre code {
          background-color: transparent;
          padding: 0;
          border: none;
          font-size: 0.85rem;
        }
        .article-body ul {
          margin: 1rem 0 1rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .article-body li {
          font-size: 1.05rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
