import React from 'react'
import './Portfolio.css'
import headshot from '../assets/headshot.jpg'
import resume from '../assets/resume.pdf'
import { Github, Instagram, Linkedin } from 'lucide-react'
import Clouds from './Clouds'

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


  return (
    <div className="portfolio">
      <Clouds />
      <div className="portfolio-container">
        {/* Header */}
        <header className="portfolio-header">
          <div className="header-left">gretchen eggers portfolio</div>
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
              <h1 className="greeting">Hi there, my name is gretchen</h1>
              
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
                <a 
                  href={resume}
                  download="Gretchen_Eggers_Resume.pdf"
                  className="resume-link"
                >
                  you can get my CV here
                </a>
              </div>
              <div className="about-box">
                <p className="about-text">
                  I'm an engineer with a passion for merging technology and creativity. I graduated from MIT in 2020, where I studied Computer Science and Brain & Cognitive Sciences. After winning a Fulbright research grant, I moved to Brazil in 2022 to explore AI applications for art.
                </p>
                <p className="about-text">
                  Currently, I work as a full-stack software engineer, though I especially enjoy front-end development and collaborating closely with product design teams. When I'm not coding, you can find me painting, taking photographs, or in an airport. I'm fluent in Portuguese, working on my Spanish, and always looking for the next adventure.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="portfolio-footer">
          <p className="footer-text">copywrite 2025</p>
        </footer>
      </div>
    </div>
  )
}

export default Portfolio
