<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { Mail, Instagram, X } from "lucide-vue-next"
</script>


      <!-- FALTA COLORES Y TIPOGRAFIA-->

<template>
  <section class="w-full py-12 bg-white">
    <div class="mx-auto max-w-5xl px-4">
      <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 text-center">
        ¿Tienes alguna duda?
      </h2>

      <form class="flex flex-col lg:flex-row gap-8 items-stretch">
        <div class="w-full lg:w-1/2 bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg space-y-6 lg:space-y-8 lg:min-h-[560px]">
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

          <div class="hidden lg:block pt-4 border-t space-y-4">
            <h3 class="text-lg font-semibold text-gray-900">
              Información de contacto
            </h3>

        <div class="space-y-3 text-gray-700">
              <p class="flex items-center gap-2 hover:text-gray-900">
                <Mail class="w-5 h-5" />
                mjpinedav06@gmail.com
              </p>

             <p class="flex items-center gap-2 hover:text-gray-900">
                <X class="w-5 h-5" />
                mjpinedav06@gmail.com
              </p>

         <p class="flex items-center gap-2 hover:text-gray-900">
                <Instagram class="w-5 h-5" />
                mjpinedav06@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg flex flex-col lg:min-h-[560px]">
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

          <div class="lg:hidden mt-8 pt-6 border-t space-y-4">
            <h3 class="text-lg font-semibold text-gray-900">
              Información de contacto
            </h3>

            <div class="space-y-3 text-gray-700">
              <p class="flex items-center gap-2 hover:text-gray-900">
                <Mail class="w-5 h-5" />
                mjpinedav06@gmail.com
              </p>

              <p class="flex items-center gap-2 hover:text-gray-900">
                <X class="w-5 h-5" />
                mjpinedav06@gmail.com
              </p>

              <p class="flex items-center gap-2 hover:text-gray-900">
                <Instagram class="w-5 h-5" />
                mjpinedav06@gmail.com
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>