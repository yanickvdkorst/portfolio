import { createRouter, createWebHistory, RouteRecordRaw, } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../modules/pages/PageLayout.vue"),
    props: true,
  },
  { path: "/project/:slug",
    name: "ProjectDetail",
    component: () => import("../modules/projects/ProjectDetail.vue")
   },
   {
    path: "/:slug",  // Zorg ervoor dat de slug dynamisch is
    name: "PageDetail",
    component: () => import("../modules/pages/PageLayout.vue"),
    props: true,  // Hiermee geef je de 'slug' door als een prop aan het component
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router