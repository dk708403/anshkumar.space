import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

export default function BlogCard({ post }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <SpotlightCard className="blog-card-wrapper" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Meta Info */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
          <span 
            style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "0.75rem", 
              textTransform: "uppercase", 
              letterSpacing: "0.1em",
              color: "#3B82F6",
              backgroundColor: "rgba(59, 130, 246, 0.06)",
              padding: "0.25rem 0.75rem",
              borderRadius: "50px",
              fontWeight: 600
            }}
          >
            {post.category}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#6B7280", fontFamily: "var(--font-mono)" }}>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "1.75rem", flexGrow: 1 }}>
          {post.excerpt}
        </p>

        {/* Divider */}
        <div style={{ width: "100%", height: "1px", backgroundColor: "var(--border)", marginBottom: "1.25rem" }} />

        {/* CTA */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "var(--text-primary)",
              textDecoration: "none",
              fontWeight: 600,
              transition: "color 0.2s ease"
            }}
            className="interactive"
            onMouseEnter={(e) => {
              const arrow = e.currentTarget.querySelector(".blog-arrow");
              if (arrow) arrow.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              const arrow = e.currentTarget.querySelector(".blog-arrow");
              if (arrow) arrow.style.transform = "translateX(0px)";
            }}
          >
            <BookOpen size={14} style={{ marginRight: "0.25rem" }} />
            <span>Read Article</span>
            <ArrowRight size={14} className="blog-arrow" style={{ transition: "transform 0.2s ease" }} />
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
