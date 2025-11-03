import { useState } from 'react'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simular envío de formulario
    const mailtoLink = `mailto:doc.carlosluna@cecytem.mx?subject=Solicitud de Contacto - ${formData.nombre}&body=Nombre: ${formData.nombre}%0AEmail: ${formData.email}%0ATeléfono: ${formData.telefono}%0AServicio: ${formData.servicio}%0AMensaje: ${formData.mensaje}`
    
    window.location.href = mailtoLink
    
    // Reset form
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      servicio: '',
      mensaje: ''
    })
    
    alert('¡Formulario enviado! Serás redirigido a tu cliente de correo.')
  }

  return (
    <div className="contact">
      <div className="container">
        <section className="section">
          <h1 className="section-title">Contáctanos</h1>
          <p className="section-subtitle">
            ¿Listo para llevar tu negocio al siguiente nivel? Estamos aquí para ayudarte.
          </p>

          <div className="contact-content">
            {/* Información de Contacto */}
            <div className="contact-info">
              <h2>Información de Contacto</h2>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p>info@serviciosweb.com</p>
                  <p>doc.carlosluna@cecytem.mx</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Teléfono</h3>
                  <p>+52 (55) 1234-5678</p>
                  <p>+52 (55) 8765-4321</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Dirección</h3>
                  <p>Av. Reforma 123</p>
                  <p>Ciudad de México, 06600</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <h3>Horario</h3>
                  <p>Lunes - Viernes: 9:00 - 18:00</p>
                  <p>Sábados: 10:00 - 14:00</p>
                </div>
              </div>

              {/* Mapa */}
              <div className="contact-map">
                <h3>Encuéntranos</h3>
                <div className="map-container">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12085.865135112!2d-99.133!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92b75aa014d%3A0x17d810d20b5d5b5!2sMexico%20City%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2s!4v1234567890" 
                    width="100%" 
                    height="300" 
                    style={{border:0, borderRadius: '10px'}}
                    allowFullScreen="" 
                    loading="lazy"
                    title="Ubicación de Servicios Web"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div className="contact-form-container">
              <h2>Solicita una Cotización</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="servicio">Servicio de Interés</label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="web">Diseño y Desarrollo Web</option>
                    <option value="mobile">Aplicaciones Móviles</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="consultoria">Consultoría</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="6"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <h2 className="section-title">Preguntas Frecuentes</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>¿Cuál es el tiempo de desarrollo promedio?</h3>
                <p>El tiempo varía según la complejidad del proyecto. Sitios web básicos: 2-4 semanas. Aplicaciones móviles: 6-12 semanas. Proyectos empresariales: 3-6 meses.</p>
              </div>
              <div className="faq-item">
                <h3>¿Ofrecen soporte post-lanzamiento?</h3>
                <p>Sí, todos nuestros proyectos incluyen 3 meses de soporte gratuito. Después ofrecemos planes de mantenimiento mensual o anual.</p>
              </div>
              <div className="faq-item">
                <h3>¿Trabajan con empresas internacionales?</h3>
                <p>Absolutamente. Tenemos experiencia trabajando con clientes en Estados Unidos, Europa y Latinoamérica.</p>
              </div>
              <div className="faq-item">
                <h3>¿Qué métodos de pago aceptan?</h3>
                <p>Aceptamos transferencias bancarias, tarjetas de crédito/débito, PayPal y criptomonedas para proyectos internacionales.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact