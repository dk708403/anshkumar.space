import React from "react";

export default function Marquee({ items }) {
  // Double the items array to create a seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="tech-badge">
            <span className="badge-dot" style={{ backgroundColor: item.color || "#3B82F6" }} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
