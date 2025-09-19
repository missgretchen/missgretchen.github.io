import React from 'react'
import './Portfolio.css'
import headshot from '/Headshot.jpg'
import { Github, Instagram, Linkedin, Download } from 'lucide-react'

const Portfolio = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/missgretchen',
      icon: Github,
      className: 'github'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/gretchenegg/',
      icon: Instagram,
      className: 'instagram'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gretcheneggers',
      icon: Linkedin,
      className: 'linkedin'
    }
  ]

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Gretchen_Eggers_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="portfolio">
      <div className="portfolio-container">
        {/* Header */}
        <header className="portfolio-header">
          <div className="header-left">gretchen eggers</div>
          <nav className="header-nav">
            <a href="#about" className="nav-link">about</a>
            <a href="#projects" className="nav-link active">projects</a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="portfolio-main">
          {/* Profile Section */}
          <section className="profile-section">
            <div className="profile-image-container">
              <img 
                src={headshot} 
                alt="Gretchen Eggers" 
                className="profile-image"
              />
              <div className="image-overlay"></div>
            </div>
            
            <div className="profile-content">
              <h1 className="greeting">hi there, my name is gretchen</h1>
              
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-link ${social.className}`}
                      title={social.name}
                    >
                      <IconComponent className="social-icon" size={24} />
                    </a>
                  )
                })}
              </div>

              <button 
                className="resume-button"
                onClick={handleResumeDownload}
              >
                <span className="button-text">download resume</span>
                <Download className="button-icon" size={18} />
              </button>
            </div>
          </section>

          {/* About Section */}
          <section className="about-section">
            <p className="about-text">
              I'm a product-minded full-stack software engineer with experience 
              researching, designing, and building software products end-to-end. 
              I value code quality, clean design, and creating polished, intentional 
              products that make a real impact.
            </p>
            <p className="about-text">
              From leading frontend infrastructure improvements to conducting 
              applied ML research, I thrive on teams that encourage creativity and 
              technical excellence. I'm passionate about bridging the gap between 
              innovative design and cutting-edge technology.
            </p>
            <p className="about-text">
              When I'm not coding, you'll find me painting, traveling, or exploring 
              new languages. I speak English, Portuguese, and Spanish, and I believe 
              in the power of diverse perspectives to create better solutions.
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer className="portfolio-footer">
          <p className="footer-text">copywrite 2024</p>
        </footer>
      </div>
    </div>
  )
}

export default Portfolio
