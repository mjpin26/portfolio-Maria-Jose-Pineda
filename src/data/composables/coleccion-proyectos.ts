export type Categoria = "diseño" | "ilustracion" | "audiovisuales"

export type ProyectoColeccion = {
  categoria: Categoria
  id: string
  titulo: string
  descripcion: string
  imagen: string
  texto?: string

  basePath?: string
  carousel?: string[]    
}

export const coleccionProyectos: ProyectoColeccion[] = [
{
    categoria: "diseño",
    id: "koaka",
    titulo: "Kaoka",
    descripcion: "Identidad Visual 2025",
    imagen:"/imagenes/proyectos/Diseño/Kaoka/mockup06.jpg",
     basePath: "/imagenes/proyectos/Diseño/Kaoka",
    carousel: ["bolsa01", "bolsa02", "bolsa03","caja01","caja02","caja03","caja04",
              "folleto01","folleto02","mockup01", "mockup02","mockup03","mockup04","mockup05","mockup06"],

  },
    {
    categoria: "diseño",
    id: "ONIRO",
    titulo: "Oniro ",
    descripcion: "Juego de mesa 2025",
    imagen:"/imagenes/proyectos/Diseño/Oniro/Foto10.jpg",
    basePath: "/imagenes/proyectos/Diseño/Oniro",
    carousel: ["Foto01","Foto02","Foto03 ","Foto04","Foto05","Foto06",
              "Foto07_","Foto08","Foto09","Foto10","Foto11","Foto12","Foto13","Foto14","Foto15","Foto16"],

  },

  {
    categoria: "diseño",
    id: "CHILDHOOD",
    titulo: "Childhood",
    descripcion: "Colección de objetos decorativos 2025",
    imagen:"/imagenes/proyectos/Diseño/Playdough/crayola01.jpg",
    basePath: "/imagenes/proyectos/Diseño/Playdough",
    carousel: ["crayola01","crayola02","crayola03","crayola04","crayola05","crayola06","crayola07","cubo01","cubo02","cubo03"],
  },
{
    categoria: "diseño",
    id: "Revistas",
    titulo: "Revistas",
    descripcion: "Diseño editorial 2025",
    imagen:"/imagenes/proyectos/Diseño/Revista/revista01.jpg",
    basePath: "/imagenes/proyectos/Diseño/Revista",
    carousel: ["revista01","revista02","revista03","revista101","revista102","revista103","revista104",
              "revista201","revista202","revista203","revista204","revista205",],
  },
  {
    categoria: "diseño",
    id: "Letras",
    titulo: "Letras Amorfas",
    descripcion: "36 Days of Types Challenge 2025",
    imagen:"/imagenes/proyectos/Diseño/Letras/letra02.jpg",
    basePath: "/imagenes/proyectos/Diseño/Letras",
    carousel: ["letra01","letra02","letra03",],
  },
  {
    categoria: "diseño",
    id: "Campana",
    titulo: "A mi también me pasa",
    descripcion: "Campaña contra la brecha intergeneracional 2026",
    imagen:"/imagenes/proyectos/Diseño/Campana/mupi03.jpg",
    basePath: "/imagenes/proyectos/Diseño/Campana",
    carousel: ["cartel01","cartel02","cartel03","cartel04","mupi01","mupi02","mupi03","mupi04",
              "triptico01","triptico02","triptico03","triptico04","triptico101","triptico102",],
  },
  {
    categoria: "diseño",
    id: "Carteles",
    titulo: "Carteles",
    descripcion: "Diseño editorial 2025-2026",
    imagen:"/imagenes/proyectos/Diseño/Carteles/pereza02.jpg",
    basePath: "/imagenes/proyectos/Diseño/Carteles",
    carousel: ["crefad01","crefad02","crefad03","pereza01","pereza02","pereza03"],
  
  },
  {
    categoria: "diseño",
    id: "Extranjeros Conectados",
    titulo: "Extranjeros Conectados",
    descripcion: "Identidad Visual 2025",
    imagen:"/imagenes/proyectos/Diseño/Extracon/tarjeta01.jpg",
    basePath: "/imagenes/proyectos/Diseño/Extracon",
    carousel: ["tarjeta0","tarjeta01","tarjeta02","flyer0","flyer01","flyer02"],
  },
  {
    categoria: "ilustracion",
    id: "ilustracion",
    titulo: "Novela",
    descripcion: "Ilustración narrativa 2025",
    imagen:"/imagenes/proyectos/Ilustracion/novela/book01.jpg",
    basePath: "/imagenes/proyectos/Ilustracion/novela",
    carousel: ["book01","book02","book03","book04","book05","book06","book07","book08","book09","book10","book11",],
  },
   {
    categoria: "ilustracion",
    id: "comic",
    titulo: "¿Cuándo jugará conmigo?",
    descripcion: "Ilustración secuencial 2025",
    imagen:"/imagenes/proyectos/Ilustracion/comic/comic01.jpg",
    basePath: "/imagenes/proyectos/Ilustracion/comic",
    carousel: ["comic01","comic02","comic03"],
  },
   {
    categoria: "ilustracion",
    id: "noticia",
    titulo: "Artículo",
    descripcion: "Ilustración conceptual 2025",
    imagen:"/imagenes/proyectos/Ilustracion/noticia/noticia01.jpg",
    basePath: "/imagenes/proyectos/Ilustracion/noticia",
    carousel: ["noticia01","noticia02","noticia03"],
  },
   {
    categoria: "ilustracion",
    id: "Ilustraciones personales",
    titulo: "Arte tradicional y digital 2024-2025",
    descripcion: "Ilustraciones con tecnicas mixtas",
    imagen:"/imagenes/proyectos/Ilustracion/dibujos/dibujo19.jpg",
    basePath: "/imagenes/proyectos/Ilustracion/dibujos",
    carousel: ["dibujo01","dibujo02","dibujo03","dibujo04","dibujo05","dibujo6","dibujo07","dibujo08","dibujo09","dibujo10",
              "dibujo11","dibujo12","dibujo13","dibujo14","dibujo16","dibujo17","dibujo18","dibujo20","dibujo19",
    ],
  },
  {
    categoria: "audiovisuales",
    id: "bodegonesYretratos",
    titulo: "Bodegones & Retratos",
    descripcion: "Fotografías 2025",
    imagen:"/imagenes/proyectos/Mediosaudiovisuales/bodeRetrato/bodegon04.jpg",
    basePath: "/imagenes/proyectos/Mediosaudiovisuales/bodeRetrato",
    carousel: ["bodegon01","bodegon02","bodegon03","bodegon04","retrato01","retrato02","retrato03",],
    
  },
  {
    categoria: "audiovisuales",
    id: "jeffWall",
    titulo: "Fotografías estilo Jeff Wall",
    descripcion: "Fotografias 2025",
    imagen:"/imagenes/proyectos/Mediosaudiovisuales/Jeff/jeff08.jpg",
    basePath: "/imagenes/proyectos/Mediosaudiovisuales/Jeff",
    carousel: ["jeff01","jeff02","jeff03","jeff04","jeff05","jeff06","jeff07","jeff08",],
    
  },
  {
    categoria: "audiovisuales",
    id: "diario",
    titulo: "Diario de una planta",
    descripcion: "Cortometraje 2025",
    imagen:"/imagenes/proyectos/Mediosaudiovisuales/Diario/diario01.jpg",
    basePath: "/imagenes/proyectos/Mediosaudiovisuales/Diario",
    carousel: ["diario01","diario02","diario03","diario04","diario05",],
    
  },
  {
    categoria: "audiovisuales",
    id: "campanavideo",
    titulo: "A mi también me pasa",
    descripcion: "Cortometraje de campaña publicitaria 2026 ",
    imagen:"/imagenes/proyectos/Mediosaudiovisuales/campanaVideo/campana03.jpg",
    basePath: "/imagenes/proyectos/Mediosaudiovisuales/campanaVideo",
    carousel: ["campana01", "campana02","campana03","campana04","campana08",],
    
  },
]