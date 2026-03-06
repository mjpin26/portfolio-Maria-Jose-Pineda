
<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"

interface Props {
  imagenes: string[]
}

const props = defineProps<Props>()
</script>

<template>
  <Carousel class="relative overflow-visible w-full max-w-md md:max-w-2xl lg:max-w-4xl px-10 md:px-12">
    <CarouselContent>
      <CarouselItem v-for="(img, i) in props.imagenes" :key="i">
        <Card class="border-none">
          <CardContent class="flex aspect-[3/2] items-center justify-center p-0">
            <img
              :src="img"
              :alt="`Imagen ${i + 1}`"
              class="h-full w-full object-cover rounded-md"
              loading="lazy"
            />
          </CardContent>
        </Card>
      </CarouselItem>
    </CarouselContent>

    <CarouselPrevious class="bg-gray-900 text-white hidden md:flex justify-center items-center" />
<CarouselNext class="bg-gray-900 text-white hidden md:flex justify-center items-center" />
  </Carousel>
</template>

<style scoped>

</style>