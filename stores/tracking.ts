import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import type { ITrack } from '~/types'

export const useTrackingStore = defineStore('trackingStore', {
  actions: {
    async trackClick(payload: ITrack) {
      const res = await useNuxtApp().$api.tracking.trackClick(payload)

      console.log({ payload })
    }
  }
})
