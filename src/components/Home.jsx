import { motion } from 'framer-motion'
import { ArrowDown, Code2, Cpu, Globe } from 'lucide-react'

const skills = [
    { icon: Globe, label: 'Full-Stack Development', color: 'text-blue-500' },
    { icon: Cpu, label: 'AI & Machine Learning', color: 'text-purple-500' },
    { icon: Code2, label: 'System Design', color: 'text-green-500' },
]

export default function Home() {
    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
            <div className="container-custom section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-primary-600 dark:text-primary-400 font-medium mb-4"
                    >
                        Hello, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        <span className="gradient-text">Abhay Raj</span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-surface-600 dark:text-surface-400 mb-8 leading-relaxed"
                    >
                        An AI Engineer & Full-Stack Developer with experience building production-grade
                        RAG systems and scalable web applications. Currently pursuing{' '}
                        <span className="text-primary-600 dark:text-primary-400 font-medium">BS+MS in Computer Science</span>{' '}
                        at Scaler School of Technology, Bangalore.
                    </motion.p>

                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {skills.map((skill) => (
                            <div
                                key={skill.label}
                                className="flex items-center gap-2 px-4 py-2 bg-surface-100 dark:bg-surface-800 rounded-full"
                            >
                                <skill.icon size={18} className={skill.color} />
                                <span className="text-sm font-medium text-surface-700 dark:text-surface-300">
                                    {skill.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <button onClick={scrollToProjects} className="btn-primary">
                            View My Work
                        </button>
                        <a href="#resume" className="btn-secondary">
                            Download Resume
                        </a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-16"
                    >
                        <button
                            onClick={scrollToProjects}
                            className="animate-bounce text-surface-400 hover:text-primary-500 transition-colors"
                            aria-label="Scroll to projects"
                        >
                            <ArrowDown size={24} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
