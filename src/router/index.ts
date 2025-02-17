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
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../modules/pages/ContactPage.vue")
  },
  {
    path: "/work",
    name: "Work",
    component: () => import("../modules/pages/MyWork.vue")
  },
  {
    path: "/demo",
    name: "demo",
    component: () => import("../modules/pages/DemoPage.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router