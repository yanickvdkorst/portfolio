<template>
  <Analytics />
  <header :class="{ scrolled: isScrolled }">

    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="navigation-inner">
            <!-- Dynamisch navigatie menu vanuit de API voor header -->
            <router-link v-for="item in headerMenuItems" :key="item.id" class="menu-item" :to="item.url">
              {{ item.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>

  <router-view />

  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <h3 class="menu-title">Yanick<br>van der Korst</h3>
          <div class="footer-inner">
            <p class="contactgegevens">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17" fill="none">
                <path
                  d="M2.24633 16.3244C1.73141 16.3244 1.30181 16.1523 0.957534 15.808C0.613258 15.4638 0.440748 15.0338 0.440002 14.5181V2.48188C0.440002 1.96696 0.612513 1.53736 0.957534 1.19308C1.30255 0.848808 1.73178 0.676298 2.24521 0.675552H18.7548C19.269 0.675552 19.6982 0.848063 20.0425 1.19308C20.3867 1.5381 20.5593 1.9677 20.56 2.48188V14.5192C20.56 15.0334 20.3875 15.463 20.0425 15.808C19.6975 16.153 19.2682 16.3252 18.7548 16.3244H2.24633ZM10.5 8.62966L1.55778 2.78256V14.5192C1.55778 14.7197 1.62224 14.8844 1.75116 15.0133C1.88007 15.1422 2.04513 15.2067 2.24633 15.2067H18.7548C18.9552 15.2067 19.1199 15.1422 19.2488 15.0133C19.3778 14.8844 19.4422 14.7193 19.4422 14.5181V2.78145L10.5 8.62966ZM10.5 7.38222L19.0979 1.79333H1.90206L10.5 7.38222ZM1.55778 2.78256V1.79333V14.5192C1.55778 14.7197 1.62224 14.8844 1.75116 15.0133C1.88007 15.1422 2.04513 15.2067 2.24633 15.2067H1.55778V2.78256Z"
                  fill="white" />
              </svg>
              <a class="link" href="mailto:yanick.van.der.korst@kpnmail.nl">yanick.van.der.korst@kpnmail.nl</a>
            </p>
            <p class="contactgegevens">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path
                  d="M19.65 3.44971H4.35C3.99196 3.44971 3.64858 3.59194 3.39541 3.84511C3.14223 4.09829 3 4.44166 3 4.79971V20.0997C3 20.4577 3.14223 20.8011 3.39541 21.0543C3.64858 21.3075 3.99196 21.4497 4.35 21.4497H19.65C20.008 21.4497 20.3514 21.3075 20.6046 21.0543C20.8578 20.8011 21 20.4577 21 20.0997V4.79971C21 4.44166 20.8578 4.09829 20.6046 3.84511C20.3514 3.59194 20.008 3.44971 19.65 3.44971ZM8.4 18.7497H5.7V10.6497H8.4V18.7497ZM7.05 9.07471C6.74056 9.06586 6.4406 8.96603 6.18758 8.78768C5.93456 8.60932 5.7397 8.36036 5.62737 8.0719C5.51503 7.78345 5.49019 7.46828 5.55595 7.16578C5.6217 6.86328 5.77515 6.58687 5.9971 6.37108C6.21906 6.15529 6.49968 6.0097 6.80391 5.95248C7.10814 5.89527 7.42248 5.92898 7.70766 6.04939C7.99284 6.16981 8.23622 6.3716 8.40737 6.62954C8.57853 6.88748 8.66987 7.19015 8.67 7.49971C8.66289 7.92302 8.4885 8.32631 8.18495 8.62144C7.88139 8.91656 7.47335 9.07952 7.05 9.07471ZM18.3 18.7497H15.6V14.4837C15.6 13.2057 15.06 12.7467 14.358 12.7467C14.1522 12.7604 13.9511 12.8146 13.7663 12.9063C13.5815 12.9979 13.4166 13.1252 13.2811 13.2807C13.1457 13.4363 13.0422 13.6171 12.9768 13.8127C12.9114 14.0083 12.8853 14.215 12.9 14.4207C12.8955 14.4626 12.8955 14.5048 12.9 14.5467V18.7497H10.2V10.6497H12.81V11.8197C13.0733 11.4192 13.435 11.093 13.8605 10.8724C14.286 10.6518 14.761 10.5441 15.24 10.5597C16.635 10.5597 18.264 11.3337 18.264 13.8537L18.3 18.7497Z"
                  fill="white" style="fill:white;fill-opacity:1;" />
              </svg>
              <a class="link" href="https://www.linkedin.com/in/yanickvdk">Yanickvdk</a>
            </p>
          </div>
        </div>

        <!-- Dynamisch navigatie menu voor footer -->
        <div class="col-lg-3">
          <h3 class="menu-title">Snel naar</h3>
          <div class="footer-inner">
            <router-link v-for="item in footerMenuItems" :key="item.id" class="menu-item link" :to="item.url">
              {{ item.title }}
            </router-link>
          </div>
        </div>

        <div class="col-lg-4">
          <p>
            Bij enige vragen of interesse, twijfel niet om me een mailtje te sturen. Geen stage plek beschikbaar of
            interessant voor toekomstige projecten? Volg me gerust op LinkedIn!
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'
import { Analytics } from '@vercel/analytics/vue';

// Typing voor de menu-items
interface MenuItem {
  id: number;
  title: string;
  url: string;
}

const headerMenuItems = ref<MenuItem[]>([])
const footerMenuItems = ref<MenuItem[]>([])

onMounted(async () => {
  const response = await axios.get('http://localhost:1337/api/menus?populate=*')
  headerMenuItems.value = response.data.data[0].MenuItem // Zet de opgehaalde menu-items in de `headerMenuItems` array
  footerMenuItems.value = response.data.data[1].MenuItem // Zet de opgehaalde footer menu-items in de `footerMenuItems` array
})

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50 // Verander 50 naar de gewenste drempelwaarde
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss">
/* Voeg hier je styling toe */
</style>