<script setup lang="ts">
import { ref, computed } from 'vue'
import { IArticleApi } from '~/types'
import { useRoute } from '#app'
import { useBlogStore } from '~/stores/blog'
import { useOffersStore } from '~/stores/offers'

const route = useRoute()
const blogStore = useBlogStore()
const offersStore = useOffersStore()

const article = ref<IArticleApi>({} as IArticleApi)

const allOffers = computed(() => offersStore.getAllOffersByCount(10))
const breadcrumbs = computed(() => {
  const breadcrumbs = [
    {
      title: 'Home',
      disabled: false,
      href: '/'
    },
    {
      title: 'Blog',
      disabled: false,
      href: '/blog'
    }
  ]

  if (!article.value.id) return breadcrumbs

  breadcrumbs.push({
    title: article.value!.title,
    disabled: true,
    href: `/${article.value!.slug}`
  })

  return breadcrumbs
})

useServerSeoMeta({
  title: () => article.value?.meta_title ?? '',
  ogTitle: () => article.value?.meta_title ?? '',
  description: () => article.value?.meta_desc ?? '',
  ogDescription: () => article.value?.meta_desc ?? ''
})

useAsyncData(async () => {
  if (!route.params.id) return

  article.value = await blogStore.findArticle(route.params.id as string)
})

onMounted(async () => {
  await offersStore.fetchAllCategories()
})
</script>

<template>
  <div>
    <nav aria-label="breadcrumb" class="bg-[#e9ecef] w-full">
      <ol class="flex flex-wrap items-center w-full px-4 py-2 bg-blue-gray-50 bg-opacity-60">
        <li
          v-for="(item, idx) in breadcrumbs"
          :key="idx"
          class="flex items-center font-semibold text-sm transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500"
        >
          <nuxt-link
            :to="item.href"
            class="opacity-60"
            active-class="text-black"
            :class="{ 'text-blue-700 hover:underline': idx < breadcrumbs.length - 1 }"
          >
            {{ item.title }}
          </nuxt-link>
          <span
            v-if="idx < breadcrumbs.length - 1"
            class="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500"
          >
            /
          </span>
        </li>
      </ol>
    </nav>

    <div class="container-sm">
      <div class="mt-5 row" v-if="article">
        <div class="col-sm-8">
          <h1 class="font-semibold text-2xl">
            {{ article.title }}
          </h1>
        </div>

        <div class="col-sm-4"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
