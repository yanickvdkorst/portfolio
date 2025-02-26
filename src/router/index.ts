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
    path: "/projecten",
    name: "Projecten",
    component: () => import("../modules/pages/ProjectPage.vue")
  },
  {
    path: "/demo",
    name: "demo",
    component: () => import("../modules/pages/DemoPage.vue")
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