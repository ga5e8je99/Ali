"use client";

import * as React from "react";
import dayjs from "dayjs";
import Dialog from "@mui/material/Dialog";
import {
  FiCalendar,
  FiClock,
  FiCheckCircle,
  FiX,
  FiUser,
  FiPhone,
  FiMail,
  FiChevronLeft,
  FiChevronRight,
  FiVideo,
  FiArrowRight,
  FiArrowLeft
} from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { useSiteData } from "@/lib/useSiteData";
import { useLanguage } from "@/lib/LanguageContext";

const PRESET_TIME_SLOTS = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "01:30 PM",
  "03:00 PM",
  "04:30 PM",
  "06:00 PM",
  "07:30 PM"
];

export default function Picker({ openProp, onClose }) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const { profile, addAppointment } = useSiteData();
  const { dict, isRTL } = useLanguage();
  const t = dict?.picker || {};

  // Calendar State
  const [currentMonth, setCurrentMonth] = React.useState(dayjs());
  const [selectedDay, setSelectedDay] = React.useState(dayjs().add(1, "day"));
  const [selectedTimeSlot, setSelectedTimeSlot] = React.useState("02:00 PM");
  const [customTime, setCustomTime] = React.useState("");
  const [isCustomTimeOpen, setIsCustomTimeOpen] = React.useState(false);

  // Mobile step state (1: Pick date/time, 2: Enter info)
  const [mobileStep, setMobileStep] = React.useState(1);

  // Booking Form State
  const [clientData, setClientData] = React.useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
    service: "Back-End & Microservices (Python / FastAPI)"
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const isOpen = Boolean(openProp) || internalOpen;

  const handleOpen = () => {
    setInternalOpen(true);
    setMobileStep(1);
  };

  const handleClose = () => {
    setInternalOpen(false);
    if (onClose) onClose();
    setTimeout(() => {
      setIsSubmitted(false);
      setMobileStep(1);
      setErrorMsg("");
      setClientData({
        name: "",
        phone: "",
        email: "",
        notes: "",
        service: "Back-End & Microservices (Python / FastAPI)"
      });
    }, 300);
  };

  // Month Navigation
  const prevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const nextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  // Generate Calendar Days Grid
  const generateCalendarDays = () => {
    const startOfMonth = currentMonth.startOf("month");
    const endOfMonth = currentMonth.endOf("month");
    const daysInMonth = currentMonth.daysInMonth();
    const startDayOfWeek = startOfMonth.day(); // 0 = Sunday

    const days = [];

    // Empty cells for days before the 1st of month
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(null);
    }

    // Days of current month
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(currentMonth.date(d));
    }

    return days;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientData((prev) => ({ ...prev, [name]: value }));
  };

  const effectiveTime = customTime || selectedTimeSlot;
  const fullFormattedDate = `${selectedDay.format("dddd, MMMM D, YYYY")} at ${effectiveTime}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clientData.name || !clientData.phone) {
      setErrorMsg(isRTL ? "يرجى كتابة الاسم ورقم الهاتف/واتساب" : "Please enter your name and phone number");
      return;
    }

    setErrorMsg("");

    // Store in Centralized State / API
    addAppointment({
      ...clientData,
      date: selectedDay.format("YYYY-MM-DD"),
      time: effectiveTime,
      formattedDisplay: fullFormattedDate
    });

    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const nameStr = clientData.name ? `\n👤 Name: ${clientData.name}` : "";
    const phoneStr = clientData.phone ? `\n📞 Phone: ${clientData.phone}` : "";
    const serviceStr = clientData.service ? `\n💼 Service: ${clientData.service}` : "";
    const notesStr = clientData.notes ? `\n📝 Notes: ${clientData.notes}` : "";

    const whatsappNum = (profile?.whatsapp || "201097390799").replace(/[^0-9]/g, "");
    const message = `Hello Ali! I would like to schedule a consultation/meeting:\n📅 ${fullFormattedDate}${nameStr}${phoneStr}${serviceStr}${notesStr}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNum}?text=${encoded}`, "_blank");
  };

  const createGoogleCalendarLink = () => {
    const formattedDateOnly = selectedDay.format("YYYYMMDD");
    const title = encodeURIComponent("Consultation with Ali Saad");
    const details = encodeURIComponent(
      `Systems & Automation discussion regarding ${clientData.service || "Project"}`
    );
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=${formattedDateOnly}/${formattedDateOnly}`;
  };

  const today = dayjs();

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white p-4 rounded-full shadow-[0_0_25px_rgba(99,102,241,0.45)] hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] transition-all duration-300 transform hover:scale-110 active:scale-95 group border border-indigo-400/30 cursor-pointer"
          aria-label="Open date and time picker"
          title="Schedule a Call"
        >
          <div className="relative">
            <FiCalendar className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-indigo-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-indigo-400 rounded-full" />
          </div>
        </button>
      )}

      {/* Modal Dialog */}
      <Dialog
        open={Boolean(isOpen)}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "#070914",
            backgroundImage:
              "radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0, transparent 60%)",
            color: "#ffffff",
            borderRadius: "24px",
            border: "1px solid rgba(129, 140, 248, 0.25)",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9)",
            overflow: "hidden",
            margin: { xs: "8px", sm: "16px" },
            maxHeight: "94vh"
          }
        }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-indigo-950/70 bg-[#070914]/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <FiCalendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide flex items-center gap-2">
                {t.title || "Schedule a Consultation"}
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {isRTL ? "مكالمة استشارية مجانية" : "Free 20-Min Call"}
                </span>
              </h3>
              <p className="text-xs text-gray-400">
                {t.subtitle || "Choose a suitable date and time to discuss your project"}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-white rounded-xl hover:bg-gray-800/60 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-0 overflow-y-auto max-h-[calc(94vh-75px)]">
          {isSubmitted ? (
            /* Success Confirmation Screen */
            <div className="py-12 px-6 text-center space-y-6 max-w-lg mx-auto">
              <div className="inline-flex p-4 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/40 animate-bounce">
                <FiCheckCircle className="w-12 h-12" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white">Meeting Requested!</h4>
                <p className="text-gray-300 text-sm">
                  Thank you, <span className="text-indigo-400 font-semibold">{clientData.name}</span>! Your consultation has been scheduled for:
                </p>
                <div className="inline-block mt-3 px-5 py-2.5 bg-gray-900 border border-indigo-500/30 rounded-xl text-indigo-300 font-mono text-sm shadow-inner">
                  📅 {fullFormattedDate}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={createGoogleCalendarLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <FiCalendar /> Add to Google Calendar
                </a>
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <SiWhatsapp /> Confirm via WhatsApp
                </button>
              </div>

              <div>
                <button
                  onClick={handleClose}
                  className="text-xs text-gray-500 hover:text-gray-300 underline font-mono cursor-pointer"
                >
                  {t.closeBtn || "Close window"}
                </button>
              </div>
            </div>
          ) : (
            /* Dual Pane Booking Layout */
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
              {/* Left Pane: Interactive Calendar & Time Slots */}
              <div
                className={`lg:col-span-7 p-6 border-b lg:border-b-0 lg:border-r border-indigo-950/70 ${
                  mobileStep === 2 ? "hidden lg:block" : "block"
                }`}
              >
                {/* Month Navigator */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-white tracking-wide">
                      {currentMonth.format("MMMM YYYY")}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      GMT+2
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={prevMonth}
                      className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-indigo-500/50 transition-colors cursor-pointer"
                      aria-label="Previous month"
                    >
                      <FiChevronLeft className="w-4 h-4 rtl:rotate-180" />
                    </button>
                    <button
                      type="button"
                      onClick={nextMonth}
                      className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-indigo-500/50 transition-colors cursor-pointer"
                      aria-label="Next month"
                    >
                      <FiChevronRight className="w-4 h-4 rtl:rotate-180" />
                    </button>
                  </div>
                </div>

                {/* Days of Week Header */}
                <div className="grid grid-cols-7 gap-1 text-center text-xs font-mono text-gray-400 mb-2">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((dayName, idx) => (
                    <div
                      key={dayName}
                      className={idx === 5 || idx === 6 ? "text-indigo-400/80" : ""}
                    >
                      {dayName}
                    </div>
                  ))}
                </div>

                {/* Calendar Days Matrix */}
                <div className="grid grid-cols-7 gap-1.5 mb-6">
                  {generateCalendarDays().map((d, index) => {
                    if (!d) {
                      return <div key={`empty-${index}`} className="h-9 sm:h-10" />;
                    }

                    const isPast = d.isBefore(today, "day");
                    const isSelected = selectedDay && d.isSame(selectedDay, "day");
                    const isToday = d.isSame(today, "day");

                    return (
                      <button
                        type="button"
                        key={d.toISOString()}
                        disabled={isPast}
                        onClick={() => setSelectedDay(d)}
                        className={`h-9 sm:h-10 rounded-xl text-xs sm:text-sm font-medium transition-all flex flex-col items-center justify-center relative cursor-pointer ${
                          isPast
                            ? "text-gray-600 cursor-not-allowed opacity-40"
                            : isSelected
                            ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-[0_0_15px_rgba(99,102,241,0.6)] scale-105 z-10"
                            : "text-gray-200 hover:bg-indigo-500/15 hover:text-indigo-300"
                        } ${
                          isToday && !isSelected
                            ? "border border-indigo-500/50 text-indigo-300 font-bold"
                            : ""
                        }`}
                      >
                        <span>{d.date()}</span>
                        {isToday && !isSelected && (
                          <span className="w-1 h-1 rounded-full bg-indigo-400 absolute bottom-1"></span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Time Slots Area */}
                <div className="border-t border-indigo-950/70 pt-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase text-gray-400 flex items-center gap-1.5">
                      <FiClock className="text-indigo-400" /> Select Time Slot (GMT+2)
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsCustomTimeOpen(!isCustomTimeOpen)}
                      className="text-[11px] text-indigo-400 hover:underline cursor-pointer font-mono"
                    >
                      {isCustomTimeOpen ? "Select preset slots" : "Type custom time"}
                    </button>
                  </div>

                  {isCustomTimeOpen ? (
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value={customTime}
                        onChange={(e) => setCustomTime(e.target.value)}
                        placeholder="e.g. 05:15 PM"
                        className="px-3.5 py-2 bg-gray-900 border border-indigo-500/40 rounded-xl text-white text-sm outline-none font-mono"
                      />
                      <span className="text-xs text-gray-400 font-mono">
                        Selected: <strong className="text-indigo-300">{effectiveTime}</strong>
                      </span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {PRESET_TIME_SLOTS.map((slot) => {
                        const isSlotSelected = selectedTimeSlot === slot && !customTime;
                        return (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => {
                              setSelectedTimeSlot(slot);
                              setCustomTime("");
                            }}
                            className={`py-2 px-2.5 rounded-xl text-xs font-mono transition-all text-center cursor-pointer ${
                              isSlotSelected
                                ? "bg-indigo-600 text-white font-bold shadow-md shadow-indigo-500/30 scale-102"
                                : "bg-gray-900/90 text-gray-300 border border-gray-800 hover:border-indigo-500/40 hover:text-white"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Mobile Next Step Button */}
                <div className="mt-6 lg:hidden">
                  <button
                    type="button"
                    onClick={() => setMobileStep(2)}
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 cursor-pointer"
                  >
                    <span>{t.continueBtn || "Continue"}</span>
                    <FiArrowRight className={isRTL ? "rotate-180" : ""} />
                  </button>
                </div>
              </div>

              {/* Right Pane: Client Information Form */}
              <div
                className={`lg:col-span-5 p-6 bg-[#070914]/60 flex flex-col justify-between ${
                  mobileStep === 1 ? "hidden lg:flex" : "flex"
                }`}
              >
                <div>
                  {/* Mobile Back Button */}
                  <div className="lg:hidden mb-4">
                    <button
                      type="button"
                      onClick={() => setMobileStep(1)}
                      className="text-xs text-indigo-400 flex items-center gap-1.5 hover:underline cursor-pointer"
                    >
                      <FiArrowLeft className={isRTL ? "rotate-180" : ""} />
                      <span>{t.backBtn || "Back to Date & Time"}</span>
                    </button>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-gray-900/80 to-gray-900 border border-indigo-500/30 mb-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-indigo-400 font-mono">
                      <span>Selected Schedule</span>
                      <span className="flex items-center gap-1">
                        <FiVideo /> Google Meet
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white">
                      {selectedDay.format("dddd, MMMM D, YYYY")}
                    </div>
                    <div className="text-xs font-mono text-indigo-300 flex items-center gap-1.5">
                      <FiClock className="w-3.5 h-3.5" />
                      <span>{effectiveTime}</span>
                    </div>
                  </div>

                  {/* Booking Fields */}
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        <span className="flex items-center gap-1">
                          <FiUser className="text-indigo-400" /> {t.nameLabel || "Full Name"} *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={clientData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-800 rounded-xl text-white text-xs sm:text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        <span className="flex items-center gap-1">
                          <FiPhone className="text-indigo-400" /> {t.phoneLabel || "Phone or WhatsApp"} *
                        </span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={clientData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+20 123 456 7890"
                        dir="ltr"
                        className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-800 rounded-xl text-white text-xs sm:text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        <span className="flex items-center gap-1">
                          <FiMail className="text-indigo-400" /> {t.emailLabel || "Email (Optional)"}
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={clientData.email}
                        onChange={handleInputChange}
                        placeholder="name@example.com"
                        dir="ltr"
                        className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-800 rounded-xl text-white text-xs sm:text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        {t.serviceLabel || "Topic / Service"}
                      </label>
                      <select
                        name="service"
                        value={clientData.service}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-800 rounded-xl text-white text-xs sm:text-sm focus:border-indigo-500 outline-none transition-all"
                      >
                        <option value="Back-End & Microservices (Python / FastAPI)">
                          {isRTL ? "الأنظمة الخلفية والمايكروسيرفسز (Python / FastAPI / Rust)" : "Back-End & Microservices (Python / FastAPI / Rust)"}
                        </option>
                        <option value="Workflow Automation & Web Scraping (Playwright / n8n)">
                          {isRTL ? "أتمتة المتصفحات واستخراج البيانات (Playwright / n8n)" : "Workflow Automation & Web Scraping (Playwright / n8n)"}
                        </option>
                        <option value="DevOps & Cloud Pipelines (Docker / CI/CD)">
                          {isRTL ? "الـ DevOps ونشر الحاويات (Docker / CI/CD)" : "DevOps & Cloud Pipelines (Docker / CI/CD)"}
                        </option>
                        <option value="General Systems Consultation">
                          {isRTL ? "استشارة معمارية وأنظمة عامة" : "General Systems Consultation"}
                        </option>
                      </select>
                    </div>

                    {errorMsg && (
                      <p className="text-xs text-rose-400 font-medium">{errorMsg}</p>
                    )}

                    {/* Action Buttons */}
                    <div className="pt-3 space-y-2">
                      <button
                        type="submit"
                        className="w-full py-2.5 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <FiCalendar className="w-4 h-4" /> {t.confirmBtn || "Confirm Appointment"}
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppBooking}
                        className="w-full py-2.5 px-4 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs sm:text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <SiWhatsapp className="w-4 h-4" /> {isRTL ? "الحجز المباشر عبر واتساب" : "Book Directly via WhatsApp"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </Dialog>
    </>
  );
}
