import { Link } from 'react-router-dom'
import '../styles/Services.css'

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <section className="section">
          <h1 className="section-title">Nuestros Servicios</h1>
          
          {/* Servicio 1: Diseño Web */}
          <div id="web" className="service-detail">
            <div className="service-header">
              <img src="/images/service-web.jpg" alt="Diseño Web" />
              <div className="service-info">
                <h2>Diseño y Desarrollo Web</h2>
                <p className="service-description">
                  Creamos sitios web modernos, responsivos y optimizados 
                  que convierten visitantes en clientes.
                </p>
                <Link to="/contacto" className="btn btn-primary">
                  Solicitar Cotización
                </Link>
              </div>
            </div>
            
            <div className="service-features">
              <h3>Lo que Ofrecemos:</h3>
              <div className="features-grid">
                <div className="feature">
                  <h4>Diseño Responsivo</h4>
                  <p>Sitios que se adaptan perfectamente a todos los dispositivos</p>
                </div>
                <div className="feature">
                  <h4>Optimización SEO</h4>
                  <p>Posicionamiento en buscadores desde el día uno</p>
                </div>
                <div className="feature">
                  <h4>Alta Velocidad</h4>
                  <p>Carga rápida para mejor experiencia de usuario</p>
                </div>
                <div className="feature">
                  <h4>Seguridad</h4>
                  <p>Protección avanzada contra amenazas digitales</p>
                </div>
              </div>
            </div>
          </div>

          {/* Servicio 2: Apps Móviles */}
          <div id="mobile" className="service-detail">
            <div className="service-header">
              <img src="/images/service-mobile.jpg" alt="Apps Móviles" />
              <div className="service-info">
                <h2>Aplicaciones Móviles</h2>
                <p className="service-description">
                  Desarrollamos apps nativas e híbridas para iOS y Android 
                  con las mejores prácticas de UX.
                </p>
                <Link to="/contacto" className="btn btn-primary">
                  Solicitar Cotización
                </Link>
              </div>
            </div>
            
            <div className="service-features">
              <h3>Tecnologías que Utilizamos:</h3>
              <div className="tech-stack">
                <div className="tech-item">
                  <span>React Native</span>
                </div>
                <div className="tech-item">
                  <span>Flutter</span>
                </div>
                <div className="tech-item">
                  <span>Swift</span>
                </div>
                <div className="tech-item">
                  <span>Kotlin</span>
                </div>
              </div>
            </div>
          </div>

          {/* Servicio 3: E-commerce */}
          <div id="ecommerce" className="service-detail">
            <div className="service-header">
              <img src="/images/service-ecommerce.jpg" alt="E-commerce" />
              <div className="service-info">
                <h2>Soluciones E-commerce</h2>
                <p className="service-description">
                  Tiendas online completas con pasarelas de pago seguras 
                  y sistemas de gestión integrados.
                </p>
                <Link to="/contacto" className="btn btn-primary">
                  Solicitar Cotización
                </Link>
              </div>
            </div>
            
            <div className="service-features">
              <h3>Características Principales:</h3>
              <ul className="feature-list">
                <li>Pasarelas de pago integradas (Stripe, PayPal, Mercado Pago)</li>
                <li>Gestión de inventario en tiempo real</li>
                <li>Panel de administración intuitivo</li>
                <li>Optimización para conversiones</li>
                <li>Integración con redes sociales</li>
                <li>Sistema de cupones y descuentos</li>
              </ul>
            </div>
          </div>

          {/* Tabla Comparativa */}
          <div className="comparison-section">
            <h2 className="section-title">Comparativa de Planes</h2>
            <div className="table-container">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Básico</th>
                    <th>Profesional</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Páginas Web</td>
                    <td>5</td>
                    <td>15</td>
                    <td>Ilimitadas</td>
                  </tr>
                  <tr>
                    <td>Almacenamiento</td>
                    <td>5GB</td>
                    <td>20GB</td>
                    <td>100GB</td>
                  </tr>
                  <tr>
                    <td>Soporte</td>
                    <td>Email</td>
                    <td>Email + Chat</td>
                    <td>24/7 Prioritario</td>
                  </tr>
                  <tr>
                    <td>SEO Básico</td>
                    <td>✓</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>SEO Avanzado</td>
                    <td>✗</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>SSL Certificate</td>
                    <td>✓</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Backup Automático</td>
                    <td>✗</td>
                    <td>Diario</td>
                    <td>En Tiempo Real</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services