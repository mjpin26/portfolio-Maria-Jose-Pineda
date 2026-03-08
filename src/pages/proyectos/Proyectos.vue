<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card"
import { router } from "@/router"

</script>



<template>
    <div class="flex flex-col items-center justify-center gap-8 w-full my-8 mx-auto">
    <div class="text-center">
      <h1 class="font-bold text-2xl lg:text-5xl mb-3">Proyectos</h1>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-22 w-fit mx-auto justify-center ">
      <!-- DISEÑOOOO -->
      <Card
        class="w-[420px] md:w-[480px] lg:w-[340px] h-[440px] cursor-pointer hover:bg-gray-900/5 transition"
      >
        <CardContent
          class=" pt-2 px-6 pb-4 flex flex-col items-center text-center gap-2"
          @click="router.push('/proyectos/diseño')"
        >
        <img
              src="/imagenes/proyectos/Diseño/Extracon/tarjeta02.jpg"
              alt="Diseño"
              class="w-full h-70 rounded-md  object-cover"
            />
          <h2 class="font-semibold text-xl mt-4">Diseño</h2>
          <p class="text-sm  text-gray-600">Branding & editorial</p>
        </CardContent>
      </Card>

      <!-- ILUSTRACIÓN JEJEJE -->
      <Card class="w-[420px] md:w-[480px] lg:w-[340px] h-[440px] cursor-pointer hover:bg-gray-900/5 transition">
        <CardContent
          class=" pt-2 px-6 pb-4 flex flex-col items-center text-center gap-2"
          @click="router.push('/proyectos/ilustracion')"
        >
        <img
              src="/imagenes/proyectos/Ilustracion/novela/book01.jpg"
              alt="Diseño"
              class="w-full h-70 rounded-md object-cover"
            />
          <h2 class="font-semibold text-xl mt-4">Ilustración</h2>
          <p class="text-sm text-gray-600">Arte digital & tradicional</p>
        </CardContent>
      </Card>

      <!-- AUDIOVISUALES EW -->
      <Card class="w-[420px] md:w-[480px] lg:w-[340px] h-[440px] cursor-pointer hover:bg-gray-900/5 transition">
        <CardContent
          class=" pt-2 px-6 pb-4 flex flex-col items-center text-center gap-2"
          @click="router.push('/proyectos/audiovisuales')"
        >
          <img
              src="/imagenes/proyectos/Mediosaudiovisuales/Diario/diario01.jpg"
              alt="Diseño"
              class="w-full h-70 rounded-md object-cover"
            />
          <h2 class="font-semibold text-xl mt-4">Medios audiovisuales</h2>
          <p class="text-sm text-gray-600">Fotografías & Cortometrajes.</p>
        </CardContent>
      </Card>
    </div>
  </div>



</template>

<style scoped>

</style>