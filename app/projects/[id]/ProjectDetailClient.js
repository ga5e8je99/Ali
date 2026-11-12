"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import { useLanguage } from "@/lib/LanguageContext";
import {
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiCalendar,
  FiUser,
  FiCheckCircle,
  FiLayers,
  FiClock,
  FiShare2,
  FiCheck,
  FiTarget,
  FiZap,
  FiCpu,
  FiHome,
  FiCode
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiPython,
  SiRust,
  SiFastapi,
  SiDocker,
  SiGithubactions,
  SiPostgresql,
  SiRedis,
  SiN8N,
} from "react-icons/si";

export default function ProjectDetailClient({ project, prevProject, nextProject }) {
  const [copied, setCopied] = useState(false);
  const { dict, isRTL } = useLanguage();
  const t = dict?.projectDetail || {};
  const localizedProjects = dict?.projectsData || {};

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const getTechIcon = (techName) => {
    const lower = String(techName).toLowerCase();
    if (lower.includes("python")) return SiPython;
    if (lower.includes("fastapi")) return SiFastapi;
    if (lower.includes("rust")) return SiRust;
    if (lower.includes("playwright")) return FiCpu;
    if (lower.includes("docker")) return SiDocker;
    if (lower.includes("github")) return SiGithubactions;
    if (lower.includes("postgres")) return SiPostgresql;
    if (lower.includes("redis")) return SiRedis;
    if (lower.includes("n8n")) return SiN8N;
    if (lower.includes("react")) return SiReact;
    if (lower.includes("next")) return SiNextdotjs;
    if (lower.includes("type")) return SiTypescript;
    if (lower.includes("java")) return SiJavascript;
    if (lower.includes("node")) return SiNodedotjs;
    if (lower.includes("mongo")) return SiMongodb;
    if (lower.includes("tailwind")) return SiTailwindcss;
    if (lower.includes("express")) return SiExpress;
    return FiCode;
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#070914] text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-4">{t.notFoundTitle || "Project Not Found"}</h1>
        <p className="text-gray-400 mb-8">{t.notFoundDesc || "The project you are looking for does not exist or has been moved."}</p>
        <Link
          href="/#portfolio"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center gap-2"
        >
          <FiArrowLeft className={isRTL ? "rotate-180" : ""} /> {t.backToProjects || "Back to Portfolio"}
        </Link>
      </div>
    );
  }

  // Localized attributes
  const localizedData = localizedProjects[project.id] || localizedProjects[project.slug] || {};
  const title = localizedData.title || project.title;
  const tagline = localizedData.tagline || project.tagline;
  const overview = localizedData.overview || localizedData.description || project.overview || project.description;
  const problem = localizedData.problem || project.problem;
  const solution = localizedData.solution || project.solution;
  const role = localizedData.role || project.role;
  const impact = localizedData.impact || project.impact;
  const features = localizedData.features || project.features;

  const prevLocalized = prevProject ? (localizedProjects[prevProject.id] || localizedProjects[prevProject.slug] || {}) : null;
  const prevTitle = prevLocalized?.title || prevProject?.title;

  const nextLocalized = nextProject ? (localizedProjects[nextProject.id] || localizedProjects[nextProject.slug] || {}) : null;
  const nextTitle = nextLocalized?.title || nextProject?.title;

  return (
    <div className="min-h-screen bg-[#070914] text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Exact Site Navbar */}
      <Navbar />

      {/* Main Project Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Top Action Toolbar (Breadcrumb + Back + Share) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-indigo-950/70">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-gray-400" aria-label="Breadcrumb">
            <Link href="/#home" className="hover:text-indigo-400 transition-colors flex items-center gap-1">
              <FiHome /> {t.home || "Home"}
            </Link>
            <span>/</span>
            <Link href="/#portfolio" className="hover:text-indigo-400 transition-colors">
              {t.portfolio || "Portfolio"}
            </Link>
            <span>/</span>
            <span className="text-gray-300 font-semibold truncate max-w-[200px] sm:max-w-xs">{title}</span>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gray-900 border border-indigo-950 text-gray-300 hover:text-white hover:border-indigo-500/50 text-xs font-medium transition-all"
            >
              <FiArrowLeft className={isRTL ? "rotate-180" : ""} />
              <span>{t.backToProjects || "Back to Projects"}</span>
            </Link>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gray-900 border border-indigo-950 text-gray-300 hover:text-white hover:border-indigo-500/50 text-xs font-medium transition-all cursor-pointer"
              title="Copy share link"
            >
              {copied ? <FiCheck className="text-indigo-400" /> : <FiShare2 />}
              <span>{copied ? (t.linkCopied || "Link Copied!") : (t.share || "Share")}</span>
            </button>
          </div>
        </div>

        {/* Hero Header Area */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
              {project.category || "Engineering"}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-xs">
                {t.featuredBadge || "Featured Case Study"}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            {title}
          </h1>

          {tagline && (
            <p className="text-lg sm:text-xl text-gray-300 font-medium leading-relaxed max-w-3xl">
              {tagline}
            </p>
          )}

          {/* Quick CTA Links */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-medium text-sm hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <FiExternalLink />
                <span>{t.liveDemo || "View Project"}</span>
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gray-900/90 border border-indigo-950 text-gray-200 font-medium text-sm hover:text-white hover:border-indigo-500/50 transition-all"
              >
                <FiGithub />
                <span>{t.sourceCode || "GitHub Repository"}</span>
              </a>
            )}
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative w-full h-[320px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden border border-indigo-950/70 mb-12 shadow-2xl bg-gray-950">
          <Image
            src={project.image || "/projectImage/image.webp"}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#070914] via-transparent to-transparent opacity-80"></div>
        </div>

        {/* Project Meta Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-gray-900/50 border border-indigo-950/60 mb-12">
          {project.role && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                <FiUser className="text-indigo-400" />
                <span>{t.myRole || "My Role"}</span>
              </div>
              <p className="text-sm font-semibold text-white">{project.role}</p>
            </div>
          )}
          {project.duration && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                <FiClock className="text-indigo-400" />
                <span>{t.timeline || "Timeline"}</span>
              </div>
              <p className="text-sm font-semibold text-white">{project.duration}</p>
            </div>
          )}
          {project.client && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                <FiTarget className="text-indigo-400" />
                <span>{t.clientType || "Client / Type"}</span>
              </div>
              <p className="text-sm font-semibold text-white">{project.client}</p>
            </div>
          )}
          {project.category && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                <FiLayers className="text-indigo-400" />
                <span>{t.category || "Category"}</span>
              </div>
              <p className="text-sm font-semibold text-white">{project.category}</p>
            </div>
          )}
        </div>

        {/* Deep Dive Case Study Content */}
        <div className="space-y-12">
          {/* 1. Overview */}
          {overview && (
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-6 bg-indigo-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-white">{t.projectOverview || "Project Overview"}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg pl-3.5 rtl:pl-0 rtl:pr-3.5">
                {overview}
              </p>
            </section>
          )}

          {/* 2. Challenge & Solution Grid */}
          {(problem || solution) && (
            <div className="grid md:grid-cols-2 gap-6">
              {problem && (
                <div className="p-6 rounded-2xl bg-gray-900/60 border border-amber-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-lg">
                    <FiZap />
                    <h3>{t.theChallenge || "The Challenge"}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{problem}</p>
                </div>
              )}
              {solution && (
                <div className="p-6 rounded-2xl bg-gray-900/60 border border-indigo-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold text-lg">
                    <FiCheckCircle />
                    <h3>{t.theSolution || "The Solution"}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{solution}</p>
                </div>
              )}
            </div>
          )}

          {/* 3. Key Capabilities / Features */}
          {Array.isArray(features) && features.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-6 bg-indigo-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-white">{t.keyFeatures || "Key Features & Capabilities"}</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-gray-900/50 border border-indigo-950/60 space-y-2 hover:border-indigo-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 font-bold text-white text-base">
                      <FiCheckCircle className="text-indigo-400 shrink-0" />
                      <h4>{feat.title}</h4>
                    </div>
                    {feat.desc && (
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed pl-6 rtl:pl-0 rtl:pr-6">
                        {feat.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 4. Measurable Impact */}
          {impact && (
            <section className="p-6 sm:p-8 rounded-2xl bg-linear-to-r from-indigo-950/50 via-purple-950/30 to-gray-900/50 border border-indigo-500/30 space-y-2">
              <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs font-mono uppercase tracking-wider">
                <FiTarget />
                <span>{t.measurableOutcome || "Measurable Outcome"}</span>
              </div>
              <p className="text-white text-lg sm:text-xl font-bold leading-relaxed">{impact}</p>
            </section>
          )}

          {/* 5. Tech Stack Badges */}
          <section className="space-y-4 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-6 bg-indigo-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-white">{t.techStack || "Tech Stack"}</h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies?.map((tech, idx) => {
                const Icon = getTechIcon(tech);
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900/80 border border-indigo-950/70 text-gray-200 text-sm font-mono hover:border-indigo-400/60 hover:text-indigo-300 transition-colors shadow-xs"
                  >
                    <Icon className="text-base text-indigo-400" />
                    <span>{tech}</span>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Project Next / Prev Navigation */}
        <div className="pt-10 border-t border-indigo-950/70 grid sm:grid-cols-2 gap-4 my-16">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug || prevProject.id}`}
              className="p-5 rounded-xl bg-gray-900/50 hover:bg-gray-800/70 border border-indigo-950 hover:border-indigo-500/40 transition-all group flex flex-col justify-between shadow-md"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-2 group-hover:text-indigo-400 transition-colors">
                <FiArrowLeft className={`${isRTL ? "rotate-180 group-hover:translate-x-1" : "group-hover:-translate-x-1"} transition-transform`} />
                <span>{t.prevProject || "Previous Project"}</span>
              </div>
              <span className="font-semibold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                {prevTitle}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block"></div>
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug || nextProject.id}`}
              className="p-5 rounded-xl bg-gray-900/50 hover:bg-gray-800/70 border border-indigo-950 hover:border-indigo-500/40 transition-all group flex flex-col justify-between text-right sm:ml-auto w-full shadow-md"
            >
              <div className="flex items-center justify-end gap-2 text-xs font-mono text-gray-400 mb-2 group-hover:text-indigo-400 transition-colors">
                <span>{t.nextProject || "Next Project"}</span>
                <FiArrowRight className={`${isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"} transition-transform`} />
              </div>
              <span className="font-semibold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                {nextTitle}
              </span>
            </Link>
          )}
        </div>

        {/* Call to Action Banner */}
        <div className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-gray-900/90 to-gray-950 border border-indigo-500/30 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-radial from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {t.ctaTitle || "Interested in building a project like this?"}
          </h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            {t.ctaDesc || "Let's collaborate to build your custom high-performance APIs or automated workflows with exceptional reliability."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-semibold text-sm hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
            >
              {t.scheduleConsultation || "Schedule a Consultation"}
            </Link>
            <a
              href="https://wa.me/201097390799"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl bg-gray-800/80 hover:bg-gray-700 text-gray-200 border border-indigo-950 font-semibold text-sm transition-all"
            >
              {t.chatWhatsapp || "Chat on WhatsApp"}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
