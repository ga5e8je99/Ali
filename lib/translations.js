// Site-wide Bilingual Translations (English & Arabic) for Ali Saad Portfolio

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      portfolio: "Portfolio",
      services: "Services",
      contact: "Contact",
      downloadCv: "Download CV",
      langSwitch: "العربية",
      devBadge: "/dev"
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Ali Saad",
      role: "Back-End & Automation Engineer",
      subtitle: "Python • FastAPI • Rust • Playwright • Docker",
      badge: "Available for new projects & automation",
      shortBio: "Passionate Back-End & Automation Engineer building scalable microservices, high-performance APIs, and end-to-end automation pipelines that turn complex workflows into seamless, automated engines.",
      viewWork: "View Projects",
      contactMe: "Get in Touch",
      downloadCv: "Download CV",
      experienceYears: "Years Experience",
      projectsDone: "Projects Completed",
      clientSatisfaction: "Client Satisfaction"
    },
    about: {
      sectionBadge: "ABOUT ME",
      sectionTitle: "Get to",
      sectionTitleHighlight: "Know Me",
      sectionSubtitle: "Discover my engineering journey, technical philosophy, and obsession with scaling and automation.",
      bio1: "Hello! I'm Ali Saad, a passionate Back-End and Automation Engineer based in Egypt with extensive experience building scalable web architectures, resilient APIs, and intelligent automation systems.",
      bio2: "My core expertise centers on Python, FastAPI, Django, Rust, and Node.js for high-throughput APIs, alongside Playwright, Selenium, and n8n for sophisticated browser automation, web scraping, and workflow orchestration. I automate complex processes, from distributed microservices to containerized CI/CD pipelines.",
      bio3: "My motto: 'Build systems that scale, automate what slows you down.' I strive to write elegant, maintainable code, optimize bottlenecks, and architect infrastructure that frees teams from manual work.",
      yearsExp: "Years Experience",
      projectsCompleted: "Projects Completed",
      satisfactionRate: "Client Satisfaction",
      location: "Location",
      locationVal: "Egypt",
      email: "Email",
      degree: "Degree",
      degreeVal: "B.Sc. Computers & Informatics",
      status: "Availability",
      statusVal: "Open to Full-Time, Remote & Automation Roles",
      connectHeading: "Let's Build & Automate Together",
      connectText: "Looking for an engineer to architect high-performance APIs or build enterprise-grade automation pipelines?",
      hireMe: "Contact Me"
    },
    skills: {
      sectionBadge: "TECHNICAL STACK",
      sectionTitle: "Skills &",
      sectionTitleHighlight: "Technologies",
      sectionSubtitle: "Core languages, frameworks, automation tools, and cloud infrastructure I use to engineer robust backend systems.",
      all: "All",
      backend: "Back-End & APIs",
      automation: "Automation & Scraping",
      devops: "DevOps & Cloud",
      databases: "Databases",
      languages: "Languages",
      level: "Proficiency",
      experience: "Experience"
    },
    experience: {
      sectionBadge: "CAREER & LEARNING",
      sectionTitle: "Experience &",
      sectionTitleHighlight: "Education",
      sectionSubtitle: "A timeline of my professional journey, academic background, and recognized engineering certifications.",
      tabExperience: "Experience",
      tabEducation: "Education",
      tabCertifications: "Certifications",
      downloadCtaTitle: "Want to See My Full Resume?",
      downloadCtaDesc: "Download my complete resume with detailed projects, automation case studies, and achievements.",
      downloadCtaBtn: "Download Resume (PDF)"
    },
    portfolio: {
      sectionBadge: "PORTFOLIO & WORK",
      sectionTitle: "Featured",
      sectionTitleHighlight: "Projects",
      sectionSubtitle: "A showcase of automated video pipelines, reverse proxies, microservices, and AI integrations built for real production.",
      all: "All",
      automation: "Automation & AI",
      backend: "Back-End & APIs",
      fullstack: "Full-Stack",
      featuredBadge: "FEATURED",
      challengeLabel: "Challenge:",
      roleLabel: "My Role:",
      outcomeLabel: "Outcome:",
      techUsed: "TECHNOLOGIES USED",
      liveDemo: "View Repo",
      code: "Source Code",
      caseStudy: "Case Study",
      noProjects: "No projects found in this category."
    },
    services: {
      sectionBadge: "MY SERVICES",
      sectionTitle: "Services &",
      sectionTitleHighlight: "Solutions",
      sectionSubtitle: "End-to-end back-end engineering, headless browser automation, and cloud DevOps designed for scale.",
      whatsIncluded: "What's Included",
      startingAt: "Starting at",
      bookCall: "Book Call",
      items: [
        {
          id: 1,
          title: "Back-End & Scalable Microservices",
          description: "High-throughput, resilient backend services and REST APIs built with Python, FastAPI, Django, Rust, and Node.js for exceptional speed and scale.",
          features: [
            "High-Performance FastAPI & Python Microservices",
            "Fast Rust & Node.js API Endpoints",
            "PostgreSQL, Redis & MongoDB Database Architecture",
            "JWT & OAuth2 Secure Authentication Systems",
            "Rate Limiting, Caching & Concurrency Optimization",
            "Clean Async Architecture & OpenAPI Documentation"
          ]
        },
        {
          id: 2,
          title: "Workflow Automation & Web Scraping",
          description: "Custom headless automation bots, web scrapers, and n8n workflows that eliminate repetitive manual labor and extract business intelligence.",
          features: [
            "Headless Browser Automation with Playwright & Selenium",
            "End-to-End n8n Workflow Pipelines & Webhooks",
            "Bypass Anti-Bot, Captcha & Rate Limit Strategies",
            "Automated Data Extraction & ETL Pipelines",
            "Telegram & Discord Bot Automation Gateways",
            "Scheduled Cron & Serverless Trigger Execution"
          ]
        },
        {
          id: 3,
          title: "DevOps, Containerization & CI/CD",
          description: "Streamlined cloud deployments, automated testing pipelines, and Docker containerization ensuring fast, reliable software releases.",
          features: [
            "Docker & Multi-Container Docker Compose Setups",
            "GitHub Actions CI/CD Pipeline Automation",
            "Serverless Deployment on Vercel, Railway & Cloud VPS",
            "Automated Health Checks & System Monitoring",
            "Reverse Proxy & Network Routing Configuration",
            "Environment Variable & Secret Management"
          ]
        }
      ],
      addonsTitle: "Specialized",
      addonsTitleHighlight: "Add-ons",
      addonsSubtitle: "Targeted engineering solutions for specialized automation and systems requirements",
      addons: [
        {
          title: "API Performance & Caching",
          description: "Boost throughput with Redis in-memory caching, connection pooling, and asynchronous task queues.",
          features: ["Redis Caching", "Celery / Background Tasks", "Sub-10ms Endpoints"]
        },
        {
          title: "Headless Bot Anti-Detection",
          description: "Stealth fingerprinting, proxy rotation, and session management for resilient scraping bots.",
          features: ["Stealth Playwright", "Proxy Pool Rotation", "Session Persistence"]
        },
        {
          title: "Database Optimization",
          description: "Structured SQL/NoSQL schema modeling, index tuning, and aggregation queries for high loads.",
          features: ["PostgreSQL Tuning", "Complex Aggregations", "Migration Pipelines"]
        },
        {
          title: "Cloud & Container Deployments",
          description: "Production Docker image builds, multi-stage optimizations, and GitHub Actions deployments.",
          features: ["Multi-stage Docker", "CI/CD Workflows", "Automated Rollbacks"]
        }
      ],
      howIWorkTitle: "How I",
      howIWorkTitleHighlight: "Work",
      howIWorkSubtitle: "A structured, transparent engineering process from scoping to automated production",
      stepPrefix: "STEP",
      steps: [
        {
          step: "01",
          title: "Discovery & Architecture",
          description: "Analyzing system requirements, data workflows, bottlenecks, and defining the optimal tech stack."
        },
        {
          step: "02",
          title: "Prototype & Core Engine",
          description: "Building the core API endpoints, database schemas, or automation scripts with unit tests."
        },
        {
          step: "03",
          title: "Integration & Hardening",
          description: "Connecting webhooks, setting up retry policies, error monitoring, and containerizing with Docker."
        },
        {
          step: "04",
          title: "Deployment & CI/CD",
          description: "Deploying to production, configuring automated GitHub Actions pipelines, and full documentation handoff."
        }
      ],
      ctaTitle: "Have a System or Workflow to Automate?",
      ctaDesc: "Book a free 20-minute consultation. We'll discuss your system architecture, API requirements, automation bottlenecks, and actionable budget options.",
      scheduleConsultation: "Schedule Free Consultation",
      sendMessage: "Send a Message",
      noCommitment: "No commitments • Google Meet or WhatsApp call"
    },
    contact: {
      sectionBadge: "GET IN TOUCH",
      sectionTitle: "Let's Start a",
      sectionTitleHighlight: "Conversation",
      sectionSubtitle: "Have a project idea, back-end challenge, or automation opportunity? Reach out directly.",
      infoTitle: "Contact Information",
      emailCard: "Email",
      phoneCard: "Phone / WhatsApp",
      locationCard: "Location",
      locationVal: "Egypt",
      socialsTitle: "Connect With Me",
      copyBtn: "Copy",
      copiedBtn: "Copied!",
      availTitle: "Current Availability",
      availSubtitle: "Taking on new projects & automations",
      responseTime: "Response Time",
      responseTimeVal: "Within 24 hours",
      projectTypes: "Project Types",
      projectTypesVal: "APIs, Back-End & Automation",
      timezone: "Timezone",
      timezoneVal: "GMT+2 (Egypt)",
      formTitle: "Send me a message",
      formSubtitle: "Fill out the form below and I'll get back to you as soon as possible",
      nameLabel: "Your Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "john@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Automation or API Project Inquiry",
      messageLabel: "Message",
      messagePlaceholder: "Describe your project or system requirements...",
      repliesWithin: "Typically replies within 24 hours",
      sendBtn: "Send Message",
      sending: "Sending...",
      msgSentTitle: "Message Sent!",
      msgSentDesc: "Thank you for your message. I'll get back to you within 24 hours.",
      sendAnother: "Send another message",
      basedInTitle: "Based in Egypt",
      basedInSubtitle: "Working with clients and teams worldwide",
      quickChatTitle: "Prefer a quick chat?",
      quickChatDesc: "Message directly on WhatsApp or book a quick consultation call",
      scheduleCall: "Schedule a Call",
      whatsappChat: "WhatsApp Chat"
    },
    projectDetail: {
      home: "Home",
      portfolio: "Portfolio",
      backToProjects: "Back to Projects",
      share: "Share",
      linkCopied: "Link Copied!",
      featuredBadge: "Featured Case Study",
      liveDemo: "View Project",
      sourceCode: "GitHub Repository",
      myRole: "My Role",
      timeline: "Timeline",
      clientType: "Client / Type",
      category: "Category",
      projectOverview: "Project Overview",
      aboutTheProject: "About the Project",
      theChallenge: "The Challenge",
      problemStatement: "Problem Statement",
      theSolution: "The Solution",
      technicalArchitecture: "Technical Architecture",
      keyFeatures: "Key Features & Capabilities",
      coreFunctionality: "Core Functionality",
      measurableOutcome: "Measurable Outcome",
      resultsImpact: "Results & Impact",
      techStack: "Tech Stack",
      techToolsUsed: "Technologies & Tools Used",
      prevProject: "Previous Project",
      nextProject: "Next Project",
      ctaTitle: "Interested in automating a system like this?",
      ctaDesc: "Let's collaborate to build your custom high-performance APIs or automated workflows with exceptional reliability.",
      scheduleConsultation: "Schedule a Consultation",
      chatWhatsapp: "Chat on WhatsApp",
      notFoundTitle: "Project Not Found",
      notFoundDesc: "The project you are looking for does not exist or has been moved."
    },
    picker: {
      title: "Schedule a Free Consultation",
      subtitle: "Select a date and time that works best for you",
      step1: "1. Pick Date & Time",
      step2: "2. Your Information",
      selectDate: "Select Date",
      selectTime: "Select Time",
      continueBtn: "Continue",
      backBtn: "Back",
      nameLabel: "Your Name",
      phoneLabel: "Phone / WhatsApp",
      emailLabel: "Email Address",
      serviceLabel: "Interested Service",
      notesLabel: "Project Details / Notes",
      confirmBtn: "Confirm Appointment",
      bookedTitle: "Appointment Confirmed!",
      bookedDesc: "I look forward to speaking with you. A confirmation and meeting details will be sent shortly.",
      closeBtn: "Close"
    },
    projectsData: {
      "proj-1": {
        title: "EG VidsFlow – Google Vids & Automated Video Pipeline",
        tagline: "Autonomous Cloud-Native Video Generation & Rendering Engine with Playwright & n8n",
        description: "High-performance automated bot orchestrating Google Vids and short-form video production with headless browser automation, n8n webhook triggers, and automated artifact delivery.",
        overview: "EG VidsFlow is a production automation engine engineered to eliminate manual video editing and rendering overhead. Utilizing Playwright and Python running inside containerized GitHub Actions and cloud workers, it accepts dynamic script prompts via n8n webhooks, autonomously operates video generation interfaces, orchestrates audio/visual asset timeline alignment, and exports finished MP4 video clips directly to cloud storage and distribution channels.",
        problem: "Content teams spend hours manually assembling slides, voiceovers, and transitions for promotional videos, leading to severe production bottlenecks and inconsistent output pacing.",
        solution: "Built a headless browser automation agent that interfaces directly with Google Vids and video APIs, parsing structured JSON storyboard payloads, controlling DOM canvas rendering, and monitoring export states asynchronously.",
        role: "Lead Automation & Systems Engineer. Designed the Playwright execution scripts, headless session persistence, error recovery routines, and n8n webhook integration endpoints.",
        impact: "Reduced video turnaround time from 90 minutes to under 8 minutes per video, enabling automated batch production of 50+ video reels daily with zero manual oversight.",
        features: [
          { title: "Headless Browser Video Orchestration", desc: "Autonomous DOM interaction and timeline automation driven by Playwright with stealth session handling." },
          { title: "n8n Webhook & Event Dispatcher", desc: "Real-time trigger endpoints to start render jobs from external CMS, spreadsheets, or Telegram triggers." },
          { title: "Fault-Tolerant Retry & Session Recovery", desc: "Stateful cookie persistence and auto-recovery mechanics preventing failed renders on network hiccups." },
          { title: "Automated Multi-Channel Distribution", desc: "Direct export pipelines streaming generated video files to cloud storage buckets and notification webhooks." }
        ]
      },
      "proj-2": {
        title: "Veo AI Automator – Generative Video Pipeline",
        tagline: "Autonomous Multimodal Video Engine Orchestrating Google Veo via Headless Workers",
        description: "Cloud-native automation tool that interfaces with Google Veo generative video models, scheduling prompt queues, managing video generations, and delivering ready-to-use MP4s.",
        overview: "Veo AI Automator bridges the gap between state-of-the-art generative video models and automated enterprise workflows. Powered by Python and Playwright, the platform reads batches of creative prompts, queues them through Google Veo's interface, polls for model rendering completion, applies quality validations, and syncs finalized video assets with cloud repositories.",
        problem: "Generative video platforms require tedious manual prompt submission, long wait times per generation, and manual downloads, making large-scale AI video experiments difficult.",
        solution: "Developed a resilient headless bot that securely authenticates sessions, executes parallel batch requests, captures progress telemetry, and dispatches finished renders through automated webhooks.",
        role: "Creator & Lead Developer. Architected the automation scripts, concurrency manager, session token rotators, and GitHub Actions continuous workflow triggers.",
        impact: "Automated the generation of hundreds of cinematic AI clips, enabling fully hands-off prompt-to-video batch generation.",
        features: [
          { title: "Batch Prompt Queue & Processing", desc: "Sequential and parallel queue orchestration processing dozens of video generation requests without manual intervention." },
          { title: "Automated Status Polling & Downloads", desc: "Intelligent polling loop that detects when video inference completes, validates output integrity, and downloads MP4s." },
          { title: "CI/CD Scheduled Workflow Triggers", desc: "Automated cron schedules running via GitHub Actions to produce fresh video assets periodically." },
          { title: "Artifact & Webhook Notification", desc: "Instant Discord and Telegram notifications with direct downloadable artifact previews upon job completion." }
        ]
      },
      "proj-3": {
        title: "TeleBridge – High-Throughput API Gateway & Proxy",
        tagline: "Zero-Latency Reverse Proxy Bridging n8n Automation Workflows with Telegram Bot API",
        description: "Lightweight, ultra-fast serverless proxy that transparently routes Telegram Bot API calls, seamlessly overcoming regional IP blocks and ISP rate-limiting.",
        overview: "TeleBridge is a specialized serverless API proxy built to ensure uninterrupted communication between automation hubs (such as n8n, self-hosted webhooks, or cloud bots) and the official Telegram API. Engineered with sub-millisecond routing overhead, it strips restrictive CORS barriers, manages header forwarding, and shields bot tokens while routing around regional network throttling.",
        problem: "Automation platforms like n8n frequently face connection timeouts and severe IP rate limits when calling Telegram endpoints from restricted cloud regions or shared hosting clusters.",
        solution: "Architected a streamlined serverless gateway that acts as a 1:1 transparent pass-through for Telegram requests, offering an instant 1-step deployment and effortless drop-in URL replacement.",
        role: "Backend Architect. Designed the request piping logic, multi-method HTTP forwarding, error handling layers, and serverless deployment manifests.",
        impact: "Achieved 99.99% gateway uptime, eliminated 100% of regional IP blocking errors, and processed thousands of daily webhook notifications with sub-5ms overhead.",
        features: [
          { title: "Transparent 1:1 API Pass-Through", desc: "Complete compatibility with all Telegram Bot API methods including file uploads, long-polling, and Webhooks." },
          { title: "IP Block & Throttle Bypass", desc: "Routes traffic through resilient edge CDN nodes, preventing regional ISP blocks and connection resets." },
          { title: "Zero-Config Drop-in Integration", desc: "Users simply replace the default api.telegram.org base URL in n8n credentials with their deployed proxy endpoint." },
          { title: "Sub-5ms Execution Latency", desc: "Ultra-lean proxy pipeline with stream forwarding and zero unnecessary payload buffering." }
        ]
      },
      "proj-4": {
        title: "AutoClip Pipeline – AI Video Shorts & Highlights Clipper",
        tagline: "End-to-End Automated Pipeline Turning YouTube Videos into Engaging Vertical Shorts",
        description: "Automated media pipeline leveraging browser extensions, n8n workflows, Lightning AI, and FastAPI services to automatically detect highlights and produce vertical short clips.",
        overview: "AutoClip Pipeline is an automated multimedia processing architecture designed to convert long-form YouTube broadcasts into viral vertical shorts. From receiving video URLs via browser extension triggers, the pipeline downloads audio streams, transcribes dialogue, identifies emotional and viral spikes with AI, clips scenes with FFmpeg, and burns dynamic animated subtitles automatically.",
        problem: "Extracting highlights and editing short clips from hour-long podcasts and webinars requires extensive manual scrubbing, transcription, and vertical cropping.",
        solution: "Built a modular microservices pipeline integrating FastAPI for audio/video processing, Whisper for transcription, NLP for highlight detection, and FFmpeg for automated 9:16 reframing.",
        role: "Pipeline & Backend Engineer. Built the FastAPI processing service, FFmpeg rendering filters, subtitle generation scripts, and n8n orchestration workflow.",
        impact: "Decreased clip production time from 40 minutes to under 3 minutes per short, handling multi-stage media transformations autonomously.",
        features: [
          { title: "One-Click Browser Extension Trigger", desc: "Send any active YouTube video URL directly to the processing queue with a single browser extension click." },
          { title: "Automated Transcription & Highlight AI", desc: "Speech-to-text transcription paired with NLP ranking to pinpoint the most engaging 30-60 second segments." },
          { title: "Dynamic 9:16 Reframing & Subtitles", desc: "Automated face-centering crop and synchronized karaoke-style subtitles burned directly into the output video." },
          { title: "Microservices Cloud Architecture", desc: "Decoupled FastAPI workers containerized with Docker, scalable to handle concurrent video rendering jobs." }
        ]
      },
      "proj-5": {
        title: "GeminiScraper – AI Scraping & Workflow Action",
        tagline: "Headless Scraping & Multimodal AI Content Generator Powered by Playwright & Gemini",
        description: "Autonomous GitHub Action combining Playwright headless scraping with Google Gemini models for structured data extraction, image analysis, and automated webhook reporting.",
        overview: "GeminiScraper empowers automated workflows to scrape complex dynamic web pages, extract clean multimodal information, feed them directly into Gemini models, and generate structured analysis reports with automated n8n webhook notifications.",
        problem: "Modern JavaScript-heavy single-page applications require visual rendering and complex cookie handshakes that standard HTTP scrapers cannot handle.",
        solution: "Engineered a headless scraper using Playwright with stealth user-agent spoofing that captures screenshots and DOM trees, passing them to Gemini for semantic parsing and outputting clean JSON artifacts.",
        role: "Creator & Lead Developer. Programmed the Playwright browser runner, Gemini API prompting layers, artifact storage handlers, and n8n webhook integration.",
        impact: "Enabled reliable zero-maintenance scraping across anti-bot protected sites with 99.4% extraction accuracy.",
        features: [
          { title: "Headless SPA DOM & Image Capture", desc: "Full-page rendering with dynamic scroll, visual screenshot extraction, and DOM sanitization." },
          { title: "Gemini Multimodal Intelligence", desc: "Direct visual and textual analysis converting raw unstructured webpage data into structured JSON models." },
          { title: "Automated GitHub Action Integration", desc: "Runs seamlessly on GitHub CI runners on schedules or webhook triggers with downloadable artifacts." },
          { title: "Instant n8n Webhook Relay", desc: "Dispatches extracted insights to n8n workflows for automated database storage or messaging alerts." }
        ]
      },
      "proj-6": {
        title: "EduPlatform – AI-Powered Educational Learning Hub",
        tagline: "Modern Interactive Learning Platform with Real-Time AI Tutoring & Progress Analytics",
        description: "Full-stack educational platform built with Next.js, TypeScript, and Google AI Studio APIs, featuring interactive course modules, automated quiz generation, and student metrics.",
        overview: "EduPlatform is an AI-first educational web application created to enhance student engagement and personalize study paths with Google AI Studio streaming integrations.",
        problem: "Static educational platforms provide rigid curriculums without interactive feedback, causing student drop-offs and poor concept retention.",
        solution: "Developed an intuitive Next.js application with modular course structures, server-rendered analytics dashboards, and responsive AI tutoring components.",
        role: "Full-Stack Engineer. Implemented the Next.js App Router architecture, responsive UI components, AI Studio streaming integration, and database modeling.",
        impact: "Delivered sub-second question generation and a fluid, responsive learning environment across desktop and mobile devices.",
        features: [
          { title: "AI Course & Quiz Generation", desc: "Dynamic evaluation engine creating interactive multi-choice quizzes and explanations on demand." },
          { title: "Responsive Dashboard & Analytics", desc: "Student progress tracking with visual retention charts and milestone badges." },
          { title: "Type-Safe Modular Architecture", desc: "Next.js App Router codebase with full TypeScript contracts and server actions." },
          { title: "Streaming AI Tutoring Assistant", desc: "Real-time streaming responses powered by Google AI Studio for instant query resolution." }
        ]
      }
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عني",
      skills: "المهارات",
      experience: "الخبرات والتعليم",
      portfolio: "المشاريع",
      services: "الخدمات",
      contact: "تواصل معي",
      downloadCv: "تحميل السيرة الذاتية",
      langSwitch: "English",
      devBadge: "مطور"
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "علي سعد",
      role: "مهندس نظم خلفية وأتمتة سحابية",
      subtitle: "Python • FastAPI • Rust • Playwright • Docker",
      badge: "متاح للمشاريع الجديدة والأتمتة",
      shortBio: "مطور برمجيات ومهندس أتمتة سحابية أبني أنظمة خلفية عالية الأداء، واجهات APIs فائقة السرعة، وخطوط أتمتة شاملة تحول سير العمل المعقد إلى محركات آلية ذكية.",
      viewWork: "استكشف أعمالي",
      contactMe: "تواصل معي",
      downloadCv: "تحميل السيرة الذاتية",
      experienceYears: "سنوات خبرة",
      projectsDone: "مشروع منجز",
      clientSatisfaction: "رضا العملاء"
    },
    about: {
      sectionBadge: "نبذة عني",
      sectionTitle: "تعرف",
      sectionTitleHighlight: "عليّ أكثر",
      sectionSubtitle: "رحلتي في هندسة البرمجيات، رؤيتي التقنية، وشغفي ببناء أنظمة خلفية قوية وأتمتة العمليات.",
      bio1: "أهلاً بك! أنا علي سعد، مطور أنظمة خلفية ومهندس أتمتة برمجية مقيم في مصر، أمتلك خبرة عملية واسعة في هندسة معماريات الويب المتينة، واجهات الـ APIs عالية السرعة، وبناء أنظمة الأتمتة الذكية.",
      bio2: "يرتكز تخصصي على لغات Python و Rust و TypeScript وأطر عمل FastAPI و Django و Node.js لبناء خدمات خلفية متطورة، بجانب تقنيات Playwright و Selenium و n8n لأتمتة المتصفحات المتقدمة واستخراج البيانات والربط بين الأنظمة، مع تطبيق معايير الحاويات ونشرها عبر Docker وخطوط CI/CD.",
      bio3: "مبدئي الهندسي الدائم: 'ابنِ أنظمة تتوسع بكفاءة، وأتمت كل ما يعطلك'. أهتم بكتابة كود نظيف وسهل الصيانة، والقضاء التام على العمليات اليدوية المكررة.",
      yearsExp: "سنوات خبرة",
      projectsCompleted: "مشروع منجز",
      satisfactionRate: "نسبة رضا العملاء",
      location: "الموقع الجغرافي",
      locationVal: "مصر",
      email: "البريد الإلكتروني",
      degree: "المؤهل الدراسي",
      degreeVal: "بكالوريوس حاسبات ومعلومات",
      status: "حالة التفرغ",
      statusVal: "متاح للعمل عن بُعد والدوام الكامل وعقود الأتمتة",
      connectHeading: "لنبدأ في بناء وأتمتة مشروعك القادم",
      connectText: "هل تبحث عن مهندس يبني لك واجهات برمجية سريعة أو يؤتمت عمليات شركتك لتعمل على مدار الساعة؟",
      hireMe: "تواصل معي الآن"
    },
    skills: {
      sectionBadge: "المهارات والتقنيات",
      sectionTitle: "التقنيات و",
      sectionTitleHighlight: "أدوات العمل",
      sectionSubtitle: "مجموعة لغات البرمجة، أطر العمل الخلفية، أدوات الأتمتة والبنى السحابية التي أعتمد عليها في هندسة المشاريع.",
      all: "الكل",
      backend: "الواجهات الخلفية وAPIs",
      automation: "الأتمتة واستخراج البيانات",
      devops: "الـ DevOps والسحابة",
      databases: "قواعد البيانات",
      languages: "لغات البرمجة",
      level: "مستوى الإتقان",
      experience: "الخبرة"
    },
    experience: {
      sectionBadge: "المسار المهني والتعليمي",
      sectionTitle: "الخبرات و",
      sectionTitleHighlight: "التعليم",
      sectionSubtitle: "محطات مسيرتي المهنية، خلفيتي الأكاديمية، والشهادات المعتمدة في هندسة النظم والأتمتة.",
      tabExperience: "الخبرات العملية",
      tabEducation: "التعليم الأكاديمي",
      tabCertifications: "الشهادات والكورسات",
      downloadCtaTitle: "هل ترغب في الإطلاع على سيرتي الذاتية كاملة؟",
      downloadCtaDesc: "حمّل نسختك المحدثة بصيغة PDF متضمنة كافة المشاريع، الخبرات الهندسية، والمهارات التقنية بالتفصيل.",
      downloadCtaBtn: "تحميل السيرة الذاتية (PDF)"
    },
    portfolio: {
      sectionBadge: "معرض الأعمال",
      sectionTitle: "أبرز",
      sectionTitleHighlight: "المشاريع",
      sectionSubtitle: "نماذج حية لمشاريع خطوط أتمتة الفيديو، بوابات وبروكسيات الـ APIs، والخدمات الخلفية الذكية.",
      all: "الكل",
      automation: "الأتمتة والذكاء الاصطناعي",
      backend: "الأنظمة الخلفية وAPIs",
      fullstack: "تطبيقات الويب",
      featuredBadge: "مميز",
      challengeLabel: "التحدي:",
      roleLabel: "دوري:",
      outcomeLabel: "النتيجة:",
      techUsed: "التقنيات المستخدمة",
      liveDemo: "استعراض المشروع",
      code: "الكود المصدري",
      caseStudy: "دراسة الحالة",
      noProjects: "لا توجد مشاريع في هذا التصنيف حالياً."
    },
    services: {
      sectionBadge: "خدماتي الهندسية",
      sectionTitle: "الخدمات و",
      sectionTitleHighlight: "الحلول البرمجية",
      sectionSubtitle: "هندسة الأنظمة الخلفية المتطورة، أتمتة المتصفحات المستقلة، وإدارة البنية التحتية السحابية المصممة للنمو السريع.",
      whatsIncluded: "ما تشمله الخدمة",
      startingAt: "تبدأ من",
      bookCall: "حجز موعد",
      items: [
        {
          id: 1,
          title: "الأنظمة الخلفية والمايكروسيرفسز القابلة للتوسع",
          description: "بناء خدمات خلفية متينة وواجهات REST APIs عالية السرعة باستخدام Python و FastAPI و Django و Rust و Node.js لتحقيق أعلى أداء.",
          features: [
            "تطوير مايكروسيرفسز فائقة السرعة بـ FastAPI و Python",
            "واجهات برمجية خفيفة وقوية باستخدام Rust و Node.js",
            "تصميم معمارية قواعد البيانات بـ PostgreSQL و Redis و MongoDB",
            "أنظمة توثيق وحماية متقدمة بـ JWT و OAuth2",
            "إدارة معدلات الطلبات (Rate Limiting) والكاشينج للتوسع السلس",
            "هندسة غير تزامنية (Async) وتوثيق تلقائي بـ OpenAPI"
          ]
        },
        {
          id: 2,
          title: "أتمتة الأعمال واستخراج البيانات (Web Scraping)",
          description: "بناء روبوتات أتمتة المتصفحات المستقلة بدون واجهة، سكرابينج متقدم، وخطوط n8n تقضي على المهام اليدوية الروتينية.",
          features: [
            "أتمتة المتصفحات الكاملة باستخدام Playwright و Selenium",
            "بناء سيناريوهات عمل متكاملة على n8n و Webhooks",
            "تجاوز أنظمة مكافحة البوتات وتحديد التردد (Anti-Bot & Rate Limits)",
            "استخراج ومعالجة البيانات المتدفقة (ETL Pipelines)",
            "بوابات وروبوتات تيليجرام وديسكورد للأتمتة والإشعارات",
            "جدولة مهام الكرون (Cron) والتنفيذ السحابي التلقائي"
          ]
        },
        {
          id: 3,
          title: "الـ DevOps، الحاويات ونشر السحابة (CI/CD)",
          description: "إعداد بيئات نشر سحابية سلسة، أتمتة الاختبارات عبر خطوط CI/CD، وتغليف التطبيقات بحاويات Docker لضمان استقرار العمليات.",
          features: [
            "إعداد حاويات Docker وملفات Docker Compose متعددة الخدمات",
            "أتمتة خطوط الاختبار والنشر عبر GitHub Actions CI/CD",
            "نشر التطبيقات بدون خوادم على Vercel و Railway و Cloud VPS",
            "فحوصات الصحة التلقائية ومراقبة أداء السيرفرات",
            "تكوين البروكسي العكسي (Reverse Proxy) وتوجيه الشبكة",
            "إدارة آمنة للمتغيرات البيئية والمفاتيح السرية"
          ]
        }
      ],
      addonsTitle: "خدمات",
      addonsTitleHighlight: "إضافية متخصصة",
      addonsSubtitle: "حلول هندسية دقيقة لتلبية متطلبات متقدمة في النظم والأتمتة",
      addons: [
        {
          title: "تسريع أداء الـ APIs والتخزين المؤقت",
          description: "مضاعفة سرعة الاستجابة مع Redis In-Memory Caching، وإدارة طوابير المهام الخلفية.",
          features: ["كاشينج عبر Redis", "مهام خلفية بـ Celery", "استجابة في أجزاء من الثانية"]
        },
        {
          title: "حماية وتخفي بوتات السكرابينج",
          description: "محاكاة البصمة الطبيعية للمتصفح، تدوير البروكسيات وإدارة الجلسات لتجاوز الحظر.",
          features: ["Playwright Stealth", "تدوير البروكسيات الذكي", "حفظ الكوكيز والجلسات"]
        },
        {
          title: "تحسين استعلامات قواعد البيانات",
          description: "هندسة الجداول والفهارس في PostgreSQL و MongoDB للتعامل مع كميات بيانات ضخمة.",
          features: ["تحسين استعلامات SQL", "تجميع البيانات Aggregation", "خطوط الترحيل Migration"]
        },
        {
          title: "الحاويات والنشر السحابي المستمر",
          description: "بناء صور Docker خفيفة متعددة المراحل ونشرها آلياً مع كل تحديث عبر Git.",
          features: ["Multi-stage Docker", "أتمتة النشر CI/CD", "استعادة النسخ السابقة آلياً"]
        }
      ],
      howIWorkTitle: "منهجية",
      howIWorkTitleHighlight: "العمل",
      howIWorkSubtitle: "خطوات هندسية مدروسة وشفافة تضمن الدقة والسرعة من التخطيط حتى التشغيل والإنتاج",
      stepPrefix: "المرحلة",
      steps: [
        {
          step: "01",
          title: "الاستكشاف وتصميم المعمارية",
          description: "تحليل متطلبات النظام، تدفق البيانات، تحديد نقاط الاختناق، واختيار البنية التقنية المثالية."
        },
        {
          step: "02",
          title: "بناء النواة ومحرك الأتمتة",
          description: "برمجة واجهات الـ API ونماذج البيانات أو كتابة سيناريوهات الأتمتة مع فحوصات الوحدة."
        },
        {
          step: "03",
          title: "الربط والمعالجة ضد الأخطاء",
          description: "توصيل الـ Webhooks، آليات إعادة المحاولة عند انقطاع الشبكة، وتغليف النظام في Docker."
        },
        {
          step: "04",
          title: "النشر السحابي والتشغيل المستمر",
          description: "النشر على السيرفرات، تفعيل خطوط GitHub Actions للنشر التلقائي، وتسليم التوثيق الكامل."
        }
      ],
      ctaTitle: "هل لديك نظام ترغب في تطويره أو عمليات تريد أتمتتها؟",
      ctaDesc: "احجز استشارة مجانية لمدة 20 دقيقة، نناقش فيها معمارية نظامك، متطلبات الأتمتة، والجدول الزمني والميزانية الأنسب.",
      scheduleConsultation: "احجز استشارة مجانية",
      sendMessage: "أرسل رسالة",
      noCommitment: "بدون أي التزامات • عبر Google Meet أو مكالمة واتساب"
    },
    contact: {
      sectionBadge: "تواصل معي",
      sectionTitle: "لنبدأ",
      sectionTitleHighlight: "محادثة",
      sectionSubtitle: "سواء كانت لديك فكرة مشروع جديد، تحدٍ في الأنظمة الخلفية، أو فرصة أتمتة، يسعدني دائماً تواصلك.",
      infoTitle: "معلومات التواصل",
      emailCard: "البريد الإلكتروني",
      phoneCard: "الهاتف / واتساب",
      locationCard: "الموقع الجغرافي",
      locationVal: "مصر",
      socialsTitle: "حساباتي الرسمية",
      copyBtn: "نسخ",
      copiedBtn: "تم النسخ!",
      availTitle: "الوضع الحالي",
      availSubtitle: "متاح لاستقبال مشاريع وعقود أتمتة جديدة",
      responseTime: "سرعة الرد",
      responseTimeVal: "خلال أقل من 24 ساعة",
      projectTypes: "نوعية المشاريع",
      projectTypesVal: "واجهات برمجية، أنظمة خلفية وأتمتة",
      timezone: "المنطقة الزمنية",
      timezoneVal: "توقيت مصر (GMT+2)",
      formTitle: "أرسل لي رسالة",
      formSubtitle: "املأ النموذج أدناه وسأعاود التواصل معك في أسرع وقت ممكن",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "اكتب اسمك هنا...",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "name@example.com",
      subjectLabel: "الموضوع",
      subjectPlaceholder: "استفسار عن مشروع أتمتة أو تطوير خلفي...",
      messageLabel: "رسالتك",
      messagePlaceholder: "اكتب تفاصيل مشروعك أو فكرتك وسأرد عليك سريعاً...",
      repliesWithin: "عادة ما يتم الرد خلال 24 ساعة",
      sendBtn: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      msgSentTitle: "تم الإرسال بنجاح!",
      msgSentDesc: "شكراً لتواصلك! تم استلام رسالتك بنجاح وسأتواصل معك في أقرب وقت.",
      sendAnother: "إرسال رسالة أخرى",
      basedInTitle: "مقيم في مصر",
      basedInSubtitle: "أعمل مع عملاء وشركات من مختلف أنحاء العالم",
      quickChatTitle: "تفضل محادثة سريعة؟",
      quickChatDesc: "تواصل معي مباشرة عبر واتساب أو احجز مكالمة سريعة لمناقشة التفاصيل",
      scheduleCall: "حجز موعد مكالمة",
      whatsappChat: "محادثة عبر واتساب"
    },
    projectDetail: {
      home: "الرئيسية",
      portfolio: "المشاريع",
      backToProjects: "العودة لجميع المشاريع",
      share: "مشاركة",
      linkCopied: "تم نسخ الرابط!",
      featuredBadge: "دراسة حالة مميزة",
      liveDemo: "استعراض المشروع",
      sourceCode: "مستودع الكود على GitHub",
      myRole: "دوري في المشروع",
      timeline: "المدة",
      clientType: "العميل / السياق",
      category: "التصنيف",
      projectOverview: "نظرة عامة على المشروع",
      aboutTheProject: "عن المشروع",
      theChallenge: "التحدي والمشكلة",
      problemStatement: "بيان المشكلة",
      theSolution: "الحل التقني",
      technicalArchitecture: "المعمارية التقنية",
      keyFeatures: "أهم المميزات والخصائص",
      coreFunctionality: "الوظائف الأساسية",
      measurableOutcome: "النتائج المحققة",
      resultsImpact: "النتائج والأثر المحقق",
      techStack: "التقنيات والمكتبات",
      techToolsUsed: "التقنيات والأدوات المستخدمة",
      prevProject: "المشروع السابق",
      nextProject: "المشروع التالي",
      ctaTitle: "مهتم بأتمتة نظام مماثل؟",
      ctaDesc: "دعنا نتعاون لبناء واجهات برمجية عالية الأداء أو خطوط أتمتة مخصصة بأعلى معايير الاستقرار والموثوقية.",
      scheduleConsultation: "احجز استشارة مجانية",
      chatWhatsapp: "تواصل عبر واتساب",
      notFoundTitle: "المشروع غير موجود",
      notFoundDesc: "المشروع الذي تبحث عنه غير متوفر أو تم نقله."
    },
    picker: {
      title: "حجز استشارة مجانية",
      subtitle: "اختر التاريخ والوقت الأنسب لك وسنتواصل عبر مكالمة مرئية",
      step1: "١. اختر التاريخ والوقت",
      step2: "٢. بيانات التواصل",
      selectDate: "اختر التاريخ",
      selectTime: "اختر الوقت",
      continueBtn: "متابعة",
      backBtn: "رجوع",
      nameLabel: "الاسم الكامل",
      phoneLabel: "رقم الهاتف / واتساب",
      emailLabel: "البريد الإلكتروني",
      serviceLabel: "الخدمة المطلوبة",
      notesLabel: "ملاحظات أو تفاصيل عن المشروع",
      confirmBtn: "تأكيد حجز الموعد",
      bookedTitle: "تم تأكيد موعدك بنجاح!",
      bookedDesc: "سعدت بحجزك، ستصلك تفاصيل الموعد ورابط الاجتماع مباشرة على بريدك الإلكتروني.",
      closeBtn: "إغلاق"
    },
    projectsData: {
      "proj-1": {
        title: "EG VidsFlow – خط أتمتة الفيديو لـ Google Vids",
        tagline: "محرك سحابي مستقل لإنشاء ورندرة الفيديوهات آلياً بواسطة Playwright و n8n",
        description: "بوت أتمتة عالي الأداء يدير عمليات Google Vids وإنتاج مقاطع الفيديو القصيرة عبر أتمتة المتصفح الخفية ونقاط n8n Webhook.",
        overview: "منظومة برمجية متطورة تلغي الحاجة لتحرير ومونتاج الفيديوهات يدوياً. تعمل الحزمة بلغة Python و Playwright داخل حاويات مشغلات GitHub Actions والسيرفرات السحابية، حيث تستقبل نصوص السيناريو آلياً من خلال n8n Webhooks، وتتحكم بالمتصفح لإنشاء شرائح الفيديو ومزامنة مسارات الصوت وتصدير مقاطع MP4 عالية الجودة مباشرة إلى التخزين السحابي.",
        problem: "استهلاك فرق صناعة المحتوى لساعات طويلة في التجميع اليدوي للشرائح، التعليقات الصوتية، والتنقلات للفيديوهات الترويجية، مما يسبب بطء شديد في دورة الإنتاج.",
        solution: "بناء وكيل أتمتة خفي (Headless Bot) يتفاعل مباشرة مع عناصر Google Vids وواجهات برمجة الفيديو، يحلل ملفات الـ JSON الهيكلية للقصة المصورة، ويراقب حالة الرندرة والتصدير بشكل غير متزامن.",
        role: "مهندس نظم وأتمتة رئيسي. تصميم نصوص تشغيل Playwright، استمرارية الجلسات والكوكيز، استعادة الاتصال التلقائي، وبرمجة نقاط تكامل n8n Webhook.",
        impact: "تقليص زمن إنتاج الفيديو من 90 دقيقة إلى أقل من 8 دقائق، مع القدرة على إنتاج أكثر من 50 مقطع فيديو يومياً بدون أي تدخل بشري.",
        features: [
          { title: "أتمتة المتصفح بدون واجهة (Headless)", desc: "تحكم كامل بعناصر DOM وشريط المونتاج الزمني بواسطة Playwright مع محاكاة الجلسات الحقيقية." },
          { title: "مستقبل أحداث n8n Webhook", desc: "نقاط استقبال فورية لبدء مهام الرندرة مباشرة من أنظمة CMS أو جداول البيانات أو قنوات التيليجرام." },
          { title: "آليات استعادة الجلسات ومقاومة الأخطاء", desc: "حفظ ذكي للكوكيز وإعادة المحاولة التلقائية عند حدوث انقطاع مؤقت في الاتصال السحابي." },
          { title: "توزيع تلقائي متعدد القنوات", desc: "خطوط تصدير مباشرة لرفع المقاطع المنتجة إلى وحدات التخزين السحابية وإرسال الإشعارات الفورية." }
        ]
      },
      "proj-2": {
        title: "Veo AI Automator – محرك أتمتة الفيديو بالذكاء الاصطناعي",
        tagline: "محرك فيديو متعدد الوسائط يؤتمت نماذج Google Veo عبر مشغلات المتصفح المستقلة",
        description: "أداة سحابية تتكامل مع نماذج توليد الفيديو من Google Veo، لإدارة طوابير الأوامر وتوليد المقاطع وتنزيل ملفات MP4 الجاهزة للاستخدام.",
        overview: "منصة تربط بين أقوى نماذج الذكاء الاصطناعي التوليدي للفيديو وسير العمليات المؤتمتة. تقوم المنصة بقراءة دفعات الأوامر (Batch Prompts)، وإرسالها إلى Google Veo عبر مشغلات Python و Playwright، ومتابعة اكتمال عمليات التوليد والتحقق من جودة الملف وتنزيلها آلياً وتخزينها.",
        problem: "تتطلب منصات توليد الفيديو إدخال الأوامر يدوياً والانتظار الطويل لكل مقطع والتنزيل اليدوي، مما يجعل تجارب الإنتاج الضخم صعبة ومرهقة.",
        solution: "تطوير بوت مستقل يدير مصادقة الجلسات بأمان، ينفذ الطلبات بالتوازي، يرصد تقدم التوليد، ويرسل المقاطع النهائية عبر Webhooks تلقائية.",
        role: "المطور الرئيسي ومصمم المنظومة. بناء نصوص الأتمتة، مدير التزامن، تدوير رموز الجلسات، وجدولة مهام GitHub Actions المستمرة.",
        impact: "أتمتة إنتاج مئات المقاطع السينمائية بالذكاء الاصطناعي بشكل كامل بدون الحاجة للجلوس أمام الشاشة.",
        features: [
          { title: "طابور معالجة الأوامر بالدفعات", desc: "جدولة ومعالجة متوازية لعشرات طلبات توليد الفيديو دون أي تدخل بشري." },
          { title: "مراقبة الحالة والتنزيل التلقائي", desc: "فحص دوري ذكي لاكتمال التوليد والتحقق من سلامة الفيديو وتنزيل ملفات MP4 مباشرة." },
          { title: "جدولة المهام عبر CI/CD", desc: "جداول تشغيل Cron مؤتمتة عبر GitHub Actions لإنتاج مقاطع فيديو دورية بانتظام." },
          { title: "إشعارات الـ Artifacts والـ Webhooks", desc: "إرسال تنبيهات لحظية عبر Discord و Telegram مع روابط تحميل ومعاينة فورية للفيديو." }
        ]
      },
      "proj-3": {
        title: "TeleBridge – بوابة وبروكسي API عالي السرعة",
        tagline: "بروكسي عكسي بدون زمن تأخير يربط تدفقات n8n مع Telegram Bot API",
        description: "بروكسي خفيف وفائق السرعة يمرر طلبات Telegram API بشفافية تامة لتجاوز حظر الـ IP وتحديد معدلات الطلبات الإقليمية.",
        overview: "بروكسي سحابي متخصص يضمن استمرارية الاتصال بين منصات الأتمتة (مثل n8n ومستقبلات الـ Webhooks السحابية) والـ API الرسمي لتيليجرام. تم تصميمه بزمن تأخير لا يتعدى بضع أجزاء من الثانية، ليزيل قيود CORS ويعيد توجيه الترويسات ويحمي رموز البوتات مع تجاوز مشاكل حظر مزودي الخدمة.",
        problem: "تواجه منصات الأتمتة مثل n8n انقطاعات متكررة وحظراً لعناوين IP السيرفرات السحابية المشتركة عند إرسال طلبات مكثفة إلى Telegram API.",
        solution: "هندسة بوابة سحابية بدون خادم تعمل كجسر شفاف 1:1 لطلبات تيليجرام، مع إمكانية نشر فورية بخطوة واحدة واستبدال سريع لرابط الـ Base URL.",
        role: "مهندس المعمارية الخلفية. تصميم منطق تمرير الطلبات (Streaming Pipe)، معالجة الطرق المختلفة (POST/GET)، وطبقات النشر السحابي.",
        impact: "نسبة استقرار وجاهزية 99.99%، القضاء التام على أخطاء حظر الـ IP الإقليمية، ومعالجة آلاف الإشعارات يومياً بزمن تأخير أقل من 5ms.",
        features: [
          { title: "تمرير شفاف ومتوافق 1:1 مع API تيليجرام", desc: "دعم كامل لكافة دوال Telegram Bot API بما في ذلك رفع الملفات و Long-Polling والـ Webhooks." },
          { title: "تجاوز حظر العناوين والـ Rate Limits", desc: "توجيه حركة البيانات عبر شبكات CDN السحابية لتفادي الحظر الإقليمي وانقطاع الاتصال." },
          { title: "تكامل فوري بدون إعدادات معقدة", desc: "استبدال مباشر لعنوان api.telegram.org برابط البروكسي في بيانات اعتماد n8n." },
          { title: "سرعة استجابة استثنائية (أقل من 5ms)", desc: "معمارية معالجة خفيفة تعتمد على البث المباشر (Stream Forwarding) دون تخزين مؤقت غير ضروري." }
        ]
      },
      "proj-4": {
        title: "AutoClip Pipeline – خط استخراج المقاطع القصيرة بالذكاء الاصطناعي",
        tagline: "منظومة مؤتمتة متكاملة لتحويل فيديوهات اليوتيوب إلى مقاطع Shorts عمودية جذابة",
        description: "خط معالجة وسائط مؤتمت يعتمد على إضافات المتصفح، وسيناريوهات n8n، وخدمات FastAPI لاكتشاف اللحظات البارزة وقصها رأسياً.",
        overview: "معمارية معالجة وسائط متكاملة لتحويل المحاضرات والبودكاست الطويلة على YouTube إلى مقاطع قصيرة عمودية جاهزة للنشر على TikTok و Shorts. تبدأ الدورة بنقرة زر في المتصفح، فيقوم النظام بتنزيل مسار الصوت، وتفريغه نصياً بـ AI، واكتشاف اللقطات الأكثر جذباً، وقص الفيديو بـ FFmpeg وإضافة النصوص التفاعلية آلياً.",
        problem: "استخراج اللحظات المميزة وقص الفيديوهات الطويلة وتحويلها إلى أبعاد عمودية 9:16 يتطلب مجهوداً يدوياً شاقاً ومونتاجاً يستغرق ساعات.",
        solution: "بناء خط خدمات مايكروسيرفسز بـ FastAPI لمعالجة الفيديو، ونموذج Whisper للتفريغ الصوتي، وخوارزميات NLP لتحديد اللحظات المؤثرة مع فلاتر FFmpeg لتركيز الإطار.",
        role: "مهندس خطوط المعالجة والأنظمة الخلفية. بناء خدمة FastAPI لمعالجة الوسائط، فلاتر الرندرة بـ FFmpeg، نصوص توليد الترجمات، وسيناريو n8n المنظم.",
        impact: "تخفيض زمن إنتاج المقطع من 40 دقيقة إلى أقل من 3 دقائق لكل مقطع قصير، مع معالجة كافة مراحل الوسائط بشكل مستقل تماماً.",
        features: [
          { title: "تشغيل بنقرة واحدة من إضافة المتصفح", desc: "إرسال رابط أي فيديو يوتيوب مباشرة إلى طابور المعالجة بنقرة زر بسيطة." },
          { title: "تفريغ صوتي واكتشاف اللحظات بـ AI", desc: "تحويل الصوت إلى نصوص مع تقييم ذكي لتحديد أكثر 30-60 ثانية إثارة وجذباً للجمهور." },
          { title: "إعادة تأطير عمودي 9:16 وترجمة حركية", desc: "قص ذكي يركز على المتحدث تلقائياً مع حرق نصوص الترجمة المتزامنة داخل الفيديو." },
          { title: "معمارية مايكروسيرفسز سحابية", desc: "عمال معالجة معزولون في حاويات Docker قابلة للتوسع لمعالجة مهام متعددة بالتوازي." }
        ]
      },
      "proj-5": {
        title: "GeminiScraper – أكشن استخراج وتحليل الويب بالذكاء الاصطناعي",
        tagline: "استخراج مستقل وتوليد محتوى متعدد الوسائط بدمج Playwright مع نماذج Google Gemini",
        description: "GitHub Action مستقل يجمع بين أتمتة Playwright الخفية ونماذج Google Gemini لاستخراج البيانات المعقدة وتحليل الصور والتقارير الفورية.",
        overview: "أداة للأتمتة تسحب صفحات الويب الديناميكية المعقدة، وتستخرج البيانات متعددة الوسائط (نصوص، لقطات شاشة، وهياكل UI)، وتمررها لـ Gemini لتوليد تقارير تحليلية ومحتوى جاهز مع إرسال إشعارات n8n Webhook تلقائية.",
        problem: "تعتمد مواقع SPA الحديثة على الجافاسكريبت والكوكيز المعقدة مما يفشل أدوات السكرابينج التقليدية في قراءة محتواها.",
        solution: "تطوير سكرابر خفي بـ Playwright يحاكي المستخدم الحقيقي ويسجل لقطات الشاشة وشجرة الـ DOM ويمررها لـ Gemini لاستخراج بيانات JSON نظيفة.",
        role: "المطور والمصمم الرئيسي. برمجة مشغل المتصفح، صياغة أوامر نماذج Gemini، إدارة حفظ المخرجات وربط الـ Webhooks.",
        impact: "استخراج بيانات دقيق بنسبة 99.4% مع تخطي حماية مكافحة البوتات وبدون أي صيانة يدوية.",
        features: [
          { title: "التقاط صور ومحتوى الـ SPA الخفي", desc: "رندرة كاملة للصفحات مع التمرير التلقائي وحفظ لقطات الشاشة وتنظيف الـ DOM." },
          { title: "ذكاء Gemini متعدد الوسائط", desc: "تحليل بصري ونصي يحول بيانات الويب غير المنظمة إلى نماذج JSON مهيكلة." },
          { title: "أكشن متوافق مع GitHub Actions", desc: "تشغيل سلس على سيرفرات GitHub بمواعيد مجدولة أو عبر Webhooks مع حفظ الـ Artifacts." },
          { title: "ترحيل لحظي عبر n8n Webhook", desc: "إرسال البيانات المستخرجة مباشرة لسيناريوهات n8n لحفظها بقواعد البيانات أو تنبيه الفرق." }
        ]
      },
      "proj-6": {
        title: "EduPlatform – منصة التعلم التفاعلية بالذكاء الاصطناعي",
        tagline: "منصة تعليمية متطورة مع نظام تدريس ومتابعة لحظي مدعوم بـ Google AI Studio",
        description: "تطبيق ويب متكامل مبني بـ Next.js و TypeScript متصل بـ Google AI Studio لتوليد الاختبارات وملخصات الدروس ومتابعة تقدم الطلاب.",
        overview: "تطبيق ويب تعليمي يقدم مسارات تعلم مخصصة لكل طالب باستخدام الذكاء الاصطناعي، يولد اختبارات تفاعلية فورية وشروحات مخصصة بناءً على مستوى استيعاب الطالب.",
        problem: "جمود المنصات التعليمية التقليدية وافتقارها للتفاعل اللحظي مما يقلل من حماس الطلاب ومعدلات إكمال الدروس.",
        solution: "تطوير تطبيق Next.js متجاوب مع لوحات تحكم إحصائية للطلاب، ومساعد ذكي يتدفق الردود لحظياً عبر Google AI Studio.",
        role: "مهندس Full-Stack. بناء معمارية Next.js App Router، المكونات المتجاوبة، ربط تدفق AI Studio، ونمذجة قواعد البيانات.",
        impact: "توليد أسئلة وشروحات في أجزاء من الثانية مع تجربة مستخدم سلسة وعالية السرعة على كافة الأجهزة.",
        features: [
          { title: "توليد الكورسات والاختبارات الذكية", desc: "محرك تقييم تفاعلي يولد أسئلة متعددة الخيارات وشروحات فورية عند الطلب." },
          { title: "لوحة تحكم وتحليلات تفاعلية", desc: "متابعة تقدم الطالب برسوم بيانية واضحة وشارات إنجاز تحفيزية." },
          { title: "معمارية برمجية آمنة بـ TypeScript", desc: "كود منظم بالكامل يعتمد على Next.js Server Actions وعقود TypeScript الصارمة." },
          { title: "مساعد تعليمي يتدفق بالبث المباشر (Streaming)", desc: "استجابات فورية متدفقة عبر Google AI Studio للإجابة عن أسئلة الطلاب لحظياً." }
        ]
      }
    }
  }
};
