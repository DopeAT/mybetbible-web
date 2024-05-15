<script setup lang="ts">
import MbbRatingCard from '~/components/bookies/MbbRatingCard.vue'
import { useBookiesStore } from '~/stores/bookies'
import { useRoute } from '#app'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'
import { useOffersStore } from '~/stores/offers'
import { useTrackingStore } from '~/stores/tracking'
import { type IBookieApi } from '~/types'

const route = useRoute()
const offersStore = useOffersStore()
const bookiesStore = useBookiesStore()
const { trackClick } = useTrackingStore()

const bookie = computed<Required<IBookieApi>>(() => bookiesStore.getBookie)
const allOffers = computed(() => offersStore.getAllOffersByCount(10))

const breadcrumbs = computed(() => {
  const breadcrumbs = [
    {
      title: 'Home',
      disabled: false,
      href: '/'
    }
  ]

  if (!bookie.value) return breadcrumbs

  breadcrumbs.push(
    {
      title: bookie.value?.categories[0].name!,
      disabled: false,
      href: `/${bookie.value?.categories[0].slug!}-bonus-offers`
    },
    {
      title: bookie.value?.name,
      disabled: true,
      href: `/review/${bookie.value!.slug}`
    }
  )

  return breadcrumbs
})

const track = async (
  element: string,
  booker:
    | IBookieApi
    | Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'> = bookie.value
) => {
  if (!bookie.value) return

  await trackClick({
    bookie_id: booker.id,
    page: 'landing-id-view',
    client: 'mybetbible',
    element
  })

  window.open(booker.url, '_blank').focus()
}

useServerSeoMeta({
  title: () => bookie.value?.seo?.title ?? '',
  ogTitle: () => bookie.value?.seo?.title ?? '',
  description: () => bookie.value?.seo?.description ?? '',
  ogDescription: () => bookie.value?.seo?.description ?? ''
})

useAsyncData(async () => {
  if (!route.params.id) return

  await bookiesStore.fetchBookie(route.params.id as string)
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
      <div class="mt-5 row" v-if="bookie">
        <div class="col-sm-8">
          <h1 class="font-semibold text-2xl">
            {{ bookie.name }} Welcome Bonus, Bonus Offers and Reviews
          </h1>

          <div class="welcome-box text-center mt-5">
            <div class="welcome-bonus-fist hero-dark-background">
              <span
                @click="track('welcome bonus title')"
                :title="`${bookie.name} Welcome Bonus`"
                class="text-[#777] cursor-pointer hover:underline"
              >
                {{ bookie.name }} Welcome Bonus
              </span>
              <h2 class="my-2 font-semibold text-3xl">{{ bookie.bonuses[0].title }}</h2>
              <p class="terms">New customer offer. T&amp;Cs apply.</p>
              <div class="mt-3">
                <button
                  @click="track('Header cta')"
                  class="bg-green hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-xl"
                >
                  Claim Bonus
                </button>
              </div>
              <div class="small mt-3">
                <span
                  @click="track('Header bottom link')"
                  class="text-[#777] underline cursor-pointer"
                >
                  Visit {{ bookie.name }} website
                </span>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <MbbRatingCard :bookie="bookie" />
          </div>

          <div class="mt-4 promotions" v-if="bookie.body">
            <h2 class="font-semibold text-xl border-green border-b">{{ bookie.name }} Overview</h2>

            <div class="my-5">
              <div class="mb-5" v-html="bookie.body"></div>

              <a
                :href="bookie.url"
                target="_blank"
                class="font-bold underline"
                :class="`color-${bookie.slug}`"
              >
                Open an account now
              </a>
            </div>
          </div>

          <div class="mt-4 promotions">
            <h2 class="font-semibold text-xl border-green border-b">{{ bookie.name }} Offers</h2>

            <div
              class="offer-promo my-5"
              v-for="(offer, idx) in bookie.offers"
              :key="`offer-${idx}`"
            >
              <h3 class="text-xl mb-3 font-semibold">
                <font-awesome-icon icon="fa-solid fa-caret-right" class="text-green mr-1" />

                {{ offer.name }}
              </h3>

              <p class="text-muted mb-4" v-if="offer.description">{{ offer.description }}</p>

              <div v-if="offer.body" v-html="offer.body"></div>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <h2 class="font-semibold text-2xl mb-2 max-sm:text-center">
            {{ bookie.name }} Bonus Offers
          </h2>
          <div class="side-offers">
            <div
              class="bg-white rounded p-3 mb-5 shadow-lg"
              v-for="(bonus, idx) in bookie.bonuses"
              :key="`bonus-${idx}`"
            >
              <h6 class="font-semibold border-bottom-green border-b pb-2">
                {{ bonus.name }}
              </h6>

              <div class="title-link mt-3">
                <span
                  :title="bonus.title"
                  class="text-blue-700 font-semibold hover:underline cursor-pointer"
                  @click="track('Welcome bonus card title')"
                >
                  {{ bonus.title }}
                </span>
              </div>

              <div class="bonus-description my-4">
                <div v-html="bonus.body" />
              </div>

              <button
                type="button"
                @click="track('Welcome bonus card cta')"
                class="bg-green hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl w-full"
              >
                Claim Now
              </button>
            </div>
          </div>

          <template v-if="bookie.features.length">
            <h2 class="font-semibold text-2xl mb-3 max-sm:text-center">
              {{ bookie.name }} Features
            </h2>
            <div class="side-offers">
              <div class="bg-white rounded p-3 mb-5 shadow-lg">
                <ul class="check-type-list list-unstyled px-3">
                  <li
                    v-for="feature in bookie.features"
                    :key="feature.name"
                    class="font-semibold mb-2"
                  >
                    <font-awesome-icon icon="fa-solid fa-check" class="text-green mr-3" />

                    {{ feature.name }}
                  </li>
                </ul>
              </div>
            </div>
          </template>

          <h2 class="font-semibold text-2xl mb-2 max-sm:text-center">Free bets</h2>
          <div class="bg-white shadow-2xl">
            <MbbBonusCard
              v-for="(bookie, idx) in allOffers"
              :bookie="bookie"
              :key="`offer-card-${idx}`"
              @onClick="track('Sidebar bonus card', bookie)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.welcome-box {
  .welcome-bonus-fist {
    padding: 25px 10px;
    color: #fff;

    .terms {
      font-size: 10px;
      color: #8f8f8f;
      line-height: 14px;
      margin-top: 10px;
    }
  }
}

:deep(.bonus-description) {
  p {
    margin-bottom: 10px;
  }

  ul {
    padding-inline-start: 15px;

    li {
      &:before {
        content: ' \25B6';
        color: #14805e;
        border-color: #14805e;
        margin-right: 5px;
      }

      margin-bottom: 10px;
      font-size: 0.9rem;
    }
  }
}

:deep(.offer-promo) {
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 40px;
    unicode-bidi: isolate;

    li {
      font-size: 15px;
      color: #6c757d !important;
    }
  }

  figure.table {
    width: 100%;
  }

  table {
    border-collapse: collapse;
    border-spacing: 2px;
    border-color: gray;
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;

    thead tr {
      background-color: rgba(0, 0, 0, 0.05);
    }

    tr {
      &:hover {
        color: #212529;
        background-color: rgba(0, 0, 0, 0.075);
      }

      &:nth-of-type(even) {
        background-color: rgba(0, 0, 0, 0.05);
      }

      th {
        text-align: left;
      }
    }
  }
}
</style>
