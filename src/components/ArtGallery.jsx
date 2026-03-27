/* eslint-disable react/prop-types -- props are simple; project does not use PropTypes */
import React, { useState } from 'react'
import { Eye } from 'lucide-react'
import './ArtGallery.css'

/**
 * @param {string[]} [items] - Masonry layout (default for paintings, sketches, murals)
 * @param {string[][]} [columns] - Optional 3-column layout: each inner array is one vertical stack (experimental)
 * @param {string} altPrefix
 */
const ArtGallery = ({ items = [], columns, altPrefix = 'Work' }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const renderCard = (src, index) => (
    <div
      key={`${src}-${index}`}
      className="art-card"
      onClick={() => setSelectedImage(src)}
    >
      <div className="art-image-container">
        <img
          src={src}
          alt={`${altPrefix} ${index + 1}`}
          className="art-image"
        />
        <div className="art-overlay">
          <div className="view-icon">
            <Eye size={24} />
          </div>
        </div>
      </div>
    </div>
  )

  let galleryBody
  if (columns && columns.length > 0) {
    let globalIndex = 0
    galleryBody = (
      <div className="art-gallery art-gallery--columns">
        {columns.map((col, ci) => (
          <div key={ci} className="art-gallery__column">
            {col.map((src, ri) => renderCard(src, globalIndex++))}
          </div>
        ))}
      </div>
    )
  } else {
    galleryBody = (
      <div className="art-gallery">
        {items.map((src, index) => renderCard(src, index))}
      </div>
    )
  }

  return (
    <>
      {galleryBody}

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="close-button"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt={`Full size ${altPrefix.toLowerCase()}`}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ArtGallery
