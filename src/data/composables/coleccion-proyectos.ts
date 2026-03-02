export type Categoria = "diseño" | "ilustracion" | "audiovisuales"

export type ProyectoColeccion = {
  categoria: Categoria
  slug: string
  titulo: string
  descripcion: string
  // cover?: string // lo añadimos luego cuando metas imágenes
}

export const coleccionProyectos: ProyectoColeccion[] = [
  {
    categoria: "diseño",
    slug: "ONIRO",
    titulo: "ONIRO",
    descripcion: "Juego de mesa",
  },
  {
    categoria: "diseño",
    slug: "KAOKA",
    titulo: "Branding de chocolate",
    descripcion: "Layout oscuro con cards",
  },
  {
    categoria: "ilustracion",
    slug: "LIBRO",
    titulo: "LIBRO",
    descripcion: "ilustracion de un libro",
  },
  {
    categoria: "audiovisuales",
    slug: "UNO",
    titulo: "UNO",
    descripcion: "Cortometraje",
  },
]