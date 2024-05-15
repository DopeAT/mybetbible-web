<script setup lang="ts">
import type { PropType } from 'vue'
import type { IBookieApi } from '~/types'

defineProps({
  bookie: {
    type: Object as PropType<IBookieApi>,
    required: true
  }
})
</script>

<template>
  <div class="rating-card">
    <div class="card-header-image text-center">
      <img
        :src="`/80/${bookie.slug}.png`"
        class="rounded-full"
        :alt="`${bookie.name} logo image`"
      />
    </div>
    <div class="card-body bg=[#f6f6f6]">
      <!----><!---->
      <div class="card-overview">
        <!----><!---->
        <h4 class="card-title font-semibold mb-1 text-2xl">
          {{ bookie.name }} Overall Rating

          <nuxt-rating read-only :ratingValue="4.5" />
        </h4>
        <hr />
        <div class="container mt-3">
          <div class="row">
            <div class="col-sm-6">
              <label class="text-lg font-semibold capitalize">bonus offers</label>
              <div class="star-rating mb-3">
                <nuxt-rating read-only :ratingValue="4.5" />
              </div>
            </div>
            <div class="col-sm-6">
              <label class="text-lg font-semibold capitalize">customer services</label>
              <div class="star-rating mb-3">
                <nuxt-rating read-only :ratingValue="4.5" />
              </div>
            </div>
            <div class="col-sm-6">
              <label class="text-lg font-semibold capitalize">betting odds</label>
              <div class="star-rating mb-3">
                <nuxt-rating read-only :ratingValue="4.5" />
              </div>
            </div>
            <div class="col-sm-6">
              <label class="text-lg font-semibold capitalize">experience</label>
              <div class="star-rating mb-3">
                <nuxt-rating read-only :ratingValue="4.5" />
              </div>
            </div>
            <div class="col-sm-6">
              <label class="text-lg font-semibold capitalize">payment options</label>
              <div class="star-rating mb-3">
                <nuxt-rating read-only :ratingValue="4.5" />
              </div>
            </div>
            <div class="col-sm-6">
              <label class="text-lg font-semibold capitalize">live betting</label>
              <div class="star-rating mb-3">
                <nuxt-rating read-only :ratingValue="4.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rating-card {
  .card-header-image {
    width: 100px;
    height: 100px;
    background-color: #fff;
    margin: 0 auto -50px;
    padding: 0;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);

    img {
      padding: 0;
      margin: auto;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: absolute;
    }
  }

  .card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;

    .card-overview {
      text-align: center;
      padding: 60px 30px 20px;
    }
  }

  .average-rating {
    justify-content: center;
  }
}
</style>
