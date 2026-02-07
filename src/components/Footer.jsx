import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/BarryByte', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/abhay-raj', icon: Linkedin },
    { name: 'Email', href: 'mailto:abhayraj.12667@gmail.com', icon: Mail },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-surface-50 dark:bg-surface-900 border-t border-surface-200 dark:border-surface-800">
            <div className="container-custom py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold gradient-text mb-2">Abhay Raj</h3>
                        <p className="text-sm text-surface-600 dark:text-surface-400">
                            AI Engineer | Full-Stack Developer 
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                aria-label={link.name}
                            >
                                <link.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-surface-200 dark:border-surface-800 text-center">
                    <p className="text-sm text-surface-500 dark:text-surface-500 flex items-center justify-center gap-1">
                        © {currentYear} Abhay Raj. Built with <Heart size={14} className="text-red-500" /> using React & Tailwind.
                    </p>
                </div>
            </div>
        </footer>
    )
}
