import React, { useState, useEffect } from 'react'
import Clouds from '../../components/Clouds'
import Navigation from '../../components/Navigation'
import '../../components/Portfolio.css'
import './Murals.css'
import { getAllMurals } from '../../utils/muralsLoader'
import { Eye } from 'lucide-react'

const Murals = () => {
  const [murals, setMurals] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    // Load all mural images dynamically
    const muralImages = getAllMurals()
    setMurals(muralImages)
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
          <div className="murals-gallery">
            {murals.map((mural, index) => (
              <div 
                key={index} 
                className="mural-card"
                onClick={() => openModal(mural)}
              >
                <div className="mural-image-container">
                  <img 
                    src={mural} 
                    alt={`Mural ${index + 1}`}
                    className="mural-image"
                  />
                  <div className="mural-overlay">
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
            <img src={selectedImage} alt="Full size mural" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Murals
