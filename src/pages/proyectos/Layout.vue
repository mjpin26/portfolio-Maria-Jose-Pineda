<script setup lang="ts">
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { Button } from "@/components/ui/button"

const route = useRoute()
const router = useRouter()

const esIndice = computed(() => route.name === "proyectos")

function exit() {
  router.push("/proyectos")
}
</script>

<template>
  <div class="w-full">

    <div v-if="!esIndice" class="w-full flex justify-end mb-6 relative z-20">
      <Button
        class="bg-[#6d31ee] hover:bg-[#b88bff] transition-colors"
        @click="exit"
      >
        Exit
      </Button>
    </div>

    <RouterView />
  </div>
</template>