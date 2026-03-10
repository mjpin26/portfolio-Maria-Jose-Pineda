<script setup lang="ts">
import { Button } from "@/components/ui/button"
</script>

<template>
  <div class="fixed inset-0 bg-gradient-to-b from-[] via-[#faeeeb] to-[#bdefe5] text-black font-sans">

    <div class="h-full w-full overflow-y-auto">
      <div class="min-h-full flex flex-col justify-center items-center text-center px-4 pt-24 pb-10">
        <h1 class="font-bold leading-tight text-5xl md:text-7xl lg:text-8xl">
          <span class="text-black">María José Pineda</span>
        </h1>

        <p class="mt-4 md:mt-6 text-lg md:text-2xl leading-relaxed">
          ¡Soy estudiante de diseño, es un gusto conocerte!<br />
          En esta página te llevaré a través de un recorrido por mis proyectos.
        </p>

        <div class="mt-8 md:mt-10">
          <Button
            asChild
            class="rounded-full bg-[#e5570b] md:py-5 md:px-6 md:text-lg hover:bg-[rgba(229,66,6,0.83)] transition-all"
          >
            <RouterLink to="/sobreMi">¡Comencemos!</RouterLink>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>