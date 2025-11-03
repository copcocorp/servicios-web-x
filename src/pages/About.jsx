import '../styles/About.css'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>Sobre Nosotros</h1>
            <p>Conoce nuestra historia, misión, visión y el equipo detrás de Servicios Web</p>
          </div>
        </section>

        {/* Historia */}
        <section className="section about-history">
          <div className="about-content">
            <div className="about-text">
              <h2>Nuestra Historia</h2>
              <p>
                Fundada en 2021, <strong>Servicios Web</strong> nació con la visión de transformar 
                la presencia digital de las empresas. Comenzamos como un pequeño 
                equipo de desarrolladores apasionados y hoy somos una agencia 
                reconocida por nuestra excelencia y compromiso con más de <strong>150 proyectos</strong> 
                completados exitosamente.
              </p>
              
              <p>
                A lo largo de estos años, hemos evolucionado junto con la tecnología,
                adaptándonos a las nuevas tendencias y siempre manteniendo nuestro
                compromiso con la calidad y la innovación.
              </p>
            </div>
            
            <div className="about-image">
              <img src="/images/about-team.jpg" alt="Nuestro Equipo" />
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="section mission-vision-section">
          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="mv-icon">🎯</div>
              <h2>Misión</h2>
              <p>
                Desarrollar soluciones digitales innovadoras y personalizadas 
                que impulsen el crecimiento de nuestros clientes, combinando 
                tecnología de vanguardia con diseño excepcional para crear 
                experiencias digitales memorables y funcionales.
              </p>
              <div className="mv-details">
                <h4>Nuestro Compromiso:</h4>
                <ul>
                  <li>Innovación constante en cada proyecto</li>
                  <li>Calidad y excelencia en el servicio</li>
                  <li>Enfoque centrado en el cliente</li>
                  <li>Desarrollo sostenible y escalable</li>
                  <li>Comunicación transparente y honesta</li>
                </ul>
              </div>
            </div>
            
            <div className="mv-card vision">
              <div className="mv-icon">🚀</div>
              <h2>Visión</h2>
              <p>
                Ser la agencia de desarrollo web líder en Latinoamérica, 
                reconocida por nuestra capacidad para transformar ideas 
                en soluciones digitales exitosas que generen impacto real 
                en el mercado y contribuyan al progreso digital de la región.
              </p>
              <div className="mv-details">
                <h4>Nuestras Metas:</h4>
                <ul>
                  <li>Liderazgo en innovación tecnológica</li>
                  <li>Expansión internacional sostenida</li>
                  <li>Ecosistema digital integrado</li>
                  <li>Referente en calidad y servicio</li>
                  <li>Contribución al desarrollo tecnológico</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="section values-section">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovación</h3>
              <p>Buscamos constantemente nuevas formas de resolver problemas y mejorar procesos</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Calidad</h3>
              <p>No comprometemos la excelencia en ningún aspecto de nuestro trabajo</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔍</div>
              <h3>Transparencia</h3>
              <p>Comunicación clara y honesta en todas nuestras interacciones</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Compromiso</h3>
              <p>Nos involucramos profundamente en el éxito de cada proyecto</p>
            </div>
            <div className="value-card">
              <div className="value-icon">👥</div>
              <h3>Trabajo en Equipo</h3>
              <p>Colaboramos estrechamente para lograr mejores resultados</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📈</div>
              <h3>Mejora Continua</h3>
              <p>Aprendemos de cada proyecto para crecer constantemente</p>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="section team-section">
          <h2 className="section-title">Nuestro Equipo</h2>
          <p className="section-subtitle">
            Contamos con un equipo multidisciplinario de profesionales especializados
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <img src="/images/team1.jpg" alt="Desarrollador Frontend" />
              </div>
              <h3>Carlos Rodríguez</h3>
              <span className="member-role">Desarrollador Frontend</span>
              <p>Especialista en React, Vue.js y desarrollo de interfaces modernas</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src="/images/team2.jpg" alt="Desarrollador Backend" />
              </div>
              <h3>Ana Martínez</h3>
              <span className="member-role">Desarrolladora Backend</span>
              <p>Experta en Node.js, bases de datos y arquitectura de sistemas</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src="/images/team3.jpg" alt="Diseñadora UX/UI" />
              </div>
              <h3>Laura González</h3>
              <span className="member-role">Diseñadora UX/UI</span>
              <p>Creativa especializada en experiencia de usuario e interfaces</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src="/images/team4.jpg" alt="Project Manager" />
              </div>
              <h3>David López</h3>
              <span className="member-role">Project Manager</span>
              <p>Encargado de coordinar proyectos y comunicación con clientes</p>
            </div>
          </div>
        </section>

        {/* Tabla de Especialidades */}
        <section className="section specialties">
          <h2 className="section-title">Nuestras Especialidades</h2>
          <div className="table-container">
            <table className="specialties-table">
              <thead>
                <tr>
                  <th>Área</th>
                  <th>Especialidad</th>
                  <th>Tecnologías</th>
                  <th>Años de Experiencia</th>
                  <th>Proyectos Realizados</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Desarrollo Web</td>
                  <td>Frontend & Backend</td>
                  <td>React, Vue, Angular, Node.js</td>
                  <td>3+ años</td>
                  <td>80+ proyectos</td>
                </tr>
                <tr>
                  <td>Apps Móviles</td>
                  <td>Nativas e Híbridas</td>
                  <td>React Native, Flutter, Swift</td>
                  <td>2+ años</td>
                  <td>40+ proyectos</td>
                </tr>
                <tr>
                  <td>E-commerce</td>
                  <td>Tiendas Online</td>
                  <td>Shopify, WooCommerce, Magento</td>
                  <td>3+ años</td>
                  <td>30+ proyectos</td>
                </tr>
                <tr>
                  <td>Diseño UI/UX</td>
                  <td>Interfaces y Experiencia</td>
                  <td>Figma, Adobe XD, Sketch</td>
                  <td>4+ años</td>
                  <td>100+ proyectos</td>
                </tr>
                <tr>
                  <td>Marketing Digital</td>
                  <td>SEO y Analytics</td>
                  <td>Google Analytics, SEMrush</td>
                  <td>3+ años</td>
                  <td>50+ proyectos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="section stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Proyectos Completados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Clientes Satisfechos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Premios Obtenidos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfacción Clientes</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Soporte Técnico</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About