export type Categoria = "diseño" | "ilustracion" | "audiovisuales"

export type ProyectoColeccion = {
  categoria: Categoria
  slug: string
  titulo: string
  descripcion: string
  imagen: string

}

export const coleccionProyectos: ProyectoColeccion[] = [
   {
    categoria: "diseño",
    slug: "KAOKA",
    titulo: "KAOKA",
    descripcion: "Identidad visual",
    imagen: "/imagenes/proyectos/Diseño/Kaoka/mockup06.jpg",
  },
    {
    categoria: "diseño",
    slug: "ONIRO",
    titulo: "ONIRO",
    descripcion: "Juego de mesa",
    imagen:"/imagenes/proyectos/Diseño/Oniro/Foto10.jpg",
  },

  {
    categoria: "diseño",
    slug: "CHILDHOOD",
    titulo: "CHILDHOOD",
    descripcion: "Tallado y Modelado",
    imagen:"/imagenes/proyectos/Diseño/Playdough/crayola01.jpg",
  },
{
    categoria: "diseño",
    slug: "Revistas",
    titulo: "Revistas",
    descripcion: "Diseño editorial, maquetacion",
    imagen:"/imagenes/proyectos/Diseño/Revista/revista 01.jpg",
  },
  {
    categoria: "diseño",
    slug: "Letras",
    titulo: "Letras Amorfas",
    descripcion: "Tipografia",
    imagen:"/imagenes/proyectos/Diseño/Letras/letra02.jpg",
  },
  {
    categoria: "diseño",
    slug: "Campaña",
    titulo: "A mi también me pasa",
    descripcion: "Campaña publicitaria",
    imagen:"/imagenes/proyectos/Diseño/Campaña/mupi03.jpg",
  },
  {
    categoria: "diseño",
    slug: "Carteles",
    titulo: "Carteles",
    descripcion: "Layout oscuro con cards",
    imagen:"/imagenes/proyectos/Diseño/Carteles/pereza02.jpg",
  },
  {
    categoria: "diseño",
    slug: "Extranjeros Conectados",
    titulo: "Extranjeros Conectados",
    descripcion: "Identidad Visual",
    imagen:"/imagenes/proyectos/Diseño/Extracon/tarjeta01.jpg",
  },
  {
    categoria: "ilustracion",
    slug: "LIBRO",
    titulo: "LIBRO",
    descripcion: "ilustracion de un libro",
    imagen:"/imagenes/proyectos/diseño/kaoka/mockup06.jpg",
  },
  {
    categoria: "audiovisuales",
    slug: "UNO",
    titulo: "UNO",
    descripcion: "Cortometraje",
    imagen:"/imagenes/proyectos/diseño/kaoka/mockup06.jpg",
    
  },
]