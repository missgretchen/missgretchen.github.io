import React, { useState, useEffect } from 'react'
import Clouds from '../../components/Clouds'
import Navigation from '../../components/Navigation'
import '../../components/Portfolio.css'
import './Sketches.css'
import { getAllSketches } from '../../utils/sketchesLoader'
import { Eye } from 'lucide-react'

const Sketches = () => {
  const [sketches, setSketches] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    // Load all sketch images dynamically
    const sketchImages = getAllSketches()
    setSketches(sketchImages)
  }, [])

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="portfolio">
      <Clouds />
      <div className="portfolio-container">
        <Navigation />
        
        <main className="portfolio-main">
          <div className="sketches-gallery">
            {sketches.map((sketch, index) => (
              <div 
                key={index} 
                className="sketch-card"
                onClick={() => openModal(sketch)}
              >
                <div className="sketch-image-container">
                  <img 
                    src={sketch} 
                    alt={`Sketch ${index + 1}`}
                    className="sketch-image"
                  />
                  <div className="sketch-overlay">
                    <div className="view-icon">
                      <Eye size={24} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Modal for full-size image viewing */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <img src={selectedImage} alt="Full size sketch" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Sketches
