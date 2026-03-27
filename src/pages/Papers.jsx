import React from 'react'
import Clouds from '../components/Clouds'
import Navigation from '../components/Navigation'
import '../components/Portfolio.css'

const Papers = () => {
  return (
    <div className="portfolio">
      <Clouds />
      <div className="portfolio-container">
        <Navigation />
        
        <main className="portfolio-main">
          <div className="about-box">
            <h1 className="greeting">Research Papers</h1>
            <p className="about-text">
              This section will contain my research papers and academic publications.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Papers
