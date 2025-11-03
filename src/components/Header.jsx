import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/images/logo.png" alt="Servicios Web Logo" />
            <div className="logo-text">
              <h1>Servicios Web</h1>
              <p>Servicios web diseñados para tu negocio</p>
            </div>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <Link to="/nosotros" onClick={() => setIsMenuOpen(false)}>Sobre Nosotros</Link>
            <Link to="/servicios" onClick={() => setIsMenuOpen(false)}>Servicios</Link>
            <Link to="/clientes" onClick={() => setIsMenuOpen(false)}>Clientes</Link>
            <Link to="/galeria" onClick={() => setIsMenuOpen(false)}>Galería</Link>
            <Link to="/casos-exito" onClick={() => setIsMenuOpen(false)}>Casos de Éxito</Link>
            <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
            <a href="#admin" className="admin-link">Administración Clientes</a>
          </nav>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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