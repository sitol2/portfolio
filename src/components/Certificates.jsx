import { useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { FiAward, FiX, FiExternalLink } from 'react-icons/fi'

const certificates = [
    {
        title: 'Python Data Associate',
        issuer: 'DataCamp',
        file: '/certificates/Python Data Associate.pdf',
    },
    {
        title: 'Data Literacy',
        issuer: 'DataCamp Fundamentals Certification',
        file: '/certificates/Data Literacy.pdf',
    },
    {
        title: 'Introduction to Git',
        issuer: 'DataCamp',
        file: '/certificates/Introduction to Git.pdf',
    },
    {
        title: 'Supervised Learning with scikit-learn',
        issuer: 'DataCamp',
        file: '/certificates/Supervised Learning with scikit-learn.pdf',
    },
    {
        title: 'Introduction to Importing Data in Python',
        issuer: 'DataCamp',
        file: '/certificates/Introduction to Importing Data In Python.pdf',
    },
    {
        title: 'Understanding Data Science',
        issuer: 'DataCamp',
        file: '/certificates/Data Science.pdf',
    },
    {
        title: 'Data Quality, Data Management & Data Governance',
        issuer: 'Udemy',
        file: '/certificates/UC-7a4912b6-a04c-4648-8454-2027548bd977.pdf',
    },
    {
        title: 'VIBE Coding Session',
        issuer: 'Certificate of Recognition',
        file: '/certificates/Cert-VC-188.pdf',
    },
    {
        title: 'Learning the Basics of VIBE Coding',
        issuer: 'Information Session',
        file: '/certificates/KEINJI C. VELINA - Certificate.pdf',
    },
    {
        title: 'Introduction to Extended Reality',
        issuer: 'Information Session',
        file: '/certificates/Cert_IXR_B3-126.pdf',
    },
    {
        title: 'Stay Safe Online: Cybersecurity Basics',
        issuer: 'Webinar',
        file: '/certificates/AI Webinar 5 Certificate_Keinji C. Velina.pdf',
    },
]

function PdfModal({ cert, onClose }) {
    return (
        <motion.div
            className="pdf-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="pdf-modal"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="pdf-modal-header">
                    <div>
                        <h3>{cert.title}</h3>
                        <span className="pdf-modal-issuer">{cert.issuer}</span>
                    </div>
                    <div className="pdf-modal-actions">
                        <a
                            href={cert.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-modal-btn"
                            title="Open in new tab"
                        >
                            <FiExternalLink />
                        </a>
                        <button className="pdf-modal-btn" onClick={onClose} title="Close">
                            <FiX />
                        </button>
                    </div>
                </div>
                <div className="pdf-modal-body">
                    <iframe
                        src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                        title={cert.title}
                        width="100%"
                        height="100%"
                        style={{ border: 'none', borderRadius: '0 0 16px 16px', background: '#fff' }}
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default function Certificates() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const [selectedCert, setSelectedCert] = useState(null)

    return (
        <section className="section" id="certificates">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Certificates</span>
                    <h2 className="section-title">Awards & Certifications</h2>
                    <p className="section-subtitle">
                        Professional certifications and achievements earned through continuous learning
                    </p>
                </motion.div>

                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <motion.div
                            className="certificate-card"
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: 0.06 * index,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.3 },
                            }}
                            onClick={() => setSelectedCert(cert)}
                        >
                            <div className="certificate-icon">
                                <FiAward />
                            </div>
                            <div className="certificate-info">
                                <h4>{cert.title}</h4>
                                <span className="certificate-issuer">{cert.issuer}</span>
                            </div>
                            <div className="certificate-view-hint">
                                View →
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <PdfModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
                )}
            </AnimatePresence>
        </section>
    )
}
