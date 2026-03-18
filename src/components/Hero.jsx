import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

export default function Hero() {
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
                    <span className="name">Keinji C. Velina</span>
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
