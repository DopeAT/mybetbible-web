<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import MbbBonusTable from '~/components/ui/MbbBonusTable.vue'
import { useOffersStore } from '~/stores/offers'

const offersStore = useOffersStore()

const casinoOffers = computed(() => {
  const casinos = offersStore.getCasinoOffers

  return casinos.filter((casino) => {
    return casino.bonuses.length
  })
})

onBeforeMount(() => {
  offersStore.fetchCasino()
})
</script>

<template>
  <div>
    <div class="">
      <h1 class="font-semibold text-3xl mb-3">
        Casino Bonus Offers: Discover the Best Casino Promotions and Deals
      </h1>
      <p class="mb-3">
        Are you on the lookout for the best casino bonus offers to boost your online gaming
        experience? At My Bet Bible, we've got you covered with a comprehensive guide to the latest
        casino bonuses, promotions, and exclusive deals. Whether you're a seasoned online casino
        player or just starting, our platform is the ultimate resource for finding the most valuable
        casino bonuses and maximizing your winnings.
      </p>
      <p class="mb-3">
        <strong>Find and claim from our list your casino bonus.</strong>
      </p>

      <MbbBonusTable :data="casinoOffers" />
    </div>

    <hr class="my-5 divide-y-5" />

    <div>
      <div>
        <h3 class="text-2xl font-medium my-5">Why Casino Bonus Offers Are Important</h3>
        <p class="mb-5">
          Casino bonus offers are an excellent way to enhance your online gaming experience and
          increase your chances of winning. These bonuses come in various forms, such as welcome
          bonuses, no-deposit bonuses, free spins, and reload bonuses, giving you extra funds or
          spins to enjoy your favorite casino games. By taking advantage of these promotions, you
          can explore new games, play for longer, and potentially win more.
        </p>
      </div>

      <div>
        <h3 class="text-2xl font-medium my-5">Types of Casino Bonus Offers</h3>
        <p class="mb-5">
          At mybetbible, we bring you a curated selection of the best casino bonus offers in the UK.
          Here are some common types of casino bonuses you can find on our platform:
        </p>

        <ul class="list-decimal pl-5">
          <li class="mb-3">
            <strong>Welcome Bonuses</strong>
            <p>
              Welcome bonuses are designed to attract new players to an online casino. These bonuses
              often include a deposit match, free spins, or both. For example, a 100% deposit match
              bonus on your first deposit can double your playing funds, giving you more
              opportunities to win.
            </p>
          </li>
          <li class="mb-3">
            <strong>No-Deposit Bonuses</strong>
            <p>
              No-deposit bonuses are a popular choice among players because they offer a chance to
              play without making a deposit. Upon signing up, you'll receive a small bonus or free
              spins to try out the casino's games. This is a great way to test the waters before
              committing your own money.
            </p>
          </li>
          <li class="mb-3">
            <strong>Free Spins</strong>
            <p>
              Free spins are commonly offered as part of a welcome bonus or special promotion. These
              spins can be used on specific slot games, allowing you to play without risking your
              own money. Free spins are an excellent way to explore new slot games and potentially
              win real money.
            </p>
          </li>
          <li class="mb-3">
            <strong>Reload Bonuses</strong>
            <p>
              Reload bonuses are aimed at existing players who make additional deposits after their
              initial sign-up. These bonuses work similarly to welcome bonuses, offering a deposit
              match or free spins to encourage continued play. They are a fantastic way to keep your
              bankroll topped up.
            </p>
          </li>
          <li class="mb-3">
            <strong>Cashback Offers</strong>
            <p>
              Cashback offers provide a percentage of your losses back as bonus credit or cash.
              These promotions can help soften the impact of losing streaks and encourage players to
              continue playing. Cashback bonuses are especially beneficial for high rollers or
              frequent players.
            </p>
          </li>
          <li class="mb-3">
            <strong>Loyalty Programs</strong>
            <p>
              Loyalty programs reward players for their ongoing activity at an online casino. As you
              play and wager, you earn points or rewards that can be redeemed for bonus credit, free
              spins, or other perks. These programs are designed to retain players and offer
              long-term benefits.
            </p>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-medium my-5">How to Choose the Best Casino Bonus Offers</h3>
        <p class="mb-5">
          Choosing the best casino bonus offers requires careful consideration. Here are some tips
          for selecting the most valuable bonuses:
        </p>

        <ul class="pl-8 list-disc">
          <li class="mb-2">
            <strong>Read the Terms and Conditions:</strong> Always read the fine print before
            claiming any bonus. Look for wagering requirements, time limits, and any restrictions on
            eligible games or withdrawals.
          </li>
          <li class="mb-2">
            <strong>Consider the Bonus Value:</strong> Evaluate the bonus amount, deposit match
            percentage, and any additional benefits. Choose bonuses that offer the most value for
            your playing style.
          </li>
          <li class="mb-2">
            <strong>Check for Ongoing Promotions:</strong> Look for casinos that offer ongoing
            promotions, not just welcome bonuses. This ensures you continue to receive benefits as
            you play.
          </li>
          <li class="mb-2">
            <strong>Choose Reputable Casinos:</strong> Select online casinos that are licensed and
            regulated by reputable authorities. This ensures a safe and fair gaming environment.
          </li>
        </ul>
      </div>

      <div class="mb-5">
        <h3 class="text-2xl font-medium my-5">Find the Best Casino Bonus Offers at mybetbible</h3>
        <p class="mb-2">
          At mybetbible, we make it easy to find the best casino bonus offers in the UK. Our
          platform provides a comprehensive guide to the latest casino promotions, bonuses, and
          exclusive deals from top online casinos. With our expert reviews and comparisons, you can
          choose the bonuses that best suit your gaming preferences and playing style.
        </p>
        <p class="mb-5">
          Visit our site to explore the latest casino bonus offers and start maximizing your online
          casino experience today. We are committed to providing the most up-to-date information and
          helping you make informed decisions. Whether you enjoy slots, table games, or live dealer
          games, we have you covered with the best casino bonuses in the UK.
        </p>
      </div>
    </div>
  </div>
</template>
