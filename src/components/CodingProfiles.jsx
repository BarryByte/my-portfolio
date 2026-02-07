import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const profiles = [
    {
        name: 'LeetCode',
        url: 'https://leetcode.com/u/BarryByte/',
        icon: '🧩',
        description: 'DSA practice and contests',
        color: 'from-yellow-500 to-orange-500',
    },
    {
        name: 'Codeforces',
        url: 'https://codeforces.com/profile/barry_x',
        icon: '🏆',
        description: 'Competitive programming',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        name: 'GitHub',
        url: 'https://github.com/BarryByte',
        icon: '🐙',
        description: 'Open source contributions',
        color: 'from-gray-600 to-gray-800',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/abhay-raj-ab0445287/',
        icon: '💼',
        description: 'Professional network',
        color: 'from-blue-600 to-blue-800',
    },
]

export default function CodingProfiles() {
    return (
        <section id="profiles" className="section-padding">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="gradient-text">Coding Profiles</span>
                    </h2>
                    <p className="text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
                        Find me on these platforms for competitive programming and professional networking.
                    </p>
                </motion.div>

                {/* Profiles Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {profiles.map((profile, index) => (
                        <motion.a
                            key={profile.name}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group card p-6 text-center hover:-translate-y-1 transition-transform"
                        >
                            {/* Icon */}
                            <div className="text-4xl mb-4">{profile.icon}</div>

                            {/* Name */}
                            <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-1 flex items-center justify-center gap-1">
                                {profile.name}
                                <ExternalLink
                                    size={14}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-500"
                                />
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-surface-500 dark:text-surface-400">
                                {profile.description}
                            </p>

                            {/* Gradient Bar */}
                            <div className={`h-1 w-12 mx-auto mt-4 rounded-full bg-gradient-to-r ${profile.color}`} />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
