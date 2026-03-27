import React from 'react'
import Clouds from '../../components/Clouds'
import Navigation from '../../components/Navigation'
import ArtGallery from '../../components/ArtGallery'
import '../../components/Portfolio.css'
import { getExperimentalColumns } from '../../utils/experimentalLoader'

const Experimental = () => (
  <div className="portfolio">
    <Clouds />
    <div className="portfolio-container">
      <Navigation />

      <main className="portfolio-main">
        <ArtGallery
          columns={getExperimentalColumns()}
          altPrefix="Experimental work"
        />
      </main>
    </div>
  </div>
)

export default Experimental
