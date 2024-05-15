<script setup lang="ts">
import { onBeforeMount, computed } from 'vue'
import { useOffersStore } from '~/stores/offers'
import MbbBonusTable from '~/components/ui/MbbBonusTable.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import MbbItemCard from '~/components/global/MbbItemCard.vue'
import { useBlogStore } from '~/stores/blog'

const offersStore = useOffersStore()
const blogStore = useBlogStore()

const guideArticles = useState('guide-articles', () => {})
const levelArticles = useState('level-articles', () => {})

const sportsOffers = computed(() => offersStore.getSportOffers)
const casinoOffers = computed(() => offersStore.getCasinoOffers)
const pokerOffers = computed(() => offersStore.getPokerOffers)

useAsyncData(async () => await offersStore.fetchSport())
useAsyncData(async () => await offersStore.fetchCasino())
useAsyncData(async () => await offersStore.fetchPoker())
useAsyncData(async () => await offersStore.fetchPoker())

useAsyncData(async () => (guideArticles.value = await blogStore.findArticlesByCategory('guide')))
useAsyncData(async () => (levelArticles.value = await blogStore.findArticlesByLevel('bettor')))
</script>

<template>
  <div>
    <div class="">
      <h1 class="font-semibold text-2xl mb-3">Best betting sites &amp; Bet Bonus Offers 2024</h1>
      <p class="mb-3">
        Welcome to MyBetBible.co.uk, your one-stop destination for the latest sports betting tips,
        bookmaker reviews, betting guides, and exclusive bonuses. Whether you're a seasoned punter
        or a newcomer, our expert insights and comprehensive resources are designed to help you
        maximize your betting potential.
      </p>

      <p class="mb-3">
        It has never been easier to find the best sport bonus offers available .We searched and
        found for you the best bonus offers.
      </p>
      <p class="mb-3">
        You can save time by browsing from site to site, and giving a list with the best available
        bonus offers in the market.
      </p>
      <p class="mb-3">
        It's really simple. Just click <b>Claim Bonus</b> and <b>create an account</b> to access
        <b>free bets and welcome bonus offers</b>.
      </p>
      <p class="mb-3">
        <strong>Find the best Bonus Offers that suits you now!</strong>
      </p>

      <MbbBonusTable :data="sportsOffers" />

      <div class="mt-3 font-semibold w-full text-right">
        <nuxt-link to="/sports-bonus-offers" class="text-blue-500 underline">
          Show more sport bonus offer <font-awesome-icon icon="fa-solid fa-caret-right" />
        </nuxt-link>
      </div>
    </div>

    <hr class="my-5 divide-y-5" />

    <div class="">
      <h1 class="font-semibold text-2xl mb-3">Best Casino Bonus Offers 2024</h1>
      <p class="mb-3">
        Casino bonus offers and free slots are an easy way for players to get an extra edge. There
        are all sorts of bonuses out there, some good, some not so good.
      </p>
      <p class="mb-3">
        <b>The best bonus is the one that the player is going to use and enjoy.</b>
      </p>
      <p class="mb-3">
        That's why we created a list of bonuses from reputable casinos, so you know you're getting a
        great deal.
      </p>
      <p class="mb-3">
        <strong>You can choose from our list and claim your casino bonus.</strong>
      </p>

      <MbbBonusTable :headers="['Casino', 'Bonus', 'Claim bonus']" :data="casinoOffers" />

      <div class="mt-3 font-semibold w-full text-right">
        <nuxt-link to="/casino-bonus-offers" class="text-blue-500 underline">
          Show more casino bonus offers <font-awesome-icon icon="fa-solid fa-caret-right" />
        </nuxt-link>
      </div>
    </div>

    <hr class="my-5 divide-y-5" />

    <div class="">
      <h1 class="font-semibold text-2xl mb-3">Our top Poker Bonus Offers 2024</h1>
      <p class="mb-3">
        Below you will find the best Poker tables available online. You can claim you free bonus
        offer by simply click on Claim Bonus button and enter the online Poker world.
      </p>

      <MbbBonusTable :headers="['Poker site', 'Bonus', 'Claim bonus']" :data="pokerOffers" />

      <div class="mt-3 font-semibold w-full text-right">
        <nuxt-link to="/poker-bonus-offers" class="text-blue-500 underline">
          Show more poker bonus offers <font-awesome-icon icon="fa-solid fa-caret-right" />
        </nuxt-link>
      </div>
    </div>

    <hr class="my-5 divide-y-5" />

    <div>
      <h3 class="text-3xl font-medium my-5">Sports Betting Guides for Beginners and Experts</h3>
      <p class="mb-5">
        Whether you're just starting or you're a betting veteran, our sports betting guides cover
        everything you need to know to succeed. Learn about different types of bets, odds
        calculation, bankroll management, and advanced betting strategies. Here are some key guides
        you can click and explore:
      </p>

      <div class="row my-3">
        <div class="col-md-3">
          <nuxt-link to="/asd">
            <MbbItemCard
              title="How to Read Betting Odds"
              text="Understand fractional, decimal, and American odds and learn how to calculate your potential winnings."
            />
          </nuxt-link>
        </div>
        <div class="col-md-3">
          <nuxt-link to="/asd">
            <MbbItemCard
              title="Types of Bets in Sports Betting"
              text="Learn about common bet types like moneyline, point spread, over/under, and parlays."
            />
          </nuxt-link>
        </div>
        <div class="col-md-3">
          <nuxt-link to="/asd">
            <MbbItemCard
              title="Bankroll Management Tips"
              text="Discover how to manage your betting funds effectively to avoid big losses and stay in the game."
            />
          </nuxt-link>
        </div>
        <div class="col-md-3">
          <nuxt-link to="/asd">
            <MbbItemCard
              title="Advanced Betting Strategies"
              text="Explore strategies like arbitrage betting, value betting, and hedging to gain an edge over the bookmakers."
            />
          </nuxt-link>
        </div>

        <div class="col-12">
          <div class="text-center my-5">
            <nuxt-link to="/" class="cursor-pointer text-blue-500 underline font-semibold"
              >View all</nuxt-link
            >
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-medium my-5">Understanding Betting Bonuses</h3>
      <p class="mb-5">
        Betting bonuses are promotional offers provided by bookmakers to attract new customers and
        retain existing ones. These bonuses can significantly boost your betting bankroll. Here's
        what you need to know about betting bonuses:
      </p>

      <div class="row my-3">
        <div class="col-sm-4">
          <nuxt-link to="/asd">
            <MbbItemCard
              title="What Is a Betting Bonus?"
              text="A betting bonus is a promotional offer that provides extra funds or benefits when you sign up or place bets with a bookmaker. Common types of bonuses include welcome bonuses, deposit bonuses, and free bets."
            />
          </nuxt-link>
        </div>
        <div class="col-sm-4">
          <nuxt-link to="/asd">
            <MbbItemCard
              title="How to Use Betting Bonuses"
              text="Learn how to claim and use betting bonuses effectively. We provide step-by-step guides on activating bonuses, meeting wagering requirements, and maximizing your returns."
            />
          </nuxt-link>
        </div>
        <div class="col-sm-4">
          <nuxt-link to="/asd">
            <MbbItemCard
              title="Terms and Conditions of Betting Bonuses"
              text="Always read the terms and conditions to understand the requirements for each bonus. Our guides help you navigate the fine print and avoid common pitfalls."
            />
          </nuxt-link>
        </div>
      </div>

      <h3 class="text-2xl font-medium my-5">Exclusive Betting Bonuses and Promotions</h3>
      <p class="mb-5">
        At MyBetBible.co.uk, we partner with top UK bookmakers to bring you exclusive betting
        bonuses and promotions. Check out our latest offers to find the best deals and take
        advantage of special promotions:
      </p>

      <ul class="list-inside list-disc">
        <li class="mb-3">
          <nuxt-link to="/sports-bonus-offers" class="text-green underline"
            >Football Welcome Bonuses for New Players:</nuxt-link
          >
          Get extra funds to start your betting journey with our exclusive welcome bonuses.
        </li>
        <li class="mb-3">
          <nuxt-link to="/free-bets" class="text-green underline">Bonuses and Free Bets:</nuxt-link>
          Find out which bookmakers offer additional funds when you make a deposit or place specific
          bets.
        </li>
        <li class="mb-3">
          <nuxt-link to="/casino-bonus-offers" class="text-green underline"
            >Casino Bonuses and Special Promotions:</nuxt-link
          >
          Stay updated with our latest casino bonuses, cashback offers, and special promotions for
          existing players.
        </li>
        <li class="mb-3">
          <nuxt-link to="/poker-bonus-offers" class="text-green underline">
            Poker Bonuses and Promotions:</nuxt-link
          >
          Stay updated with our latest poker bonuses, tournament tables, and special promotions for
          existing and new players.
        </li>
      </ul>
    </div>

    <hr class="my-5 divide-y-5" />

    <div class="flex align-middle justify-center mb-5">
      <div class="md:max-w-2xl">
        <p>
          Subscribe to our newsletter for regular updates on the latest sports betting news,
          exclusive bonuses, and expert betting tips. Don't miss out on special offers and important
          betting insights.
        </p>

        <p class="my-5"><b>Sign up today to stay ahead in the betting world!</b></p>

        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Enter your email address
          </label>
          <div class="relative">
            <input
              type="email"
              class="block p-4 pl-10 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue focus:border-blue"
              placeholder="Enter your email address"
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
