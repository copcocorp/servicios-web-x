import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          
          {/* LOGO */}
          <div className="logo">
            <img src="/images/logo.png" alt="Servicios Web Logo" />
            <div className="logo-text">
              <h1>Servicios Web</h1>
              <p>Servicios web diseñados para tu negocio</p>
            </div>
          </div>

          {/* NAVEGACIÓN */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={closeMenu}>Inicio</Link>
            <Link to="/nosotros" onClick={closeMenu}>Sobre Nosotros</Link>
            <Link to="/servicios" onClick={closeMenu}>Servicios</Link>
            <Link to="/clientes" onClick={closeMenu}>Clientes</Link>
            <Link to="/galeria" onClick={closeMenu}>Galería</Link>
            <Link to="/casos-exito" onClick={closeMenu}>Casos de Éxito</Link>
            <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
            <a 
              href="https://cliente-administracion.netlify.app/" 
              className="admin-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Administración Clientes
            </a>
          </nav>

          {/* BOTÓN MENÚ (MÓVIL) */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>
    </header>
  )
}

export default Header
