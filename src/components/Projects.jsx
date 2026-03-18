import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'
import ImageTrail from './ImageTrail/ImageTrail'

const trailImages = [
    '/image-trail/image 1.png',
    '/image-trail/image 2.png',
    '/image-trail/image 3.png',
    '/image-trail/image 4.png',
    '/image-trail/image 5.png',
    '/image-trail/image 6.png',
    '/image-trail/image 7.png',
    '/image-trail/image 8.png',
]

const featuredProject = {
    type: 'Undergraduate Thesis — Featured Project',
    title: "Berong's E-Learning Platform",
    description:
        'An AI-driven fire safety education and evacuation simulation platform developed for the Bureau of Fire Protection. Features interactive floor plan simulation with real-time evacuation visualization, fire spread modeling powered by cellular automata, and agent-based evacuation behavior. The platform provides comprehensive fire safety training through an immersive simulation experience.',
    highlights: [
        'Interactive floor plan simulation with real-time visualization',
        'AI-powered fire spread modeling using cellular automata',
        'Agent-based evacuation behavior with pathfinding algorithms',
        'Comprehensive fire safety education modules',
    ],
    tech: ['Next.js', 'React', 'FastAPI', 'Python', 'Node.js'],
    github: 'https://github.com/sitol2/bfp-berong',
    live: 'https://bfpscberong.app',
    image: '/safescape-preview.png',
}

const projects = [
    {
        type: 'Full-Stack Project',
        title: 'Admin-and-Exit-Interview',
        description:
            'A real-time video conferencing platform with role-based access for admins and students. Features WebRTC video calls, session recording, automated speech-to-text transcription, live subtitles, archive management, and a glassmorphism-inspired UI.',
        tech: ['Node.js', 'Express.js', 'WebRTC', 'Socket.IO', 'SQLite3', 'FFmpeg', 'Python', 'HTML5', 'CSS3'],
        github: 'https://github.com/mclangstrong/Admin-and-Exit-Interview/tree/main',
    },
    {
        type: 'Full-Stack Project',
        title: 'Inventory Management System',
        description:
            'A modern inventory management application built with React and TypeScript using Vite. Provides an intuitive interface for tracking, organizing, and managing inventory items with a responsive and performant frontend.',
        tech: ['React', 'TypeScript', 'Vite', 'ESLint', 'CSS3'],
        github: 'https://github.com/sitol2/inventory_management_system',
    },
    {
        type: 'Computer Vision Project',
        title: 'Rock Paper Scissors — Object Detection',
        description:
            'A computer vision application powered by YOLOv8 that detects rock, paper, and scissors hand gestures in real-time from a webcam feed, with a Next.js frontend drawing live bounding boxes and a FastAPI backend serving the ML model.',
        tech: ['YOLOv8', 'OpenCV', 'Python', 'FastAPI', 'Uvicorn', 'Next.js', 'React', 'Tailwind CSS'],
        github: 'https://github.com/sitol2/Rock-Paper-Scissor-Object-Detection',
    },
    {
        type: 'AI / NLP Project',
        title: 'Fire Safety Chatbot',
        description:
            'A conversational agent providing automated guidance on fire safety, emergency procedures, and fire prevention. Uses NLTK for NLP and a Keras/TensorFlow model for intent classification, with a glassmorphic SvelteKit frontend and Flask API backend.',
        tech: ['Python', 'Flask', 'TensorFlow', 'Keras', 'NLTK', 'SvelteKit', 'Vite'],
        github: 'https://github.com/sitol2/Fire-Safety-Chatbot',
    },
]

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="section" id="projects">
            <div className="container" ref={ref}>
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label">Projects</span>
                        <h2 className="section-title">Featured Work</h2>
                        <p className="section-subtitle">
                            A selection of projects showcasing my skills in AI, ML, and full-stack development
                        </p>
                    </motion.div>

                    {/* ── Featured Project ──────────────────── */}
                    <motion.div
                        className="featured-project"
                        initial={{ opacity: 0, y: 60 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="featured-project-image">
                            <img
                                src={featuredProject.image}
                                alt={`${featuredProject.title} preview`}
                            />
                            <div className="featured-project-image-overlay" />
                            <div className="featured-project-trail">
                                <ImageTrail items={trailImages} variant={3} />
                            </div>
                        </div>
                        <div className="featured-project-content">
                            <span className="featured-project-badge">{featuredProject.type}</span>
                            <h3 className="featured-project-title">{featuredProject.title}</h3>
                            <p className="featured-project-desc">{featuredProject.description}</p>

                            <ul className="featured-project-highlights">
                                {featuredProject.highlights.map((item, i) => (
                                    <li key={i}>
                                        <FiArrowRight className="highlight-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="featured-project-tech">
                                {featuredProject.tech.map((tech, i) => (
                                    <span className="tech-tag" key={i}>{tech}</span>
                                ))}
                            </div>

                            <div className="featured-project-links">
                                <a
                                    href={featuredProject.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                >
                                    <FiExternalLink /> Visit Live Site
                                </a>
                                <a
                                    href={featuredProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary"
                                >
                                    <FiGithub /> View Source
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Other Projects ────────────────────── */}
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <motion.div
                                className="project-card"
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.15 * index + 0.3,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                whileHover={{
                                    rotateX: -1,
                                    rotateY: 1.5,
                                    transition: { duration: 0.4 },
                                }}
                                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                            >
                                <div className="project-card-header">
                                    <span className="project-type">{project.type}</span>
                                    <div className="project-links">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link-icon"
                                                aria-label="GitHub"
                                            >
                                                <FiGithub />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="project-card-body">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tech">
                                        {project.tech.map((tech, i) => (
                                            <span className="tech-tag" key={i}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
            </div>
        </section>
    )
}

