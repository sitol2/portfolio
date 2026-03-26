import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus('Sending message...')
        
        // Web3Forms endpoint & data
        const object = {
            ...formData,
            // Reads from .env locally, or Vercel Environment Variables in production
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY_HERE',
            // Formatting for the email received
            subject: `New Portfolio Message from ${formData.name}`,
            from_name: "Keinji's Portfolio",
            replyto: formData.email
        }
        
        const json = JSON.stringify(object)

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: json
            })
            
            const result = await res.json()
            
            if (result.success) {
                setStatus('Message sent successfully!')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setStatus('Failed to send message. Please try again.')
            }
        } catch (error) {
            setStatus('An error occurred. Please try again.')
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setStatus(''), 4000)
        }
    }

    return (
        <section className="section" id="contact">
            <div className="container" ref={ref}>
                <div className="contact-grid">
                    {/* Left side — Info */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <h2 className="contact-title">Contact Me</h2>
                        <span className="contact-subtitle">Get In Touch</span>
                        <p className="contact-desc">
                            Feel free to contact me for any work, internships, or
                            collaboration opportunities.
                        </p>

                        <div className="contact-links">
                            <a href="https://www.facebook.com/toudo.kirin.9" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <span className="contact-link-icon"><FaFacebookF /></span>
                                <span>facebook.com/toudo.kirin.9</span>
                            </a>
                            <a href="https://www.linkedin.com/in/keinji-velina-423736326/" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <span className="contact-link-icon"><FiLinkedin /></span>
                                <span>linkedin.com/in/keinji-velina</span>
                            </a>
                            <a href="https://github.com/sitol2" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <span className="contact-link-icon"><FiGithub /></span>
                                <span>github.com/sitol2</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right side — Form */}
                    <motion.form
                        className="contact-form"
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="contact-name">Name</label>
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-email">Email</label>
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                placeholder="Your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Your message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : (
                                <>
                                    Send Message <FiSend />
                                </>
                            )}
                        </button>
                        {status && <p className="contact-status">{status}</p>}
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
