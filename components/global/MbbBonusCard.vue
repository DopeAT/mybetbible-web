<script setup lang="ts">
import type { PropType } from 'vue'
import type { IBookieApi } from '~/types'

defineEmits(['onClick'])

defineProps({
  bookie: {
    type: Object as PropType<
      Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>
    >,
    required: true
  }
})
</script>

<template>
  <div class="my-1 p-3 border-b-2 border-[rga(0,0,0,0.1)]">
    <div>
      <img
        :src="`/80/${bookie.slug}.png`"
        :alt="`${bookie.name} logo image`"
        class="cursor-pointer mx-auto"
      />
    </div>
    <div class="text-center">
      <p class="font-semibold mb-3">{{ bookie.bonuses[0].title }}</p>
      <button
        type="button"
        @click="$emit('onClick')"
        class="bg-green hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl w-full"
      >
        Claim Bonus
      </button>
    </div>
  </div>
</template>
