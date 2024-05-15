import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'

export const useBlogStore = defineStore('blogStore', {
  actions: {
    async fetchArticles() {
      const res = await useNuxtApp().$api.blog.fetchArticles()

      if (res.error) {
        console.log({ err: res.error })
      }

      return res.data
    },
    async fetchCategories() {
      const res = await useNuxtApp().$api.blog.fetchCategories()

      if (res.error) {
        console.log({ err: res.error })
      }

      return res.data
    },
    async fetchLevels() {
      const res = await useNuxtApp().$api.blog.fetchLevels()

      if (res.error) {
        console.log({ err: res.error })
      }

      return res.data
    },
    async findArticle(slug: string) {
      const res = await useNuxtApp().$api.blog.findArticle(slug)

      if (res.error) {
        console.log({ err: res.error })
      }

      return res.data
    },
    async findArticlesByCategory(slug: string) {
      const res = await useNuxtApp().$api.blog.findArticlesByCategory(slug)

      if (res.error) {
        console.log({ err: res.error })
      }

      return res.data
    },
    async findArticlesByLevel(slug: string) {
      const res = await useNuxtApp().$api.blog.findArticlesByLevel(slug)

      if (res.error) {
        console.log({ err: res.error })
      }

      return res.data
    }
  }
})
