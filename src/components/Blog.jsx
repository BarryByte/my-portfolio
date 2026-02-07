import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

// Placeholder blog posts - you can replace with real content or integrate with a CMS later
const blogPosts = [
    {
        id: 1,
        title: 'Building a Local AI Pipeline for Lecture Notes',
        excerpt: 'How I created a fully local pipeline that transforms lecture videos into structured study notes using Whisper and Ollama.',
        date: '2026-02-02',
        readTime: '8 min read',
        tags: ['AI', 'Python', 'Whisper'],
        link: '#',
    },
    {
        id: 2,
        title: 'Understanding LLD: Designing a Parking Lot System',
        excerpt: 'A deep dive into object-oriented design principles through the classic parking lot interview problem.',
        date: '2025-09-24',
        readTime: '6 min read',
        tags: ['LLD', 'Java', 'Design'],
        link: '#',
    },
    {
        id: 3,
        title: 'DevOps Fundamentals: CI/CD with GitHub Actions',
        excerpt: 'Setting up a production-ready CI/CD pipeline with Docker, testing, and automated deployments.',
        date: '2025-11-14',
        readTime: '10 min read',
        tags: ['DevOps', 'Docker', 'CI/CD'],
        link: '#',
    },
]

export default function Blog() {
    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    return (
        <section id="blog" className="section-padding bg-surface-50 dark:bg-surface-900">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="gradient-text">Blog</span>
                    </h2>
                    <p className="text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
                        Thoughts, tutorials, and insights from my development journey.
                    </p>
                </motion.div>

                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card overflow-hidden group"
                        >
                            {/* Content */}
                            <div className="p-6">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-sm text-surface-600 dark:text-surface-400 mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                {/* Meta */}
                                <div className="flex items-center gap-4 text-xs text-surface-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {formatDate(post.date)}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={12} />
                                        {post.readTime}
                                    </span>
                                </div>

                                {/* Read More Link */}
                                <a
                                    href={post.link}
                                    className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 hover:gap-2 transition-all"
                                >
                                    Read More
                                    <ArrowRight size={14} />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Coming Soon Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-surface-500 mt-8"
                >
                    More articles coming soon! Stay tuned.
                </motion.p>
            </div>
        </section>
    )
}
