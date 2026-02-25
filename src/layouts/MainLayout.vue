<script setup lang="ts">
import { Button } from "@/components/ui/button"
</script>



<template>
    <div class="min-h-screen flex flex-col">
    <header class="border-b">
      <nav class="mx-auto max-w-5xl px-4 py-3 flex gap-2">
        <Button asChild variant="ghost">
            <RouterLink to="/">Home</RouterLink>
        </Button>
        <Button asChild variant="ghost">
            <RouterLink to="/sobreMi">SobreMi</RouterLink>
        </Button>
        <Button asChild variant="ghost">
            <RouterLink to="/proyectos">Proyectos</RouterLink>
        </Button>
        <Button asChild variant="ghost">
            <RouterLink to="/contacto">Contacto</RouterLink>
        </Button>
      </nav>
    </header>

    <main class="mx-auto max-w-5xl w-full px-4 py-8 flex-1">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>