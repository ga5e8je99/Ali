import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const geistSans = localFont({
  src: "../public/fonts/geist.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const geistMono = localFont({
  src: "../public/fonts/geist-mono.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  fallback: ["monospace"],
});

const sacramento = localFont({
  src: "../public/font/Yellowtail-Regular.ttf",
  variable: "--font-sacramento",
  display: "swap",
  fallback: ["cursive"],
});

export const metadata = {
  metadataBase: new URL("https://alisaad.dev"),
  title: {
    default: "Ali Saad | Back-End & Automation Engineer",
    template: "%s | Ali Saad",
  },
  description:
    "Portfolio of Ali Saad - Back-End and Automation Engineer specializing in Python, FastAPI, Rust, Docker, Playwright, n8n, and scalable automation pipelines.",
  keywords: [
    "Ali Saad",
    "Back-End Developer",
    "Automation Engineer",
    "Python Developer",
    "FastAPI",
    "Rust",
    "Playwright",
    "Docker",
    "n8n",
    "Web Scraping",
    "CI/CD",
    "Portfolio",
  ],
  authors: [{ name: "Ali Saad", url: "https://github.com/expher510" }],
  creator: "Ali Saad",
  alternates: {
    canonical: "https://alisaad.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alisaad.dev",
    title: "Ali Saad | Back-End & Automation Engineer",
    description:
      "Back-End and Automation Engineer specializing in Python, FastAPI, Rust, Docker, Playwright, and scalable automation pipelines.",
    siteName: "Ali Saad Portfolio",
    images: [
      {
        url: "/ali-saad.webp",
        width: 1200,
        height: 630,
        alt: "Ali Saad - Back-End & Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Saad | Back-End & Automation Engineer",
    description:
      "Back-End and Automation Engineer specializing in Python, FastAPI, Rust, Docker, Playwright, and scalable automation pipelines.",
    images: ["/ali-saad.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    google: "notranslate",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ali Saad",
  jobTitle: "Back-End & Automation Engineer",
  url: "https://alisaad.dev",
  image: "https://alisaad.dev/ali-saad.webp",
  sameAs: [
    "https://github.com/expher510",
    "https://www.linkedin.com/in/ali-saad-b17941401/"
  ],
  knowsAbout: [
    "Python",
    "FastAPI",
    "Rust",
    "Django",
    "Playwright",
    "Docker",
    "n8n",
    "Web Scraping",
    "Microservices",
    "PostgreSQL",
    "Redis",
    "TypeScript",
    "REST APIs"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="notranslate" translate="no" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${sacramento.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ul className="background" aria-hidden="true">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
