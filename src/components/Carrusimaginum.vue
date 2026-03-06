<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from 'embla-carousel-autoplay'

const props = withDefaults(
  defineProps<{
    photos: string[]
    basePath: string
    extension?: string

    autoPlayDelay?: number
    loop?: boolean
    dragFree?: boolean
  }>(),
  {
    extension: "jpg",
    autoPlayDelay: 4000,
    loop: true,
    dragFree: true,
  }
)
</script>

<template>
  <Carousel
    class="relative overflow-visible w-full max-w-md md:max-w-2xl lg:max-w-4xl px-10 md:px-12"
    :opts="{ loop: props.loop, dragFree: props.dragFree }"
    :plugins="[Autoplay({ delay: props.autoPlayDelay })]"
  >
    <CarouselContent>
      <CarouselItem v-for="(photo, i) in props.photos" :key="i">
        <div class="p-1">
         
          <div
            class="w-full h-[420px] md:h-[520px] flex items-center justify-center overflow-hidden rounded-md"
          >
            <img
              :src="`${props.basePath}/${photo}.${props.extension}`"
              :alt="`Imagen ${i + 1}`"
              class="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </CarouselItem>
    </CarouselContent>

   
    <CarouselPrevious class="bg-gray-900 text-white h-9 w-9 md:h-10 md:w-10 left-2 md:-left-12" />
    <CarouselNext class="bg-gray-900 text-white h-9 w-9 md:h-10 md:w-10 right-2 md:-right-12" />
  </Carousel>
</template>

<style scoped>

</style>