import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./assets/css/reset.css";
import "./assets/css/app.scss"


createApp(App).use(router).use(createPinia()).mount('#app')
