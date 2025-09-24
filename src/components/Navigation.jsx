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
        <div className="dropdown" onMouseLeave={closeDropdown}>
          <button 
            className="dropdown-toggle"
            onClick={toggleDropdown}
            onMouseEnter={() => setIsDropdownOpen(true)}
          >
            projects <ChevronDown size={16} className={`dropdown-icon ${isDropdownOpen ? 'rotated' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-section">
                <h3 className="dropdown-section-title">Code</h3>
                <Link to="/code" className="dropdown-item" onClick={closeDropdown}>
                  View Projects
                </Link>
              </div>
              
              <div className="dropdown-section">
                <h3 className="dropdown-section-title">Papers</h3>
                <Link to="/papers" className="dropdown-item" onClick={closeDropdown}>
                  Research Papers
                </Link>
              </div>
              
              <div className="dropdown-section">
                <h3 className="dropdown-section-title">Creative Writing</h3>
                <Link to="/creative-writing" className="dropdown-item" onClick={closeDropdown}>
                  Articles & Stories
                </Link>
              </div>
              
              <div className="dropdown-section">
                <h3 className="dropdown-section-title">Art Portfolio</h3>
                <div className="dropdown-subsection">
                  <Link to="/art/sketches" className="dropdown-item" onClick={closeDropdown}>
                    Sketches
                  </Link>
                  <Link to="/art/paintings" className="dropdown-item" onClick={closeDropdown}>
                    Paintings
                  </Link>
                  <Link to="/art/photography" className="dropdown-item" onClick={closeDropdown}>
                    Photography
                  </Link>
                  <Link to="/art/collabs" className="dropdown-item" onClick={closeDropdown}>
                    Collaborations
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
