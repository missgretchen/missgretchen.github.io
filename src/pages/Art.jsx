import React from 'react'
import Clouds from '../components/Clouds'
import Navigation from '../components/Navigation'
import '../components/Portfolio.css'

const Art = () => {
  return (
    <div className="portfolio">
      <Clouds />
      <div className="portfolio-container">
        <Navigation />
        
        <main className="portfolio-main">
          <div className="about-box">
            <h1 className="greeting">Art Portfolio</h1>
            <p className="about-text">
              This section showcases my artistic work across various mediums and styles.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Art
