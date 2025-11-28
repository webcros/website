import { useState, useEffect } from "react"
import { useTheme } from "../components/theme-provider"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"

import logo from "../assets/webcross-white-logo.png"
import logoBlack from "../assets/webcross-logo.png"


import { Link } from "react-router-dom"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => setMounted(true), [])

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Set active tab from URL hash or localStorage on load
  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab") || window.location.hash.replace("#", "") || "Work"
    setActiveTab(savedTab)
  }, [])

  // Update active tab and save to localStorage
  const handleTabClick = (tab) => {
    setActiveTab(tab)
    localStorage.setItem("activeTab", tab)
  }

  return (
    <motion.header
      className={`fixed top-0 z-40 w-full transition-all text-center duration-75 ${
        isScrolled ? "h-20 bg-opacity-90 shadow-md rounded-full my-2" : "h-20"
      } bg-background/80 backdrop-blur-md`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-full" aria-label="Global">
        <motion.div
          className="flex lg:flex-1 transition-all"
        >
          <a onClick={handleTabClick} href="/" className="-m-1.5 p-1.5 flex items-center gap-x-2">
            <img
              className={`transition-all duration-300 ${isScrolled ? "ml-32 h-8" : "h-12"} w-auto`}
              src={theme === "dark" ? logo : logoBlack}
              alt="WC"
            />
            <h1 className={`font-bold transition-all ${isScrolled ? "text-lg" : "text-xl"}`}>Web Cros</h1>
          </a>
        </motion.div>

        <div className="flex justify-center items-center gap-x-12 transition-all duration-700">
        <Link
              to="/"
              onClick={() => handleTabClick("Home")}
              className={`text-sm hover:border hover:border-zinc-600 py-1 px-4 rounded-sm mx-2 my-2  hover:text-yellow-600 transition-all font-semibold leading-6 ${
                activeTab === "Home" ? "text-yellow-500" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
          {["Work", "About", "Contact"].map((tab) => (
            <Link
              key={tab}
              to={`${tab.toLowerCase()}`}
              onClick={() => handleTabClick(tab)}
              className={`text-sm hover:text-yellow-600 hover:border hover:border-zinc-600 py-1 px-4 mx-2 my-2 rounded-sm transition-all font-semibold leading-6                ${
                activeTab === tab ? "text-yellow-500 " : "text-foreground hover:text-primary"
              }`}
            >
              {tab}
            </Link>
          ))}
        </div>

        <motion.div
          className="flex flex-1 justify-end transition-all duration-300"
          animate={{ scale: isScrolled ? 0.85 : 1 }}
        >
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`px-4 py-2 shadow-md rounded-full transition-all duration-300 dark:bg-[#1a1a1a] ${
                isScrolled ? "bg-gray-300 mr-32" : "bg-gray-200"
              }`}
            >
              {theme === "dark" ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />}
            </button>
          )}
        </motion.div>
      </nav>
    </motion.header>
  )
}
