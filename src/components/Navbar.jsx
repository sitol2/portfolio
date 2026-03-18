import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, id) => {
        e.preventDefault()
        setMobileOpen(false)
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-logo" onClick={(e) => handleNavClick(e, 'hero')}>
                    KV.
                </div>

                <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
                    <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
                    <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
                    <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
                    <li><a href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</a></li>
                    <li><a href="#certificates" onClick={(e) => handleNavClick(e, 'certificates')}>Certificates</a></li>
                    <li>
                        <a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, 'contact')}>
                            Contact
                        </a>
                    </li>
                </ul>

                <button
                    className={`nav-toggle ${mobileOpen ? 'open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}
