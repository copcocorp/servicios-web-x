import { useState, useEffect } from 'react'
import '../styles/CookieConsent.css'

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <p>
          Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. 
          Al continuar navegando, aceptas nuestro uso de cookies.
        </p>
        <div className="cookie-buttons">
          <button onClick={acceptCookies} className="btn btn-primary">
            Aceptar
          </button>
          <a href="/legal" className="btn-link">
            Más información
          </a>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent