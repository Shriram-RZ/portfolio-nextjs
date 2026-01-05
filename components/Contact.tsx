'use client'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaTwitter } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 gradient-text">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          I'm currently looking for new opportunities and exciting projects to work on. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:contact@example.com"
            className="flex items-center justify-center space-x-3 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <FiMail size={24} className="text-purple-600" />
            <span>contact@example.com</span>
          </a>
          <a
            href="https://github.com/Shriram-RZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <FiGithub size={24} className="text-purple-600" />
            <span>github.com/Shriram-RZ</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <FiLinkedin size={24} className="text-purple-600" />
            <span>LinkedIn Profile</span>
          </a>
          <a
            href="https://twitter.com/shriram173"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <FaTwitter size={24} className="text-purple-600" />
            <span>@shriram173</span>
          </a>
        </div>

        <a
          href="mailto:contact@example.com"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all"
        >
          Say Hello
        </a>
      </div>
    </section>
  )
}