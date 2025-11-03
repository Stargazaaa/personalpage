import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Art from './pages/Art'
import Contact from './pages/Contact'
import CursorEffect from './components/CursorEffect'

export default function App(){
  return (
    <div className="app-root">
      <CursorEffect />
      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/art" element={<Art/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
    </div>
  )
}
