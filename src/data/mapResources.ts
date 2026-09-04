export type MapResource = {
  id: string
  name: string
  category: string
  description: string
  address: string
  neighborhood: string
  lat: number
  lng: number
  sourceUrl: string
}

// Coordenadas aproximadas para el MVP. Deben reemplazarse por coordenadas oficiales/verificadas antes de producción.
export const mapResources: MapResource[] = [
  { id: 'bnm', name: 'Biblioteca Nacional de Maestros', category: 'Educación', description: 'Consulta y acceso a materiales educativos y bibliográficos.', address: 'Pizzurno 953, CABA', neighborhood: 'Monserrat', lat: -34.5957, lng: -58.3971, sourceUrl: 'https://www.argentina.gob.ar/educacion/bnm' },
  { id: 'bibliotecas-caba', name: 'Red de Bibliotecas Públicas', category: 'Educación', description: 'Espacios gratuitos para leer, estudiar y participar de actividades.', address: 'Varias ubicaciones', neighborhood: 'CABA', lat: -34.6037, lng: -58.3816, sourceUrl: 'https://buenosaires.gob.ar/gcaba_historico/servicios-de-la-red-de-bibliotecas' },
  { id: 'salud-caba', name: 'Centros de Salud y Hospitales', category: 'Salud', description: 'Red pública de atención primaria y hospitalaria.', address: 'Varias ubicaciones', neighborhood: 'CABA', lat: -34.6037, lng: -58.3816, sourceUrl: 'https://buenosaires.gob.ar/gcaba_historico/salud/centros-de-salud-y-hospitales' },
  { id: 'ciac-almagro', name: 'CIAC Almagro', category: 'Asesoramiento', description: 'Acompañamiento integral con equipos interdisciplinarios.', address: 'Av. Medrano 350', neighborhood: 'Almagro', lat: -34.6035, lng: -58.4172, sourceUrl: 'https://buenosaires.gob.ar/gcaba_historico/prevencion-e-intervencion-comunitaria/centros-de-intervencion-asistencial-comunitaria-ciac' },
  { id: 'ciac-barracas', name: 'CIAC Barracas', category: 'Asesoramiento', description: 'Acompañamiento integral con equipos interdisciplinarios.', address: 'Av. Osvaldo Cruz 3600', neighborhood: 'Barracas', lat: -34.6507, lng: -58.3845, sourceUrl: 'https://buenosaires.gob.ar/gcaba_historico/prevencion-e-intervencion-comunitaria/centros-de-intervencion-asistencial-comunitaria-ciac' },
  { id: 'defensoria', name: 'Defensoría del Pueblo de la Ciudad', category: 'Asesoramiento', description: 'Orientación y recepción de reclamos sobre derechos y servicios públicos.', address: 'Distintas sedes y canales', neighborhood: 'CABA', lat: -34.6083, lng: -58.4000, sourceUrl: 'https://defensoria.org.ar/' },
  { id: 'programas-sociales', name: 'Sedes de atención social', category: 'Alimentación', description: 'Orientación para acceder a programas y servicios sociales.', address: 'Según sede', neighborhood: 'CABA', lat: -34.6037, lng: -58.3816, sourceUrl: 'https://buenosaires.gob.ar/tramites/postulaciones-para-programas-sociales' },
]
