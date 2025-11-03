import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  {to: '/', label: 'Home'},
  {to: '/about', label: 'About'},
  {to: '/projects', label: 'Projects'},
  {to: '/art', label: 'Art'},
  {to: '/contact', label: 'Contact'}
]

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="brand">Zikun (Quinten) Jin</motion.div>
        <div className="links">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} className={({isActive})=> isActive? 'navlink active' : 'navlink'}>
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
