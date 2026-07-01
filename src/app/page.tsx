"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import ExperienceAndSkills from "@/components/ExperienceAndSkills";
import ProjectsAndMore from "@/components/ProjectsAndMore";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Aditya Singh
            </span>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                Technical <br />
                <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Masterpiece
                </span>
              </h1>
              <p className="text-xl text-zinc-400 mb-8 max-w-lg">
                Digital Growth & Automation Engineer. Specializing in high-performance digital ecosystems, social media automation, and full-stack solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-zinc-50 text-zinc-950 font-semibold hover:bg-zinc-200 transition-colors"
                >
                  Work with me
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <div className="flex items-center space-x-4">
                  <Link href="https://github.com/AdityaS-appco" target="_blank" className="p-3 rounded-full border border-zinc-800 hover:bg-zinc-900 transition-colors">
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link href="https://linkedin.com/in/aditya-singh-524a04360" target="_blank" className="p-3 rounded-full border border-zinc-800 hover:bg-zinc-900 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 blur-3xl" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
                  <Image
                    src="/profile.png"
                    alt="Aditya Singh"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating Stats or Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 p-4 rounded-xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-sm"
                >
                  <p className="text-sm font-medium text-blue-400">950k+ Realtime Views</p>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 p-4 rounded-xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-sm"
                >
                  <p className="text-sm font-medium text-emerald-400">80% Automation Efficiency</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </section>

      <ExperienceAndSkills />
      <ProjectsAndMore />
    </main>
  );
}
