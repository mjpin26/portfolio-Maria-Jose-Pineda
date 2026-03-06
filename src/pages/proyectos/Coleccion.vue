<script setup lang="ts">
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { Card, CardContent } from "@/components/ui/card"
import { usePaginacionColeccion } from "@/data/composables/usePaginacionColeccion"
import { coleccionProyectos } from "@/data/composables/coleccion-proyectos"

const route = useRoute()
const router = useRouter()

const categoria = computed(() => route.params.categoria as string)
const lista = computed(() => coleccionProyectos.filter((p) => p.categoria === categoria.value))

const { paginaActual, totalPaginas, itemsPaginados, numerosPagina, irAPagina } =
  usePaginacionColeccion(lista, 2)
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-8 w-full max-w-[1400px] my-8 mx-auto">
    <div class="text-center">
      <h1 class="font-bold text-xl lg:text-5xl mb-5 capitalize">
        {{ categoria }}
      </h1>
      <p class="mb-4">
        Haz click en un proyecto para ver el detalle
      </p>
    </div>

   
   <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto">
      <Card
        v-for="proyecto in itemsPaginados"
        :key="proyecto.id"
        class="cursor-pointer w-[420px] h-[480px] hover:bg-[#c9c9c9] hover:text-white transition"
      >
        <CardContent
          class="flex flex-col items-center gap-2 w-full px-0"
          @click="router.push(`/proyectos/${categoria}/${proyecto.id}`)"
        >
         
          <img
            v-if="proyecto.imagen"
            :src="proyecto.imagen"
            :alt="proyecto.titulo"
            class="w-[380px] h-[300px] mt-3 rounded-t-md border object-cover"
            loading="lazy"
            />

            <div
            v-else
            class="w-[380px] h-[300px] mt-3 bg-[#ffde00] rounded-t-md border"
            />

          <h2 class="font-medium text-lg">{{ proyecto.titulo }}</h2>
          <p class="text-sm text-center px-4 opacity-90">
            {{ proyecto.descripcion }}
          </p>
        </CardContent>
      </Card>
    </div>

    
    <div class="flex items-center justify-center gap-2 mt-4">
      <button
        @click="irAPagina(paginaActual - 1)"
        :disabled="paginaActual === 1"
        :class="[
          'px-4 py-2 rounded-md font-medium transition-colors',
          paginaActual === 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-[#ffde00] hover:bg-[#999696] hover:text-white'
        ]"
      >
        Anterior
      </button>

      <button
        v-for="pagina in numerosPagina"
        :key="pagina"
        @click="irAPagina(pagina)"
        :class="[
          'w-10 h-10 rounded-md font-medium transition-colors',
          paginaActual === pagina
            ? 'bg-[#9f9f9f] text-white'
            : 'bg-[#ffde00] hover:bg-[#888888] hover:text-white'
        ]"
      >
        {{ pagina }}
      </button>

      <button
        :disabled="paginaActual === totalPaginas"
        @click="irAPagina(paginaActual + 1)"
        :class="[
          'px-4 py-2 rounded-md font-medium transition-colors',
          paginaActual === totalPaginas
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-[#ffde00] hover:bg-[#868686] hover:text-white'
        ]"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>


<style scoped>

</style>