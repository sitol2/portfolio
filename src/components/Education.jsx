import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward } from 'react-icons/fi'

export default function Education() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="section" id="education">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Education</span>
                    <h2 className="section-title">Academic Background</h2>
                </motion.div>

                <motion.div
                    className="education-card"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="education-card-header">
                        <div>
                            <h3>Bachelor of Science in Computer Science</h3>
                            <h4>Major: Intelligent Systems</h4>
                        </div>
                        <span className="education-year">2022 – 2026</span>
                    </div>
                    <p>Laguna State Polytechnic University — Sta. Cruz, Laguna</p>

                    <div className="education-details">
                        <h4><FiAward style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Awards & Certifications</h4>
                        <ul className="awards-list">
                            <li>Iskolar ng Laguna Scholarship Recipient</li>
                            <li>Data Quality, Data Management & Data Governance Course</li>
                            <li>Stay Safe Online: Cybersecurity Basics Webinar</li>
                            <li>OpenXAI Vibe Coding Session</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
