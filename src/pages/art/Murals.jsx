import React, { useState, useEffect } from 'react'
import Clouds from '../../components/Clouds'
import Navigation from '../../components/Navigation'
import ArtGallery from '../../components/ArtGallery'
import '../../components/Portfolio.css'
import { getAllMurals } from '../../utils/muralsLoader'

const Murals = () => {
  const [murals, setMurals] = useState([])

  useEffect(() => {
    setMurals(getAllMurals())
  }, [])

  return (
    <div className="portfolio">
      <Clouds />
      <div className="portfolio-container">
        <Navigation />

        <main className="portfolio-main">
          <ArtGallery items={murals} altPrefix="Mural" />
        </main>
      </div>
    </div>
  )
}

export default Murals
