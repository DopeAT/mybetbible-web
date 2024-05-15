<script setup lang="ts">
import { useNav } from '~/composables/useNav'
import MbbHeader from '~/components/global/MbbHeader.vue'
import MbbFooter from '~/components/global/MbbFooter.vue'
import { nav } from '~/constants'

const { showMobileNav, toggleNav } = useNav()
</script>

<template>
  <div :class="{ 'overflow-hidden': !!showMobileNav }">
    <div class="relative">
      <MbbHeader />

      <div class="container mx-auto pt-28 px-3 max-w-screen-xl">
        <slot />
      </div>

      <div v-if="showMobileNav" class="lg:hidden mobile-nav absolute top-0 bottom-0">
        <div class="w-full lg:w-auto lg:pr-4 lg:pt-0">
          <ul class="flex flex-col gap-6 lg:flex-row lg:gap-0 lg:text-md items-center">
            <li v-for="(item, idx) in nav" :key="idx" @click="toggleNav">
              <nuxt-link :to="item.href" class="block px-12">
                <span>{{ item.title }}</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <MbbFooter />
    </div>
  </div>
</template>
