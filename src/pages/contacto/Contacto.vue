<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, X, Instagram, Linkedin, MessageCircle} from 'lucide-vue-next'
</script>

<template>
      <div class="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 ">
        <form  class="space-y-6 bg-white p-8 rounded-lg shadow-lg aspect-square">
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
            <Input id="email" required />

          </div>

          <div class="space-y-2">
            <Label>Escribeme para mas informacion!</Label>
           <Textarea placeholder="Escribe tu mensaje aqui" />

          </div>

          <div class="space-y-2">
            <Popover>
                  <PopoverTrigger asChild>
                  
                      
                  </PopoverTrigger>
                  <PopoverContent>
                  
                  </PopoverContent>
            </Popover>

          </div>

         <Button
         type="submit"
         class="w-full bg-[rgb(106,90,205)] hover:bg-[rgb(88,75,171)] text-white text-md mt-4"
         >
          Enviar 

         </Button>
              
        </form>
    </div>

    

<footer class="w-full bg-gray-900 text-gray-300 py-12">
   <div class="flex flex-col md:flex-row md:justify-around gap-8 max-w-3xl mx-auto">

    <div class="space-y-4 text-center md:text-left">

      <h3 class="text-xl font-bold text-white">Información de Contacto</h3>
            
        <div class="space-y-2">
          <p class="flex items-center gap-2 justify-center md:justify-start">
            <Phone class="w-5 h-5"/>
            +1 (555) 123-4567

          </p>
          <p class="flex items-center gap-2 justify-center md:justify-start">
            <Mail class="w-5 h-5"/>
            batman@wayneenterprises.com

          </p>
          <p class="flex items-center gap-2 justify-center md:justify-start">
            <MapPin class="w-5 h-5"/>
            Wayne Manor, Gotham City

          </p>
        </div>
      </div>

      <!-- Redes sociales -->
      <div class="space-y-4 text-center md:text-left text-gray-400">
        <h3 class="text-xl font-bold text-white">Síguenos</h3>
        <div class="flex gap-8 justify-center">
        
         <X class="w-10 h-10 hover:text-white"/>
         <Instagram class="w-10 h-10 hover:text-white"/>
         <Linkedin class="w-10 h-10 hover:text-white"/>
         <MessageCircle class="w-10 h-10 hover:text-white"/>
              
        </div>
    </div>
  </div>
  </footer>



</template>

<style scoped>

</style>