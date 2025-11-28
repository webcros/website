"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import RajeshImage from "../assets/rajeshImage.png"
import RajibImage from "../assets/rajibImage.jpg"
import BidyadharImage from "../assets/bidyaImage.jpg"

import teamIllustration from "../assets/team_illustration.jpeg"
import teamIllustration2 from "../assets/team_illustration_2.jpeg"

import { Link } from "react-router-dom"

import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("story")

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on page load or refresh
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const teamMembers = [
    {
      name: "Rajesh",
      role: "Lead Developer",
      description: "I handle all aspects of development, from front-end to back-end integration. With expertise in React, Next.js, and modern JavaScript frameworks, I ensure our projects are built with clean, maintainable code that performs exceptionally well.",
      skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Node.js"],
      image: RajeshImage,
      social: {
        github: "https://github.com/talaganaRajesh",
        linkedin: "https://www.linkedin.com/in/talagana-rajesh-75a546289/",
        twitter: "https://x.com/Rajeshtalagana"
      }
    },
    {
      name: "Rajib",
      role: "Client Relations Manager",
      description: "I oversee client relationships and project management. My focus is on understanding client needs, maintaining clear communication throughout projects, and ensuring we exceed expectations with every delivery.",
      skills: ["Project Management", "Client Relations", "Requirements Analysis", "Agile Methodology"],
      image: RajibImage,
      social: {
        github: "https://github.com/rajibusername",
        linkedin: "https://linkedin.com/in/rajibprofile",
        twitter: "https://twitter.com/rajibhandle"
      }
    },
    {
      name: "Bidyadhar",
      role: "SEO & Database Specialist",
      description: "I specialize in SEO optimization and database architecture. My work ensures our clients' websites rank well in search engines like Google and have robust, efficient database systems that scale with their business growth.",
      skills: ["SEO", "Database Design", "MongoDB", "PostgreSQL", "Analytics"],
      image: BidyadharImage,
      social: {
        github: "https://github.com/bidyadharusername",
        linkedin: "https://linkedin.com/in/bidyadharprofile",
        twitter: "https://twitter.com/bidyadharhandle"
      }
    }
  ]


  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );


  return (
    <div className="bg-gradient-to-b from-background to-secondary/10 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-xl md:text-3xl lg:text-4xl mt-5 font-bold text-foreground mb-6">About Our Agency</h1>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              We're a team of web developers and digital specialists crafting impactful digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex justify-center space-x-4 md:space-x-8 border-b border-gray-200 dark:border-gray-800">
          <button
            onClick={() => setActiveSection("story")}
            className={`pb-4 px-4 text-lg hover:text-amber-500 font-medium transition-colors ${activeSection === "story"
              ? "text-primary border-b-2 dark:border-white border-black"
              : "text-muted-foreground hover:text-foreground"
              }`}
          >
            Our Story
          </button>
          <button
            onClick={() => setActiveSection("team")}
            className={`pb-4 px-4 text-lg hover:text-amber-500 font-medium transition-colors ${activeSection === "team"
              ? "text-primary border-b-2 dark:border-white border-black"
              : "text-muted-foreground hover:text-foreground"
              }`}
          >
            Meet the Team
          </button>
          <button
            onClick={() => setActiveSection("approach")}
            className={`pb-4 px-4 text-lg hover:text-amber-500 font-medium transition-colors ${activeSection === "approach"
              ? "text-primary border-b-2 dark:border-white border-black"
              : "text-muted-foreground hover:text-foreground"
              }`}
          >
            Our Approach
          </button>
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Our Story Section */}
        {activeSection === "story" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Journey</h2>
                <p className="text-muted-foreground mb-6">
                  We started with a simple belief: great websites should be both beautiful and functional.
                  Our journey began when we combined our complementary skills to create solutions that
                  truly deliver results for our clients.
                </p>
                <p className="text-muted-foreground">
                  Today, we continue to push boundaries in web development, creating experiences
                  that help our clients stand out in a crowded digital landscape.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <motion.div
                  className="relative h-96"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-3"></div>
                  <img src={teamIllustration} alt="" className="cursor-pointer absolute inset-0 rounded-lg transform -rotate-3 hover:rotate-0 transition-all duration-300 " />
                </motion.div>
              </div>
            </div>


          </motion.div>
        )}

        {/* Team Section */}
        {activeSection === "team" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-16"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Meet Our Team</h2>
              <p className="text-muted-foreground">
                We're a tight-knit team with complementary skills, working together to create
                exceptional digital experiences. Each of us brings unique expertise to ensure
                every aspect of your project is handled with precision.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full "
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground mb-4">{member.description}</p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Our Approach Section */}
        {activeSection === "approach" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-16"
          >
            <div className=" flex md:flex-row flex-col gap-10 justify-center items-start">
              <div className="rounded-2xl w-1/3 overflow-hidden shadow-xl">
                <img
                  src={teamIllustration2}
                  alt="Our collaborative approach"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-2/3">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Philosophy</h2>
                <p className="text-muted-foreground mb-6">
                  At Web Cros, we believe a great website is more than just code and design—it’s a powerful business tool that drives real results. Our approach blends technical excellence with a deep understanding of business objectives, ensuring that every project is not only visually appealing but also strategically effective. We focus on user-centricity, crafting seamless experiences that engage and convert, while maintaining the highest standards of performance, security, and scalability. Every website we build is aligned with our clients' goals, making it a valuable digital asset that contributes to long-term success.

                </p>
                <p className="text-muted-foreground bottom-0 md:pr-20 absolute">
                  We blend innovation with functionality, ensuring every website we build is visually stunning, high-performing, and aligned with your business goals.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeIn}
                className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-primary text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Discovery</h3>
                <p className="text-muted-foreground">
                  We begin by deeply understanding your business goals, target audience, and unique needs.
                  This foundational step ensures our solutions are aligned with your objectives from the start.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-primary text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Strategy & Design</h3>
                <p className="text-muted-foreground">
                  We craft a strategic approach and design concepts that combine aesthetics with functionality.
                  Our designs are created with both user experience and conversion optimization in mind.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-primary text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Development & Launch</h3>
                <p className="text-muted-foreground">
                  Our development process emphasizes clean code, performance, and security.
                  After thorough testing, we launch your site and provide ongoing support to ensure continued success.
                </p>
              </motion.div>
            </div>

            <div className="relative flex size-full items-center justify-center overflow-hidden">
              <h1>Tech Stack</h1>
              <IconCloud images={images} />
            </div>


          </motion.div>
        )}
      </section>

      {/* Call to Action */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to work with us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's collaborate to create a website that perfectly represents your brand and helps you achieve your business goals.
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 bg-primary dark:text-white text-black bg-zinc-300 dark:bg-zinc-800 dark:hover:text-amber-500 hover:text-amber-600 font-medium rounded-full hover:bg-primary/90 transition-colors">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}