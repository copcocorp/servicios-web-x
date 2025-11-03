import '../styles/Clients.css'

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: "TechCorp Solutions",
      logo: "/images/client1.png",
      industry: "Tecnología",
      testimonial: "Increíble trabajo en nuestra plataforma web. El tráfico aumentó un 200%.",
      website: "https://techcorp.com"
    },
    {
      id: 2,
      name: "Global Retail",
      logo: "/images/client2.png",
      industry: "Retail",
      testimonial: "Su aplicación móvil revolucionó nuestra experiencia de compra.",
      website: "https://globalretail.com"
    },
    {
      id: 3,
      name: "EduFuture",
      logo: "/images/client3.png",
      industry: "Educación",
      testimonial: "La plataforma de e-learning superó todas nuestras expectativas.",
      website: "https://edufuture.com"
    },
    {
      id: 4,
      name: "HealthPlus",
      logo: "/images/client4.png",
      industry: "Salud",
      testimonial: "Sistema de gestión hospitalaria eficiente y fácil de usar.",
      website: "https://healthplus.com"
    },
    {
      id: 5,
      name: "FinSecure",
      logo: "/images/client5.png",
      industry: "Finanzas",
      testimonial: "Aplicación bancaria segura con excelente experiencia de usuario.",
      website: "https://finsecure.com"
    },
    {
      id: 6,
      name: "LogiTrack",
      logo: "/images/client6.png",
      industry: "Logística",
      testimonial: "Sistema de seguimiento en tiempo real que optimizó nuestras operaciones.",
      website: "https://logitrack.com"
    }
  ]

  return (
    <div className="clients">
      <div className="container">
        <section className="section">
          <h1 className="section-title">Nuestros Clientes</h1>
          <p className="section-subtitle">
            Empresas que han confiado en nosotros y han transformado su presencia digital
          </p>

          {/* Grid de Clientes */}
          <div className="clients-grid">
            {clients.map(client => (
              <div key={client.id} className="client-card">
                <div className="client-logo">
                  <img src={client.logo} alt={client.name} />
                </div>
                <div className="client-info">
                  <h3>{client.name}</h3>
                  <span className="industry">{client.industry}</span>
                  <p className="testimonial">"{client.testimonial}"</p>
                  <a 
                    href={client.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="website-link"
                  >
                    Visitar Sitio Web
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Estadísticas de Clientes */}
          <div className="client-stats">
            <h2 className="section-title">Nuestro Impacto</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Tasa de Retención</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.9/5</div>
                <div className="stat-label">Satisfacción del Cliente</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Clientes Activos</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3 años</div>
                <div className="stat-label">Promedio de Colaboración</div>
              </div>
            </div>
          </div>

          {/* Iframe con Mapa de Clientes */}
          <div className="clients-map">
            <h2 className="section-title">Clientes alrededor del Mundo</h2>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12085.865135112!2d-74.006015!3d40.712728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25fe0e4b1c7a1%3A0x2e3d2c7b8e0e0e0e!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890" 
                width="100%" 
                height="400" 
                style={{border:0, borderRadius: '10px'}}
                allowFullScreen="" 
                loading="lazy"
                title="Mapa de Clientes"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Clients