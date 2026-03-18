import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiCpu, FiDatabase, FiTool, FiUsers } from 'react-icons/fi'

const skillCategories = [
    {
        icon: <FiCode />,
        title: 'Programming Languages',
        skills: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'C#', 'SQL', 'HTML5', 'CSS3'],
    },
    {
        icon: <FiCpu />,
        title: 'AI & Machine Learning',
        skills: ['TensorFlow/Keras', 'PyTorch', 'NLTK', 'Computer Vision', 'U-Net', 'Reinforcement Learning'],
    },
    {
        icon: <FiDatabase />,
        title: 'Data Analytics',
        skills: ['Data Preprocessing', 'Feature Extraction', 'Dataset Management', 'Roboflow', 'Matplotlib'],
    },
    {
        icon: <FiTool />,
        title: 'Tools & Platforms',
        skills: ['Docker', 'Git/GitHub', 'Google Colab', 'VS Code', 'FastAPI', 'Next.js', 'Node.js'],
    },
    {
        icon: <FiUsers />,
        title: 'Interpersonal Skills',
        skills: ['Critical Thinking', 'Continuous Learning', 'Problem Solving', 'Adaptability'],
    },
]

export default function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="section" id="skills">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Skills</span>
                    <h2 className="section-title">My Tech Stack</h2>
                    <p className="section-subtitle">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            className="skill-card"
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: 0.1 * index,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{
                                rotateX: -2,
                                rotateY: 2,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <div className="skill-card-icon">{category.icon}</div>
                            <h3>{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, i) => (
                                    <span className="skill-tag" key={i}>{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
