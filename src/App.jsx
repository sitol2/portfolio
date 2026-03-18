import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import LogoLoop from './components/LogoLoop/LogoLoop'

const techLogos = [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', alt: 'Next.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', alt: 'TensorFlow' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', alt: 'Flask' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', alt: 'Docker' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', alt: 'Git' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', alt: 'OpenCV' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg', alt: 'Svelte' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', alt: 'FastAPI' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', alt: 'SQLite' },
]

export default function App() {
    return (
        <>
            <ParticleBackground />
            <div className="app">
                {/* Left logo loop — scrolling DOWN */}
                <div className="page-logo-column page-logo-column--left">
                    <LogoLoop
                        logos={techLogos}
                        direction="down"
                        speed={40}
                        logoHeight={52}
                        gap={36}
                        fadeOut
                        fadeOutColor="var(--bg-primary)"
                    />
                </div>

                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Certificates />
                <Contact />
                <footer className="footer">
                    <div className="container">
                        <p>
                            © 2026 Keinji C. Velina. Built with React
                        </p>
                    </div>
                </footer>

                {/* Right logo loop — scrolling UP */}
                <div className="page-logo-column page-logo-column--right">
                    <LogoLoop
                        logos={techLogos}
                        direction="up"
                        speed={40}
                        logoHeight={52}
                        gap={36}
                        fadeOut
                        fadeOutColor="var(--bg-primary)"
                    />
                </div>
            </div>
        </>
    )
}
