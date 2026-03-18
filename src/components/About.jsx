import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="section" id="about">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">Better Than Me Yesterday</h2>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-image-container"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="about-image-wrapper">
                            <img src="/profile.png" alt="Keinji C. Velina" className="about-image" />
                        </div>
                        <div className="about-image-decoration"></div>
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h3>CS Student & A Collection of Mistake</h3>
                        <p>
                            I'm a Computer Science student at Laguna State Polytechnic University,
                            majoring in Intelligent Systems. With a diverse technical skillset and a
                            critical thinking mindset, I thrive at the intersection of web development
                            and artificial intelligence.
                        </p>
                        <p>
                            I'm adept at web development using HTML, CSS, JavaScript, and Node.js,
                            alongside backend expertise in Python/Django. My passion lies in building
                            and deploying AI models and conversational agents that solve real-world problems.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <div className="stat-number">5+</div>
                                <div className="stat-label">Projects</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">10+</div>
                                <div className="stat-label">Technologies</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">4</div>
                                <div className="stat-label">Years CS</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
