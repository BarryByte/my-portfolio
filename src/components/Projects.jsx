import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, GitFork } from 'lucide-react'
import { fetchUserRepos, getLanguageColor } from '../services/github'
import projectsConfig from '../config/projects.json'

export default function Projects() {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        async function loadRepos() {
            try {
                const data = await fetchUserRepos()
                setRepos(data)
            } catch (err) {
                setError('Failed to load projects')
            } finally {
                setLoading(false)
            }
        }
        loadRepos()
    }, [])

    // Get unique languages for filter
    const languages = ['all', ...new Set(repos.map(r => r.language).filter(Boolean))]

    // Filter repos
    const filteredRepos = filter === 'all'
        ? repos
        : repos.filter(r => r.language === filter)

    return (
        <section id="projects" className="section-padding bg-surface-50 dark:bg-surface-900">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
                        A collection of my work fetched directly from GitHub.
                        Featured projects are shown first.
                    </p>
                </motion.div>

                {/* Language Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {languages.slice(0, 8).map((lang) => (
                        <button
                            key={lang}
                            onClick={() => setFilter(lang)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${filter === lang
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-white dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-700'
                                }`}
                        >
                            {lang === 'all' ? 'All' : lang}
                        </button>
                    ))}
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="card p-6 animate-pulse">
                                <div className="h-6 bg-surface-200 dark:bg-surface-700 rounded w-3/4 mb-4" />
                                <div className="h-4 bg-surface-200 dark:bg-surface-700 rounded w-full mb-2" />
                                <div className="h-4 bg-surface-200 dark:bg-surface-700 rounded w-2/3" />
                            </div>
                        ))}
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="text-center py-12 text-red-500">
                        {error}
                    </div>
                )}

                {/* Projects Grid */}
                {!loading && !error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredRepos.map((repo, index) => (
                            <ProjectCard
                                key={repo.id}
                                repo={repo}
                                index={index}
                                isFeatured={projectsConfig.featured.includes(repo.name)}
                            />
                        ))}
                    </motion.div>
                )}

                {/* Empty State */}
                {!loading && !error && filteredRepos.length === 0 && (
                    <div className="text-center py-12 text-surface-500">
                        No projects found for this filter.
                    </div>
                )}
            </div>
        </section>
    )
}

function ProjectCard({ repo, index, isFeatured }) {
    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric'
        })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`card p-6 flex flex-col ${isFeatured ? 'ring-2 ring-primary-500' : ''}`}
        >
            {/* Featured Badge */}
            {isFeatured && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 w-fit mb-3">
                    ⭐ Featured
                </span>
            )}

            {/* Title */}
            <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">
                {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </h3>

            {/* Description */}
            <p className="text-sm text-surface-600 dark:text-surface-400 mb-4 flex-grow line-clamp-3">
                {repo.description || 'No description available'}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-surface-500 mb-4">
                {repo.language && (
                    <span className="flex items-center gap-1">
                        <span
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: getLanguageColor(repo.language) }}
                        />
                        {repo.language}
                    </span>
                )}
                {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                        <Star size={12} />
                        {repo.stargazers_count}
                    </span>
                )}
                {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1">
                        <GitFork size={12} />
                        {repo.forks_count}
                    </span>
                )}
                <span className="ml-auto">{formatDate(repo.updated_at)}</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-surface-200 dark:border-surface-700">
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                    <Github size={16} />
                    Code
                </a>
                {repo.homepage && (
                    <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                        <ExternalLink size={16} />
                        Live Demo
                    </a>
                )}
            </div>
        </motion.div>
    )
}
