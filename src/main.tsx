import React from 'react'
import { createRoot } from 'react-dom/client'
import { Search, MapPin, ArrowRight, ShieldCheck } from 'lucide-react'
import './styles.css'

const categories = ['Alimentación', 'Educación', 'Empleo', 'Salud', 'Vivienda', 'Tecnología']

function App() {
  return (
    <main className="shell">
      <nav className="nav">
        <div className="brand"><span className="brand-mark">R</span> RedAR</div>
        <span className="status"><ShieldCheck size={16} /> Recursos verificados</span>
      </nav>

      <section className="hero">
        <p className="eyebrow">RED DE AYUDA · ARGENTINA</p>
        <h1>Encontrá ayuda.<br /><span>Sin dar mil vueltas.</span></h1>
        <p className="lead">Contanos qué necesitás y encontrá recursos, servicios y lugares que puedan ayudarte.</p>

        <div className="search-box">
          <Search size={21} />
          <input aria-label="¿Qué necesitás?" placeholder="Ej.: necesito una computadora para estudiar" />
          <button>Buscar <ArrowRight size={18} /></button>
        </div>

        <div className="location"><MapPin size={16} /> CABA <button className="text-button">Cambiar</button></div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><p className="eyebrow">EXPLORAR</p><h2>¿Qué estás buscando?</h2></div>
          <span>6 categorías iniciales</span>
        </div>
        <div className="categories">
          {categories.map((category) => <button className="category" key={category}>{category}<ArrowRight size={17} /></button>)}
        </div>
      </section>

      <section className="next-step">
        <div>
          <p className="eyebrow">MÁS QUE UN DIRECTORIO</p>
          <h2>¿No sabés por dónde empezar?</h2>
          <p>RedAR transforma tu necesidad en próximos pasos concretos, con alternativas y requisitos claros.</p>
        </div>
        <button className="primary">Decime qué necesitás <ArrowRight size={18} /></button>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
