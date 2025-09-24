import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Code from './pages/Code'
import Papers from './pages/Papers'
import CreativeWriting from './pages/CreativeWriting'
import Art from './pages/Art'
import Sketches from './pages/art/Sketches'
import Paintings from './pages/art/Paintings'
import Photography from './pages/art/Photography'
import Murals from './pages/art/Murals'
import Experimental from './pages/art/Experimental'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code" element={<Code />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/creative-writing" element={<CreativeWriting />} />
        <Route path="/art" element={<Art />} />
        <Route path="/art/sketches" element={<Sketches />} />
        <Route path="/art/paintings" element={<Paintings />} />
        <Route path="/art/photography" element={<Photography />} />
        <Route path="/art/murals" element={<Murals />} />
        <Route path="/art/experimental" element={<Experimental />} />
      </Routes>
    </div>
  )
}

export default App
