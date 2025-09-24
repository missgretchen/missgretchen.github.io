import React, { useState, useEffect } from 'react'
import Clouds from '../../components/Clouds'
import Navigation from '../../components/Navigation'
import '../../components/Portfolio.css'
import './Paintings.css'
import { getAllPaintings } from '../../utils/paintingsLoader'
import { Eye } from 'lucide-react'

const Paintings = () => {
  const [paintings, setPaintings] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    // Load all painting images dynamically
    const paintingImages = getAllPaintings()
    setPaintings(paintingImages)
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
          <div className="paintings-gallery">
            {paintings.map((painting, index) => (
              <div 
                key={index} 
                className="painting-card"
                onClick={() => openModal(painting)}
              >
                <div className="painting-image-container">
                  <img 
                    src={painting} 
                    alt={`Painting ${index + 1}`}
                    className="painting-image"
                  />
                  <div className="painting-overlay">
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
            <img src={selectedImage} alt="Full size painting" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Paintings
