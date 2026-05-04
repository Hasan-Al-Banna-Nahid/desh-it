"use client"

import React, { useState } from "react"
import { BookOpen, Home, FileText, Menu, X, Map } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navRoutes = [
    { label: "Home", href: "/", icon: Home },
    { label: "Course Details", href: "/course-details", icon: FileText },
    { label: "Roadmap", href: "/learning-roadmap", icon: Map },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 text-slate-900 backdrop-blur-md transition-colors duration-300 dark:border-slate-900/80 dark:bg-slate-950/80 dark:text-slate-100">
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
                  className={`flex items-center gap-2 text-sm font-medium transition-all hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400 ${
                    isActive ? "font-bold text-indigo-500" : "text-slate-600"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {route.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 transition-all md:hidden dark:border-slate-900 dark:bg-slate-950">
          <div className="flex flex-col space-y-3">
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
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {route.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
