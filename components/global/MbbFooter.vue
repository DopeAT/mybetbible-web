<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <footer class="bg-green pt-12 pb-8">
    <div class="container mx-auto px-3 max-w-screen-xl">
      <div class="row">
        <div class="col-md-3 col-6">
          <ul class="text-white list-none">
            <li class="p-sm-0 p-1">
              <nuxt-link to="/sports-bonus-offers" class="hover:underline">
                Sport Bonus Offers
              </nuxt-link>
            </li>
            <li class="p-sm-0 p-1">
              <nuxt-link to="/betting-sites-uk" class="hover:underline">Betting Sites UK</nuxt-link>
            </li>
            <li class="p-sm-0 p-1">
              <nuxt-link to="/casino-bonus-offers" class="hover:underline">Casino Offers</nuxt-link>
            </li>
            <li class="p-sm-0 p-1">
              <nuxt-link to="/free-bets" class="hover:underline">Free Bets</nuxt-link>
            </li>
            <li class="p-sm-0 p-1">
              <nuxt-link to="/poker-bonus-offers" class="hover:underline">Poker Offers</nuxt-link>
            </li>
            <li class="p-sm-0 p-1">
              <nuxt-link to="/casino-bonus-offers" class="hover:underline">Slots</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <ul class="text-white list-none">
            <li class="p-sm-0 p-1">
              <nuxt-link to="/privacy" class="hover:underline">Privacy</nuxt-link>
            </li>
            <li class="p-sm-0 p-1">
              <nuxt-link to="/terms-of-use" class="hover:underline">Terms of Use</nuxt-link>
            </li>
            <li class="p-sm-0 p-1">
              <nuxt-link to="/cookies-policy" class="hover:underline">Cookies</nuxt-link>
            </li>
            <li class="p-sm-0 p-1">
              <a to="/sitemap.xml" class="hover:underline"> Sitemap </a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 max-sm:mt-12">
          <div class="flex justify-around items-center">
            <img title="Over 18 age - logo" src="/footer_18.png" alt="Over 18 age - logo" />
            <img
              title="Interactive game council logo"
              src="/footer_igc.png"
              alt="Interactive game council logo"
            />
            <img title="GemCare" src="/footer_gamcare.png" alt="GemCare" />
          </div>

          <div class="mt-5">
            <img
              title="beGambleAware"
              src="/gambleaware.png"
              alt="beGambleAware"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="col-md-3 text-center max-sm:my-8">
          <div class="text-white text-lg mb-5 max-sm:text-xl">Follow us</div>
          <div class="flex justify-center items-center">
            <a
              href="https://www.facebook.com/Mybetbible-178342054278713"
              target="_blank"
              title="Facebook"
              class="follow-icon"
            >
              <font-awesome-icon size="lg" icon="fab fa-facebook-f" class="mr-3 text-white" />
            </a>
            <a
              href="https://www.facebook.com/Mybetbible-178342054278713"
              target="_blank"
              title="Facebook"
              class="follow-icon"
            >
              <font-awesome-icon size="xl" icon="fab fa-twitter" class="mr-3 text-white" />
            </a>
            <a
              href="https://www.facebook.com/Mybetbible-178342054278713"
              target="_blank"
              title="Facebook"
              class="follow-icon"
            >
              <font-awesome-icon size="xl" icon="fab fa-instagram" class="text-white" />
            </a>
          </div>
        </div>
      </div>

      <div class="w-full mt-5">
        <p class="text-center text-white">
          Copyright © 2019 - 2024 | Mybetbible All Right Reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
