export type Category = 'Educación' | 'Tecnología' | 'Alimentación' | 'Empleo' | 'Salud' | 'Asesoramiento'

export type Resource = {
  id: string
  name: string
  category: Category
  description: string
  neighborhood: string
  address: string
  free: boolean
  online: boolean
  accessible: boolean
  verified: boolean
  requirements: string[]
  hours: string
  contact: string
  sourceUrl: string
  steps: string[]
}

export const resources: Resource[] = [
  {
    id: 'biblioteca-nacional-maestros',
    name: 'Biblioteca Nacional de Maestros',
    category: 'Educación',
    description: 'Espacio público de consulta y acceso a materiales educativos y bibliográficos.',
    neighborhood: 'Monserrat',
    address: 'Pizzurno 953, CABA',
    free: true,
    online: true,
    accessible: true,
    verified: true,
    requirements: ['Consulta presencial con documento según el servicio'],
    hours: 'Consultar horarios vigentes',
    contact: 'Sitio oficial',
    sourceUrl: 'https://www.argentina.gob.ar/educacion/bnm',
    steps: ['Revisá el servicio que necesitás', 'Consultá horarios y requisitos', 'Acercate o usá los recursos digitales disponibles'],
  },
  {
    id: 'punto-digital',
    name: 'Punto Digital',
    category: 'Tecnología',
    description: 'Espacio de acceso gratuito a computadoras, conectividad y actividades de inclusión digital.',
    neighborhood: 'Varias ubicaciones',
    address: 'Según sede',
    free: true,
    online: false,
    accessible: true,
    verified: true,
    requirements: ['Los requisitos pueden variar según la sede'],
    hours: 'Según sede',
    contact: 'Red de Puntos Digitales',
    sourceUrl: 'https://www.argentina.gob.ar/jefatura/innovacion-publica/gestion-y-desarrollo-de-la-innovacion/punto-digital',
    steps: ['Buscá la sede más cercana', 'Revisá sus servicios y horarios', 'Consultá disponibilidad antes de ir'],
  },
  {
    id: 'cocinas-comunitarias',
    name: 'Centros y espacios de asistencia alimentaria',
    category: 'Alimentación',
    description: 'Orientación para encontrar espacios comunitarios y programas de asistencia alimentaria.',
    neighborhood: 'CABA',
    address: 'Consultar por zona',
    free: true,
    online: true,
    accessible: true,
    verified: false,
    requirements: ['Los requisitos dependen del programa o espacio'],
    hours: 'Según el lugar',
    contact: 'Consultar programas oficiales',
    sourceUrl: 'https://buenosaires.gob.ar/desarrollohumanoyhabitat',
    steps: ['Elegí tu zona', 'Consultá qué espacio corresponde', 'Verificá horarios y requisitos antes de acercarte'],
  },
  {
    id: 'portal-empleo',
    name: 'Portal Empleo',
    category: 'Empleo',
    description: 'Plataforma pública para capacitación, orientación laboral y búsqueda de oportunidades.',
    neighborhood: 'Online',
    address: 'Servicio digital',
    free: true,
    online: true,
    accessible: true,
    verified: true,
    requirements: ['Crear una cuenta para algunas funciones'],
    hours: 'Disponible online',
    contact: 'Portal Empleo',
    sourceUrl: 'https://www.argentina.gob.ar/trabajo/portalempleo',
    steps: ['Ingresá al portal', 'Completá tu perfil si corresponde', 'Explorá capacitación y oportunidades'],
  },
  {
    id: 'defensoria-caba',
    name: 'Defensoría del Pueblo de la Ciudad',
    category: 'Asesoramiento',
    description: 'Orientación y recepción de reclamos relacionados con derechos y servicios públicos.',
    neighborhood: 'CABA',
    address: 'Distintas sedes y canales',
    free: true,
    online: true,
    accessible: true,
    verified: true,
    requirements: ['Dependen del trámite o consulta'],
    hours: 'Consultar canales vigentes',
    contact: 'Canales oficiales',
    sourceUrl: 'https://defensoria.org.ar/',
    steps: ['Identificá el problema', 'Reuní la información necesaria', 'Presentá la consulta o reclamo por un canal oficial'],
  },
  {
    id: 'hospitales-publicos',
    name: 'Hospitales públicos de CABA',
    category: 'Salud',
    description: 'Red pública de atención sanitaria de la Ciudad.',
    neighborhood: 'CABA',
    address: 'Distintos barrios',
    free: true,
    online: false,
    accessible: true,
    verified: true,
    requirements: ['Pueden variar según atención y especialidad'],
    hours: 'Según hospital y servicio',
    contact: 'Canales oficiales de Salud CABA',
    sourceUrl: 'https://buenosaires.gob.ar/salud',
    steps: ['Identificá el tipo de atención que necesitás', 'Buscá el establecimiento correspondiente', 'Consultá horarios y modalidad de atención'],
  },
]
