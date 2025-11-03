import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Servicios Web</h3>
            <p>Servicios web diseñados para tu negocio</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook.png" alt="Facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram.png" alt="Instagram" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter.png" alt="Twitter" />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/nosotros">Sobre Nosotros</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
          
          <div className="footer-section">
            <h4>Servicios</h4>
            <a href="#web">Diseño Web</a>
            <a href="#mobile">Apps Móviles</a>
            <a href="#ecommerce">E-commerce</a>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <Link to="/legal">Aviso de Privacidad</Link>
            <Link to="/legal">Términos y Condiciones</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Servicios Web. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer