"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiCode,
  FiGlobe,
  FiStar,
  FiTool,
  FiCheckCircle,
  FiZap,
  FiShield,
  FiMessageSquare,
} from "react-icons/fi";
import {
  SiPython,
  SiRust,
  SiFastapi,
  SiDocker,
  SiGithubactions,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiLinux,
} from "react-icons/si";
import Link from "next/link"; 
import { BiLogoVisualStudio } from "react-icons/bi";
import { useSiteData } from "@/lib/useSiteData";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutMe() {
  const { profile } = useSiteData();
  const { dict, language } = useLanguage();

  const engineeringPillars = language === "ar" ? [
    {
      title: "أنظمة خلفية عالية الأداء وقابلة للتوسع",
      description: "بناء خدمات مايكروسيرفسز وواجهات REST APIs فائقة السرعة باستخدام Python و FastAPI و Rust مع كفاءة استهلاك الموارد.",
      icon: <FiCode className="text-purple-400" />,
      tag: "الأنظمة الخلفية"
    },
    {
      title: "أتمتة المتصفحات واستخراج البيانات الذكي",
      description: "برمجة وكلاء أتمتة مستقلين بـ Playwright و Selenium لمحاكاة المستخدم وتخطي موانع البوتات وتدفق البيانات لـ n8n.",
      icon: <FiZap className="text-indigo-400" />,
      tag: "الأتمتة"
    },
    {
      title: "الحاويات، الـ DevOps وخطوط CI/CD المستقرة",
      description: "تغليف الخدمات بـ Docker وأتمتة النشر عبر GitHub Actions لضمان إطلاق برمجيات بدون توقف مع استقرار 99.9%.",
      icon: <FiShield className="text-cyan-400" />,
      tag: "DevOps"
    }
  ] : [
    {
      title: "High-Performance & Scalable APIs",
      description: "Architecting high-throughput microservices and resilient REST APIs with Python, FastAPI, and Rust with minimal latency.",
      icon: <FiCode className="text-purple-400" />,
      tag: "Back-End"
    },
    {
      title: "Headless Browser & Workflow Automation",
      description: "Building autonomous browser bots with Playwright and n8n that bypass anti-bot challenges and streamline complex tasks.",
      icon: <FiZap className="text-indigo-400" />,
      tag: "Automation"
    },
    {
      title: "Containerization & Zero-Downtime CI/CD",
      description: "Containerizing services with Docker and automating deployments via GitHub Actions for 99.9% uptime and reliability.",
      icon: <FiShield className="text-cyan-400" />,
      tag: "DevOps"
    }
  ];

  const testimonials = [
    {
      quote:
        "Ali designed our automated video generation pipeline from scratch. The Playwright integration and n8n webhooks run 24/7 without a single hiccup!",
      author: "Kareem Hassan",
      role: "CTO",
      company: "MediaFlow Automations",
      rating: 5,
    },
    {
      quote:
        "Superb backend engineering skills. Ali migrated our legacy endpoints to FastAPI and cut our API latency by 75% while containerizing everything with Docker.",
      author: "Omar Soliman",
      role: "Lead Systems Architect",
      company: "NexGen Cloud",
      rating: 5,
    },
  ];

  const tools = [
    { name: "Python", icon: <SiPython className="text-yellow-400" />, category: "Core Language" },
    { name: "FastAPI", icon: <SiFastapi className="text-teal-400" />, category: "Microservices" },
    { name: "Rust", icon: <SiRust className="text-orange-400" />, category: "Systems" },
    { name: "Docker", icon: <SiDocker className="text-blue-400" />, category: "Containerization" },
    { name: "GitHub Actions", icon: <SiGithubactions className="text-sky-400" />, category: "CI/CD" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" />, category: "Database" },
    { name: "Redis", icon: <SiRedis className="text-red-400" />, category: "Caching & Queues" },
    { name: "Postman", icon: <SiPostman className="text-orange-400" />, category: "API Testing" },
    { name: "Git & GitHub", icon: <SiGithub className="text-purple-300" />, category: "Version Control" },
    { name: "Linux", icon: <SiLinux className="text-yellow-300" />, category: "Environment" },
    { name: "Vercel", icon: <SiVercel className="text-white" />, category: "Cloud Deployment" },
    { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-400" />, category: "Development" },
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
      id="about"
      className="py-20 bg-[#0e0c24] relative transition-colors duration-500"
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
            <div className="w-8 h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent"></div>
            <span className="text-purple-400 font-mono text-sm tracking-wider">
              {dict.about.sectionBadge}
            </span>
            <div className="w-8 h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {dict.about.sectionTitle}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-violet-300 to-indigo-400">
              {dict.about.sectionTitleHighlight}
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {dict.about.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image & Bio */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Profile Image */}
            <motion.div variants={fadeInUp} className="relative group">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden border-4 border-indigo-950/70 shadow-2xl shadow-purple-950/40">
                <Image
                  src={profile.profileImage || "/ali-saad.webp"}
                  alt={`${profile.name || "Ali Saad"} - Back-End & Automation Engineer`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  loading="lazy"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-purple-500/40 rounded-full animate-pulse-slow"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-indigo-500/40 rounded-full animate-pulse-slow"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30 flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                <span className="text-purple-300 text-sm font-mono">
                  {dict.hero.badge}
                </span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center gap-3">
                <FiStar className="text-purple-400 text-xl" />
                <h3 className="text-2xl font-bold text-white">
                  {language === "ar" ? "مسيرتي وشغفي الهندسي" : "My Journey & Philosophy"}
                </h3>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>{dict.about.bio1}</p>
                <p>{dict.about.bio2}</p>
                <p>{dict.about.bio3}</p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-purple-400" />
                  <span className="text-gray-200">{profile.yearsExperience || "4+"} {dict.about.yearsExp}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-purple-400" />
                  <span className="text-gray-200">{profile.projectsCompleted || "25+"} {dict.about.projectsCompleted}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-indigo-400" />
                  <span className="text-gray-200">{profile.clientsSatisfied || "100%"} {dict.about.satisfactionRate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-indigo-400" />
                  <span className="text-gray-200">{dict.about.statusVal}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills & Tools */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Core Engineering Pillars */}
            <motion.div
              variants={fadeInUp}
              className="bg-linear-to-b from-gray-900/70 to-indigo-950/30 border border-indigo-900/40 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600">
                  <FiCode className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {language === "ar" ? "ركائز العمل الهندسي" : "Engineering Pillars"}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {language === "ar" ? "كيف أبني حلولاً قابلة للتوسع" : "How I architect & deliver value"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {engineeringPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-gray-900/60 border border-indigo-950/60 hover:border-purple-500/40 transition-all shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">{pillar.icon}</span>
                        <h4 className="text-white font-semibold text-sm">
                          {pillar.title}
                        </h4>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {pillar.tag}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Client Testimonials */}
            <motion.div
              variants={fadeInUp}
              className="bg-linear-to-b from-gray-900/70 to-indigo-950/30 border border-indigo-900/40 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600">
                  <FiMessageSquare className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {language === "ar" ? "توصيات وملاحظات العملاء" : "Client Recommendations"}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {language === "ar" ? "آراء من تعاونت معهم" : "What collaborators say"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {testimonials.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-gray-900/60 border border-indigo-950/60 space-y-2.5 shadow-xs"
                  >
                    <div className="flex items-center gap-1 text-amber-400 text-xs">
                      {[...Array(item.rating)].map((_, rIdx) => (
                        <FiStar key={rIdx} className="fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-xs italic leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div className="flex items-center justify-between text-xs pt-1 border-t border-gray-800/50">
                      <span className="font-semibold text-white">
                        {item.author}
                      </span>
                      <span className="text-gray-400 font-mono text-[11px]">
                        {item.role} • {item.company}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools Section */}
            <motion.div
              variants={fadeInUp}
              className="bg-linear-to-b from-gray-900/60 to-transparent border border-indigo-900/40 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-linear-to-r from-purple-600 via-indigo-600 to-cyan-600">
                  <FiTool className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {language === "ar" ? "الأدوات والتقنيات اليومية" : "Tools & Technologies"}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {language === "ar" ? "بيئة العمل الأساسية" : "My daily drivers"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="group bg-gray-900/60 border border-indigo-950/70 rounded-xl p-4 hover:border-purple-500/50 hover:bg-indigo-950/30 transition-all duration-300 shadow-xs"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="text-3xl text-gray-400 group-hover:text-white transition-colors">
                        {tool.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm">
                          {tool.name}
                        </h4>
                        <p className="text-gray-400 text-xs mt-1">
                          {tool.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="flex items-center gap-3 text-gray-400">
                  <FiGlobe className="text-purple-400" />
                  <p className="text-sm">
                    {language === "ar"
                      ? "أستكشف باستمرار أحدث حلول الأتمتة وأطر العمل السحابية لبناء أنظمة لا تتوقف."
                      : "Always exploring emerging automation frameworks, Rust APIs, and cloud tools to build resilient, self-healing systems."}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-linear-to-r from-gray-900/70 via-indigo-950/40 to-gray-900/50 border border-purple-500/30 rounded-2xl p-8 shadow-xl">
            <div className="text-left rtl:text-right">
              <h3 className="text-2xl font-bold text-white mb-2">
                {dict.about.connectHeading}
              </h3>
              <p className="text-gray-300">
                {dict.about.connectText}
              </p>
            </div>
            <Link href="#contact" className="px-8 py-3 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/25 shrink-0">
              {dict.about.hireMe}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
