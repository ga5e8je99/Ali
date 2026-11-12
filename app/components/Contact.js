"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Picker from "./Picker";
import { useSiteData } from "@/lib/useSiteData";
import { useLanguage } from "@/lib/LanguageContext";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiMessageSquare,
  FiUser,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaDiscord, FaWhatsapp } from "react-icons/fa6";

export default function ContactSection() {
  const { profile, addMessage } = useSiteData();
  const { dict, isRTL } = useLanguage();
  const t = dict?.contact || {};

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (addMessage) {
        addMessage({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        });
      }
      await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const userEmail = profile?.email || "alisaad.dev@gmail.com";
  const userPhone = profile?.phone || "+20 109 739 0799";
  const userWhatsapp = (profile?.whatsapp || "201097390799").replace(/[^0-9]/g, "");

  const contactInfo = [
    {
      icon: <FiMail />,
      key: "email",
      title: t.emailCard || "Email",
      value: userEmail,
      color: "from-indigo-600 to-purple-600",
      link: `mailto:${userEmail}`,
    },
    {
      icon: <FiPhone />,
      key: "phone",
      title: t.phoneCard || "Phone / WhatsApp",
      value: userPhone,
      color: "from-purple-600 to-pink-600",
      link: `tel:${userPhone.replace(/\s+/g, "")}`,
    },
    {
      icon: <FiMapPin />,
      key: "location",
      title: t.locationCard || "Location",
      value: t.locationVal || profile?.location || "Egypt",
      color: "from-blue-600 to-indigo-600",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: profile?.socials?.github || "https://github.com/expher510",
      color:
        "hover:bg-purple-900/60 hover:border-purple-500 hover:text-white text-purple-300",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: profile?.socials?.linkedin || "https://www.linkedin.com/in/ali-saad-b17941401/",
      color:
        "hover:bg-blue-600 hover:border-blue-600 hover:text-white text-blue-400",
    },
    {
      name: "Discord",
      icon: <FaDiscord />,
      url: profile?.socials?.discord || "https://discord.gg/4zCVhgDFH",
      color:
        "hover:bg-indigo-600 hover:border-indigo-600 hover:text-white text-indigo-300",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: `https://wa.me/${userWhatsapp}`,
      color:
        "hover:bg-emerald-600 hover:border-emerald-600 hover:text-white text-emerald-400",
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
      id="contact"
      className="py-20 bg-[#070914] relative transition-colors duration-500"
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
            <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-indigo-500 to-transparent"></div>
            <span className="text-indigo-400 font-mono text-sm tracking-wider">
              {t.sectionBadge || "GET IN TOUCH"}
            </span>
            <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-indigo-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.sectionTitle}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-300 to-cyan-400">
              {t.sectionTitleHighlight}
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Social */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Contact Information */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FiMessageSquare className="text-indigo-400" />
                {t.infoTitle || "Contact Information"}
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-linear-to-b from-gray-900/60 to-indigo-950/20 border border-indigo-950/70 rounded-xl hover:border-indigo-500/50 transition-all duration-300 shadow-md"
                  >
                    <a
                      href={info.link}
                      className="flex items-center gap-4 group flex-1"
                    >
                      <div
                        className={`p-3 rounded-lg bg-linear-to-r ${info.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-md`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">
                          {info.title}
                        </div>
                        <div className="text-white font-medium group-hover:text-indigo-300 transition-colors" dir="ltr">
                          {info.value}
                        </div>
                      </div>
                    </a>
                    {info.key !== "location" && (
                      <button
                        type="button"
                        onClick={() => handleCopy(info.value, info.key)}
                        className="px-3 py-1.5 text-xs font-mono rounded-lg bg-gray-800/80 text-gray-300 hover:bg-indigo-500/20 hover:text-indigo-300 border border-indigo-900/50 transition-all shrink-0 ml-3 cursor-pointer"
                      >
                        {copiedKey === info.key ? (t.copiedBtn || "Copied!") : (t.copyBtn || "Copy")}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FiUser className="text-indigo-400" />
                {t.socialsTitle || "Connect With Me"}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center justify-center p-4 border border-indigo-950/70 bg-gray-900/50 rounded-xl transition-all duration-300 shadow-md ${social.color}`}
                  >
                    <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div variants={fadeInUp}>
              <div className="bg-linear-to-br from-gray-900/70 to-indigo-950/30 border border-indigo-950/70 rounded-xl p-6 shadow-xl">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 text-white">
                    <FiCheckCircle className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">
                      {t.availTitle || "Current Availability"}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {t.availSubtitle || "Taking on new projects"}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">{t.responseTime || "Response Time"}</span>
                    <span className="text-indigo-400 font-medium">
                      {t.responseTimeVal || "Within 24 hours"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">{t.projectTypes || "Project Types"}</span>
                    <span className="text-indigo-400 font-medium">
                      {t.projectTypesVal || "APIs, Back-End & Automation"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">{t.timezone || "Timezone"}</span>
                    <span className="text-indigo-400 font-medium">
                      {t.timezoneVal || "GMT+2 (Egypt)"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="bg-linear-to-b from-gray-900/70 to-indigo-950/30 border border-indigo-950/70 rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                {t.formTitle || "Send me a message"}
              </h3>
              <p className="text-gray-400 mb-8">
                {t.formSubtitle || "Fill out the form below and I'll get back to you as soon as possible"}
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex p-4 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 mb-6 text-white shadow-lg">
                    <FiCheckCircle className="text-white text-3xl" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {t.msgSentTitle || "Message Sent!"}
                  </h4>
                  <p className="text-gray-300 mb-6">
                    {t.msgSentDesc || "Thank you for your message. I'll get back to you within 24 hours."}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer font-medium"
                  >
                    {t.sendAnother || "Send another message"}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        <span className="flex items-center gap-1.5">
                          <FiUser className="text-indigo-400" />
                          {t.nameLabel || "Your Name"}
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/60 border border-indigo-950/70 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                        placeholder={t.namePlaceholder || "John Doe"}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        <span className="flex items-center gap-1.5">
                          <FiMail className="text-indigo-400" />
                          {t.emailLabel || "Email Address"}
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/60 border border-indigo-950/70 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                        placeholder={t.emailPlaceholder || "john@example.com"}
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      <span className="flex items-center gap-1.5">
                        <FiFileText className="text-indigo-400" />
                        {t.subjectLabel || "Subject"}
                      </span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/60 border border-indigo-950/70 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                      placeholder={t.subjectPlaceholder || "Automation or API Project Inquiry"}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      <span className="flex items-center gap-1.5">
                        <FiMessageSquare className="text-indigo-400" />
                        {t.messageLabel || "Message"}
                      </span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-900/60 border border-indigo-950/70 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 resize-none"
                      placeholder={t.messagePlaceholder || "Describe your project or system requirements..."}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-gray-400 text-sm">
                      <p>{t.repliesWithin || "Typically replies within 24 hours"}</p>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group px-8 py-3 bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-medium rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer shadow-lg shadow-indigo-500/25"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          {t.sending || "Sending..."}
                        </>
                      ) : (
                        <>
                          <span>{t.sendBtn || "Send Message"}</span>
                          <FiSend className={`${isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"} transition-transform duration-300`} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map/CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-linear-to-b from-gray-900/60 to-indigo-950/20 border border-indigo-950/70 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              {/* Map Placeholder */}
              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-linear-to-br from-[#0a0e1f] to-[#04060d] flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="inline-flex p-4 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 mb-4 text-white shadow-lg">
                      <FiMapPin className="text-white text-2xl" />
                    </div>
                    <h4 className="text-white font-bold text-xl mb-2">
                      {t.basedInTitle || "Based in Egypt"}
                    </h4>
                    <p className="text-gray-400">
                      {t.basedInSubtitle || "Working with clients and teams worldwide"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact CTA */}
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t.quickChatTitle || "Prefer a quick chat?"}
                </h3>
                <p className="text-gray-300 mb-6">
                  {t.quickChatDesc || "Message directly on WhatsApp or book a quick consultation call"}
                </p>
                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={() => setIsCalendarOpen(true)}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-medium rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/25 cursor-pointer"
                  >
                    {t.scheduleCall || "Schedule a Call"}
                  </button>
                  <Link
                    href={`https://wa.me/${userWhatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 border-2 border-indigo-500/40 text-gray-200 font-medium rounded-lg hover:border-indigo-400 hover:text-indigo-300 transition-all duration-300 shadow-sm"
                  >
                    {t.whatsappChat || "WhatsApp Chat"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Picker openProp={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </section>
  );
}
