import { createRouter, createWebHistory, RouteRecordRaw, } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../modules/pages/HomePage.vue")
  },
  {
    path: "/about",
    name: "Over mij",
    component: () => import("../modules/pages/AboutMe.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router