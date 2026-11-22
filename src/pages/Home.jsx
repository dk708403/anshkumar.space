import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Journey from "../components/Journey";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      {/* Subtle Green Ambient Lights */}
      <div className="ambient-glow-top" />
      <div className="ambient-glow-mid" />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Projects Showcase ("Things I've Built") */}
      <Projects />

      {/* 3. About Section ("More Than Just Code") */}
      <About />

      {/* 4. Skills & Expertise */}
      <Skills />

      {/* 5. Journey Timeline */}
      <Journey />

      {/* 6. Contact CTA & Form ("HAVE AN IDEA? LET'S BUILD IT.") */}
      <Contact />
    </div>
  );
}
