<script setup lang="ts">
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { ArrowLeft, X } from "lucide-vue-next"
import Carrusimaginum from "@/components/Carrusimaginum.vue"
import { Button } from "@/components/ui/button"
import carouselImagenes from "@/components/carouselImagenes.vue"
import { coleccionProyectos } from "@/data/composables/coleccion-proyectos"
import { textosProyectos } from "@/data/composables/textosProyectos"


const route = useRoute()
const router = useRouter()

const categoria = computed(() => route.params.categoria as string)
const id = computed(() => route.params.slug as string)

const proyecto = computed(() =>
  coleccionProyectos.find((p) => p.categoria === categoria.value && p.id === id.value)
)

const { miniDescripcion } = textosProyectos(
  () => categoria.value,
  () => id.value
)

function volverACategoria() {
  router.push({ name: "coleccion", params: { categoria: categoria.value } })
}

function salirAProyectos() {
  router.push({ name: "proyectos" })
}
</script>

<template>
  <div v-if="proyecto" class="w-full max-w-[1400px] mx-auto my-8 px-4 space-y-8">
    <div class="flex items-start justify-between gap-4">
      <div class="space-y-2">
        <h1 class="text-2xl lg:text-5xl font-bold">{{ proyecto.titulo }}</h1>
        <p class="opacity-80">{{ proyecto.descripcion }}</p>
      </div>

      <div class="flex gap-2">
        <Button class="bg-[#6d31ee] hover:bg-[#b88bff] transition-colors" 
         @click="volverACategoria">
          <ArrowLeft class="mr-2 h-4 w-4" />
          Volver
        </Button>

        <Button class="bg-[#6d31ee] hover:bg-[#b88bff] transition-colors" 
        @click="salirAProyectos">
         
          Salir
        </Button>
      </div>
    </div>

    <div class="max-w-3xl leading-relaxed opacity-90">
     <p class="whitespace-pre-line text-sm md:text-base leading-relaxed opacity-90">
        {{ miniDescripcion }}
      </p>
    </div>

    <div v-if="proyecto?.basePath && proyecto.carousel?.length" class="flex justify-center mt-8">
  <Carrusimaginum
  :base-path="proyecto.basePath"
  :photos="proyecto.carousel"
  :auto-play-delay="4000"
  :loop="true"
/>
</div>

    <div v-else class="opacity-70">
      Este proyecto aún no tiene el carrusel (LLORA FEO WAAA) .
    </div>
  </div>

  <div v-else class="w-full max-w-[1400px] mx-auto my-8 px-4">
    <p class="opacity-80">Proyecto no encontrado para nada que SAD .</p>
    <Button variant="ghost" class="mt-4" @click="salirAProyectos">
      <X class="mr-2 h-4 w-4" />
      Volver a Proyectos
    </Button>
  </div>
</template>

