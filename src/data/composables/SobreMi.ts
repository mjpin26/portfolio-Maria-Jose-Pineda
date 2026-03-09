import { computed, ref } from "vue"

export type SobreMiSeccion = "habilidades" | "educacion" | "idiomas"

export function SobreMi() {
  const seccionActiva = ref<SobreMiSeccion>("habilidades")

  const secciones = computed(() => [
    {
      key: "habilidades" as const,
      titulo: "Habilidades Técnicas",
      
      contenido: [
        "Diseño UX",
        "Diseño editorial",
        "Diseño gráfico",
        "Branding e Identidad Visual",
      ],
     
    },
    
    {
      key: "educacion" as const,
      titulo: "Educación",
      contenido: [
        "Actualmente, estudiante de Diseño y Tecnologías Creativas de la UPV",
        "Foundations of User Experience (UX) Design - Certificado de Google",
        "Start the UX Design Process: Empathize, Define, and Ideate - Certificado de Google",
        "Build Wireframes and Low-Fidelity Prototypes - Certificado de Google",
        
        
      ],
    },
    {
      key: "idiomas" as const,
      titulo: "Idiomas",
      contenido: [
        "Español (Nativo)",
        "Inglés (Cambridge FCE English B2)",
        "Francés (DELF B1)",
      ],
    },
  ])

  function setSeccion(key: SobreMiSeccion) {
    seccionActiva.value = key
  }

  const seccionSeleccionada = computed(() =>
    secciones.value.find((s) => s.key === seccionActiva.value)
  )

  return { seccionActiva, secciones, seccionSeleccionada, setSeccion }
}