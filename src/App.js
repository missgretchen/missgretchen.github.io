import './App.css';

function App() {
  const creativeProjects = [
    {
      title: "Digital Art Series",
      description: "A collection of digital illustrations exploring themes of nature and technology convergence, created using Procreate and Adobe Creative Suite.",
      medium: "Digital Illustration",
      tools: ["Procreate", "Adobe Illustrator", "Photoshop"],
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2024"
    },
    {
      title: "Brand Identity Design",
      description: "Complete brand identity system for a sustainable fashion startup, including logo design, color palette, typography, and marketing materials.",
      medium: "Brand Design",
      tools: ["Adobe Illustrator", "InDesign", "Figma"],
      image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2024"
    },
    {
      title: "UI/UX Design Portfolio",
      description: "Mobile app interface designs for various projects including a fitness tracking app and a meditation platform, focusing on user-centered design principles.",
      medium: "UI/UX Design",
      tools: ["Figma", "Adobe XD", "Sketch", "Principle"],
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2023"
    },
    {
      title: "Photography Collection",
      description: "Documentary photography series capturing urban architecture and street life, with focus on composition and natural lighting techniques.",
      medium: "Photography",
      tools: ["Canon EOS R5", "Lightroom", "Photoshop"],
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2023"
    }
  ];

  const technicalProjects = [
    {
      title: "Machine Learning Research Project",
      description: "Research on natural language processing for sentiment analysis in social media data, achieving 94% accuracy using transformer models. Presented at the International Conference on Machine Learning.",
      technologies: ["Python", "TensorFlow", "BERT", "Pandas", "Jupyter"],
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Academic Research",
      year: "2024"
    },
    {
      title: "Distributed Systems Architecture",
      description: "Designed and implemented a scalable microservices architecture for a high-traffic e-commerce platform, handling 100k+ concurrent users with 99.9% uptime.",
      technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Software Engineering",
      year: "2024"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive real-time analytics dashboard for IoT sensor data, processing 1M+ data points daily with custom visualization components and predictive analytics.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "InfluxDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Full-Stack Development",
      year: "2023"
    },
    {
      title: "Blockchain Smart Contract System",
      description: "Developed a decentralized voting system using Ethereum smart contracts, ensuring transparency and immutability for academic elections with gas optimization techniques.",
      technologies: ["Solidity", "Web3.js", "Truffle", "Ganache", "React"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Blockchain Development",
      year: "2023"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript/TypeScript", "HTML/CSS", "Vue.js", "Angular"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "Django", "REST APIs"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"] },
    { category: "Tools & Others", items: ["Git", "Docker", "AWS", "Linux", "Agile/Scrum"] }
  ];

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Gretchen Eggers</h1>
            <h2 className="hero-title">Full Stack Developer</h2>
            <p className="hero-description">
              Passionate about creating innovative digital solutions that bridge the gap between 
              design and functionality. I build scalable web applications with modern technologies 
              and clean, maintainable code.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">View My Work</button>
              <button className="btn-secondary">Get In Touch</button>
              <a href="/resume.pdf" download="Gretchen_Eggers_Resume.pdf" className="btn-outline">
                <span className="material-symbols-rounded">download</span>
                Download Resume
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-placeholder">
              <span className="material-symbols-rounded">person</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a dedicated full-stack developer with over 5 years of experience in building 
                robust web applications. My journey in software development started with a curiosity 
                about how things work behind the scenes, and it has evolved into a passion for 
                creating seamless user experiences.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, cloud technologies, and database design. 
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or hiking in the mountains.
              </p>
            </div>
            <div className="stats">
              <div className="stat-item">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-group">
                <h3 className="skill-category">{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Projects Section */}
      <section className="creative-projects-section">
        <div className="container">
          <h2 className="section-title">Creative Projects</h2>
          <p className="section-subtitle">Art, design, and visual storytelling</p>
          <div className="creative-projects-grid">
            {creativeProjects.map((project, index) => (
              <div key={index} className="creative-project-card">
                <div className="creative-project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="creative-project-overlay">
                    <span className="material-symbols-rounded">palette</span>
                  </div>
                </div>
                <div className="creative-project-content">
                  <div className="creative-project-header">
                    <h3 className="creative-project-title">{project.title}</h3>
                    <span className="creative-project-year">{project.year}</span>
                  </div>
                  <p className="creative-project-medium">{project.medium}</p>
                  <p className="creative-project-description">{project.description}</p>
                  <div className="creative-project-tools">
                    {project.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="creative-tool-tag">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Projects Section */}
      <section className="technical-projects-section">
        <div className="container">
          <h2 className="section-title">Technical & Academic Projects</h2>
          <p className="section-subtitle">Software development, research, and engineering solutions</p>
          <div className="technical-projects-grid">
            {technicalProjects.map((project, index) => (
              <div key={index} className="technical-project-card">
                <div className="technical-project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="technical-project-overlay">
                    <span className="material-symbols-rounded">code</span>
                  </div>
                </div>
                <div className="technical-project-content">
                  <div className="technical-project-header">
                    <h3 className="technical-project-title">{project.title}</h3>
                    <div className="technical-project-meta">
                      <span className="technical-project-type">{project.type}</span>
                      <span className="technical-project-year">{project.year}</span>
                    </div>
                  </div>
                  <p className="technical-project-description">{project.description}</p>
                  <div className="technical-project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Ready to bring your ideas to life? Let's talk!</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="material-symbols-rounded">mail</span>
                <div>
                  <h4>Email</h4>
                  <p>hello@gretcheneggers.io</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="material-symbols-rounded">phone</span>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="material-symbols-rounded">location_on</span>
                <div>
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <h4>Find me on:</h4>
              <div className="social-icons">
                <div className="social-icon">
                  <span className="material-symbols-rounded">code</span>
                  <span>GitHub</span>
                </div>
                <div className="social-icon">
                  <span className="material-symbols-rounded">work</span>
                  <span>LinkedIn</span>
                </div>
                <div className="social-icon">
                  <span className="material-symbols-rounded">alternate_email</span>
                  <span>Twitter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Gretchen Eggers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
