// ============================================================
// SASTRAVA — Courses.jsx
// Full Courses page: filter bar + course cards + enrollment modal
// Stack: React 18 + Framer Motion + Tailwind + PageHero
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, BarChart2, BookOpen, ChevronRight, CheckCircle } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PageHero } from "../components/sections/PageHero";

// ─── Brand Tokens ─────────────────────────────────────────────
const C = {
  navy:       "#0D2B45",
  teal:       "#0E7C7B",
  tealLight:  "#1FB8B8",
  gold:       "#C9A84C",
  goldLight:  "#F0C96A",
  offwhite:   "#F0EDE6",
  surface:    "#0A1F33",
  surface2:   "#112840",
  muted:      "#4A6580",
};

// ─── Course Data ───────────────────────────────────────────────
const COURSES = [
  // ── CYBERSECURITY ──
  {
    id: "cyber-foundation",
    category: "Cybersecurity",
    level: "Foundation",
    title: "Cybersecurity Essentials",
    subtitle: "Your first step into digital defense",
    outcome: "Build strong security fundamentals & land entry-level roles",
    rating: 4.8,
    students: "1,200+",
    duration: "6 Weeks",
    modules: 8,
    topics: [
      "Networking Fundamentals",
      "Linux & Command Line",
      "Intro to Ethical Hacking",
    ],
    badge: "🔐",
    accentColor: C.teal,
    glowColor: "rgba(14,124,123,0.25)",
    tag: "FOUNDATION",
  },
  {
    id: "cyber-professional",
    category: "Cybersecurity",
    level: "Professional",
    title: "Penetration Testing Pro",
    subtitle: "Real-world offensive security skills",
    outcome: "Master penetration testing & become security expert",
    rating: 4.9,
    students: "850+",
    duration: "10 Weeks",
    modules: 14,
    topics: [
      "Web App Penetration Testing",
      "Network Exploitation",
      "Vulnerability Assessment",
    ],
    badge: "⚔️",
    accentColor: C.teal,
    glowColor: "rgba(14,124,123,0.25)",
    tag: "PROFESSIONAL",
    popular: true,
  },
  {
    id: "cyber-expert",
    category: "Cybersecurity",
    level: "Expert",
    title: "SOC & Threat Intelligence",
    subtitle: "Elite-level defense and response",
    outcome: "Lead security operations & detect advanced threats",
    rating: 4.7,
    students: "420+",
    duration: "12 Weeks",
    modules: 18,
    topics: [
      "Security Operations Center",
      "Malware Analysis",
      "Incident Response",
    ],
    badge: "🛡️",
    accentColor: C.teal,
    glowColor: "rgba(14,124,123,0.25)",
    tag: "EXPERT",
  },

  // ── AI & ML ──
  {
    id: "aiml-foundation",
    category: "AI & ML",
    level: "Foundation",
    title: "AI & ML Fundamentals",
    subtitle: "From zero to your first model",
    outcome: "Build your first ML models & understand AI/ML core concepts",
    rating: 4.8,
    students: "1,500+",
    duration: "6 Weeks",
    modules: 8,
    topics: [
      "Python for Data Science",
      "Statistics & Probability",
      "Supervised Learning",
    ],
    badge: "🤖",
    accentColor: "#7C3AED",
    glowColor: "rgba(124,58,237,0.25)",
    tag: "FOUNDATION",
  },
  {
    id: "aiml-professional",
    category: "AI & ML",
    level: "Professional",
    title: "Deep Learning & LLMs",
    subtitle: "Build and fine-tune intelligent systems",
    outcome: "Fine-tune LLMs & build production-ready AI systems",
    rating: 4.9,
    students: "920+",
    duration: "10 Weeks",
    modules: 14,
    topics: [
      "Deep Neural Networks",
      "Computer Vision (CNNs)",
      "NLP & Transformers",
    ],
    badge: "🧠",
    accentColor: "#7C3AED",
    glowColor: "rgba(124,58,237,0.25)",
    tag: "PROFESSIONAL",
    popular: true,
  },
  {
    id: "aiml-expert",
    category: "AI & ML",
    level: "Expert",
    title: "MLOps & Production AI",
    subtitle: "Ship AI systems that scale",
    outcome: "Deploy & scale ML models in production environments",
    rating: 4.8,
    students: "580+",
    duration: "12 Weeks",
    modules: 16,
    topics: [
      "ML Pipelines & Automation",
      "Model Deployment (Docker/K8s)",
      "Monitoring & Drift Detection",
    ],
    badge: "🚀",
    accentColor: "#7C3AED",
    glowColor: "rgba(124,58,237,0.35)",
    tag: "EXPERT",
  },
];

