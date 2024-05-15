<script setup lang="ts">
import type { PropType } from 'vue'
import { useRoute } from '#app'
import type { IBookieApi } from '~/types'
import { useTrackingStore } from '~/stores/tracking'

const route = useRoute()
const { trackClick } = useTrackingStore()

defineProps({
  headers: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => ['Betting site', 'Bonus', 'Claim bonus']
  },
  data: {
    type: Array as PropType<any>,
    required: true
  }
})

const track = async (bookie: IBookieApi) => {
  await trackClick({
    bookie_id: bookie.id,
    page: route.fullPath,
    client: 'mybetbible',
    element: 'offer-table'
  })

  window.open(bookie.url, '_blank').focus()
}
</script>

<template>
  <div class="bonus-table container">
    <div class="bonus-header hidden sm:flex">
      <div v-for="header in headers" :key="header" class="font-semibold">
        {{ header }}
      </div>
    </div>
    <div
      class="bookies-bonus sm:flex flex-row flex-wrap max-sm:text-center"
      v-for="(bookie, idx) in data"
      :key="`bookie-offer-${idx}`"
    >
      <div class="text-center">
        <img
          :src="`http://localhost:1337${bookie.logo.url}`"
          class="sm:w-full sm:h-auto mx-auto"
          :alt="`${bookie.name} logo image`"
        />
        <div class="max-sm:hidden">
          <nuxt-link :to="`/review/${bookie.slug}`" class="text-xs underline">
            See review
          </nuxt-link>
        </div>
      </div>
      <div>
        <div class="font-semibold max-sm:my-5 text-green text-xl">
          {{ bookie.bonuses[0].title }}
        </div>
      </div>
      <div>
        <div class="max-sm:mb-5">
          <button
            type="button"
            @click="track(bookie)"
            class="bg-green hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl w-full"
          >
            Claim Bonus
          </button>
        </div>
        <div class="text-center">
          <nuxt-link :to="`/review/${bookie.slug}`" class="text-sm underline">
            See details
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bonus-header {
  justify-content: space-between;
  align-items: center;
  background: #d6d6d6;
  padding: 20px 40px;
  border-top-left-radius: 5px;
  border-top-right-radius: 4px;
  margin: 0;
}

.bookies-bonus {
  background: #ffffff;
  border-radius: 10px;
  padding: 20px 30px;
  margin: 5px 0;
  justify-content: space-between;
  align-items: center;
}
</style>
