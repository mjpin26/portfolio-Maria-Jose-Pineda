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
       programas: [
        { nombre: "Illustrator", icono: "/svg/programas/adobe-illustrator-icon.svg" },
        { nombre: "Photoshop", icono: "/svg/programas/adobe-photoshop-icon.svg" },
        { nombre: "Figma", icono: "/svg/programas/figma-icon.svg" },
        { nombre: "Indesign", icono: "/svg/programas/indesign-icon.svg" },
  ],
     
    },
    
    {
      key: "educacion" as const,
      titulo: "Educación",
      contenido: [
        "Estudiante de Diseño y Tecnologías Creativas de la UPV         2024",
        "Foundations of User Experience (UX) Design - Certificado de Google      2024",
        "Start the UX Design Process: Empathize, Define, and Ideate - Certificado de Google    2024",
        "Build Wireframes and Low-Fidelity Prototypes - Certificado de Google      2025",
        
        
      ],
    },
    {
      key: "idiomas",
      titulo: "Idiomas",
      contenido: [
        "Español: Idioma nativo",
        "Inglés: Cambridge English Certificate FCE B2",
        "Francés: DELF B1",
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