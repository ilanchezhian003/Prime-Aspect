import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="logo" aria-label="Prime Aspect home">
          <img 
            src="https://static.wixstatic.com/media/36b354_3dc68a478f824139a1d5089534d79593~mv2.png/v1/crop/x_1501,y_1941,w_1714,h_1119/fill/w_185,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%20945.png" 
            alt="Prime Aspect logo"
          />
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/projects" className={isActive('/projects')}>Projects</Link>
          <Link to="/services" className={isActive('/services')}>Services</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact Us</Link>
          <Link to="/blog" className={isActive('/blog')}>Blog</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
