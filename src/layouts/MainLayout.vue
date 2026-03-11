<script setup lang="ts">
import { Button } from "@/components/ui/button"
</script>

<template>
  
 <div class="min-h-screen flex flex-col bg-gradient-to-b from-[] via-[#f9eeeb] to-[#bdefe5] text-black">

    
    <header class="fixed top-0 left-0 right-0 z-50 bg-[#fcfaf9ef]">
      <nav class="w-full px-4 py-3 flex gap-2 justify-start">
        
        <Button asChild variant="ghost"class="!rounded-full" >
          <RouterLink
            to="/"
            class="rounded-md px-3 py-2 transition"
           active-class="bg-black/10"
            exact-active-class="bg-black/10"
          > Home </RouterLink>
        </Button>

        <Button asChild variant="ghost"class="!rounded-full">
          <RouterLink
            to="/sobreMi"
            class="rounded-md px-3 py-2 transition"
            active-class="bg-black/10"
          >Sobre Mi</RouterLink>
        </Button>

        <Button asChild variant="ghost"class="!rounded-full">
          <RouterLink
            to="/proyectos"
           class="rounded-md px-3 py-2 transition"
            active-class="bg-black/10"
          > Proyectos </RouterLink>
        </Button>

        <Button asChild variant="ghost"class="!rounded-full">
          <RouterLink
            to="/contacto"
            class="rounded-md px-3 py-2 transition"
            active-class="bg-black/10"
          > Contacto </RouterLink>
        </Button>

      </nav>
    </header>

    <main class="mx-auto max-w-5xl w-full px-4 flex-1 pt-16 pb-0">
      
      <RouterView />
    </main>
  </div>
</template>