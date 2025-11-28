"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue, AnimatePresence } from "framer-motion"

const features = [
  {
    title: "Minimal Design",
    description: "Clean aesthetics that put your content in the spotlight.",
    icon: "✨",
    details: "Our minimal design philosophy eliminates unnecessary elements to create a clean, focused user experience. We carefully craft each interface with intentional whitespace, balanced typography, and subtle visual cues that guide users through your content naturally."
  },
  {
    title: "SEO Optimized",
    description: "Built to help your site rank higher in search results.",
    icon: "🔍",
    details: "We implement proven SEO best practices throughout your site's architecture. This includes semantic HTML structure, optimized metadata, clean URL structures, responsive design, and performance optimization—all working together to improve your visibility in search engines."
  },
  {
    title: "Responsive",
    description: "Flawless experiences across all devices and screen sizes.",
    icon: "📱",
    details: "Our responsive design approach ensures your website looks and functions perfectly on any device. We use flexible layouts, fluid grids, and media queries to create seamless transitions between desktop, tablet, and mobile experiences without sacrificing functionality or visual appeal."
  },
  {
    title: "Fast Performance",
    description: "Lightning-quick load times for smooth user interactions.",
    icon: "⚡",
    details: "Speed is critical for user retention and conversion. We optimize image sizes, leverage browser caching, minimize HTTP requests, and implement code splitting to ensure your site loads quickly and runs smoothly, providing users with a frustration-free experience."
  },
  {
    title: "Accessibility",
    description: "Inclusive design practices for all users.",
    icon: "🌈",
    details: "We believe the web should be accessible to everyone. Our designs incorporate WCAG guidelines with proper contrast ratios, keyboard navigation, screen reader compatibility, and semantic HTML to ensure your site is usable by people with diverse abilities and needs."
  },
]

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState(null)
  const carousel = useRef(null)
  const modalRef = useRef(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    // Add event listener for clicks outside the modal
    const handleClickOutside = (event) => {
      if (showModal && modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    
    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showModal])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  const openModal = (feature) => {
    setSelectedFeature(feature)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  // Animation variants for the modal overlay
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  }

  // Animation variants for the modal content
  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 300, 
        duration: 0.4 
      } 
    },
    exit: { 
      scale: 0.8, 
      opacity: 0, 
      y: 20, 
      transition: { 
        duration: 0.3 
      } 
    }
  }

  return (
    <div className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose Us</h2>
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] h-[400px] p-8 m-4 bg-[#fffcf8] dark:bg-[#1a1a1a] rounded-3xl shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                <div>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => openModal(feature)}
                    className="text-primary hover:underline"
                  >
                    Learn more →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Modal */}
        <AnimatePresence>
          {showModal && selectedFeature && (
            <motion.div 
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
            >
              <motion.div 
                ref={modalRef}
                className="bg-white dark:bg-zinc-800 rounded-lg p-8 max-w-lg w-full mx-4 relative shadow-xl"
                variants={modalVariants}
              >
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                
                <div className="text-4xl mb-4">{selectedFeature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{selectedFeature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedFeature.description}</p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Details</h4>
                  <p className="text-gray-700 dark:text-gray-300">{selectedFeature.details}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}