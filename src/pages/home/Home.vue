<script setup lang="ts">
import { Button } from "@/components/ui/button"
</script>

<template>
  <div class="fixed inset-0  bg-[rgb(21,25,52)] text-white font-sans overflow-hidden">
    <div class="h-full w-full flex flex-col justify-center items-center gap-12 text-center px-4">
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold pb-5 md:pb-20 z-10 transition-all">
       
       
       
        <br />
         <span class="md:text-8xl text-[rgb(251,254,255)]">María José Pineda</span>
      </h1>
      <p class="text-lg md:text-2xl -mt-24 transition-all z-10">
        ¡Soy estudiante de diseño y tecnologías creativas, es un gusto concerte!<br />
        En esta página te llevaré por un recorrido por mis proyectos.
      </p>

      <div class="z-10">
        <Button
          asChild
          class="bg-[rgb(24,182,246)] md:py-5  md:px-6 md:text-lg hover:bg-[rgba(24,182,246,0.7)] transition-all"
        >
          <RouterLink to="/sobreMi">¡Comencemos!</RouterLink>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>