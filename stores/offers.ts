import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import { ECategories, type IBookieApi } from '~/types'
import { uniqBy } from 'lodash-es'

interface State {
  sport: Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>[]
  casino: Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>[]
  poker: Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>[]
}

export const useOffersStore = defineStore('offersStore', {
  state: (): State => ({
    sport: [],
    casino: [],
    poker: []
  }),
  getters: {
    getSportOffers: (state: State) => {
      return state.sport
    },
    getCasinoOffers: (state: State) => {
      return state.casino
    },
    getPokerOffers: (state: State) => {
      return state.poker
    },
    getAllOffers: (state: State) => {
      return [...state.sport, ...state.casino, ...state.poker]
    },
    getAllOffersByCount:
      (state: State) =>
      (n: number = 5) => {
        const shuffleOffers = uniqBy(
          [...state.sport, ...state.casino, ...state.poker],
          'name'
        ).sort(() => 0.5 - Math.random())

        return shuffleOffers.slice(0, n)
      }
  },
  actions: {
    async fetchAllCategories() {
      await this.fetchSport()
      await this.fetchCasino()
      await this.fetchPoker()
    },
    async fetchSport() {
      const res = await useNuxtApp().$api.categories.fetchByCategory(ECategories.SPORTS)

      if (res.error) {
        console.log({ err: res.error })
        return
      }

      this.sport = res.data.bookies.filter((b) => b.bonuses.length > 0)
    },
    async fetchCasino() {
      const res = await useNuxtApp().$api.categories.fetchByCategory(ECategories.CASINO)

      if (res.error) {
        console.log({ err: res.error })
        return
      }

      this.casino = res.data.bookies.filter((b) => b.bonuses.length > 0)
    },
    async fetchPoker() {
      const res = await useNuxtApp().$api.categories.fetchByCategory(ECategories.POKER)

      if (res.error) {
        console.log({ err: res.error })
        return
      }

      this.poker = res.data.bookies.filter((b) => b.bonuses.length > 0)
    }
  }
})
