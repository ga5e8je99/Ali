"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiTool,
  FiLayers,
  FiCheckCircle,
  FiArrowUpRight,
  FiCpu,
} from "react-icons/fi";
import {
  SiPython,
  SiRust,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiN8N,
  SiDocker,
  SiGithubactions,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiSqlite,
  SiGit,
  SiGithub,
  SiPostman,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiLinux,
  SiSelenium,
  SiVercel,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function SkillsSection() {
  const { dict, language } = useLanguage();

  const backendSkills = [
    {
      name: "Python 3",
      icon: <SiPython className="text-yellow-400" />,
      tier: "Primary Core",
      experience: "4+ years",
      usedIn: "FastAPI, Automation Pipelines, Scrapers",
      highlight: "AsyncIO, Typing, Pydantic, Concurrency, Microservices architecture",
      badgeColor: "border-yellow-500/40 text-yellow-300 bg-yellow-500/10",
    },
    {
      name: "FastAPI",
      icon: <SiFastapi className="text-teal-400" />,
      tier: "Core Framework",
      experience: "3+ years",
      usedIn: "AutoClip, Veo Pipeline, Microservices",
      highlight: "High-throughput async endpoints, Dependency Injection, OpenAPI, JWT",
      badgeColor: "border-teal-500/40 text-teal-300 bg-teal-500/10",
    },
    {
      name: "Rust",
      icon: <SiRust className="text-orange-400" />,
      tier: "Systems & Speed",
      experience: "2 years",
      usedIn: "High-Performance APIs & Parsers",
      highlight: "Memory safety, Zero-cost abstractions, Tokio async runtime, Actix-web",
      badgeColor: "border-orange-500/40 text-orange-300 bg-orange-500/10",
    },
    {
      name: "Django & REST",
      icon: <SiDjango className="text-emerald-400" />,
      tier: "Enterprise APIs",
      experience: "3+ years",
      usedIn: "Complex data portals, ORM services",
      highlight: "Django REST Framework, Serializers, Admin panels, Auth pipelines",
      badgeColor: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10",
    },
    {
      name: "Node.js & Express",
      icon: <SiNodedotjs className="text-green-400" />,
      tier: "Server Runtime",
      experience: "3 years",
      usedIn: "TeleBridge Gateway, Proxy services",
      highlight: "Event loop, Non-blocking I/O, Webhook listeners, Stream piping",
      badgeColor: "border-green-500/40 text-green-300 bg-green-500/10",
    },
    {
      name: "Flask",
      icon: <SiFlask className="text-gray-200" />,
      tier: "Lightweight APIs",
      experience: "3 years",
      usedIn: "Micro-scrapers, Utility APIs",
      highlight: "Modular Blueprints, Fast prototyping, Minimalist server handlers",
      badgeColor: "border-gray-500/40 text-gray-200 bg-gray-500/10",
    },
  ];

  const automationSkills = [
    {
      name: "Playwright",
      icon: <FiCpu className="text-green-400" />,
      tier: "Production Lead",
      experience: "3+ years",
      usedIn: "EG VidsFlow, Veo Automator, GeminiScraper",
      highlight: "Headless automation, Anti-bot bypass, Parallel contexts, DOM evaluation",
      badgeColor: "border-green-500/40 text-green-300 bg-green-500/10",
    },
    {
      name: "n8n Workflow Automation",
      icon: <SiN8N className="text-pink-400" />,
      tier: "Orchestration",
      experience: "3 years",
      usedIn: "TeleBridge, AutoClip, Cloud Webhooks",
      highlight: "Custom nodes, Webhook triggers, Distributed queues, Multi-service bridges",
      badgeColor: "border-pink-500/40 text-pink-300 bg-pink-500/10",
    },
    {
      name: "Selenium & BeautifulSoup4",
      icon: <SiSelenium className="text-cyan-400" />,
      tier: "Web Scraping",
      experience: "4 years",
      usedIn: "Data extraction bots, Crawlers",
      highlight: "DOM parsing, Proxy rotation, Dynamic content extraction, Stealth headers",
      badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
    },
    {
      name: "Puppeteer & Headless Chrome",
      icon: <FiCode className="text-blue-400" />,
      tier: "Browser Automation",
      experience: "3 years",
      usedIn: "Automated screenshots, PDF reports",
      highlight: "CDP protocol, Screen capture, Session cookie persistence, Fingerprinting",
      badgeColor: "border-blue-500/40 text-blue-300 bg-blue-500/10",
    },
    {
      name: "Reverse Proxies & Gateways",
      icon: <FiServer className="text-indigo-400" />,
      tier: "Network Layer",
      experience: "3 years",
      usedIn: "TeleBridge Gateway, API dispatchers",
      highlight: "Sub-millisecond routing, CORS bypass, IP rotation, Header forwarding",
      badgeColor: "border-indigo-500/40 text-indigo-300 bg-indigo-500/10",
    },
    {
      name: "AI & Multimodal Scraping",
      icon: <FiCheckCircle className="text-purple-400" />,
      tier: "Intelligent Workflows",
      experience: "2 years",
      usedIn: "GeminiScraper, AutoClip, Veo Engine",
      highlight: "Structured JSON extraction from raw DOM, Vision prompting, Audio-to-text",
      badgeColor: "border-purple-500/40 text-purple-300 bg-purple-500/10",
    },
  ];

  const toolsTechnologies = [
    {
      category: language === "ar" ? "الحاويات والنشر السحابي" : "DevOps & Cloud",
      items: [
        { name: "Docker", icon: <SiDocker className="text-blue-400 text-2xl" />, role: "Containerization" },
        { name: "GitHub Actions", icon: <SiGithubactions className="text-sky-400 text-2xl" />, role: "CI/CD Workflows" },
        { name: "Linux / Bash", icon: <SiLinux className="text-yellow-400 text-2xl" />, role: "Server OS & Scripting" },
        { name: "Vercel / Cloud VPS", icon: <SiVercel className="text-white text-2xl" />, role: "Hosting & Serverless" },
      ],
    },
    {
      category: language === "ar" ? "قواعد البيانات والتخزين المؤقت" : "Databases & Caching",
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 text-2xl" />, role: "Relational DB" },
        { name: "Redis", icon: <SiRedis className="text-red-500 text-2xl" />, role: "Cache & Task Queues" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl" />, role: "Document Store" },
        { name: "SQLite", icon: <SiSqlite className="text-sky-400 text-2xl" />, role: "Embedded Storage" },
      ],
    },
    {
      category: language === "ar" ? "أدوات التطوير واختبار الـ APIs" : "Development & Testing",
      items: [
        { name: "Git & GitHub", icon: <SiGithub className="text-gray-200 text-2xl" />, role: "Source Control" },
        { name: "Postman", icon: <SiPostman className="text-orange-500 text-2xl" />, role: "API Testing & Docs" },
        { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-400 text-2xl" />, role: "Primary IDE" },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-2xl" />, role: "Type-Safe Modules" },
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-[#091426] relative transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
            <span className="text-sky-400 font-mono text-sm tracking-wider">
              {dict.skills.sectionBadge}
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {dict.skills.sectionTitle}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400">
              {dict.skills.sectionTitleHighlight}
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {dict.skills.sectionSubtitle}
          </p>
        </motion.div>

        {/* Group 1: Back-End Frameworks & Microservices */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600">
              <FiServer className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                {language === "ar" ? "الأنظمة الخلفية والمايكروسيرفسز" : "Back-End & Microservices Architecture"}
              </h3>
              <p className="text-gray-400 text-sm">
                {language === "ar" ? "واجهات برمجية عالية الأداء مبنية بـ FastAPI و Rust و Python" : "High-performance APIs built with FastAPI, Rust, and Python"}
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group bg-gradient-to-br from-gray-900/80 to-[#070f1e] border border-blue-950/70 rounded-2xl p-5 hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl p-2 rounded-xl bg-gray-800/80 border border-gray-700/60">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base group-hover:text-sky-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-gray-400 text-xs font-mono">
                          {skill.experience}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${skill.badgeColor}`}
                    >
                      {skill.tier}
                    </span>
                  </div>

                  <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                    {skill.highlight}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-gray-500 font-mono">Applied in:</span>
                  <Link
                    href="#portfolio"
                    className="text-sky-400 hover:text-sky-300 flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>{skill.usedIn}</span>
                    <FiArrowUpRight className="text-xs" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Group 2: Automation & Web Scraping */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600">
              <FiCpu className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                {language === "ar" ? "أتمتة المتصفحات واستخراج البيانات" : "Browser & Workflow Automation"}
              </h3>
              <p className="text-gray-400 text-sm">
                {language === "ar" ? "أتمتة مستقلة باستخدام Playwright و n8n وتخطي موانع الحظر" : "Autonomous bots using Playwright, n8n, and anti-bot bypass"}
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group bg-gradient-to-br from-gray-900/80 to-[#070f1e] border border-cyan-950/70 rounded-2xl p-5 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl p-2 rounded-xl bg-gray-800/80 border border-gray-700/60">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-gray-400 text-xs font-mono">
                          {skill.experience}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${skill.badgeColor}`}
                    >
                      {skill.tier}
                    </span>
                  </div>

                  <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                    {skill.highlight}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-gray-500 font-mono">Applied in:</span>
                  <Link
                    href="#portfolio"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>{skill.usedIn}</span>
                    <FiArrowUpRight className="text-xs" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Group 3: Tools & Cloud Infrastructure */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600">
              <FiTool className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                {language === "ar" ? "الـ DevOps، قواعد البيانات والبنية السحابية" : "DevOps, Databases & Infrastructure"}
              </h3>
              <p className="text-gray-400 text-sm">
                {language === "ar" ? "بيئات الحاويات، خطوط الـ CI/CD، وقواعد البيانات عالية التوافر" : "Containerized setups, CI/CD pipelines, and high-availability data stores"}
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {toolsTechnologies.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={fadeInUp}
                className="bg-gradient-to-b from-gray-900/70 to-gray-950/90 border border-blue-950/70 rounded-2xl p-6 shadow-xl"
              >
                <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <FiLayers className="text-sky-400" />
                  {category.category}
                </h4>

                <div className="space-y-3">
                  {category.items.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-900/60 border border-gray-800/80 hover:border-sky-500/40 transition-all shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        {tool.icon}
                        <span className="text-white text-sm font-medium">
                          {tool.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-gray-400">
                        {tool.role}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
