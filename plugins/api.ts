import { defineNuxtPlugin } from '#app'
import { BlogApi, BookiesApi, CategoriesApi, TrackingApi } from '~/services'
import { type FetchOptions, $fetch } from 'ofetch'

interface Api {
  blog: BlogApi
  bookies: BookiesApi
  tracking: TrackingApi
  categories: CategoriesApi
}

declare module '#app' {
  interface NuxtApp {
    $api: Api
  }
}

export default defineNuxtPlugin(() => {
  const fetchOptions: FetchOptions = {
    baseURL: (import.meta as any).env.VITE_APP_STRAPI_URL + '/api'
  }

  const apiFetcher = $fetch.create(fetchOptions)

  const api: Api = {
    blog: new BlogApi(apiFetcher),
    bookies: new BookiesApi(apiFetcher),
    tracking: new TrackingApi(apiFetcher),
    categories: new CategoriesApi(apiFetcher)
  }

  return {
    provide: {
      api: api
    }
  }
})
