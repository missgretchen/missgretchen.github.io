import React, { useState, useEffect } from 'react'
import Clouds from '../../components/Clouds'
import Navigation from '../../components/Navigation'
import ArtGallery from '../../components/ArtGallery'
import '../../components/Portfolio.css'
import { getAllSketches } from '../../utils/sketchesLoader'

const Sketches = () => {
  const [sketches, setSketches] = useState([])

  useEffect(() => {
    setSketches(getAllSketches())
  }, [])

  return (
    <div className="portfolio">
      <Clouds />
      <div className="portfolio-container">
        <Navigation />

        <main className="portfolio-main">
          <ArtGallery items={sketches} altPrefix="Sketch" />
        </main>
      </div>
    </div>
  )
}

export default Sketches
