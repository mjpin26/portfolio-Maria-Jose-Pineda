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

    <div v-if="!esIndice" class="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]
             flex justify-end
              px-4 -mb-2 z-10">
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