import { useState } from 'react'
import '../styles/Legal.css'

const Legal = () => {
  const [activeSection, setActiveSection] = useState('privacidad')

  const legalSections = {
    privacidad: {
      title: "Aviso de Privacidad",
      content: `
        <h3>1. Responsable del Tratamiento de sus Datos Personales</h3>
        <p>Servicios Web, con domicilio en Av. Reforma 123, Ciudad de México, 06600, es responsable del tratamiento de los datos personales que nos proporcione.</p>
        
        <h3>2. Datos Personales que Recabamos</h3>
        <p>Recabamos los siguientes datos personales cuando usted nos los proporciona voluntariamente:</p>
        <ul>
          <li>Nombre completo</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Información de contacto</li>
          <li>Datos de navegación en nuestro sitio web</li>
        </ul>
        
        <h3>3. Finalidades del Tratamiento</h3>
        <p>Sus datos personales serán utilizados para las siguientes finalidades:</p>
        <ul>
          <li>Prestar los servicios solicitados</li>
          <li>Comunicación sobre nuestros servicios</li>
          <li>Mejora de nuestra plataforma</li>
          <li>Cumplimiento de obligaciones legales</li>
        </ul>
        
        <h3>4. Transferencia de Datos</h3>
        <p>Sus datos personales pueden ser transferidos y tratados inside y fuera del país por personas distintas a esta empresa.</p>
        
        <h3>5. Derechos ARCO</h3>
        <p>Usted tiene derecho a Acceder, Rectificar y Cancelar sus datos personales, así como a Oponerse al tratamiento de los mismos.</p>
      `
    },
    terminos: {
      title: "Términos y Condiciones",
      content: `
        <h3>1. Aceptación de los Términos</h3>
        <p>Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones de uso.</p>
        
        <h3>2. Uso del Sitio Web</h3>
        <p>Este sitio web está destinado para proporcionar información sobre nuestros servicios. No está permitido:</p>
        <ul>
          <li>Utilizar el sitio de manera fraudulenta</li>
          <li>Acceder a áreas restringidas</li>
          <li>Violar leyes aplicables</li>
          <li>Dañar o afectar el funcionamiento del sitio</li>
        </ul>
        
        <h3>3. Propiedad Intelectual</h3>
        <p>Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, y software, es propiedad de Servicios Web.</p>
        
        <h3>4. Limitación de Responsabilidad</h3>
        <p>No nos hacemos responsables por daños derivados del uso de este sitio web o de la información en él contenida.</p>
        
        <h3>5. Modificaciones</h3>
        <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación.</p>
      `
    },
    cookies: {
      title: "Política de Cookies",
      content: `
        <h3>1. ¿Qué son las Cookies?</h3>
        <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web.</p>
        
        <h3>2. Tipos de Cookies que Utilizamos</h3>
        <ul>
          <li><strong>Cookies Esenciales:</strong> Necesarias para el funcionamiento básico del sitio</li>
          <li><strong>Cookies de Rendimiento:</strong> Nos ayudan a entender cómo interactúan los visitantes</li>
          <li><strong>Cookies de Funcionalidad:</strong> Permiten recordar sus preferencias</li>
          <li><strong>Cookies de Publicidad:</strong> Utilizadas para mostrar anuncios relevantes</li>
        </ul>
        
        <h3>3. Control de Cookies</h3>
        <p>Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies que ya están en su equipo.</p>
        
        <h3>4. Cookies de Terceros</h3>
        <p>Utilizamos servicios de terceros que también pueden utilizar cookies, como Google Analytics.</p>
      `
    }
  }

  return (
    <div className="legal">
      <div className="container">
        <section className="section">
          <h1 className="section-title">Información Legal</h1>
          
          <div className="legal-container">
            {/* Navegación Lateral */}
            <nav className="legal-nav">
              <button 
                className={`nav-item ${activeSection === 'privacidad' ? 'active' : ''}`}
                onClick={() => setActiveSection('privacidad')}
              >
                Aviso de Privacidad
              </button>
              <button 
                className={`nav-item ${activeSection === 'terminos' ? 'active' : ''}`}
                onClick={() => setActiveSection('terminos')}
              >
                Términos y Condiciones
              </button>
              <button 
                className={`nav-item ${activeSection === 'cookies' ? 'active' : ''}`}
                onClick={() => setActiveSection('cookies')}
              >
                Política de Cookies
              </button>
            </nav>

            {/* Contenido Principal */}
            <div className="legal-content">
              <h2>{legalSections[activeSection].title}</h2>
              <div 
                className="legal-text"
                dangerouslySetInnerHTML={{ __html: legalSections[activeSection].content }}
              />
              
              {/* Tabla de Contacto Legal */}
              <div className="legal-contact">
                <h3>Contacto para Asuntos Legales</h3>
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Departamento</th>
                      <th>Contacto</th>
                      <th>Horario de Atención</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Privacidad de Datos</td>
                      <td>privacidad@serviciosweb.com</td>
                      <td>Lun-Vie 9:00-18:00</td>
                    </tr>
                    <tr>
                      <td>Términos Legales</td>
                      <td>legal@serviciosweb.com</td>
                      <td>Lun-Vie 9:00-17:00</td>
                    </tr>
                    <tr>
                      <td>Derechos ARCO</td>
                      <td>arco@serviciosweb.com</td>
                      <td>Lun-Vie 10:00-16:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Información Adicional */}
              <div className="legal-info">
                <h3>Información Adicional</h3>
                <p>
                  <strong>Última actualización:</strong> 1 de Enero, 2024
                </p>
                <p>
                  <strong>Vigencia:</strong> Esta política entra en vigor a partir de la fecha de publicación.
                </p>
                <p>
                  Para cualquier duda sobre nuestros términos legales, no dude en contactarnos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Legal