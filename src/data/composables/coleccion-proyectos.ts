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
    descripcion: "Identidad Visual",
    imagen:"/imagenes/proyectos/Diseño/Kaoka/mockup06.jpg",
     basePath: "/imagenes/proyectos/Diseño/Kaoka",
    carousel: ["bolsa01", "bolsa02", "bolsa03","mockup01", "mockup02", "mockup06"],

  },
    {
    categoria: "diseño",
    id: "ONIRO",
    titulo: "ONIRO",
    descripcion: "Juego de mesa",
    imagen:"/imagenes/proyectos/Diseño/Oniro/Foto10.jpg",
  },

  {
    categoria: "diseño",
    id: "CHILDHOOD",
    titulo: "CHILDHOOD",
    descripcion: "Tallado y Modelado",
    imagen:"/imagenes/proyectos/Diseño/Playdough/crayola01.jpg",
  },
{
    categoria: "diseño",
    id: "Revistas",
    titulo: "Revistas",
    descripcion: "Diseño editorial, maquetacion",
    imagen:"/imagenes/proyectos/Diseño/Revista/revista01.jpg",
  },
  {
    categoria: "diseño",
    id: "Letras",
    titulo: "Letras Amorfas",
    descripcion: "Tipografia",
    imagen:"/imagenes/proyectos/Diseño/Letras/letra02.jpg",
  },
  {
    categoria: "diseño",
    id: "Campana",
    titulo: "A mi también me pasa",
    descripcion: "Campaña publicitaria",
    imagen:"/imagenes/proyectos/Diseño/Campana/mupi03.jpg",
  },
  {
    categoria: "diseño",
    id: "Carteles",
    titulo: "Carteles",
    descripcion: "Layout oscuro con cards",
    imagen:"/imagenes/proyectos/Diseño/Carteles/pereza02.jpg",
  },
  {
    categoria: "diseño",
    id: "Extranjeros Conectados",
    titulo: "Extranjeros Conectados",
    descripcion: "Identidad Visual",
    imagen:"/imagenes/proyectos/Diseño/Extracon/tarjeta01.jpg",
  },
  {
    categoria: "ilustracion",
    id: "LIBRO",
    titulo: "LIBRO",
    descripcion: "ilustracion de un libro",
    imagen:"/imagenes/proyectos/diseño/kaoka/mockup06.jpg",
  },
  {
    categoria: "audiovisuales",
    id: "UNO",
    titulo: "UNO",
    descripcion: "Cortometraje",
    imagen:"/imagenes/proyectos/diseño/kaoka/mockup06.jpg",
    
  },
]