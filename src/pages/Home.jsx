import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transformamos tu Presencia Digital</h1>
          <p>Soluciones web innovadoras para impulsar tu negocio al siguiente nivel</p>
          <div className="hero-buttons">
            <Link to="/servicios" className="btn btn-primary">Nuestros Servicios</Link>
            <Link to="/contacto" className="btn">Contáctanos</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-bg.jpg" alt="Transformación Digital" />
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="section featured-services">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src="/images/service-web.jpg" alt="Diseño Web" />
              <h3>Diseño y Desarrollo Web</h3>
              <p>Sitios web modernos, responsivos y optimizados para SEO</p>
              <Link to="/servicios#web" className="btn">Más Información</Link>
            </div>
            <div className="service-card">
              <img src="/images/service-mobile.jpg" alt="Apps Móviles" />
              <h3>Aplicaciones Móviles</h3>
              <p>Apps nativas e híbridas para iOS y Android</p>
              <Link to="/servicios#mobile" className="btn">Más Información</Link>
            </div>
            <div className="service-card">
              <img src="/images/service-ecommerce.jpg" alt="E-commerce" />
              <h3>E-commerce</h3>
              <p>Tiendas online con pasarelas de pago seguras</p>
              <Link to="/servicios#ecommerce" className="btn">Más Información</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section video-section">
        <div className="container">
          <h2 className="section-title">Conoce Nuestro Trabajo</h2>
          <div className="video-container">
            {/* <iframe 
              width="100%" 
              height="500" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Demo de nuestros servicios"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe> */}
            <iframe 
            width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/616u1L0JAGI?si=X-5O834Gu7F-tFx-" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="section stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <h3>150+</h3>
              <p>Proyectos Completados</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Clientes Satisfechos</p>
            </div>
            <div className="stat">
              <h3>3+</h3>
              <p>Años de Experiencia</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Soporte Técnico</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home