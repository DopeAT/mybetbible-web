<script setup lang="ts">
import { nav } from '~/constants'
import { useNav } from '~/composables/useNav'

const { toggleNav } = useNav()
</script>

<template>
  <header>
    <nav class="fixed z-50 w-full border-bottom-green bg-white">
      <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div
          class="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4"
        >
          <div class="relative z-20 items-center flex w-full justify-between md:px-0 lg:w-max">
            <MbbLogo />

            <div class="relative flex max-h-10 items-center lg:hidden" @click="toggleNav">
              <button aria-label="humburger" id="hamburger" class="-mr-6 p-6">
                <div aria-hidden="true" id="line" class="h-0.5 w-5 bg-black"></div>
                <div aria-hidden="true" id="line2" class="mt-2 h-0.5 w-5 bg-black"></div>
                <div aria-hidden="true" id="line2" class="mt-2 h-0.5 w-5 bg-black"></div>
              </button>
            </div>
          </div>

          <div id="navlinks" class="max-lg:hidden flex-col flex-wrap justify-end p-8 lg:p-0">
            <div class="w-full lg:w-auto lg:pr-4 lg:pt-0">
              <ul
                class="flex flex-col gap-6 lg:flex-row lg:gap-0 lg:text-md text-white font-normal items-center"
              >
                <li v-for="(item, idx) in nav" :key="idx">
                  <nuxt-link :to="item.href" class="block md:px-4 text-black">
                    <span>{{ item.title }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