const FILTERS = ["All", "Cybersecurity", "AI & ML"];
const LEVELS  = ["All Levels", "Foundation", "Professional", "Expert"];

const LEVEL_META = {
  Foundation:   { color: C.tealLight,  bg: "rgba(31,184,184,0.12)" },
  Professional: { color: C.gold,       bg: "rgba(201,168,76,0.12)" },
  Expert:       { color: "#F87171",    bg: "rgba(248,113,113,0.12)" },
};

// ─── Enrollment Modal ──────────────────────────────────────────
function EnrollmentModal({ course, onClose }) {
  const [step, setStep]       = useState(1); // 1 = form, 2 = success
  const [form, setForm]       = useState({
    name: "", email: "", phone: "",
    status: "", source: "", message: "",
  });
  const [errors, setErrors]   = useState({});
  const [shaking, setShaking] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
                             e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.status)       e.status = "Please select your status";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      return;
    }
    // TODO: emailjs.send("SERVICE_ID", "TEMPLATE_enrollment", { ...form, course: course.title }, "PUBLIC_KEY")
    setStep(2);
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: C.surface,
    border: `1px solid ${errors[field] ? "#F87171" : "rgba(201,168,76,0.2)"}`,
    borderRadius: 10,
    padding: "12px 16px",
    color: C.offwhite,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  });

  const labelStyle = {
    display: "block",
    color: C.muted,
    fontSize: 12,
    fontFamily: "'Space Mono', monospace",
    letterSpacing: "0.1em",
    marginBottom: 6,
    textTransform: "uppercase",
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(10,31,51,0.85)",
          backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "20px",
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={shaking
            ? { scale: 1, opacity: 1, y: 0, x: [0,10,-10,10,-6,0] }
            : { scale: 1, opacity: 1, y: 0, x: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          transition={{ type: "spring", damping: 20 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: C.surface2,
            border: `1px solid rgba(201,168,76,0.3)`,
            borderRadius: 20,
            width: "100%", maxWidth: 520,
            padding: "32px",
            position: "relative",
            boxShadow: `0 0 60px rgba(201,168,76,0.15)`,
          }}
        >
          {/* Close */}
          <button onClick={onClose} style={{
            position: "absolute", top: 20, right: 20,
            background: "rgba(255,255,255,0.06)", border: "none",
            borderRadius: "50%", width: 36, height: 36,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: C.offwhite,
          }}>
            <X size={18} />
          </button>

          {step === 1 ? (
            <>
              {/* Header */}
              <div style={{ marginBottom: 28 }}>
                <div style={{
                  fontSize: 28, marginBottom: 8,
                }}>{course.badge}</div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11, color: course.accentColor,
                  letterSpacing: "0.2em", marginBottom: 8,
                  textTransform: "uppercase",
                }}>
                  Enrolling in
                </div>
                <h2 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 22, fontWeight: 800,
                  color: C.offwhite, margin: 0,
                }}>
                  {course.title}
                </h2>
                <p style={{
                  color: C.muted, fontSize: 14,
                  fontFamily: "'DM Sans', sans-serif",
                  margin: "6px 0 0",
                }}>
                  {course.duration} · {course.modules} Modules · Contact for Pricing
                </p>
              </div>

              {/* Divider */}
              <div style={{
                height: 1,
                background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
                marginBottom: 24,
              }} />

              {/* Form Fields */}
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    style={inputStyle("name")}
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={(e) => e.target.style.borderColor = C.gold}
                    onBlur={(e)  => e.target.style.borderColor = errors.name ? "#F87171" : "rgba(201,168,76,0.2)"}
                  />
                  {errors.name && <p style={{ color:"#F87171", fontSize:12, marginTop:4 }}>{errors.name}</p>}
                </div>

                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    style={inputStyle("email")}
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={(e) => e.target.style.borderColor = C.gold}
                    onBlur={(e)  => e.target.style.borderColor = errors.email ? "#F87171" : "rgba(201,168,76,0.2)"}
                  />
                  {errors.email && <p style={{ color:"#F87171", fontSize:12, marginTop:4 }}>{errors.email}</p>}
                </div>

                <div>
                  <label style={labelStyle}>Phone Number *</label>
                  <input
                    style={inputStyle("phone")}
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onFocus={(e) => e.target.style.borderColor = C.gold}
                    onBlur={(e)  => e.target.style.borderColor = errors.phone ? "#F87171" : "rgba(201,168,76,0.2)"}
                  />
                  {errors.phone && <p style={{ color:"#F87171", fontSize:12, marginTop:4 }}>{errors.phone}</p>}
                </div>

                <div>
                  <label style={labelStyle}>Current Status *</label>
                  <select
                    style={{ ...inputStyle("status"), cursor: "pointer" }}
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                    onFocus={(e) => e.target.style.borderColor = C.gold}
                    onBlur={(e)  => e.target.style.borderColor = errors.status ? "#F87171" : "rgba(201,168,76,0.2)"}
                  >
                    <option value="" disabled>Select your status</option>
                    <option value="student">Student</option>
                    <option value="working">Working Professional</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.status && <p style={{ color:"#F87171", fontSize:12, marginTop:4 }}>{errors.status}</p>}
                </div>

                <div>
                  <label style={labelStyle}>How did you hear about us?</label>
                  <select
                    style={{ ...inputStyle("source"), cursor: "pointer" }}
                    value={form.source}
                    onChange={(e) => setForm({ ...form, source: e.target.value })}
                  >
                    <option value="">Select an option</option>
                    <option value="instagram">Instagram</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="friend">Friend / Referral</option>
                    <option value="google">Google Search</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Any Questions? (Optional)</label>
                  <textarea
                    style={{ ...inputStyle("message"), minHeight: 90, resize: "vertical" }}
                    placeholder="Anything you'd like to ask before enrolling..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => e.target.style.borderColor = C.gold}
                    onBlur={(e)  => e.target.style.borderColor = "rgba(201,168,76,0.2)"}
                  />
                </div>
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSubmit}
                style={{
                  marginTop: 24, width: "100%",
                  background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                  border: "none", borderRadius: 12,
                  padding: "16px",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700, fontSize: 16,
                  color: C.navy, cursor: "pointer",
                  letterSpacing: "0.02em",
                }}
              >
                Submit Enrollment Request →
              </motion.button>
              <p style={{
                textAlign: "center", marginTop: 12,
                color: C.muted, fontSize: 12,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Our team will reach out within 24 hours to confirm.
              </p>
            </>
          ) : (
            /* ── Success State ── */
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 16 }}
              style={{ textAlign: "center", padding: "20px 0" }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 12 }}
                style={{ fontSize: 64, marginBottom: 20 }}
              >
                ✅
              </motion.div>
              <h2 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 26, fontWeight: 800,
                color: C.offwhite, marginBottom: 12,
              }}>
                You're In!
              </h2>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                color: C.muted, fontSize: 15, lineHeight: 1.7,
                marginBottom: 28,
              }}>
                Thanks <strong style={{ color: C.gold }}>{form.name}</strong>! Your enrollment
                request for <strong style={{ color: C.offwhite }}>{course.title}</strong> has been
                received. We'll contact you at <strong style={{ color: C.tealLight }}>{form.email}</strong> within 24 hours.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClose}
                style={{
                  background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                  border: "none", borderRadius: 12,
                  padding: "14px 36px",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700, fontSize: 15,
                  color: C.navy, cursor: "pointer",
                }}
              >
                Back to Courses
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Course Card ───────────────────────────────────────────────
// UX-enhanced: Information hierarchy, trust signals, conversion-focused
function CourseCard({ course, index, onEnroll }) {
  const level = LEVEL_META[course.level];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.018, transition: { duration: 0.25, ease: 'easeOut' } }}
      style={{
        background: "rgba(255, 255, 255, 0.04)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(20, 184, 166, 0.25)",
        borderRadius: 20,
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease-out",
        willChange: "transform, box-shadow",
      }}
      onClick={() => onEnroll(course)}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 35px rgba(20, 184, 166, 0.3), inset 0 0 18px rgba(20, 184, 166, 0.06)`;
        e.currentTarget.style.borderColor = "rgba(20, 184, 166, 0.4)";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 0 15px rgba(20, 184, 166, 0.12)";
        e.currentTarget.style.borderColor = "rgba(20, 184, 166, 0.25)";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
      }}
    >
      {/* 🎨 GLOSS OVERLAY - Premium surface reflection */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "50%",
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%)",
        pointerEvents: "none",
        borderRadius: "20px 20px 50% 50%",
      }} />

      {/* 🌀 SUBTLE FLOATING ACCENT - Peacock glow background (reduced intensity) */}
      <div style={{
        position: "absolute",
        bottom: -30,
        right: -30,
        width: 100,
        height: 100,
        background: "rgba(20, 184, 166, 0.15)",
        borderRadius: "50%",
        filter: "blur(35px)",
        pointerEvents: "none",
      }} />

      {/* Popular badge - Gold accent */}
      {course.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "linear-gradient(135deg, #E6C200, #FFF3B0)",
            color: "#0B0F1A",
            fontSize: 10,
            fontFamily: "'Space Mono', monospace",
            fontWeight: 700,
            letterSpacing: "0.1em",
            padding: "6px 12px",
            borderRadius: 20,
            textTransform: "uppercase",
            boxShadow: "0 0 16px rgba(201, 168, 76, 0.25)",
            zIndex: 10,
          }}
        >
          ★ Popular
        </motion.div>
      )}

      {/* 🏆 TRUST SIGNALS - Rating + Students (NEW) */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 16,
          position: "relative",
          zIndex: 5,
        }}
      >
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}>
          <span style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#FFF3B0",
          }}>
            ⭐ {course.rating}
          </span>
          <span style={{
            fontSize: 11,
            color: C.muted,
            fontFamily: "'DM Sans'",
          }}>
            ({course.students})
          </span>
        </div>
      </motion.div>

      {/* Top row: Icon + Title + Level */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16, position: "relative", zIndex: 5 }}>
        {/* Badge Icon - Peacock background */}
        <div style={{
          fontSize: 32,
          lineHeight: 1,
          background: "rgba(20, 184, 166, 0.1)",
          borderRadius: 14,
          padding: "12px",
          border: "1px solid rgba(20, 184, 166, 0.3)",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 56,
          height: 56,
        }}>
          {course.badge}
        </div>

        <div style={{ flex: 1 }}>
          {/* Level badge */}
          <div style={{
            display: "inline-block",
            background: level.bg,
            color: level.color,
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.15em",
            padding: "4px 12px",
            borderRadius: 20,
            textTransform: "uppercase",
            marginBottom: 8,
            border: `1px solid ${level.color}40`,
          }}>
            {course.level}
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 18,
              fontWeight: 800,
              color: C.offwhite,
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {course.title}
          </h3>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: C.muted,
              margin: "4px 0 0",
            }}
          >
            {course.subtitle}
          </p>
        </div>
      </div>

      {/* Meta row - Duration, Modules, Level */}
      <div
        style={{
          display: "flex",
          gap: 16,
          marginBottom: 18,
          padding: "12px 14px",
          background: "rgba(20, 184, 166, 0.06)",
          borderRadius: 12,
          border: "1px solid rgba(20, 184, 166, 0.15)",
          position: "relative",
          zIndex: 5,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6, flex: 1 }}>
          <Clock size={14} color="#14B8A6" />
          <span style={{ fontFamily: "'DM Sans'", fontSize: 13, color: C.offwhite }}>
            {course.duration}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flex: 1 }}>
          <BookOpen size={14} color="#14B8A6" />
          <span style={{ fontFamily: "'DM Sans'", fontSize: 13, color: C.offwhite }}>
            {course.modules} Modules
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flex: 1 }}>
          <BarChart2 size={14} color="#14B8A6" />
          <span style={{ fontFamily: "'DM Sans'", fontSize: 13, color: C.offwhite }}>
            {course.level}
          </span>
        </div>
      </div>

      {/* Topics - What you'll learn (show 3 items) */}
      <div style={{ marginBottom: 16, flex: 1, position: "relative", zIndex: 5 }}>
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            color: C.muted,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          What You'll Learn
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 7 }}>
          {course.topics.slice(0, 3).map((topic) => (
            <li
              key={topic}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: "#A8C0D6",
              }}
            >
              <CheckCircle size={13} color="#14B8A6" style={{ flexShrink: 0 }} />
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* 💎 OUTCOME HIGHLIGHT - Key benefit (NEW, always visible for clarity) */}
      <div
        style={{
          background: "rgba(20, 184, 166, 0.08)",
          border: "1px solid rgba(20, 184, 166, 0.2)",
          borderRadius: 12,
          padding: "12px",
          marginBottom: 18,
          position: "relative",
          zIndex: 5,
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: "#14B8A6",
            fontWeight: 600,
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          ✓ {course.outcome}
        </p>
      </div>

      {/* Footer: Pricing + Enroll Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(20, 184, 166, 0.2)",
          paddingTop: 16,
          position: "relative",
          zIndex: 5,
          gap: 12,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              color: C.muted,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 2,
            }}
          >
            Pricing
          </div>
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              background: "linear-gradient(135deg, #E6C200, #FFF3B0)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact for Pricing
          </div>
        </div>

        {/* Premium Enroll Button - Enhanced */}
        <motion.button
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.96 }}
          onClick={(e) => {
            e.stopPropagation();
            onEnroll(course);
          }}
          style={{
            background: "linear-gradient(135deg, #E6C200, #FFF3B0)",
            border: "1px solid rgba(255, 243, 176, 0.3)",
            borderRadius: 12,
            padding: "11px 18px",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            color: "#0B0F1A",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            boxShadow: "0 0 24px rgba(201, 168, 76, 0.25)",
            transition: "all 0.3s ease-out",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 32px rgba(201, 168, 76, 0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 24px rgba(201, 168, 76, 0.25)";
          }}
        >
          Start Learning <ChevronRight size={15} />
        </motion.button>
      </div>
    </motion.div>
  );
}

// ─── Main Courses Page ─────────────────────────────────────────
export default function Courses() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeLevel,  setActiveLevel]  = useState("All Levels");
  const [enrollCourse, setEnrollCourse] = useState(null);

  const filtered = COURSES.filter((c) => {
    const catMatch   = activeFilter === "All" || c.category === activeFilter;
    const levelMatch = activeLevel  === "All Levels" || c.level === activeLevel;
    return catMatch && levelMatch;
  });

  return (
    <>
      <Navbar />
      <PageHero
        title="Learn What the Future Demands"
        subtitle="Our Courses"
        description="Domain-focused programs built for real outcomes — not just certificates. Pick your path, go deep, and build things that matter."
      />

      {/* ── Filter Bar ── */}
      <section className="relative py-12 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              alignItems: "center",
              background: C.surface2,
              border: `1px solid rgba(201,168,76,0.15)`,
              borderRadius: 16,
              padding: "16px 20px",
            }}
          >
          {/* Category filters */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  background: activeFilter === f
                    ? `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`
                    : "rgba(255,255,255,0.05)",
                  color: activeFilter === f ? C.navy : C.offwhite,
                  border: `1px solid ${activeFilter === f ? "transparent" : "rgba(255,255,255,0.08)"}`,
                  borderRadius: 8, padding: "8px 18px",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700, fontSize: 13,
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div style={{
            width: 1, height: 28,
            background: "rgba(255,255,255,0.08)",
            margin: "0 4px",
          }} />

          {/* Level filters */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {LEVELS.map((l) => (
              <button
                key={l}
                onClick={() => setActiveLevel(l)}
                style={{
                  background: activeLevel === l
                    ? "rgba(14,124,123,0.2)"
                    : "transparent",
                  color: activeLevel === l ? C.tealLight : C.muted,
                  border: `1px solid ${activeLevel === l ? C.teal : "transparent"}`,
                  borderRadius: 8, padding: "8px 16px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500, fontSize: 13,
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Result count */}
          <div style={{ marginLeft: "auto" }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11, color: C.muted,
            }}>
              {filtered.length} course{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </motion.div>
        </div>
      </section>

      {/* ── Course Grid ── */}
      <section className="relative py-20 bg-navy-950">
        {/* BACKGROUND ACCENTS */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-peacock-green/6 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-DEFAULT/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 z-10">
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={activeFilter + activeLevel}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 24,
              }}
            >
              {filtered.map((course, i) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  index={i}
                  onEnroll={setEnrollCourse}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: "center", padding: "80px 20px" }}
            >
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <p style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 20, fontWeight: 700,
                color: C.offwhite, marginBottom: 12,
              }}>
                No courses match these filters
              </p>
              <p style={{ color: C.muted, fontSize: 14, marginBottom: 28, maxWidth: 400, margin: "0 auto 28px" }}>
                Try adjusting your filters, or contact our team for personalized course recommendations.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: "inline-block",
                  background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                  color: C.navy,
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700, fontSize: 15,
                  padding: "12px 28px",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                Get Recommendations →
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </section>

      {/* ── Bottom CTA Banner ── */}
      <section className="relative py-16 md:py-20 bg-navy-950 border-t border-gold-DEFAULT/15">
        {/* BACKGROUND ACCENTS */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-DEFAULT/6 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-peacock-green/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11, color: C.gold,
            letterSpacing: "0.25em", textTransform: "uppercase",
            marginBottom: 16,
          }}>
            // NOT SURE WHERE TO START?
          </p>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(24px, 4vw, 40px)",
            fontWeight: 800, color: C.offwhite,
            margin: "0 0 16px",
          }}>
            Let Us Help You Choose the Right Path
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16, color: C.muted,
            maxWidth: 480, margin: "0 auto 28px",
            lineHeight: 1.7,
          }}>
            Our team will understand your background and goals, then recommend the perfect track for you.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-block",
              background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
              color: C.navy,
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700, fontSize: 15,
              padding: "14px 36px",
              borderRadius: 12,
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Talk to Our Team →
          </motion.a>
        </motion.div>
        </div>
      </section>

      {/* ── Enrollment Modal ── */}
      <AnimatePresence>
        {enrollCourse && (
          <EnrollmentModal
            course={enrollCourse}
            onClose={() => setEnrollCourse(null)}
          />
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}
