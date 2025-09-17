import './App.css';

function App() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment processing, and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with real-time updates and customizable charts using D3.js and React.",
      technologies: ["React", "D3.js", "Python", "PostgreSQL", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mobile Task Management App",
      description: "Cross-platform mobile application for task management and team collaboration with offline sync capabilities.",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Here are some of the projects I've worked on recently</p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className="material-symbols-rounded">visibility</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
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
