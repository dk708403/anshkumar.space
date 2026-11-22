import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep loader active for a brief moment for transition effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999,
          }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          {/* Main Logo Container */}
          <motion.div
            style={{
              position: "relative",
              width: 90,
              height: 90,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pulsing Sky Blue Outer Ring */}
            <motion.div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: "2px solid rgba(59, 130, 246, 0.15)",
              }}
              animate={{
                scale: [1, 1.15, 1],
                borderColor: ["rgba(59, 130, 246, 0.15)", "rgba(59, 130, 246, 0.4)", "rgba(59, 130, 246, 0.15)"]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            
            {/* Spinning Accent Dot Border */}
            <motion.div
              style={{
                position: "absolute",
                width: "80%",
                height: "80%",
                borderRadius: "50%",
                border: "2px dashed #3B82F6",
                opacity: 0.7
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            />

            {/* AK Text Initials */}
            <div
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "2rem",
                fontWeight: 900,
                color: "#111827",
                letterSpacing: "-0.05em",
                zIndex: 2,
                userSelect: "none"
              }}
            >
              A<span style={{ color: "#3B82F6" }}>K</span>
            </div>
          </motion.div>
          
          {/* Subtle builder badge */}
          <motion.div
            style={{
              marginTop: "1.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "#6B7280",
              letterSpacing: "0.2em",
              textTransform: "uppercase"
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Ansh Kumar
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
