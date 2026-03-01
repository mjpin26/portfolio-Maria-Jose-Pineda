import { createRouter, createWebHashHistory } from "vue-router"

import MainLayout from "@/layouts/MainLayout.vue"
import Home from "@/pages/home/Home.vue"
import SobreMi from "@/pages/sobreMi/SobreMi.vue"
import Proyectos from "@/pages/proyectos/Proyectos.vue"
import Contacto from "@/pages/contacto/Contacto.vue"


import ProyectosLayout from "@/pages/proyectos/Layout.vue"
import Diseño from "@/pages/proyectos/diseño/Diseño.vue"
import Ilustracion from "@/pages/proyectos/ilustracion/Ilustracion.vue"
import Audiovisuales from "@/pages/proyectos/audiovisuales/Audiovisuales.vue"

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
        {
          path: "proyectos",
          component: ProyectosLayout,
          children: [
            { path: "", 
              name: "proyectos", 
              component: Proyectos },
            { path: "diseño", 
              name: "proyectos-diseño", 
              component: Diseño },
            { path: "ilustracion", 
              name: "proyectos-ilustracion", 
              component: Ilustracion },
            { path: "audiovisuales", 
              name: "proyectos-audiovisuales", 
              component: Audiovisuales },
          ],
        }, 
        { path: "contacto", 
          name: "contacto", 
          component: Contacto },
      ],
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
})