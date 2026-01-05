'use client'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      title: 'Zuno - Freelance Hiring Platform',
      description: 'A comprehensive CRM and hiring platform connecting freelancers with clients. Built with Spring Boot backend and React frontend.',
      tech: ['Spring Boot', 'React', 'MySQL', 'REST API'],
      github: 'https://github.com/Shriram-RZ',
      demo: '#',
    },
    {
      title: 'Safe Route',
      description: 'Police and citizen safety application enabling real-time communication and emergency response coordination.',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Next.js'],
      github: 'https://github.com/Shriram-RZ',
      demo: '#',
    },
    {
      title: 'AI CMS Generator',
      description: 'AI-powered content management system that automatically generates and organizes website content using machine learning.',
      tech: ['Python', 'React', 'TensorFlow', 'MongoDB'],
      github: 'https://github.com/Shriram-RZ',
      demo: '#',
    },
    {
      title: 'Turf Booking Application',
      description: 'Web application for booking sports turfs and managing reservations with real-time availability tracking.',
      tech: ['Spring Boot', 'React', 'MySQL', 'Stripe API'],
      github: 'https://github.com/Shriram-RZ',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    <FiGithub size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    <FiExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}