<script setup lang="ts">
import { Button } from "@/components/ui/button"
</script>

<template>
  <div class="min-h-screen flex flex-col">

    
    <header class="fixed top-0 left-0 right-0 bg-transparent">
      <<nav class="w-full px-4 py-3 flex gap-2 justify-start">

        <Button asChild variant="ghost">
          <RouterLink
            to="/"
            class="rounded-md px-3 py-2 transition"
            active-class="bg-black/10"
            exact-active-class="bg-black/10"
          > Home </RouterLink>
        </Button>

        <Button asChild variant="ghost">
          <RouterLink
            to="/sobreMi"
            class="rounded-md px-3 py-2 transition"
            active-class="bg-black/10"
          >SobreMi</RouterLink>
        </Button>

        <Button asChild variant="ghost">
          <RouterLink
            to="/proyectos"
            class="rounded-md px-3 py-2 transition"
            active-class="bg-black/10"
          > Proyectos </RouterLink>
        </Button>

        <Button asChild variant="ghost">
          <RouterLink
            to="/contacto"
            class="rounded-md px-3 py-2 transition"
            active-class="bg-black/10"
          > Contacto </RouterLink>
        </Button>

      </nav>
    </header>

    <main class="mx-auto max-w-5xl w-full px-4 flex-1 py-8">
      <RouterView />
    </main>
  </div>
</template>