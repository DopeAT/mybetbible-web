import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import { type IBookieApi } from '~/types'

interface State {
  bookie: IBookieApi | null
}

export const useBookiesStore = defineStore('bookiesStore', {
  state: (): State => ({
    bookie: null
  }),
  getters: {
    getBookie: (state: State): IBookieApi | null => state.bookie
  },
  actions: {
    async fetchBookie(bookie: string) {
      const res = await useNuxtApp().$api.bookies.fetchBookie(bookie)

      if (res.error) {
        console.log({ err: res.error })
      }

      this.bookie = res.data
    }
  }
})
