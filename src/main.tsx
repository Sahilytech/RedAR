import { useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2, ExternalLink, Filter, MapPin, Search, ShieldCheck, X } from 'lucide-react'
import { resources, type Category, type Resource } from './data/resources'
import { mapResources } from './data/mapResources'
import './styles.css'

const categories: Category[] = ['Educación', 'Tecnología', 'Alimentación', 'Empleo', 'Salud', 'Asesoramiento']
const neighborhoods = ['Todos', 'CABA', 'Monserrat', 'Almagro', 'Barracas', 'Online', 'Varias ubicaciones']

function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<Category | 'Todas'>('Todas')
  const [neighborhood, setNeighborhood] = useState('Todos')
  const [onlyFree, setOnlyFree] = useState(false)
  const [onlyAccessible, setOnlyAccessible] = useState(false)
  const [onlyVerified, setOnlyVerified] = useState(false)
  const [selected, setSelected] = useState<Resource | null>(null)
  const [showMap, setShowMap] = useState(false)

  const filtered = useMemo(() => {
    const text = query.trim().toLowerCase()
    return resources.filter((resource) => {
      const matchesText = !text || [resource.name, resource.description, resource.category, resource.neighborhood, resource.address].join(' ').toLowerCase().includes(text)
      const matchesCategory = category === 'Todas' || resource.category === category
      const matchesNeighborhood = neighborhood === 'Todos' || resource.neighborhood === neighborhood || (neighborhood === 'CABA' && resource.neighborhood !== 'Online')
      return matchesText && matchesCategory && matchesNeighborhood && (!onlyFree || resource.free) && (!onlyAccessible || resource.accessible) && (!onlyVerified || resource.verified)
    })
  }, [query, category, neighborhood, onlyFree, onlyAccessible, onlyVerified])

  return (
    <main className="shell">
      <nav className="nav">
        <div className="brand"><span className="brand-mark">R</span><span>RedAR</span></div>
        <div className="status"><ShieldCheck size={16} /> Fuentes oficiales y estado de verificación</div>
      </nav>

      <section className="hero">
        <p className="eyebrow">RED DE AYUDA · ARGENTINA</p>
        <h1>Encontrá ayuda.<br /><span>Sin dar mil vueltas.</span></h1>
        <p className="lead">Contanos qué necesitás y encontrá recursos, servicios y lugares que puedan ayudarte.</p>
        <form className="search-box" onSubmit={(event) => { event.preventDefault(); document.getElementById('recursos')?.scrollIntoView({ behavior: 'smooth' }) }}>
          <Search size={21} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="¿Qué necesitás?" placeholder="Ej.: necesito una computadora para estudiar" />
          <button type="submit">Buscar <ArrowRight size={18} /></button>
        </form>
        <div className="location"><MapPin size={16} /> CABA <button className="text-button" type="button">Cambiar</button></div>
      </section>

      <section className="section results-section" id="recursos">
        <div className="section-heading">
          <div><p className="eyebrow">BUSCADOR</p><h2>{filtered.length} recursos encontrados</h2></div>
          <button className="map-button" type="button" onClick={() => setShowMap(!showMap)}><MapPin size={16} /> {showMap ? 'Ocultar mapa' : 'Ver mapa'}</button>
        </div>

        <div className="filters">
          <div className="filter-label"><Filter size={16} /> Filtrar</div>
          <select value={category} onChange={(event) => setCategory(event.target.value as Category | 'Todas')} aria-label="Categoría">
            <option>Todas</option>{categories.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select value={neighborhood} onChange={(event) => setNeighborhood(event.target.value)} aria-label="Ubicación">
            {neighborhoods.map((item) => <option key={item}>{item}</option>)}
          </select>
          <label><input type="checkbox" checked={onlyFree} onChange={(event) => setOnlyFree(event.target.checked)} /> Gratis</label>
          <label><input type="checkbox" checked={onlyAccessible} onChange={(event) => setOnlyAccessible(event.target.checked)} /> Accesible</label>
          <label><input type="checkbox" checked={onlyVerified} onChange={(event) => setOnlyVerified(event.target.checked)} /> Verificado</label>
        </div>

        {showMap && <section className="map-panel" aria-label="Mapa de recursos">
          <div className="map-copy"><p className="eyebrow">MAPA DE RECURSOS</p><h3>Recursos y servicios ubicados en CABA</h3><p>Este MVP usa coordenadas aproximadas para visualizar la red. Antes de producción, cada punto debe validarse contra su fuente oficial.</p></div>
          <div className="map-canvas">
            <div className="map-grid" />
            {mapResources.map((item) => <a key={item.id} className="map-pin" style={{ left: `${50 + (item.lng + 58.42) * 120}%`, top: `${50 - (item.lat + 34.62) * 120}%` }} href={item.sourceUrl} target="_blank" rel="noreferrer" title={`${item.name} — ${item.address}`}><MapPin size={25} /></a>)}
            <div className="map-label">CABA · datos de fuentes oficiales</div>
          </div>
        </section>}

        {filtered.length > 0 ? <div className="resource-grid">
          {filtered.map((resource) => <article className="resource-card" key={resource.id}>
            <div className="card-top"><span className="tag">{resource.category}</span>{resource.verified && <span className="verified"><CheckCircle2 size={14} /> Verificado</span>}</div>
            <h3>{resource.name}</h3>
            <p>{resource.description}</p>
            <div className="meta"><MapPin size={15} /> {resource.neighborhood}</div>
            <div className="card-bottom"><span>{resource.free ? 'Gratis' : 'Con costo'}</span><button type="button" onClick={() => setSelected(resource)}>Ver cómo acceder <ArrowRight size={16} /></button></div>
          </article>)}
        </div> : <div className="empty"><Search size={28} /><h3>No encontramos recursos con esos filtros</h3><p>Probá con otra categoría, ubicación o quitá algún filtro.</p></div>}
      </section>

      <section className="section">
        <div className="section-heading"><div><p className="eyebrow">EXPLORAR</p><h2>¿Qué estás buscando?</h2></div><span>{categories.length} categorías iniciales</span></div>
        <div className="categories">{categories.map((item) => <button className="category" key={item} type="button" onClick={() => { setCategory(item); document.getElementById('recursos')?.scrollIntoView({ behavior: 'smooth' }) }}>{item}<ArrowRight size={17} /></button>)}</div>
      </section>

      <section className="sources">
        <div><p className="eyebrow">DATOS</p><h2>RedAR prioriza fuentes oficiales</h2><p>La primera base se está construyendo con información pública de organismos de CABA y Argentina. Cada recurso debe conservar su fuente y fecha de verificación.</p></div>
        <div className="source-list">
          <a href="https://buenosaires.gob.ar/gcaba_historico/salud/centros-de-salud-y-hospitales" target="_blank" rel="noreferrer">Salud CABA <ExternalLink size={14} /></a>
          <a href="https://buenosaires.gob.ar/gcaba_historico/servicios-de-la-red-de-bibliotecas" target="_blank" rel="noreferrer">Bibliotecas CABA <ExternalLink size={14} /></a>
          <a href="https://buenosaires.gob.ar/tramites/postulaciones-para-programas-sociales" target="_blank" rel="noreferrer">Programas sociales CABA <ExternalLink size={14} /></a>
          <a href="https://buenosaires.gob.ar/gcaba_historico/mapa-colaborativo-ba" target="_blank" rel="noreferrer">Mapa accesible BA <ExternalLink size={14} /></a>
        </div>
      </section>

      <section className="next-step">
        <div><p className="eyebrow">MÁS QUE UN DIRECTORIO</p><h2>¿No sabés por dónde empezar?</h2><p>RedAR transforma tu necesidad en próximos pasos concretos, con alternativas y requisitos claros.</p></div>
        <button className="primary" type="button" onClick={() => { setQuery(''); setCategory('Todas'); setNeighborhood('Todos'); setOnlyFree(false); setOnlyAccessible(false); setOnlyVerified(false); document.getElementById('recursos')?.scrollIntoView({ behavior: 'smooth' }) }}>Ver todos los recursos <ArrowRight size={18} /></button>
      </section>

      {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><aside className="detail" onClick={(event) => event.stopPropagation()}>
        <button className="close" type="button" onClick={() => setSelected(null)} aria-label="Cerrar"><X /></button>
        <span className="tag">{selected.category}</span><h2>{selected.name}</h2><p className="detail-description">{selected.description}</p>
        <div className="detail-meta"><span><MapPin size={16} /> {selected.address}</span><span><ShieldCheck size={16} /> {selected.verified ? 'Fuente verificada' : 'Pendiente de verificación'}</span><span>{selected.hours}</span><span>{selected.contact}</span></div>
        <h3>Qué hacer ahora</h3><ol>{selected.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        <h3>Requisitos</h3><ul>{selected.requirements.map((item) => <li key={item}>{item}</li>)}</ul>
        <a className="source" href={selected.sourceUrl} target="_blank" rel="noreferrer">Consultar fuente oficial <ExternalLink size={16} /></a>
      </aside></div>}
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
