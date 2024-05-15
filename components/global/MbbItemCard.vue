<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },
  text: {
    type: String,
    required: false,
    default: ''
  }
})
</script>

<template>
  <div
    class="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl hover:cursor-pointer min-h-40"
  >
    <div class="px-4 py-5">
      <div class="font-bold text-green text-lg mb-2">{{ title }}</div>
      <p class="text-gray-700 text-sm">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
