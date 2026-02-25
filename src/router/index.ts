import { createRouter, createWebHashHistory } from "vue-router"

import MainLayout from "@/layouts/MainLayout.vue"
import Home from "@/pages/home/Home.vue"
import SobreMi from "@/pages/sobreMi/SobreMi.vue"
import Proyectos from "@/pages/proyectos/Proyectos.vue"
import Contacto from "@/pages/contacto/Contacto.vue"

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        { path: "", 
          name: "home", 
          component: Home 
        },
        { path: "sobreMi",
          name: "sobreMi", 
          component: SobreMi 
        },
        { path: "proyectos", 
          name: "proyectos", 
          component: Proyectos 
        }, 
        { path: "contacto", 
          name: "contacto", 
          component: Contacto },
      ],
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
})