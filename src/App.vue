<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="navigation-inner">
            <!-- Dynamisch navigatie menu vanuit de API voor header -->
            <router-link v-for="page in pages" :key="page.slug" class="menu-item" :to="`/${page.slug}`">
              {{ page.title }}
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
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <path
                  d="M20.745 3.4425H6.255C5.50972 3.44458 4.79556 3.74157 4.26856 4.26856C3.74157 4.79556 3.44458 5.50972 3.4425 6.255V20.745C3.44458 21.4903 3.74157 22.2045 4.26856 22.7314C4.79556 23.2584 5.50972 23.5554 6.255 23.5575H20.745C21.4909 23.5575 22.2063 23.2612 22.7337 22.7337C23.2612 22.2063 23.5575 21.4909 23.5575 20.745V6.255C23.5575 5.50908 23.2612 4.79371 22.7337 4.26627C22.2063 3.73882 21.4909 3.4425 20.745 3.4425ZM22.4325 20.745C22.4296 21.1916 22.2508 21.6192 21.935 21.935C21.6192 22.2508 21.1916 22.4296 20.745 22.4325H6.255C5.80836 22.4296 5.38085 22.2508 5.06502 21.935C4.74919 21.6192 4.57045 21.1916 4.5675 20.745V6.255C4.57045 5.80836 4.74919 5.38085 5.06502 5.06502C5.38085 4.74919 5.80836 4.57045 6.255 4.5675H20.745C21.1916 4.57045 21.6192 4.74919 21.935 5.06502C22.2508 5.38085 22.4296 5.80836 22.4325 6.255V20.745Z"
                  fill="white" />
              </svg>
              <a class="link" href="">Yanickvdk</a>
            </p>
          </div>
        </div>

        <!-- Dynamisch navigatie menu voor footer -->
        <div class="col-lg-3">
          <h3 class="menu-title">Menu</h3>
          <div class="footer-inner">
            <router-link v-for="page in pages" :key="page.slug" class="menu-item link" :to="`/${page.slug}`">
              {{ page.title }}
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

// Typing voor de pagina's
interface Page {
  id: number;
  slug: string;
  title: string;
}

const pages = ref<Page[]>([])

onMounted(async () => {
  const response = await axios.get('http://localhost:1337/api/pages?populate=*')
  pages.value = response.data.data // Zet de opgehaalde pagina's in de `pages` array
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
