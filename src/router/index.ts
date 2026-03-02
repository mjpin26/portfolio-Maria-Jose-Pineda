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
          component: () => import("@/pages/proyectos/Layout.vue"),
          children: [
            {
              path: "",
              name: "proyectos",
              component: () => import("@/pages/proyectos/Proyectos.vue"),
            },
            {
              path: ":categoria(diseño|ilustracion|audiovisuales)",
              name: "coleccion",
              component: () => import("@/pages/proyectos/Coleccion.vue"),
            },
            {
              path: ":categoria(diseño|ilustracion|audiovisuales)/:slug",
              name: "coleccion-detalle",
              component: () => import("@/pages/proyectos/ColeccionDetalle.vue"),
            },
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