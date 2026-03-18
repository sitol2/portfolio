import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowDown, FiGithub } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

export default function Hero() {
    const nameTexts = ["Keinji Velina", "sitol2"]
    const [textIndex, setTextIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentWord = nameTexts[textIndex]
        let timeout

        if (isDeleting) {
            // Un-typing
            if (displayText === '') {
                setIsDeleting(false)
                setTextIndex((prev) => (prev + 1) % nameTexts.length)
            } else {
                timeout = setTimeout(() => {
                    setDisplayText(currentWord.substring(0, displayText.length - 1))
                }, 50) // Erase speed
            }
        } else {
            // Typing
            if (displayText === currentWord) {
                timeout = setTimeout(() => {
                    setIsDeleting(true)
                }, 2000) // Pause at end of word
            } else {
                timeout = setTimeout(() => {
                    setDisplayText(currentWord.substring(0, displayText.length + 1))
                }, 100) // Typing speed
            }
        }

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, textIndex])

    return (
        <section className="hero section" id="hero">
            <div className="hero-content container">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className="dot"></span>
                    Open to opportunities
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Hi, I'm
                    <motion.span className="name">
                        {displayText}
                        <motion.span 
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                            style={{ display: "inline-block", width: "4px", backgroundColor: "currentColor", marginLeft: "4px" }}
                        />
                    </motion.span>
                </motion.h1>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Computer Science student specializing in Intelligent Systems.
                    Building AI-powered solutions, full-stack web applications,
                    and exploring the frontiers of machine learning.
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a href="#projects" className="btn-primary" onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                    }}>
                        View My Work
                        <FiArrowDown />
                    </a>
                    <a href="https://github.com/sitol2" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        <FiGithub />
                        GitHub
                    </a>
                </motion.div>
            </div>

            <motion.div
                className="hero-scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </motion.div>
        </section>
    )
}
