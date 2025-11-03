import { useState } from 'react'
import '../styles/Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery1.jpg",
      title: "Diseño Web Corporativo",
      category: "web",
      description: "Sitio web moderno para empresa de tecnología"
    },
    {
      id: 2,
      src: "/images/gallery2.jpg",
      title: "App Móvil E-commerce",
      category: "mobile",
      description: "Aplicación de compras con realidad aumentada"
    },
    {
      id: 3,
      src: "/images/gallery3.jpg",
      title: "Tienda Online",
      category: "ecommerce",
      description: "Plataforma de ventas con múltiples pasarelas"
    },
    {
      id: 4,
      src: "/images/gallery4.jpg",
      title: "Dashboard Analytics",
      category: "web",
      description: "Panel de control con métricas en tiempo real"
    },
    {
      id: 5,
      src: "/images/gallery5.jpg",
      title: "App de Delivery",
      category: "mobile",
      description: "Solución completa para servicios de entrega"
    },
    {
      id: 6,
      src: "/images/gallery6.jpg",
      title: "Marketplace B2B",
      category: "ecommerce",
      description: "Plataforma de comercio entre empresas"
    },
    {
      id: 7,
      src: "/images/gallery7.jpg",
      title: "Portal Educativo",
      category: "web",
      description: "Sistema de gestión de aprendizaje online"
    },
    {
      id: 8,
      src: "/images/gallery8.jpg",
      title: "App Fitness",
      category: "mobile",
      description: "Aplicación de seguimiento de actividad física"
    },
    {
      id: 9,
      src: "/images/gallery9.jpg",
      title: "Tienda de Moda",
      category: "ecommerce",
      description: "E-commerce especializado en moda y accesorios"
    }
  ]

  const categories = ["todos", "web", "mobile", "ecommerce"]
  const [activeCategory, setActiveCategory] = useState("todos")

  const filteredImages = activeCategory === "todos" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <div className="gallery">
      <div className="container">
        <section className="section">
          <h1 className="section-title">Galería de Proyectos</h1>
          <p className="section-subtitle">
            Descubre algunos de nuestros trabajos más destacados
          </p>

          {/* Filtros */}
          <div className="gallery-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Grid de Imágenes */}
          <div className="gallery-grid">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal de Imagen */}
          {selectedImage && (
            <div className="modal" onClick={() => setSelectedImage(null)}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button 
                  className="close-btn"
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </button>
                <img src={selectedImage.src} alt={selectedImage.title} />
                <div className="modal-info">
                  <h3>{selectedImage.title}</h3>
                  <p>{selectedImage.description}</p>
                  <span className="category-tag">{selectedImage.category}</span>
                </div>
              </div>
            </div>
          )}

          {/* Video de Proyecto Destacado */}
          <div className="featured-video">
            <h2 className="section-title">Proyecto Destacado</h2>
            <div className="video-wrapper">
              <iframe 
                width="100%" 
                height="500" 
                src="https://www.youtube.com/embed/VIDEO_ID" 
                title="Proyecto Destacado"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Gallery