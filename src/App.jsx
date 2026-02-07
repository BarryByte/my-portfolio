import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Resume from './components/Resume'
import CodingProfiles from './components/CodingProfiles'
import Footer from './components/Footer'

function App() {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setDarkMode(prefersDark)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode(!darkMode)

    return (
        <Router>
            <div className="min-h-screen bg-white dark:bg-surface-950 text-surface-900 dark:text-surface-50 transition-colors duration-300">
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <main>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Home />
                                <Projects />
                                <CodingProfiles />
                                <Blog />
                                <Resume />
                            </>
                        } />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
