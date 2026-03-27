import React, { useState, useEffect } from 'react'
import Clouds from '../../components/Clouds'
import Navigation from '../../components/Navigation'
import ArtGallery from '../../components/ArtGallery'
import '../../components/Portfolio.css'
import { getAllPaintings } from '../../utils/paintingsLoader'

const Paintings = () => {
  const [paintings, setPaintings] = useState([])

  useEffect(() => {
    setPaintings(getAllPaintings())
  }, [])

  return (
    <div className="portfolio">
      <Clouds />
      <div className="portfolio-container">
        <Navigation />

        <main className="portfolio-main">
          <ArtGallery items={paintings} altPrefix="Painting" />
        </main>
      </div>
    </div>
  )
}

export default Paintings
