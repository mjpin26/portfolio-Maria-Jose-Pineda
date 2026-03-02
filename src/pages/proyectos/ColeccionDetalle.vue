<script setup lang="ts">
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"


import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-vue-next"
import { coleccionProyectos } from "@/data/composables/coleccion-proyectos"

const route = useRoute()
const router = useRouter()

const categoria = computed(() => route.params.categoria as string)
const slug = computed(() => route.params.slug as string)

const item = computed(() =>
  coleccionProyectos.find((p) => p.categoria === categoria.value && p.slug === slug.value)
)

function volver() {
  router.push({ name: "coleccion", params: { categoria: categoria.value } })
}
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between gap-3">
      <h1 class="text-2xl font-semibold">{{ item?.titulo ?? "No encontrado" }}</h1>

      <Button variant="ghost" @click="volver">
        <ArrowLeft class="mr-2 h-4 w-4" />
        Volver
      </Button>
    </div>

    <p class="opacity-80">{{ item?.descripcion }}</p>
  </div>
</template>