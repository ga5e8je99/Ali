"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiCode, 
  FiLayers, 
  FiServer, 
  FiZap, 
  FiCheckCircle, 
  FiTrendingUp, 
  FiDatabase, 
  FiMessageSquare, 
  FiCalendar,
  FiCpu,
  FiShield,
} from "react-icons/fi";
import { 
  SiPython, 
  SiRust, 
  SiFastapi, 
  SiN8N, 
  SiDocker, 
  SiGithubactions, 
  SiPostgresql, 
  SiRedis,
  SiTelegram,
} from "react-icons/si";
import Picker from "./Picker";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Services() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const { dict, isRTL } = useLanguage();
  const t = dict?.services || {};

  const servicesData = [
    {
      id: 1,
      defaultTitle: "Back-End & Scalable Microservices",
      icon: <FiServer />,
      color: "from-indigo-600 to-purple-600",
      defaultDescription: "High-throughput, resilient backend services and REST APIs built with Python, FastAPI, Django, Rust, and Node.js for exceptional speed and scale.",
      defaultFeatures: [
        "High-Performance FastAPI & Python Microservices",
        "Fast Rust & Node.js API Endpoints",
        "PostgreSQL, Redis & MongoDB Database Architecture",
        "JWT & OAuth2 Secure Authentication Systems",
        "Rate Limiting, Caching & Concurrency Optimization",
        "Clean Async Architecture & OpenAPI Documentation"
      ],
      technologies: [
        { name: "Python", icon: <SiPython /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Rust", icon: <SiRust /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> }
      ],
      pricing: {
        basic: "$500",
        standard: "$1,200",
        premium: "$2,500"
      }
    },
    {
      id: 2,
      defaultTitle: "Workflow Automation & Web Scraping",
      icon: <FiCpu />,
      color: "from-purple-600 to-pink-600",
      defaultDescription: "Custom headless automation bots, web scrapers, and n8n workflows that eliminate repetitive manual labor and extract business intelligence.",
      defaultFeatures: [
        "Headless Browser Automation with Playwright & Selenium",
        "End-to-End n8n Workflow Pipelines & Webhooks",
        "Bypass Anti-Bot, Captcha & Rate Limit Strategies",
        "Automated Data Extraction & ETL Pipelines",
        "Telegram & Discord Bot Automation Gateways",
        "Scheduled Cron & Serverless Trigger Execution"
      ],
      technologies: [
        { name: "Playwright", icon: <FiCpu /> },
        { name: "n8n", icon: <SiN8N /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "Telegram", icon: <SiTelegram /> }
      ],
      pricing: {
        basic: "$450",
        standard: "$950",
        premium: "$1,900"
      }
    },
    {
      id: 3,
      defaultTitle: "DevOps, Containerization & CI/CD",
      icon: <FiShield />,
      color: "from-blue-600 to-indigo-600",
      defaultDescription: "Streamlined cloud deployments, automated testing pipelines, and Docker containerization ensuring fast, reliable software releases.",
      defaultFeatures: [
        "Docker & Multi-Container Docker Compose Setups",
        "GitHub Actions CI/CD Pipeline Automation",
        "Serverless Deployment on Vercel, Railway & Cloud VPS",
        "Automated Health Checks & System Monitoring",
        "Reverse Proxy & Network Routing Configuration",
        "Environment Variable & Secret Management"
      ],
      technologies: [
        { name: "Docker", icon: <SiDocker /> },
        { name: "GitHub Actions", icon: <SiGithubactions /> },
        { name: "Linux", icon: <FiServer /> },
        { name: "Reverse Proxy", icon: <FiLayers /> }
      ],
      pricing: {
        basic: "$400",
        standard: "$850",
        premium: "$1,600"
      }
    }
  ];

  const additionalServicesData = [
    {
      defaultTitle: "API Performance & Caching",
      icon: <FiZap />,
      defaultDescription: "Boost throughput with Redis in-memory caching, connection pooling, and asynchronous task queues.",
      defaultFeatures: ["Redis Caching", "Celery / Background Tasks", "Sub-10ms Endpoints"]
    },
    {
      defaultTitle: "Headless Bot Anti-Detection",
      icon: <FiShield />,
      defaultDescription: "Stealth fingerprinting, proxy rotation, and session management for resilient scraping bots.",
      defaultFeatures: ["Stealth Playwright", "Proxy Pool Rotation", "Session Persistence"]
    },
    {
      defaultTitle: "Database Optimization",
      icon: <FiDatabase />,
      defaultDescription: "Structured SQL/NoSQL schema modeling, index tuning, and aggregation queries for high loads.",
      defaultFeatures: ["PostgreSQL Tuning", "Complex Aggregations", "Migration Pipelines"]
    },
    {
      defaultTitle: "Cloud & Container Deployments",
      icon: <FiCheckCircle />,
      defaultDescription: "Production Docker image builds, multi-stage optimizations, and GitHub Actions deployments.",
      defaultFeatures: ["Multi-stage Docker", "CI/CD Workflows", "Automated Rollbacks"]
    }
  ];

  const stepsData = [
    {
      step: "01",
      defaultTitle: "Discovery & Architecture",
      defaultDescription: "Analyzing system requirements, data workflows, bottlenecks, and defining the optimal tech stack.",
      icon: <FiMessageSquare />
    },
    {
      step: "02",
      defaultTitle: "Prototype & Core Engine",
      defaultDescription: "Building the core API endpoints, database schemas, or automation scripts with unit tests.",
      icon: <FiLayers />
    },
    {
      step: "03",
      defaultTitle: "Integration & Hardening",
      defaultDescription: "Connecting webhooks, setting up retry policies, error monitoring, and containerizing with Docker.",
      icon: <FiCode />
    },
    {
      step: "04",
      defaultTitle: "Deployment & CI/CD",
      defaultDescription: "Deploying to production, configuring automated GitHub Actions pipelines, and full documentation handoff.",
      icon: <FiCheckCircle />
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-[#100d2b] relative transition-colors duration-500">
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
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            <span className="text-indigo-400 font-mono text-sm tracking-wider">
              {t.sectionBadge || "MY SERVICES"}
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.sectionTitle}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
              {t.sectionTitleHighlight}
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t.sectionSubtitle}
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {servicesData.map((service, index) => {
            const localized = t.items?.[index] || {};
            const title = localized.title || service.defaultTitle;
            const description = localized.description || service.defaultDescription;
            const features = localized.features || service.defaultFeatures;

            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-b from-gray-900/80 via-[#130f35] to-[#0c0924] border border-indigo-950/70 rounded-2xl p-7 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-950/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Service Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3.5 rounded-xl bg-gradient-to-r ${service.color} text-white text-2xl shadow-lg`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6 space-y-2.5">
                    <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                      {t.whatsIncluded || "What's Included"}
                    </h4>
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <FiCheckCircle className="text-indigo-400 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6 pt-4 border-t border-indigo-950/80">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-gray-900/80 text-gray-300 text-xs flex items-center gap-1.5 border border-indigo-950/60 font-mono"
                        >
                          {tech.icon}
                          <span>{tech.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-5 border-t border-indigo-950/80 flex items-center justify-between mt-auto">
                  <div>
                    <div className="text-gray-400 text-xs font-mono">
                      {t.startingAt || "Starting at"}
                    </div>
                    <div className="text-2xl font-bold text-indigo-300" dir="ltr">
                      {service.pricing.basic}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsCalendarOpen(true)}
                    className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white text-xs font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-md shadow-indigo-500/25 cursor-pointer"
                  >
                    {t.bookCall || "Book Call"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              {t.addonsTitle}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {t.addonsTitleHighlight}
              </span>
            </h3>
            <p className="text-gray-300 text-sm">
              {t.addonsSubtitle}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServicesData.map((service, index) => {
              const localized = t.addons?.[index] || {};
              const title = localized.title || service.defaultTitle;
              const description = localized.description || service.defaultDescription;
              const features = localized.features || service.defaultFeatures;

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-gradient-to-b from-gray-900/60 to-indigo-950/20 border border-indigo-950/60 rounded-xl p-5 hover:border-indigo-500/40 transition-all duration-300 shadow-md"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gray-800/60 text-indigo-400 mb-3 text-xl group-hover:bg-indigo-500/10 group-hover:text-indigo-300 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-white font-bold text-base mb-1.5">{title}</h4>
                  <p className="text-gray-400 text-xs mb-3 leading-relaxed">{description}</p>
                  <div className="space-y-1">
                    {features.map((feature, idx) => (
                      <div key={idx} className="text-gray-500 text-[11px] font-mono">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* How I Work */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              {t.howIWorkTitle}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                {t.howIWorkTitleHighlight}
              </span>
            </h3>
            <p className="text-gray-300 text-sm">
              {t.howIWorkSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {stepsData.map((item, index) => {
              const localized = t.steps?.[index] || {};
              const title = localized.title || item.defaultTitle;
              const description = localized.description || item.defaultDescription;

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-900/50 border border-indigo-950/60 rounded-xl p-6 text-center hover:border-indigo-500/40 transition-all shadow-md"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mb-3 text-lg">
                    {item.icon}
                  </div>
                  <div className="text-indigo-400 font-mono text-xs font-bold mb-1">
                    {t.stepPrefix || "STEP"} {item.step}
                  </div>
                  <h4 className="text-white font-bold text-base mb-1.5">{title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="relative overflow-hidden rounded-2xl border border-indigo-900/50 bg-gradient-to-r from-gray-900/70 via-indigo-950/40 to-gray-900/70 p-8 sm:p-12 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {t.ctaTitle}
              </h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {t.ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  type="button"
                  onClick={() => setIsCalendarOpen(true)}
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-medium rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FiCalendar />
                  <span>{t.scheduleConsultation || "Schedule Free Consultation"}</span>
                </button>
                <Link
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-3 border border-indigo-500/40 text-gray-200 font-medium rounded-xl hover:border-indigo-400 hover:text-indigo-300 transition-all duration-300 text-center"
                >
                  {t.sendMessage || "Send a Message"}
                </Link>
              </div>
              <p className="text-[11px] text-gray-400 mt-4 font-mono">
                {t.noCommitment}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Calendar Booking Modal */}
      <Picker openProp={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </section>
  );
}
