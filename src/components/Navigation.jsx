import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import './Navigation.css'

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  const isHomePage = location.pathname === '/'

  return (
    <header className="portfolio-header">
      <div className="header-left">
        <Link to="/" className="home-link">gretchen eggers portfolio</Link>
        {!isHomePage && <span className="breadcrumb">{location.pathname.replace(/\//g, ' / ')}</span>}
      </div>
      
      <div className="header-nav">
        <div
          className={`dropdown${isDropdownOpen ? ' dropdown--open' : ''}`}
          onMouseLeave={closeDropdown}
        >
          <button 
            className="dropdown-toggle"
            onClick={toggleDropdown}
            onMouseEnter={() => setIsDropdownOpen(true)}
          >
            projects{' '}
            <ChevronDown size={16} className={`dropdown-icon ${isDropdownOpen ? 'rotated' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-section">
                <h3 className="dropdown-section-title">Code</h3>
                <a
                  href="https://brickophone.com"
                  target="_blank"
                  className="dropdown-item" onClick={closeDropdown}>
                  Brickophone
                </a>
              </div>
              
              <div className="dropdown-section">
                <h3 className="dropdown-section-title">Research</h3>
                <a
                  href="https://neuripscreativityworkshop.github.io/2022/papers/ml4cd2022_paper15.pdf"
                  target="_blank"
                  className="dropdown-item"
                  onClick={closeDropdown}
                >
                  Not All Artists Speak English: Generating images with DALL-E 2 <br/> from Portuguese
                </a>
              </div>
              <div className="dropdown-section">
                <h3 className="dropdown-section-title">Art</h3>
                <div className="dropdown-subsection">
                  <Link to="/art/sketches" className="dropdown-item" onClick={closeDropdown}>
                    Sketches
                  </Link>
                  <Link to="/art/paintings" className="dropdown-item" onClick={closeDropdown}>
                    Paintings
                  </Link>
                  <Link to="/art/murals" className="dropdown-item" onClick={closeDropdown}>
                    Murals
                  </Link>
                  <Link to="/art/experimental" className="dropdown-item" onClick={closeDropdown}>
                    Experimental
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navigation
