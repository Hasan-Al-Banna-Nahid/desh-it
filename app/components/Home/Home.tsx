"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  BookOpen,
  Code2,
  Layout,
  Terminal,
  Server,
  Database,
  Cpu,
  Workflow,
  CheckCircle2,
  Award,
  Puzzle,
  TestTube2,
  ShieldAlert,
  FileCode2,
  Sun,
  Moon,
  Check,
  ArrowRight,
  Sparkles,
  Users,
  Globe,
  Briefcase,
  Star,
  CheckCircle,
} from "lucide-react"

export default function HomePage() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const isDark = theme === "dark"

  const impactData = [
    // {
    //   label: "Global Job Placement",
    //   value: "60+",
    //   desc: "Different Countries",
    // },
    {
      label: "Global Job Placement Support",
      //   value: "5400+",
      desc: "Successful Students",
    },
    {
      label: "Remote Job",
      //  value: "1900+",
      desc: "Remote Opportunities",
    },
    {
      label: "Job Success Ratio",
      // value: "85-90%",
      desc: "High Success Rate",
    },
  ]

  const features = [
    {
      title: "AI Personalized",
      desc: "Our AI system guides your learning style, sets challenges, and keeps you on track.",
      icon: Sparkles,
    },
    {
      title: "1:1 Mentorship",
      desc: "Expert mentors connect via Google Meet to plan and solve your problems.",
      icon: Users,
    },
    {
      title: "Support Session",
      desc: "Clear your doubts with 3 live sessions daily, share screens, and learn together.",
      icon: Layout,
    },
    {
      //   title: "24/7 Community",
      desc: "Get fast, continuous help on our dedicated helpdesk platform and community groups.",
      icon: Globe,
    },
    {
      title: "Guided Environment",
      desc: "Master 60+ modules, 1000+ videos, and 10+ assignments with top-tier structure.",
      icon: Workflow,
    },
    {
      title: "Intern/Job Guarantee",
      desc: "Stay consistent and secure your internship with our proven placement system.",
      icon: Award,
    },
  ]

  const steps = [
    {
      num: "01",
      title: "Join",
      desc: "Enroll in the Complete Web Development Bootcamp and begin your journey.",
    },
    {
      num: "02",
      title: "Learn & Mentor",
      desc: "Complete the 6-month bootcamp with crazy support and mentorship.",
    },
    {
      num: "03",
      title: "Finish Course",
      desc: "Work with our placement team to prepare your resume and projects.",
    },
    {
      num: "04",
      title: "Start Job",
      desc: "Secure your internship or full-time remote or local software job.",
    },
  ]

  const technologies = [
    {
      name: "HTML5 & Accessibility",
      desc: "Semantic HTML5 and accessibility tools.",
    },
    {
      name: "CSS3 & Tailwind",
      desc: "Clean, responsive layouts and custom UI.",
    },
    { name: "JavaScript", desc: "ES6+, DSA, and real-world implementation." },
    { name: "React.js", desc: "Component-based architecture patterns." },
    { name: "Node.js & Express", desc: "Server-side and API development." },
    {
      name: "MongoDB & Firebase",
      desc: "Database and authentication systems.",
    },
    { name: "Next.js", desc: "Full-stack web application development." },
    {
      name: "AI Integration",
      desc: "Use Gemini API for smart text and context.",
    },
  ]

  const projects = [
    {
      name: "Dragon News",
      desc: "Dynamic news portal with social login, authentication, and Context API.",
    },
    {
      name: "Espresso Emporium",
      desc: "Backend integration with full CRUD operations to manage data efficiently.",
    },
    {
      name: "Car Doctor",
      desc: "Client and server-side deployment with secure JWT authentication.",
    },
    {
      name: "Bistro Boss",
      desc: "Full-stack application featuring a payment gateway and admin dashboard.",
    },
  ]

  //   const reviews = [
  //     {
  //       name: "Md. Jillur Rahman Tushar",
  //       batch: "Batch 8",
  //       role: "Front End Developer",
  //       company: "bdCalling IT Ltd.",
  //       text: "At the age of 40, I started my journey as a developer with this amazing platform.",
  //     },
  //     {
  //       name: "Fahima Akter",
  //       batch: "Batch 10",
  //       role: "Coding Instructor",
  //       company: "Codingal Inc.",
  //       text: "Being a mother and a housewife, it was not easy, but the proper guidance changed my life.",
  //     },
  //   ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${isDark ? "border-slate-800/50 bg-slate-900/80" : "border-slate-200/50 bg-white/80"}`}
      ></header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <span
            className={`mb-6 inline-block rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-indigo-400 uppercase`}
          >
            Unlock Your Potential
          </span>
          <h2 className="mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 bg-clip-text text-4xl leading-tight font-extrabold tracking-tight text-transparent md:text-6xl">
            Become a Professional Web Developer from Scratch
          </h2>
          <p
            className={`mx-auto mb-10 max-w-2xl text-base leading-relaxed md:text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            6-Month Super Guided Bootcamp with 24/7 Support, 30+ Projects, and
            Premium Job Placement Support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#register"
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-medium text-white shadow-xl shadow-indigo-600/20 transition hover:bg-indigo-700"
            >
              Enroll Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* X-Factor Section */}
      <section
        className={`border-t py-20 transition-colors duration-300 ${isDark ? "border-slate-900 bg-slate-900/40" : "border-slate-200 bg-slate-100/50"}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h3 className="mb-4 text-3xl font-extrabold tracking-tight">
              Bootcamp X Factors
            </h3>
            <p
              className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Explore our core methodologies that ensure 85-90% success ratio
              for students.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feat, i) => {
              const Icon = feat.icon
              return (
                <div
                  key={i}
                  className={`rounded-3xl border p-8 transition-all hover:-translate-y-1 ${
                    isDark
                      ? "border-slate-800 bg-slate-900 shadow-xl hover:border-indigo-500/40"
                      : "border-slate-200 bg-white shadow-sm hover:border-indigo-500/40"
                  }`}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 p-3 text-indigo-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="mb-3 text-lg font-bold">{feat.title}</h4>
                  <p
                    className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {feat.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Curriculum & Technologies */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h3 className="mb-4 text-3xl font-extrabold tracking-tight">
            What Will You Learn?
          </h3>
          <p
            className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            A comprehensive curriculum covering the MERN stack with modern
            Next.js and AI tools.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 transition ${
                isDark
                  ? "border-slate-800 bg-slate-900/40"
                  : "border-slate-200/60 bg-white shadow-sm hover:border-indigo-500/40"
              }`}
            >
              <div className="mb-4 text-2xl font-extrabold text-indigo-500">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h4 className="mb-2 text-sm font-bold">{tech.name}</h4>
              <p
                className={`text-xs leading-relaxed ${isDark ? "text-slate-500" : "text-slate-400"}`}
              >
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Easy 4 Steps to Success */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h3 className="mb-4 text-3xl font-extrabold tracking-tight">
            4 Easy Steps to Get Started
          </h3>
          <p
            className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            Follow the clear and structured steps from enrollment to your
            software job.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="relative p-6">
              <div className="mb-4 text-5xl font-extrabold text-indigo-500/20">
                {step.num}
              </div>
              <h4 className="mb-2 text-lg font-bold">{step.title}</h4>
              <p
                className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      {/* <section
        className={`border-t py-20 transition-colors duration-300 ${isDark ? "border-slate-900 bg-slate-900/20" : "border-slate-200 bg-slate-50"}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h3 className="mb-4 text-3xl font-extrabold tracking-tight">
              Student Success Stories
            </h3>
            <p
              className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Listen to the success stories of students who started their
              journey from scratch.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {reviews.map((rev, i) => (
              <div
                key={i}
                className={`rounded-3xl border p-8 ${
                  isDark
                    ? "border-slate-800 bg-slate-900/80 shadow-xl"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                <p
                  className={`mb-6 text-sm italic ${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  &quot;{rev.text}&quot;
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-slate-800/40 pt-4">
                  <div>
                    <h4 className="text-sm font-bold">{rev.name}</h4>
                    <p className="mt-0.5 text-xs font-medium text-indigo-500">
                      {rev.role} / {rev.company}
                    </p>
                  </div>
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-400">
                    {rev.batch}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer CTA */}
      <section
        id="register"
        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 py-20 text-center text-white"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="mb-6 text-3xl leading-tight font-extrabold tracking-tight md:text-5xl">
            Ready to Build Your Future?
          </h3>
          {/* <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-indigo-100 md:text-lg">
            Enrollment is open for the new batch. 5400+ students are already
            building their careers.
          </p> */}
          {/* <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-indigo-600 shadow-2xl transition hover:bg-slate-100"
          >
            Register Now <Check className="h-4 w-4" />
          </a> */}
        </div>
      </section>
    </div>
  )
}
