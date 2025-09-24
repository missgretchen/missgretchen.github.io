import React from 'react'
import Clouds from '../../components/Clouds'
import Navigation from '../../components/Navigation'
import '../../components/Portfolio.css'

const Paintings = () => {
  return (
    <div className="portfolio">
      <Clouds />
      <div className="portfolio-container">
        <Navigation />
        
        <main className="portfolio-main">
          <div className="about-box">
            <h1 className="greeting">Paintings</h1>
            <p className="about-text">
              This section will showcase my paintings and painted artworks.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Paintings
