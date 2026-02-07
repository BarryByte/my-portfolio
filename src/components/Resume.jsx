import { motion } from 'framer-motion'
import { Download, Eye, FileText } from 'lucide-react'

export default function Resume() {
    // You can replace this with an actual PDF path
    const resumeUrl = '/resume.pdf'

    return (
        <section id="resume" className="section-padding">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="gradient-text">Resume</span>
                    </h2>
                    <p className="text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
                        Download my resume or view it directly below.
                    </p>
                </motion.div>

                {/* Resume Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="card p-8 text-center">
                        {/* Icon */}
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                            <FileText className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">
                            Abhay Raj - Resume
                        </h3>
                        <p className="text-surface-600 dark:text-surface-400 mb-6">
                            Full-Stack Developer | AI Engineer | Scaler School of Technology | BITS Pilani
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                <Eye size={18} className="mr-2" />
                                View Resume
                            </a>
                            <a
                                href={resumeUrl}
                                download="Abhay_Raj_Resume.pdf"
                                className="btn-secondary"
                            >
                                <Download size={18} className="mr-2" />
                                Download PDF
                            </a>
                        </div>

                        
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
