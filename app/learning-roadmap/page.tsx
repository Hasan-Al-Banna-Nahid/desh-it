"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  BookOpen,
  Code2,
  Layout,
  Terminal,
  Server,
  Database,
  Cpu,
  Trophy,
  Award,
  CheckCircle2,
  ChevronRight,
  Workflow,
  Search,
  SlidersHorizontal,
  FolderGit,
  CpuIcon,
  ServerCog,
  ShieldCheck,
  KeyRound,
  FileCode2,
  TestTube2,
  ShieldAlert,
  Boxes,
  Layers,
  Infinity,
  Puzzle,
  GitPullRequest,
  Network,
} from "lucide-react"

// Types
interface DetailItem {
  subtitle: string
  description: string
}

interface RoadmapItem {
  id: string
  title: string
  description: string
  category: string
  icon: React.ComponentType<any>
  details: DetailItem[]
  projects: string[]
  interviewQuestions: string[]
}

interface NavItem {
  id: string
  label: string
  icon: React.ComponentType<any>
}

export default function EnhancedRoadmapPage() {
  const [activeTab, setActiveTab] = useState<string>("fundamentals")

  const navItems: NavItem[] = [
    { id: "fundamentals", label: "Core Web & Fundamentals", icon: Layout },
    { id: "javascript", label: "Advanced JS & TS", icon: Terminal },
    { id: "react", label: "React & Next.js", icon: Code2 },
    { id: "backend", label: "Backend Mastery", icon: Server },
    { id: "database", label: "Database Architecture", icon: Database },
    { id: "system-design", label: "System Design", icon: Cpu },
    { id: "devops", label: "DevOps & Cloud", icon: Workflow },
  ]

  const roadmapData: RoadmapItem[] = [
    {
      id: "fundamentals",
      title: "Core Web Fundamentals & Version Control",
      description:
        "Master foundational technologies, deep-dive semantic UI, accessibility, and modern deployment architectures.",
      category: "fundamentals",
      icon: Layout,
      details: [
        {
          subtitle: "HTML5 & Accessibility",
          description:
            "Semantic HTML5, Advanced Forms & Validation, ARIA Accessibility, and SEO Best Practices.",
        },
        {
          subtitle: "CSS Mastery",
          description:
            "Flexbox & CSS Grid Layouts, CSS Variables, Animations, Transitions, and BEM Methodology.",
        },
        {
          subtitle: "Git Version Control",
          description:
            "Branching & Merging, Commit Best Practices, Conflict Resolution, and Advanced Git Workflows.",
        },
        {
          subtitle: "GitHub Collaboration",
          description:
            "Pull Requests, Code Review Processes, Portfolio Building, and Open-Source Contributions.",
        },
      ],
      projects: [
        "Personal Portfolio Website",
        "Responsive Flexbox/Grid Landing Page",
      ],
      interviewQuestions: [
        "How do you optimize semantic HTML for screen readers?",
        "Explain BEM methodology with a practical example.",
      ],
    },
    {
      id: "javascript",
      title: "Advanced JavaScript & TypeScript Mastery",
      description:
        "Deep dive into JS engines, functional programming, closures, data structures, and type safety.",
      category: "javascript",
      icon: Terminal,
      details: [
        {
          subtitle: "Advanced JavaScript Patterns",
          description:
            "Closures, Prototypes, async/await, Generators, Proxies, and Metaprogramming.",
        },
        {
          subtitle: "DSA with JavaScript",
          description:
            "Arrays, Linked Lists, Trees, Graphs, Sorting Algorithms, and Time Complexity Analysis.",
        },
        {
          subtitle: "Problem Solving",
          description:
            "LeetCode Patterns, Dynamic Programming, Recursion, and Competitive Coding Techniques.",
        },
        {
          subtitle: "TypeScript Foundations",
          description:
            "Type Systems, Interfaces, Generics, Decorators, and Type-Safe Architecture Design.",
        },
      ],
      projects: ["Algorithm Visualization Tool", "Custom CLI Utility Package"],
      interviewQuestions: [
        "How does the event loop handle microtasks and macrotasks?",
        "What are generic types and when should you use them in TypeScript?",
      ],
    },
    {
      id: "react",
      title: "React.js & Next.js Mastery Journey",
      description:
        "Build performant, type-safe full-stack apps with compound components and modern UI frameworks.",
      category: "react",
      icon: Code2,
      details: [
        {
          subtitle: "Intermediate React",
          description:
            "React Hooks, React Router, Custom Hooks, and Lifecycle Management.",
        },
        {
          subtitle: "Advanced React Patterns",
          description:
            "Compound Components, Render Props, HOCs, and Scalable Folder Structure.",
        },
        {
          subtitle: "Performance & Optimization",
          description:
            "Code Splitting, Lazy Loading, Memoization (useMemo, useCallback), and Rendering Optimization.",
        },
        {
          subtitle: "State Management & Server State",
          description:
            "Redux Toolkit (Slices, Thunks, RTK Query) and TanStack Query (Caching, Optimistic Mutations).",
        },
      ],
      projects: [
        "E-Commerce Frontend with Shadcn",
        "Real-time Chat Client with Next.js 15+",
      ],
      interviewQuestions: [
        "How does React's reconciliation process work?",
        "Compare Redux Toolkit and TanStack Query use cases.",
      ],
    },
    {
      id: "backend",
      title: "Backend Development & Enterprise Mastery",
      description:
        "Design and build scalable server-side architecture with Node.js, Express, and NestJS.",
      category: "backend",
      icon: Server,
      details: [
        {
          subtitle: "Node.js Runtime Engine",
          description:
            "Event-Driven Architecture, V8 Engine internals, and the npm ecosystem.",
        },
        {
          subtitle: "Express.js & RESTful APIs",
          description:
            "MVC architecture patterns, Custom Middleware, Error Handling, and API Versioning.",
        },
        {
          subtitle: "Security & Authentication",
          description:
            "JWT, OAuth 2.0, bcrypt hashing, rate limiting, and defensive HTTP headers.",
        },
        {
          subtitle: "NestJS Enterprise Framework",
          description:
            "Modules, Guards, Interceptors, Pipes, and Dependency Injection for Enterprise Applications.",
        },
      ],
      projects: [
        "Enterprise Authentication Server",
        "NestJS Microservice Gateway",
      ],
      interviewQuestions: [
        "Explain the Node.js event-driven architecture.",
        "How do you implement interceptors and guards in NestJS?",
      ],
    },
    {
      id: "database",
      title: "Database Architecture & ORM Mastery",
      description:
        "Master database design patterns, NoSQL, Relational Databases, and type-safe data access.",
      category: "database",
      icon: Database,
      details: [
        {
          subtitle: "MongoDB & Mongoose ODM",
          description:
            "Document modeling, Advanced Aggregation Pipelines, and GridFS storage.",
        },
        {
          subtitle: "PostgreSQL Relational DB",
          description:
            "Complex Joins, Indexing strategies, Query optimization, and ACID Transactions.",
        },
        {
          subtitle: "Prisma ORM",
          description:
            "Type-safe database access, schema migrations, and relational modeling.",
        },
        {
          subtitle: "Caching & Partitioning",
          description:
            "Redis integration, distributed caching, data sharding, and normalization.",
        },
      ],
      projects: ["PI-LMS Database Architecture", "Analytics Dashboard Backend"],
      interviewQuestions: [
        "When would you choose NoSQL over a Relational database?",
        "How do you optimize a slow PostgreSQL query?",
      ],
    },
    {
      id: "system-design",
      title: "System Design, HLD & Low-Level Design (LLD)",
      description:
        "Architect highly scalable, available, and enterprise-grade systems with modern design principles.",
      category: "system-design",
      icon: Cpu,
      details: [
        {
          subtitle: "High-Level Design (HLD)",
          description:
            "Microservices, Event-Driven Architecture, Serverless platforms, and Pub/Sub communication.",
        },
        {
          subtitle: "Scalability & Resilience",
          description:
            "CAP Theorem, Load Balancing, Horizontal Scaling, and Data Replication.",
        },
        {
          subtitle: "Low-Level Design (LLD)",
          description:
            "Modularity, Interfaces, and strict SOLID, DRY, and KISS principles.",
        },
        {
          subtitle: "Design Patterns & UML",
          description:
            "Creational, Structural, and Behavioral patterns with comprehensive UML documentation.",
        },
      ],
      projects: ["Shadow-Dev Migration Tool", "YMA Booking System Design"],
      interviewQuestions: [
        "Explain the CAP theorem with a real-world example.",
        "How does consistent hashing work in load balancers?",
      ],
    },
    {
      id: "devops",
      title: "DevOps, AWS & CI/CD Pipelines",
      description:
        "Automate, containerize, and deploy highly resilient software architectures to the cloud.",
      category: "devops",
      icon: Workflow,
      details: [
        {
          subtitle: "Linux & Shell Scripting",
          description:
            "CLI Operations, System monitoring, firewall configuration, and automation scripting.",
        },
        {
          subtitle: "Docker & Containerization",
          description:
            "Dockerfile construction, Docker Compose multi-container networks, and container security.",
        },
        {
          subtitle: "Kubernetes Orchestration",
          description:
            "Pods, Deployments, Services, ConfigMaps, Secrets, and Ingress routing.",
        },
        {
          subtitle: "CI/CD & Monitoring",
          description:
            "Jenkins pipeline definition, Terraform IaC, Prometheus metrics, and Grafana visualization.",
        },
      ],
      projects: [
        "Containerized MERN App Deployment",
        "Infrastructure as Code using Terraform",
      ],
      interviewQuestions: [
        "How does a Docker container differ from a Virtual Machine?",
        "Explain the deployment process of a CI/CD pipeline.",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-900/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/20">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-lg font-semibold text-transparent dark:from-indigo-400 dark:to-purple-400">
                MERN/PERN Roadmap 2026
              </h1>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Full-Stack Development with NestJS Integration
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 p-8 text-white shadow-2xl shadow-indigo-500/20 md:p-12">
          <div className="relative z-10 max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              Career Development Path
            </span>
            <h2 className="mb-4 text-3xl leading-tight font-bold tracking-tight md:text-4xl">
              Master the Stack: Complete Full-Stack Mastery
            </h2>
            <p className="mb-8 text-base leading-relaxed text-indigo-100 md:text-lg">
              Master Full-Stack Engineering concepts with deep architecture
              insights and modern UI libraries.
            </p>
          </div>
          <div className="absolute -top-24 -right-12 h-96 w-96 animate-pulse rounded-full bg-purple-500 opacity-30 mix-blend-multiply blur-3xl filter" />
          <div className="absolute right-12 -bottom-24 h-96 w-96 animate-pulse rounded-full bg-indigo-500 opacity-20 mix-blend-multiply blur-3xl filter" />
        </div>

        {/* Navigation Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-4 md:justify-start dark:border-slate-800">
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                  activeTab === item.id
                    ? "border border-indigo-200 bg-indigo-50 text-indigo-600 shadow-sm dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-400"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-50"
                }`}
              >
                <IconComponent className="h-4 w-4" />
                {item.label}
              </button>
            )
          })}
        </div>

        {/* Roadmap Steps - Main Content */}
        <div className="space-y-12">
          {roadmapData
            .filter((item) => item.category === activeTab)
            .map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="relative ml-4 border-l-2 border-indigo-500/20 pl-8 md:pl-12"
                >
                  {/* Glowing Connection Line */}
                  <div className="absolute top-4 -left-[9px] h-4 w-4 rounded-full border-4 border-white bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.8)] dark:border-slate-950" />

                  <div className="rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all hover:border-indigo-200 hover:shadow-xl dark:border-slate-800/60 dark:bg-slate-900 dark:hover:border-indigo-800/50">
                    <div className="mb-6 flex items-start justify-between">
                      <div>
                        <div className="mb-3 flex items-center gap-4">
                          <div className="rounded-2xl bg-indigo-50/70 p-3 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                            <Icon className="h-6 w-6" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 md:text-2xl dark:text-slate-100">
                            {item.title}
                          </h3>
                        </div>
                        <p className="max-w-3xl text-sm leading-relaxed text-slate-500 md:text-base dark:text-slate-400">
                          {item.description}
                        </p>
                      </div>
                      <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-500 dark:bg-indigo-950/40 dark:text-indigo-400">
                        Module 0{index + 1}
                      </span>
                    </div>

                    <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      {item.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl border border-slate-200/40 bg-slate-50/50 p-5 transition-all hover:bg-white dark:border-slate-800/40 dark:bg-slate-900 dark:hover:bg-slate-900/60"
                        >
                          <div className="mb-3 text-2xl font-bold text-indigo-500 dark:text-indigo-400">
                            {String(idx + 1).padStart(2, "0")}
                          </div>
                          <h4 className="mb-2 text-sm font-bold text-slate-900 dark:text-slate-100">
                            {detail.subtitle}
                          </h4>
                          <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                            {detail.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-6 rounded-2xl border border-indigo-500/10 bg-indigo-500/5 p-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-4 flex items-center gap-2 text-xs font-bold tracking-wider text-slate-900 uppercase dark:text-slate-100">
                          <Puzzle className="h-4 w-4 text-indigo-500" />{" "}
                          Hands-on Projects
                        </h4>
                        <ul className="space-y-2">
                          {item.projects.map((proj, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                            >
                              <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-indigo-500" />
                              {proj}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-4 flex items-center gap-2 text-xs font-bold tracking-wider text-slate-900 uppercase dark:text-slate-100">
                          <Award className="h-4 w-4 text-indigo-500" />{" "}
                          Technical Interview Questions
                        </h4>
                        <ul className="space-y-2">
                          {item.interviewQuestions.map((ques, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                            >
                              <span className="mt-0.5 text-xs font-bold text-indigo-500">
                                •
                              </span>
                              {ques}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>

        {/* Section: Debugging & Enterprise Diagnostics */}
        <section className="relative mt-24 overflow-hidden rounded-3xl border border-indigo-800/50 bg-gradient-to-br from-indigo-900/90 to-slate-950 p-8 text-slate-100 shadow-2xl md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(99,102,241,0.15),transparent)]" />

          <div className="relative z-10 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-indigo-400 uppercase">
              <TestTube2 className="h-3.5 w-3.5 animate-spin" />
              Diagnostics & Debugging Environment
            </div>

            <h2 className="mb-5 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-3xl leading-tight font-extrabold tracking-tight text-transparent">
              Advanced System Diagnostics & Troubleshooting
            </h2>

            <p className="mb-8 text-base leading-relaxed text-slate-400 md:text-lg">
              Equip yourself with the infrastructure tools and skills to trace
              memory bottlenecks, debug complex runtime states, and troubleshoot
              distributed software operations.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:bg-white/10">
                <div className="mb-3 flex items-start gap-4">
                  <div className="rounded-xl bg-purple-500/10 p-2.5 text-purple-400">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-slate-100 md:text-base">
                      System-Level Troubleshooting
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-400">
                      Diagnose performance logs and runtime handshake failures
                      with structured procedures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:bg-white/10">
                <div className="mb-3 flex items-start gap-4">
                  <div className="rounded-xl bg-indigo-500/10 p-2.5 text-indigo-400">
                    <FileCode2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-slate-100 md:text-base">
                      Code Integrity & Optimization
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-400">
                      Maintain code quality by applying enterprise-level
                      monitoring and rigorous validation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
