import { useState } from "react";

export default function SpotlightCard({ children, className = "", style = {}, onClick }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Relative coordinates
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCoords({ x, y });
    setOpacity(1);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      className={`glass-card spotlight-card ${className}`}
      style={{
        ...style,
        position: "relative",
        cursor: onClick ? "pointer" : "default"
      }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Radial Glow */}
      <div
        className="spotlight-glow"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          zIndex: 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`,
          opacity: opacity,
          transition: "opacity 0.4s ease"
        }}
      />

      {/* Internal Content (Must sit above glow) */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
