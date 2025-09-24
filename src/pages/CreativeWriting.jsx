import React from 'react'
import Clouds from '../components/Clouds'
import Navigation from '../components/Navigation'
import '../components/Portfolio.css'

const CreativeWriting = () => {
  return (
    <div className="portfolio">
      <Clouds />
      <div className="portfolio-container">
        <Navigation />
        
        <main className="portfolio-main">
          <div className="about-box">
            <h1 className="greeting">Creative Writing</h1>
            <p className="about-text">
              This section will feature my articles, poems, short stories, and other creative written works.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default CreativeWriting
