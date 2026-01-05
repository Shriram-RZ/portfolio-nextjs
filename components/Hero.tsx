'use client'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Shriram</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8">
          Full Stack Developer & Tech Enthusiast
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Computer Science student passionate about building innovative web applications.
          Specializing in Spring Boot, React, and modern cloud technologies.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/Shriram-RZ"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white transition-all"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white transition-all"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white transition-all"
          >
            <FiMail size={24} />
          </a>
        </div>

        <a
          href="#projects"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all"
        >
          View My Work
        </a>
      </div>
    </section>
  )
}