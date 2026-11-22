import { motion } from "framer-motion";
import { Compass, Lightbulb, GraduationCap, Code2, Layers, Cpu, ToyBrick, Stars } from "lucide-react";

export default function TimelineTree() {
  const steps = [
    {
      title: "Roots",
      desc: "Delhi NCR, India. Ground zero where interest in computer science and problem solving first sparked.",
      icon: Compass,
      align: "left"
    },
    {
      title: "Curiosity",
      desc: "Began exploring basic scripting. Tinkered with Python, automating daily tasks and folder structures.",
      icon: Lightbulb,
      align: "right"
    },
    {
      title: "Learning Development",
      desc: "Delved deep into modern JavaScript, Git, databases, and general web infrastructure.",
      icon: GraduationCap,
      align: "left"
    },
    {
      title: "Web Development",
      desc: "Assembled fully dynamic web apps, mastering component design, DOM rendering, and API requests.",
      icon: Code2,
      align: "right"
    },
    {
      title: "Landing Pages",
      desc: "Created highly polished, micro-designed static landing pages inspired by Apple, Stripe, and Vercel.",
      icon: Layers,
      align: "left"
    },
    {
      title: "AI Systems",
      desc: "Integrated LLMs, developed custom OpenAI endpoints, and trained conversational speech bots.",
      icon: Cpu,
      align: "right"
    },
    {
      title: "Automation",
      desc: "Built background networks linking webhooks, Supabase databases, and n8n workflows.",
      icon: ToyBrick,
      align: "left"
    },
    {
      title: "Future Products",
      desc: "Expanding on self-healing automation systems and scaling bespoke software products.",
      icon: Stars,
      align: "right"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  };

  const itemVariants = {
    hidden: (align) => ({
      opacity: 0,
      x: align === "left" ? -40 : 40,
      y: 20
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1,
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  return (
    <div className="timeline-tree-container">
      {/* Animated Center Vertical Line */}
      <motion.div 
        className="timeline-line"
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{ transformOrigin: "top" }}
      />

      <motion.div 
        className="timeline-nodes"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {steps.map((step, idx) => {
          const IconComponent = step.icon;
          
          return (
            <div key={idx} className="timeline-item">
              {/* Left Column */}
              {step.align === "left" ? (
                <motion.div 
                  className="timeline-content-left"
                  custom={step.align}
                  variants={itemVariants}
                >
                  <h4 className="timeline-title">{step.title}</h4>
                  <p className="timeline-desc">{step.desc}</p>
                </motion.div>
              ) : (
                <div /> // Empty spacer
              )}

              {/* Node Center Badge */}
              <div className="timeline-node-wrapper">
                <motion.div 
                  className="timeline-node"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    border: "2px solid #3B82F6",
                    boxShadow: "0 0 12px rgba(59, 130, 246, 0.2)",
                    zIndex: 5,
                    cursor: "pointer"
                  }}
                  whileHover={{ scale: 1.25, backgroundColor: "#DBEAFE", borderColor: "#2563EB", boxShadow: "0 0 16px rgba(59, 130, 246, 0.6)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <IconComponent size={16} color="#3B82F6" />
                </motion.div>
              </div>

              {/* Right Column */}
              {step.align === "right" ? (
                <motion.div 
                  className="timeline-content-right"
                  custom={step.align}
                  variants={itemVariants}
                >
                  <h4 className="timeline-title">{step.title}</h4>
                  <p className="timeline-desc">{step.desc}</p>
                </motion.div>
              ) : (
                <div /> // Empty spacer
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
