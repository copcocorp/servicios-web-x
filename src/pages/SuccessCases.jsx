import '../styles/SuccessCases.css'

const SuccessCases = () => {
  const successCases = [
    {
      id: 1,
      client: "TechCorp Solutions",
      project: "Plataforma de Gestión Empresarial",
      challenge: "Sistema legacy obsoleto que impedía el crecimiento",
      solution: "Desarrollo de plataforma cloud-native con microservicios",
      results: [
        "Reducción del 70% en tiempos de procesamiento",
        "Aumento del 150% en capacidad de usuarios concurrentes",
        "Mejora del 95% en la experiencia del usuario"
      ],
      image: "/images/success1.jpg",
      video: "https://www.youtube.com/embed/VIDEO_ID_1"
    },
    {
      id: 2,
      client: "Global Retail",
      project: "App Móvil de E-commerce",
      challenge: "Baja conversión en dispositivos móviles",
      solution: "App nativa con UX optimizada y proceso de checkout simplificado",
      results: [
        "Incremento del 300% en ventas móviles",
        "Tasa de conversión del 8.5%",
        "4.8 estrellas en App Store y Google Play"
      ],
      image: "/images/success2.jpg",
      video: "https://www.youtube.com/embed/VIDEO_ID_2"
    },
    {
      id: 3,
      client: "EduFuture",
      project: "Plataforma de E-learning",
      challenge: "Falta de engagement y altas tasas de abandono",
      solution: "Sistema gamificado con aprendizaje adaptativo",
      results: [
        "Aumento del 200% en completion rates",
        "Reducción del 60% en tasas de abandono",
        "Satisfacción del 94% entre estudiantes"
      ],
      image: "/images/success3.jpg",
      video: "https://www.youtube.com/embed/VIDEO_ID_3"
    }
  ]

  return (
    <div className="success-cases">
      <div className="container">
        <section className="section">
          <h1 className="section-title">Casos de Éxito</h1>
          <p className="section-subtitle">
            Historias reales de transformación digital que han impulsado el crecimiento de nuestros clientes
          </p>

          {successCases.map((caseStudy, index) => (
            <div key={caseStudy.id} className="case-study">
              <div className="case-header">
                <div className="case-info">
                  <h2>{caseStudy.client}</h2>
                  <h3>{caseStudy.project}</h3>
                  <div className="case-stats">
                    <div className="stat">
                      <span className="stat-number">+{caseStudy.results[0].match(/\d+/)[0]}%</span>
                      <span className="stat-label">Mejora</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">4.8</span>
                      <span className="stat-label">Rating</span>
                    </div>
                  </div>
                </div>
                <div className="case-image">
                  <img src={caseStudy.image} alt={caseStudy.project} />
                </div>
              </div>

              <div className="case-content">
                <div className="case-section">
                  <h4>El Desafío</h4>
                  <p>{caseStudy.challenge}</p>
                </div>

                <div className="case-section">
                  <h4>Nuestra Solución</h4>
                  <p>{caseStudy.solution}</p>
                </div>

                <div className="case-section">
                  <h4>Resultados Obtenidos</h4>
                  <ul className="results-list">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>

                {/* Video del Caso de Estudio */}
                <div className="case-video">
                  <h4>Video del Proyecto</h4>
                  <div className="video-container">
                    <iframe 
                      width="100%" 
                      height="400" 
                      src={caseStudy.video}
                      title={`Video del caso ${caseStudy.client}`}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {index < successCases.length - 1 && <hr className="case-divider" />}
            </div>
          ))}

          {/* Tabla Comparativa de Métricas */}
          <div className="metrics-comparison">
            <h2 className="section-title">Métricas de Éxito</h2>
            <div className="table-container">
              <table className="metrics-table">
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Antes</th>
                    <th>Después</th>
                    <th>Mejora</th>
                    <th>Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>TechCorp Solutions</td>
                    <td>2,000 usuarios/mes</td>
                    <td>15,000 usuarios/mes</td>
                    <td>+650%</td>
                    <td>6 meses</td>
                  </tr>
                  <tr>
                    <td>Global Retail</td>
                    <td>$50K ventas móviles</td>
                    <td>$200K ventas móviles</td>
                    <td>+300%</td>
                    <td>4 meses</td>
                  </tr>
                  <tr>
                    <td>EduFuture</td>
                    <td>40% completion rate</td>
                    <td>85% completion rate</td>
                    <td>+112.5%</td>
                    <td>8 meses</td>
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

export default SuccessCases