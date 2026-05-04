"use client"

import React, { useState, useEffect } from "react"
import {
  BookOpen,
  Sun,
  Moon,
  Home,
  FileText,
  Menu,
  X,
  GraduationCap,
  Road,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const savedTheme = localStorage.getItem("ph-theme") as
      | "light"
      | "dark"
      | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("ph-theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const isDark = theme === "dark"

  const navRoutes = [
    { label: "Home", href: "/", icon: Home },
    { label: "Course Details", href: "/course-details", icon: FileText },
    { label: "Roadmap", href: "/learning-roadmap", icon: Road },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        isDark
          ? "border-slate-900/80 bg-slate-950/80 text-slate-100"
          : "border-slate-200/50 bg-white/80 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/20">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-lg font-bold text-transparent">
                Desh IT
              </h1>
              <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                Bootcamp
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navRoutes.map((route, index) => {
              const Icon = route.icon
              const isActive = pathname === route.href

              return (
                <Link
                  key={index}
                  href={route.href}
                  className={`flex items-center gap-2 text-sm font-medium transition-all ${
                    isActive
                      ? "font-bold text-indigo-500"
                      : isDark
                        ? "text-slate-400 hover:text-indigo-400"
                        : "text-slate-600 hover:text-indigo-600"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {route.label}
                </Link>
              )
            })}

            <span
              className={`h-4 w-[1px] ${isDark ? "bg-slate-800" : "bg-slate-200"}`}
            ></span>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`space-y-4 border-t px-4 py-4 transition-all md:hidden ${
            isDark
              ? "border-slate-900 bg-slate-950"
              : "border-slate-100 bg-white"
          }`}
        >
          {navRoutes.map((route, index) => {
            const Icon = route.icon
            const isActive = pathname === route.href

            return (
              <Link
                key={index}
                href={route.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                  isActive
                    ? "border border-indigo-500/20 bg-indigo-500/10 text-indigo-500"
                    : isDark
                      ? "text-slate-400"
                      : "text-slate-600"
                }`}
              >
                <Icon className="h-4 w-4" />
                {route.label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
