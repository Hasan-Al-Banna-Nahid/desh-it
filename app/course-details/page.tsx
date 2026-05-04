"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  BookOpen,
  Sun,
  Moon,
  Clock,
  Calendar,
  DollarSign,
  Award,
  Sparkles,
  Users,
  Layout,
  Globe,
  Workflow,
  CheckCircle,
  FileCode2,
  Cpu,
  Server,
  Terminal,
  Database,
  ShieldAlert,
  GraduationCap,
  ArrowRight,
  Tv,
  HelpCircle,
  Phone,
  MapPin,
  Check,
  CheckCircle2,
} from "lucide-react"

export default function CourseDetailsPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const isDark = theme === "dark"

  const missions = [
    {
      mission: "Mission 0",
      title: "Be a Critical Thinker",
      topics:
        "Mindset Over Syntax, Data Structures That Matters, Algorithms in Action.",
    },
    {
      mission: "Mission 1",
      title: "Be a TypeScript Technocrat",
      topics:
        "Explore Basic Types of TypeScript, Advance Types, Object Oriented TypeScript.",
    },
    {
      mission: "Mission 2",
      title: "Be a Node, Express & SQL SuperStar",
      topics:
        "Basic & Core Modules of Node.js, Express.js, Intro to SQL for Backend.",
    },
    {
      mission: "Mission 3",
      title: "Be a RDBMS Rockstar",
      topics:
        "Relational Database Concepts, Database Normalization, PostgreSQL Advanced Features.",
    },
    {
      mission: "Mission 4",
      title: "Be a Prisma- Next.js Ninja",
      topics:
        "Prisma ORM Essentials, Next.js Core Concepts & Authentication System.",
    },
    {
      mission: "Mission 5 & 6",
      title: "Be a Full Stack Developer",
      topics:
        "AI-Powered Industry Standard Project, Database Design, Redis Caching, Multi-threading.",
    },
    {
      mission: "Mission 7",
      title: "Be an AI Engineer",
      topics:
        "AI, ML & LLM real-world applications, VectorDB, Embedding, Semantic Search, RAG.",
    },
    {
      mission: "Mission 8",
      title: "Be Docker & Nginx Nomad",
      topics:
        "Docker Containers, Volumes, Networks, Multi-Container Orchestration, Reverse Proxy & Load Balancing Nginx.",
    },
  ]

  const faqs = [
    {
      q: "নেক্সট লেভেল বুটক্যাম্প সম্পর্কে বিস্তারিত জানতে চাই",
      a: "নেক্সট লেভেল বুটক্যাম্প একটি Software Engineering এবং AI Engineering এর কম্বিনেশনে তৈরি Typescript বেইজড Advanced Bootcamp। এই বুটক্যাম্পে ইন্ডাস্ট্রি ডিমান্ড এডভান্সড সব টেকনোলজি শিখানো হয়...",
    },
    {
      q: "নেক্সট লেভেল কোর্স সাকসেস্ফুলি শেষ করলে কি কি রি-ওয়ার্ড পাব?",
      a: "অনটাইমে কোর্স সম্পন্ন করলে AWS, Testing এবং Software Engineering Mindset-এর উপর ক্রাশ কোর্স পাবেন।",
    },
    {
      q: "কোর্সে ভর্তি হওয়ার জন্য কি কি স্কিল থাকা লাগবে?",
      a: "নেক্সট লেভেল কোর্সে ভর্তি হতে হলে Intermediate লেভেলের React ও JavaScript জানা থাকা প্রয়োজন।",
    },
    {
      q: "কোর্স শেষে জব প্লেসমেন্ট থাকবে?",
      a: "হ্যাঁ, অনটাইমে কোর্স সমাপ্তকারী শিক্ষার্থীদের জন্য প্রিমিয়াম জব প্লেসমেন্ট সাপোর্ট রয়েছে।",
    },
    {
      q: "কোর্সটি ভালোভাবে করার জন্য ডেইলি কতটুকু সময় দিতে হবে?",
      a: "প্রতিদিন ৩-৪ ঘণ্টা (সপ্তাহে ২০+ ঘণ্টা) সময় দিলে অনটাইমে সফলভাবে শেষ করা সম্ভব।",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}
    >
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <span className="mb-6 inline-block rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-indigo-400 uppercase">
            Next Level Mastery
          </span>
          <h2 className="mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 bg-clip-text text-4xl leading-tight font-extrabold tracking-tight text-transparent md:text-6xl">
            Transform from an Average Web Developer to an AI-Driven Software
            Engineer
          </h2>
          <p
            className={`mx-auto mb-10 max-w-2xl text-base leading-relaxed md:text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            Learn how to architect full-stack AI applications and modern
            enterprise systems with industry-standard technologies and
            end-to-end support.
          </p>
          <a
            href="#register"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-indigo-600/30 transition hover:bg-indigo-700"
          >
            Enroll Now <GraduationCap className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Course Schedule and Fee */}
      <section
        className={`border-t py-16 transition-colors duration-300 ${isDark ? "border-slate-900 bg-slate-900/40" : "border-slate-200 bg-slate-100/50"}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center md:grid-cols-1">
            <div className="rounded-2xl border bg-card p-6">
              <DollarSign className="mx-auto mb-4 h-6 w-6 text-indigo-500" />
              <h4 className="mb-1 text-sm font-bold tracking-wider uppercase">
                Course Fee
              </h4>
              <p className="mt-2 text-2xl font-extrabold text-indigo-500">
                6,500 BDT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Covered & Superpowers */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h3 className="mb-4 text-3xl font-extrabold tracking-tight">
            Your Superpower Technologies
          </h3>
          <p
            className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            We provide deep-dive practical knowledge spanning the complete
            modern software stack.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "JavaScript & DSA",
              desc: "Critical Thinking & Problem Solving, DSA, Arrays, Stack, Queue, Trees, Searching & Sorting.",
              icon: Terminal,
            },
            {
              title: "TypeScript Technocrat",
              desc: "Object-oriented programming, interfaces, generics, type composition, OOP patterns.",
              icon: FileCode2,
            },
            {
              title: "Node.js & Express",
              desc: "Server-side foundations, Node.js core modules, routing, API implementation, performance optimization.",
              icon: Server,
            },
            {
              title: "PostgreSQL & Prisma",
              desc: "Database normalization, advanced SQL queries, connection pooling, and Prisma ORM.",
              icon: Database,
            },
            {
              title: "Next.js & App Router",
              desc: "Server components, Next.js Authentication System, dynamic routing, edge rendering.",
              icon: Layout,
            },
            {
              title: "Devops & Docker",
              desc: "Cross-container orchestration, Docker compose, Nginx Load Balancing, Reverse Proxy.",
              icon: Workflow,
            },
            {
              title: "AI Engineering & LLM",
              desc: "RAG Systems, VectorDB, LangChain, Embeddings, Semantic Search, Fine-Tuning Models.",
              icon: Cpu,
            },
            {
              title: "Software Engineering & Testing",
              desc: "SDLC principles, Unit & Integration testing, Vitest, Supertest REST API validation, agile methodologies.",
              icon: ShieldAlert,
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className={`rounded-2xl border p-6 ${
                  isDark
                    ? "border-slate-800 bg-slate-900 hover:border-indigo-500/40"
                    : "border-slate-200 bg-white shadow-sm hover:border-indigo-500/40"
                } transition-all`}
              >
                <Icon className="mb-6 h-6 w-6 text-indigo-500" />
                <h4 className="mb-3 text-sm font-bold">{item.title}</h4>
                <p
                  className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}
                >
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Course Outline Missions */}
      <section
        className={`border-t py-20 transition-colors duration-300 ${isDark ? "border-slate-900 bg-slate-900/30" : "border-slate-200 bg-slate-50"}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h3 className="mb-4 text-3xl font-extrabold tracking-tight">
              Course Curriculum & Mission Outline
            </h3>
            <p
              className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Step-by-step full-stack roadmap to transform you into an AI
              software engineer.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {missions.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-6 ${
                  isDark
                    ? "border-slate-800 bg-slate-900/60 hover:border-indigo-500/40"
                    : "border-slate-200 bg-white shadow-sm hover:border-indigo-500/40"
                }`}
              >
                <div className="mb-4 text-2xl font-extrabold text-indigo-500">
                  {item.mission}
                </div>
                <h4 className="mb-3 text-sm font-bold">{item.title}</h4>
                <p
                  className={`text-xs leading-relaxed ${isDark ? "text-slate-500" : "text-slate-400"}`}
                >
                  {item.topics}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hands-on Projects */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h3 className="mb-4 text-3xl font-extrabold tracking-tight">
            Hands-on Projects
          </h3>
          <p
            className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            Learn requirement analysis, ER diagrams, system design and build
            full-stack enterprise projects.
          </p>
        </div>
      </section>

      {/* FAQ Section
      <section
        className={`border-t py-20 transition-colors duration-300 ${isDark ? "border-slate-900 bg-slate-900/20" : "border-slate-200 bg-slate-50"}`}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-3xl font-extrabold tracking-tight">
              Frequently Asked Questions
            </h3>
            <p
              className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Everything you need to know about the program.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-6 ${isDark ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white shadow-sm"}`}
              >
                <h4 className="mb-2 font-bold text-indigo-500">
                  {String(index + 1).padStart(2, "0")}. {faq.q}
                </h4>
                <p
                  className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
                >
                  {faq.a}
                </p>
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
            Ready to Take Your Career to the Next Level?
          </h3>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-indigo-100">
            Enrollment is open for the upcoming batch. Transform your
            capabilities into those of a modern AI-Driven Software Engineer.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-indigo-600 shadow-2xl transition hover:bg-slate-100"
          >
            Enroll Now <Check className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  )
}
