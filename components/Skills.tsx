'use client'
import { FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa'
import { SiSpringboot, SiNextdotjs, SiMysql, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si'

export default function Skills() {
  const skills = [
    { name: 'Java', icon: <FaJava size={40} />, color: 'text-red-600' },
    { name: 'Spring Boot', icon: <SiSpringboot size={40} />, color: 'text-green-600' },
    { name: 'Python', icon: <FaPython size={40} />, color: 'text-blue-600' },
    { name: 'React', icon: <FaReact size={40} />, color: 'text-cyan-500' },
    { name: 'Next.js', icon: <SiNextdotjs size={40} />, color: 'text-black dark:text-white' },
    { name: 'TypeScript', icon: <SiTypescript size={40} />, color: 'text-blue-600' },
    { name: 'Node.js', icon: <FaNodeJs size={40} />, color: 'text-green-600' },
    { name: 'MySQL', icon: <SiMysql size={40} />, color: 'text-blue-700' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={40} />, color: 'text-blue-600' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} />, color: 'text-cyan-500' },
    { name: 'Git', icon: <FaGitAlt size={40} />, color: 'text-orange-600' },
    { name: 'Docker', icon: <FaDocker size={40} />, color: 'text-blue-500' },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all"
            >
              <div className={skill.color}>{skill.icon}</div>
              <p className="mt-4 font-semibold text-gray-700 dark:text-gray-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}