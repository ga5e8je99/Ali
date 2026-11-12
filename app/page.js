"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsSection from "./components/Skills";
import Portfolio from "./components/Portfolio";
import ExperienceEducation from "./components/ExperienceEducation";
import Services from "./components/Services";
import ContactSection from "./components/Contact";
import WelcomeAnimation from "./components/WelcomeAnimation";
import Wave from "./components/Wave";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-transparent min-h-screen text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <AnimatePresence mode="wait">
        {loading && (
          <WelcomeAnimation
            key="welcome-intro"
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      <main className="relative z-10">
        <Navbar />

        {/* 1. Hero Section (#0a0e1f - Deep Obsidian Midnight) */}
        <Hero />

        {/* Wave: Hero (#0a0e1f) -> About (#0e0c24) */}
        <Wave
          fill="#0e0c24"
          stroke="rgba(129, 140, 248, 0.75)"
          className="bg-[#0a0e1f]"
        />

        {/* 2. About Section (#0e0c24 - Twilight Royal Purple) */}
        <About />

        {/* Wave: About (#0e0c24) -> Skills (#091426) */}
        <Wave
          fill="#091426"
          stroke="rgba(56, 189, 248, 0.75)"
          flip
          className="bg-[#0e0c24]"
        />

        {/* 3. Skills Section (#091426 - Cyber Oceanic Slate) */}
        <SkillsSection />

        {/* Wave: Skills (#091426) -> Experience (#150f28) */}
        <Wave
          fill="#150f28"
          stroke="rgba(168, 85, 247, 0.75)"
          className="bg-[#091426]"
        />

        {/* 4. Experience & Education Section (#150f28 - Obsidian Amethyst) */}
        <ExperienceEducation />

        {/* Wave: Experience (#150f28) -> Portfolio (#071322) */}
        <Wave
          fill="#071322"
          stroke="rgba(14, 165, 233, 0.75)"
          flip
          className="bg-[#150f28]"
        />

        {/* 5. Portfolio Section (#071322 - Deep Midnight Sapphire) */}
        <Portfolio />

        {/* Wave: Portfolio (#071322) -> Services (#100d2b) */}
        <Wave
          fill="#100d2b"
          stroke="rgba(99, 102, 241, 0.75)"
          className="bg-[#071322]"
        />

        {/* 6. Services Section (#100d2b - Deep Cosmic Indigo) */}
        <Services />

        {/* Wave: Services (#100d2b) -> Contact (#070914) */}
        <Wave
          fill="#070914"
          stroke="rgba(192, 132, 252, 0.75)"
          flip
          className="bg-[#100d2b]"
        />

        {/* 7. Contact Section (#070914 - Space Obsidian) */}
        <ContactSection />
      </main>
    </div>
  );
}
