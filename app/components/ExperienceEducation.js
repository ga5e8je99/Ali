"use client";

import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiAward,
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiExternalLink,
  FiUsers,
  FiStar,
  FiTarget,
  FiCpu,
} from "react-icons/fi";
import { useLanguage } from "@/lib/LanguageContext";

export default function ExperienceEducation() {
  const { dict, language } = useLanguage();

  const experiences = language === "ar" ? [
    {
      type: "company",
      title: "مهندس نظم وأتمتة رئيسي (Lead Automation & Systems)",
      company: "EgAutonomous",
      period: "2022 - حتى الآن",
      location: "مصر / عن بُعد",
      description: "قيادة وتطوير خطوط الأتمتة السحابية المستقلة، بناء مشغلات المتصفحات بدون واجهة لإنشاء الفيديوهات ومعالجة الوسائط الضخمة، والربط بالـ Webhooks.",
      skills: ["Python", "FastAPI", "Playwright", "Docker", "n8n", "PostgreSQL", "GitHub Actions"],
      icon: <FiCpu />,
      color: "from-violet-500 to-indigo-600",
      highlights: [
        "بناء منظومات توليد ورندرة الفيديوهات آلياً بإنتاجية تفوق 50 مقطعاً يومياً",
        "تصميم بروكسيات وبوابات APIs سريعة بزمن تأخير أقل من 5ms",
        "تغليف المايكروسيرفسز بـ Docker وأتمتة النشر الكامل عبر CI/CD"
      ]
    },
    {
      type: "freelancer",
      title: "مطور أنظمة خلفية ومهندس أتمتة حر (Freelance)",
      company: "عمل حر / مستقل",
      period: "2020 - حتى الآن",
      location: "عن بُعد",
      description: "تنفيذ حلول برمجية وواجهات APIs وأنظمة سكرابينج متقدمة للعملاء حول العالم مع التركيز على السرعة، الاستقرار، وتجاوز موانع البوتات.",
      skills: ["Python", "FastAPI", "Rust", "Selenium", "Redis", "Telegram API", "Linux"],
      icon: <FiUsers />,
      color: "from-indigo-500 to-cyan-500",
      highlights: [
        "إنجاز أكثر من 25 مشروعاً ناجحاً بنسبة رضا 100%",
        "تطوير أدوات سكرابينج مستقرة تتجاوز قيود الـ Rate Limits والحظر",
        "بناء خدمات واستدعاءات فورية لبوتات تيليجرام وديسكورد"
      ]
    }
  ] : [
    {
      type: "company",
      title: "Lead Automation & Systems Engineer",
      company: "EgAutonomous",
      period: "2022 - Present",
      location: "Egypt / Remote",
      description: "Leading the development of autonomous cloud video generation pipelines, headless browser agents, media rendering engines, and webhook integrations.",
      skills: ["Python", "FastAPI", "Playwright", "Docker", "n8n", "PostgreSQL", "GitHub Actions"],
      icon: <FiCpu />,
      color: "from-violet-500 to-indigo-600",
      highlights: [
        "Engineered autonomous cloud video pipelines producing 50+ reels daily",
        "Designed resilient API gateway proxies with sub-5ms routing overhead",
        "Containerized microservices with Docker and automated testing and releases"
      ]
    },
    {
      type: "freelancer",
      title: "Freelance Back-End & Automation Engineer",
      company: "Self-Employed",
      period: "2020 - Present",
      location: "Remote",
      description: "Delivering bespoke API microservices, intelligent web scrapers, and headless browser bots for international clients with zero-downtime architectures.",
      skills: ["Python", "FastAPI", "Rust", "Selenium", "Redis", "Telegram API", "Linux"],
      icon: <FiUsers />,
      color: "from-indigo-500 to-cyan-500",
      highlights: [
        "Delivered 25+ successful client projects with 100% satisfaction rating",
        "Built resilient scrapers capable of overcoming strict anti-bot systems",
        "Engineered high-throughput Telegram and Discord bot backends"
      ]
    }
  ];

  const education = language === "ar" ? [
    {
      degree: "بكالوريوس الحاسبات والمعلومات",
      institution: "جامعة قناة السويس",
      period: "2020 - 2025",
      location: "مصر",
      description: "تخصص في علوم الحاسب، هندسة البرمجيات، شبكات الحاسب، ونظم قواعد البيانات الموزعة.",
      courses: ["هندسة البرمجيات", "الخوارزميات وهياكل البيانات", "أنظمة التشغيل والشبكات", "قواعد البيانات الموزعة"],
      icon: <FiBookOpen />,
      color: "from-purple-500 to-pink-500",
      evaluation: "جيد جداً"
    }
  ] : [
    {
      degree: "Bachelor of Computers & Informatics",
      institution: "Suez Canal University",
      period: "2020 - 2025",
      location: "Egypt",
      description: "Specialized in Computer Science, Software Engineering, Distributed Systems, and Advanced Algorithms.",
      courses: ["Software Engineering", "Algorithms & Data Structures", "Operating Systems", "Distributed Databases"],
      icon: <FiBookOpen />,
      color: "from-purple-500 to-pink-500",
      evaluation: "Very Good"
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
    <section id="experience" className="py-20 bg-[#150f28] relative transition-colors duration-500">
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
            <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-violet-500 to-transparent"></div>
            <span className="text-violet-400 font-mono text-sm tracking-wider">{dict.experience.sectionBadge}</span>
            <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-violet-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {dict.experience.sectionTitle} <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-fuchsia-400 to-purple-400">{dict.experience.sectionTitleHighlight}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {dict.experience.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Left Column - Experience */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-linear-to-r from-violet-600 to-indigo-600">
                <FiBriefcase className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {language === "ar" ? "الخبرة المهنية" : "Professional Experience"}
                </h3>
                <p className="text-gray-400">
                  {language === "ar" ? "مسار الأتمتة وتطوير النظم" : "Systems engineering & automation track"}
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative"
                >
                  {/* Timeline line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-linear-to-b from-violet-500/50 to-transparent group-last:hidden"></div>
                  )}

                  <div className="relative flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className={`relative shrink-0 w-12 h-12 rounded-full bg-linear-to-r ${exp.color} flex items-center justify-center shadow-lg shadow-violet-950/50`}>
                      {exp.icon}
                      <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-linear-to-b from-gray-900/70 to-indigo-950/20 border border-violet-950/60 rounded-xl p-6 group-hover:border-violet-500/40 transition-all duration-300 shadow-xl">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                          <p className="text-violet-400 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 md:mt-0">
                          <FiCalendar className="text-violet-400" />
                          <span>{exp.period}</span>
                          <FiMapPin className="ml-4 text-purple-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-5 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-800/60 text-gray-300 text-xs rounded-full border border-violet-900/50 font-mono"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0"></div>
                            <p className="text-gray-400 text-sm">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600">
                <FiBookOpen className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {language === "ar" ? "التعليم الأكاديمي" : "Education"}
                </h3>
                <p className="text-gray-400">
                  {language === "ar" ? "الخلفية الأكاديمية" : "Academic background"}
                </p>
              </div>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-linear-to-b from-gray-900/70 to-indigo-950/20 border border-violet-950/60 rounded-xl p-6 hover:border-violet-500/40 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-linear-to-r ${edu.color}`}>
                    {edu.icon}
                  </div>
                  {edu.evaluation && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-violet-300 to-indigo-400">
                        {edu.evaluation}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {language === "ar" ? "التقدير" : "Evaluation"}
                      </div>
                    </div>
                  )}
                </div>

                <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                <p className="text-violet-400 font-medium mb-3">{edu.institution}</p>

                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="text-violet-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiMapPin className="text-purple-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {edu.description}
                </p>

                {/* Courses */}
                <div>
                  <p className="text-gray-400 text-xs font-mono mb-2">
                    {language === "ar" ? "أبرز المواد الدراسية" : "CORE COURSES"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/60"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-linear-to-b from-gray-900/60 to-transparent border border-violet-950/60 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-indigo-400 mb-2">
                4+
              </div>
              <div className="text-gray-400">
                {language === "ar" ? "سنوات خبرة متخصصة" : "Years Experience"}
              </div>
            </div>
            <div className="text-center p-6 bg-linear-to-b from-gray-900/60 to-transparent border border-violet-950/60 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 mb-2">
                25+
              </div>
              <div className="text-gray-400">
                {language === "ar" ? "مشروعاً برمجياً منجزاً" : "Projects Delivered"}
              </div>
            </div>
            <div className="text-center p-6 bg-linear-to-b from-gray-900/60 to-transparent border border-violet-950/60 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400 mb-2">
                100%
              </div>
              <div className="text-gray-400">
                {language === "ar" ? "نسبة رضا وموثوقية" : "Client Satisfaction"}
              </div>
            </div>
          </div>

          {/* Download CV CTA */}
          <div className="text-center">
            <div className="inline-block bg-linear-to-r from-gray-900/70 via-indigo-950/40 to-gray-900/50 border border-violet-500/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">{dict.experience.downloadCtaTitle}</h3>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                {dict.experience.downloadCtaDesc}
              </p>
              <a
                href="/Ali_Saad_Resume.pdf"
                download="Ali_Saad_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-violet-600 via-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/25"
              >
                {dict.experience.downloadCtaBtn}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
