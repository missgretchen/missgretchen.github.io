import React from 'react'
import Clouds from '../../components/Clouds'
import Navigation from '../../components/Navigation'
import '../../components/Portfolio.css'

const Collabs = () => {
  return (
    <div className="portfolio">
      <Clouds />
      <div className="portfolio-container">
        <Navigation />
        
        <main className="portfolio-main">
          <div className="about-box">
            <h1 className="greeting">Collaborations</h1>
            <p className="about-text">
              This section will showcase my collaborative art projects.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Collabs
