import React from 'react'
import Clouds from '../../components/Clouds'
import Navigation from '../../components/Navigation'
import '../../components/Portfolio.css'

const Photography = () => {
  return (
    <div className="portfolio">
      <Clouds />
      <div className="portfolio-container">
        <Navigation />
        
        <main className="portfolio-main">
          <div className="about-box">
            <h1 className="greeting">Photography</h1>
            <p className="about-text">
              This section will showcase my photography work.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Photography
