import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { personalInfo, heroHighlights } from "../data/portfolioData";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8.5rem 0 4.5rem 0",
        position: "relative"
      }}
    >
      <div className="container">
        {/* Main Two-Column Hero Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "4rem",
            alignItems: "center"
          }}
          className="hero-grid"
        >
          {/* Left Column: Headlines & Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Small Badge: Hi, I'm Ansh Kumar */}
            <div style={{ marginBottom: "1.75rem" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--accent-lime)",
                  backgroundColor: "rgba(183, 255, 53, 0.08)",
                  border: "1px solid var(--accent-lime-border)",
                  padding: "0.45rem 1.1rem",
                  borderRadius: "var(--radius-full)",
                  letterSpacing: "0.02em"
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-lime)",
                    boxShadow: "0 0 10px var(--accent-lime)"
                  }}
                />
                {personalInfo.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.04em",
                color: "var(--text-white)",
                marginBottom: "1.75rem"
              }}
            >
              I BUILD AI-POWERED PRODUCTS &{" "}
              <span className="highlight-lime">DIGITAL EXPERIENCES.</span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)",
                lineHeight: 1.65,
                color: "var(--text-muted)",
                maxWidth: "560px",
                marginBottom: "2.5rem"
              }}
            >
              {personalInfo.shortBio}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.25rem",
                alignItems: "center"
              }}
            >
              <button
                onClick={() => scrollTo("projects")}
                className="btn-primary-lime"
                style={{ borderRadius: "var(--radius-full)" }}
              >
                <span>View My Work</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => scrollTo("about")}
                className="btn-outline-white"
                style={{ borderRadius: "var(--radius-full)" }}
              >
                <span>About Me</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Large Personal Portrait with Circular Lime Lighting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative"
            }}
            className="hero-media-wrapper"
          >
            {/* Lime-green circular lighting element behind portrait */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "380px",
                height: "380px",
                background: "radial-gradient(circle, rgba(183, 255, 53, 0.28) 0%, rgba(183, 255, 53, 0.08) 50%, transparent 72%)",
                filter: "blur(45px)",
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 0
              }}
            />

            {/* Portrait Frame */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "360px",
                aspectRatio: "4 / 5",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--accent-lime-border)",
                backgroundColor: "var(--bg-surface)",
                boxShadow: "0 20px 50px -10px rgba(0, 0, 0, 0.85), 0 0 35px -5px rgba(183, 255, 53, 0.2)",
                zIndex: 1
              }}
            >
              {/* Black-and-white image treatment */}
              <img
                src="/ansh-hero.jpg"
                alt="Ansh Kumar - AI Builder"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                  filter: "grayscale(100%) contrast(1.1) brightness(0.95)",
                  transition: "filter 0.4s ease, transform 0.4s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(25%) contrast(1.05)";
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(100%) contrast(1.1) brightness(0.95)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>

            {/* Signature-style name below the portrait */}
            <div
              style={{
                marginTop: "1.25rem",
                textAlign: "center",
                zIndex: 1
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--text-white)",
                  letterSpacing: "-0.02em"
                }}
              >
                Ansh Kumar
              </span>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--accent-lime)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginTop: "0.2rem"
                }}
              >
                AI Builder & Product Developer
              </span>
            </div>
          </motion.div>
        </div>

        {/* Three Compact Verified Highlights Below Hero */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: "5.5rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid var(--border-subtle)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem"
          }}
        >
          {heroHighlights.map((item, idx) => (
            <div
              key={idx}
              className="card-dark"
              style={{
                padding: "1.5rem",
                borderRadius: "var(--radius-md)",
                display: "flex",
                flexDirection: "column",
                gap: "0.35rem"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--accent-lime)"
                  }}
                >
                  {item.title}
                </span>
                <CheckCircle2 size={16} color="var(--accent-lime)" />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.85rem",
                  fontWeight: 800,
                  color: "var(--text-white)",
                  letterSpacing: "-0.03em"
                }}
              >
                {item.value}
              </span>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                {item.subtitle}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          .hero-media-wrapper {
            order: -1;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
