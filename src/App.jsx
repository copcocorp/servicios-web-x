import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Clients from './pages/Clients'
import Gallery from './pages/Gallery'
import SuccessCases from './pages/SuccessCases'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/casos-exito" element={<SuccessCases />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}

export default App