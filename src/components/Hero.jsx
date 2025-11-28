"use client"

import { motion } from "framer-motion"
import heroImage from "../assets/hero-image.png"

import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-[rgb(180,96,0)] via-[rgb(200,120,30)] to-[rgb(160,80,0)] 
text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(200,120,30,0.5)] filter dark:brightness-110 
dark:from-[rgb(255,212,21)] dark:via-[rgb(253,233,170)] dark:to-[rgb(245,142,24)] 
dark:drop-shadow-[0_0_20px_rgba(255,212,21,0.4)] dark:filter brightness-125">
              Website Services
            </span>



          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We craft stunning, high-performance websites that captivate, convert, and elevate your online presence.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="https://api.whatsapp.com/send?phone=+919861381747&text=Hello%20Web%20Cros%20Team!%20I'm%20interested%20in%20learning%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button"
            >
              Book a Call
            </a>


            <Link
              to="/about"
              className="text-sm hover:border hover:border-zinc-500 transition-all duration-300 px-4 py-2 rounded-sm font-semibold leading-6 text-foreground"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <img
              src={heroImage}
              alt="hero"
              className="w-[500px] animate-floating "
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

