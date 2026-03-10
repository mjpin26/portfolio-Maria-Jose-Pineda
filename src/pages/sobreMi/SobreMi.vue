<script setup lang="ts">
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Globe, Heart, Sparkles } from "lucide-vue-next"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SobreMi } from "@/data/composables/SobreMi"
import { ChevronDown } from "lucide-vue-next"

const { secciones } = SobreMi()
</script>

<template>
  <section class="sobre-mi w-full max-w-[1400px] mx-auto px-4 py-10 space-y-10">
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
          loading="lazy"
        />
      </div>

      <div class="space-y-3">
        <p class="text-sm md:text-base leading-relaxed opacity-90">
          Me llamo <b>María José Pineda</b> y soy estudiante de Diseño y Tecnologías Creativas en la UPV.
          Desde pequeña he sido alguien creativa, curiosa e imaginativa, y siempre soñé con dedicarme a una rama artística.
          <br /><br />
          Hoy en día estoy enfocada en formarme profesionalmente como diseñadora en los ámbitos del <b>diseño gráfico</b> y en el
          <b>diseño de experiencia de usuario (UX)</b>, buscando crear diseños tanto creativos como funcionales. Me considero como una
          persona trabajadora, responsable, detallista e innovadora, que está lista para asumir nuevos retos que me permitan crecer
          tanto personal como profesionalmente.
        </p>

        <div class="flex flex-wrap gap-3 pt-2">
  <HoverCard :open-delay="120">
    <HoverCardTrigger as-child>
      <Button
        variant="secondary"
        class="pill-info rounded-full px-5"
      >
        <Globe class="h-4 w-4 mr-2" />
        Nacionalidad
      </Button>
    </HoverCardTrigger>
    <HoverCardContent class="hc-content w-40 ">
      <p class="text-sm leading-relaxed opacity-90 text-center">
        Hondureña
      </p>
    </HoverCardContent>
  </HoverCard>

  <HoverCard :open-delay="120">
    <HoverCardTrigger as-child>
      <Button
        variant="secondary"
        class="pill-info rounded-full px-5"
      >
        <Heart class="h-4 w-4 mr-2" />
        Hobbies
      </Button>
    </HoverCardTrigger>
    <HoverCardContent class="hc-content w-50">
      <ul class="text-sm list-disc pl-5 space-y-1 opacity-90">
        <li>Cocinar</li>
        <li> Ver K-dramas</li>
        <li>Hacer manualidades</li>
      </ul>
    </HoverCardContent>
  </HoverCard>

  <HoverCard :open-delay="100">
    <HoverCardTrigger as-child>
      <Button
        variant="secondary"
        class="pill-info rounded-full px-5"
      >
        <Sparkles class="h-4 w-4 mr-2" />
        Deseos
      </Button>
    </HoverCardTrigger>
    <HoverCardContent class="hc-content w-65">
      <p class="text-sm leading-relaxed opacity-90 text-center">
        ¡Me gustaría viajar por el mundo!
      </p>
    </HoverCardContent>
  </HoverCard>
</div>
      </div>

      
    </div>

    <div class="flex justify-center">
      <div class="w-full max-w-3xl">
        <Accordion type="multiple" collapsible class="space-y-3 backdrop-blur-xl">
          <AccordionItem
            v-for="s in secciones"
            :key="s.key"
            :value="s.key"
            class="accordion-item rounded-2xl border"
          >
            <AccordionTrigger class="accordion-trigger px-4 py-4 text-left">
              <div class="flex items-center justify-between w-full">
                <span class="font-semibold">{{ s.titulo }}</span>
                <ChevronDown class="mi-chevron h-5 w-5 opacity-70 transition-transform duration-200" />
              </div>
              </AccordionTrigger>

         <AccordionContent class="px-4 pb-5">
          <div v-if="s.programas?.length" class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-2 items-start">
            <ul class="list-disc pl-5 space-y-2 text-sm md:text-base opacity-90">
              <li v-for="(item, idx) in s.contenido" :key="idx">
                {{ item }}
              </li>
            </ul>

            <div class="grid grid-cols-2 gap-2 justify-items-start">
              <img
                v-for="(p, i) in s.programas.slice(0, 4)"
                :key="i"
                :src="p.icono"
                class="w-10 h-10 md:w-11 md:h-11"
              />
            </div>
          </div>

          <ul v-else class="list-disc pl-5 space-y-2 text-sm md:text-base opacity-90">
            <li v-for="(item, idx) in s.contenido" :key="idx">
              {{ item }}
            </li>
          </ul>
</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sobre-mi :deep(.accordion-trigger > svg) {
  display: none;
}

.sobre-mi :deep([data-state="open"] .mi-chevron) {
  transform: rotate(180deg);
}
.accordion-item {
  border-color: #cfcacaae;
  border-width: 2px;
}

.accordion-item:hover {
  border-color: #f96f25f0;
  border-width: 2px;
}
.pill-info {
  transition: transform 200ms ease, box-shadow 200ms ease;

}

.pill-info:hover {
  color: white;
  transform: translateY(-1px);
  background: #f96f25f0;
  
}

.hc-content {
  border-radius: 16px;
}
</style>