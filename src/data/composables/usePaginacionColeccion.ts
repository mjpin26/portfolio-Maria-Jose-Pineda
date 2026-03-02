import { computed, ref, watch, type ComputedRef } from "vue"

export function usePaginacionColeccion<T>(lista: ComputedRef<T[]>, itemsPorPagina = 2) {
  const paginaActual = ref(1)

  const totalPaginas = computed(() => Math.max(1, Math.ceil(lista.value.length / itemsPorPagina)))

  const itemsPaginados = computed(() => {
    const inicio = (paginaActual.value - 1) * itemsPorPagina
    const fin = inicio + itemsPorPagina
    return lista.value.slice(inicio, fin)
  })

  const numerosPagina = computed(() =>
    Array.from({ length: totalPaginas.value }, (_, i) => i + 1)
  )

  const irAPagina = (pagina: number) => {
    if (pagina >= 1 && pagina <= totalPaginas.value) {
      paginaActual.value = pagina
    }
  }

  watch(lista, () => {
    paginaActual.value = 1
  })

  return { paginaActual, totalPaginas, itemsPaginados, numerosPagina, irAPagina }
}