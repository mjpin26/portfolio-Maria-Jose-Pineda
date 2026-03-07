<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card"
import { router } from "@/router"

</script>



<template>
    <div class="flex flex-col items-center justify-center gap-8 w-full my-8 mx-auto">
    <div class="text-center">
      <h1 class="font-bold text-2xl lg:text-5xl mb-3">Proyectos</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[1100px]">
      <!-- DISEÑO -->
      <Card
        class="cursor-pointer hover:bg-gray-900/5 transition"
      >
        <CardContent
          class="p-6 flex flex-col items-center text-center gap-2"
          @click="router.push('/proyectos/diseño')"
        >
          <div class="w-full h-70 rounded-md bg-gray-200"></div>
          <h2 class="font-semibold text-xl">Diseño</h2>
          <p class="text-sm text-gray-600">Branding & editorial</p>
        </CardContent>
      </Card>

      <!-- ILUSTRACIÓN -->
      <Card class="cursor-pointer hover:bg-gray-900/5 transition">
        <CardContent
          class="p-6 flex flex-col items-center text-center gap-2"
          @click="router.push('/proyectos/ilustracion')"
        >
          <div class="w-full h-70 rounded-md bg-gray-200"></div>
          <h2 class="font-semibold text-xl">Ilustración</h2>
          <p class="text-sm text-gray-600">Arte digital & tradicional</p>
        </CardContent>
      </Card>

      <!-- AUDIOVISUALES -->
      <Card class="cursor-pointer hover:bg-gray-900/5 transition">
        <CardContent
          class="p-6 flex flex-col items-center text-center gap-2"
          @click="router.push('/proyectos/audiovisuales')"
        >
          <div class="w-full h-70 rounded-md bg-gray-200"></div>
          <h2 class="font-semibold text-xl">Medios audiovisuales</h2>
          <p class="text-sm text-gray-600">Fotografías & Cortometrajes.</p>
        </CardContent>
      </Card>
    </div>
  </div>



</template>

<style scoped>

</style>