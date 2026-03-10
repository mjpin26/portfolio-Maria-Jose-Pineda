<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { Mail, Instagram, Linkedin, MapPin } from "lucide-vue-next"
</script>

<template>
  <section class="w-full py-12 bg-white">
    <div class="mx-auto max-w-5xl px-4">
      <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 text-center">
        ¿Tienes alguna duda?
      </h2>

      <form class="flex flex-col lg:flex-row gap-8 items-stretch">
       
        <div
          class="w-full lg:w-1/2 bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg space-y-6 lg:space-y-8 lg:min-h-[560px]"
        >
          <div class="space-y-2">
            <Label for="nombre">Nombre</Label>
            <Input id="nombre" required />
          </div>

          <div class="space-y-2">
            <Label for="apellidos">Apellidos</Label>
            <Input id="apellidos" required />
          </div>

          <div class="space-y-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
        </div>

        <div
          class="w-full lg:w-1/2 bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg flex flex-col lg:min-h-[560px]"
        >
          <div class="space-y-2 flex-1">
            <Label for="mensaje">¡Escríbeme para saber más sobre ti!</Label>

            <Textarea
              id="mensaje"
              placeholder="Escribe tu mensaje aquí"
              class="min-h-[360px] lg:min-h-[420px]"
              required
            />
          </div>

          <div class="mt-6 flex justify-end">
            <Button
              type="submit"
              class="rounded-full w-auto bg-[rgb(106,90,205)] hover:bg-[rgb(88,75,171)] text-white px-10"
            >
              Enviar
            </Button>
          </div>
        </div>
      </form>
    </div>
  </section>

 
  <footer
  class="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]
        bg-[#392b58] text-gray-300 py-16 md:py-20 -mb-8"
>
  <div class="flex flex-col md:flex-row md:justify-around gap-8 max-w-3xl mx-auto px-4">
   
    <div class="space-y-4 text-center md:text-left">
      <h3 class="text-xl font-bold text-white">Información de contacto</h3>

      <div class="space-y-2">
        <a
          href="mailto:mjpinedav06@gmail.com"
          class="flex items-center gap-2 justify-center md:justify-start hover:text-white transition"
        >
          <Mail class="w-5 h-5" />
          mjpinedav06@gmail.com
        </a>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Valencia%2C%20Spain"
          target="_blank"
          class="flex items-center gap-2 justify-center md:justify-start hover:text-white transition"
        >
          <MapPin class="w-5 h-5" />
          Valencia, España
        </a>
      </div>
    </div>

   
    <div class="space-y-4 text-center md:text-left text-gray-400">
      <h3 class="text-xl font-bold text-white">Sígueme</h3>

      <div class="flex gap-8 justify-center md:justify-start">
        <a
          href="https://instagram.com/maria.pin06"
          target="_blank"
          class="hover:text-white transition"
        >
          <Instagram class="w-10 h-10" />
        </a>

        <a
          href="https://www.linkedin.com/in/mariapin/"
          target="_blank"
          class="hover:text-white transition"
        >
          <Linkedin class="w-10 h-10" />
        </a>
      </div>

      <p class="text-sm text-gray-500">
       <span class="text-gray-300">@maria.pin06</span> · 
        <span class="text-gray-300">mariapin</span>
      </p>
    </div>
  </div>
</footer>
</template>

<style scoped>

</style>