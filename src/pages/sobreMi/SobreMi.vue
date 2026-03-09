<script setup lang="ts">


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SobreMi } from "@/data/composables/SobreMi";

const { seccionActiva, secciones, seccionSeleccionada, setSeccion } = SobreMi()
</script>

<template>
  
  <section class="w-full max-w-[1400px] mx-auto px-4 py-10 space-y-10">

    <div class="flex flex-col items-center justify-center gap-8 w-full my-8 mx-auto">
    <div class="text-center">
      <h1 class="font-bold text-4xl lg:text-5xl mb-3">¡Hola, mucho gusto!</h1>
    </div>
    </div>
    
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      
      <div class="flex justify-center lg:justify-start">
        <img
          src="/imagenes/proyectos/Ilustracion/dibujos/dibujo01.jpg"
          alt="Foto de perfil"
          class="w-[600px] h-[400px] md:w-[260px] md:h-[260px] lg:w-[420px] lg:h-[440px] rounded-2xl object-cover"
        />
      </div>

      <div class="space-y-3">
        <p class="text-sm md:text-base leading-relaxed opacity-90">
          Me llamo <b>María José Pineda</b> y soy estudiante de Diseño y Tecnologías Creativas en la UPV. 
          Desde pequeña he sido alguien creativa, curiosa e imaginativa, y siempre soñé con dedicarme a una rama artística. 
          <br>
          <br>Hoy en día estoy enfocada en formarme profesionalmente como diseñadora en los ámbitos del <b>diseño gráfico</b> y en el <b>diseño de experiencia de usuario (UX)</b>,
         buscando crear diseños tanto creativos como funcionales. Me considero como una persona trabajadora, responsable, detallista e innovadora, que está lista para asumir nuevos retos que me permitan crecer tanto personal como profesionalmente.
        </p>
      </div>
    </div>

    <div class="flex flex-col items-center gap-6">
      <div class="flex flex-wrap justify-center gap-4">
        <Button
          v-for="s in secciones"
          :key="s.key"
          class="rounded-full bg-[#ad4fc0] hover:bg-[#b681c1] hover:text-white"
          :variant="seccionActiva === s.key ? 'default' : 'secondary'"
          @click="setSeccion(s.key)"
        >
          {{ s.titulo }}
        </Button>
      </div>

      <Card class="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>{{ seccionSeleccionada?.titulo }}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul class="list-disc pl-5 space-y-2 text-sm md:text-base opacity-90">
            <li v-for="(item, idx) in seccionSeleccionada?.contenido" :key="idx">
              {{ item }}
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </section>
</template>

<style scoped>

</style>