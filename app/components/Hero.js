"use client";

import Image from "next/image";
import Link from "next/link";
import { useSiteData } from "@/lib/useSiteData";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { profile } = useSiteData();
  const { dict, isRTL, language } = useLanguage();
  const fullName = language === "ar" ? dict.hero.name : (profile.name || "Ali Saad");
  const nameParts = fullName.split(" ");
  const firstName = nameParts[0] || fullName;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-12 relative bg-[#0a0e1f] transition-colors duration-500" id="home">
      <div className="max-w-7xl mx-auto w-full relative z-20 lg:mb-80">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-indigo-400 animate-pulse"></div>
                <p className="text-indigo-400 font-mono text-sm tracking-wider">
                  {dict.hero.greeting}
                </p>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span>{firstName}</span>{" "}
                {lastName && (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
                    {lastName}
                  </span>
                )}
              </h1>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mt-4">
                {language === "ar" ? dict.hero.role : (profile.roleTitle || dict.hero.role)}
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              {language === "ar" ? dict.hero.shortBio : (profile.shortBio || dict.hero.shortBio)}
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="#portfolio" className="px-8 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-medium rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/25">
                {dict.hero.viewWork}
              </Link>
              <Link href="#contact" className="px-8 py-3 border-2 border-indigo-500/40 text-gray-300 font-medium rounded-lg hover:border-indigo-400 hover:text-indigo-300 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                {dict.hero.contactMe}
              </Link>
            </div>

            {/* Tech Stack */}
            <div className="pt-8">
              <p className="text-indigo-300/80 text-sm font-mono mb-4 tracking-wider">
                {language === "ar" ? "التقنيات الأساسية التي أعمل بها" : "CORE TECHNOLOGIES"}
              </p>
              <div className="flex flex-wrap gap-3">
                {['Python', 'FastAPI', 'Rust', 'Playwright', 'Docker', 'n8n', 'PostgreSQL', 'Redis'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-gray-900/60 backdrop-blur-sm rounded-full text-gray-200 text-sm border border-indigo-500/30 hover:border-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/40 transition-all duration-300 font-mono shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-600/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-indigo-900/60 shadow-2xl group shadow-indigo-950/50">
                <Image
                  src={profile.avatarImage || '/ali-saad.webp'}
                  alt={`${fullName} - Back-End & Automation Engineer`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  priority
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 border-2 border-indigo-500/40 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-purple-500/40 rounded-full animate-float-delayed"></div>
              </div>

              {/* Status Indicator */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-500/40 flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                <span className="text-indigo-300 text-sm font-mono">{dict.hero.badge}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="static lg:absolute flex justify-end my-20 lg-block lg:-bottom-40 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-indigo-500/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-indigo-400 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
