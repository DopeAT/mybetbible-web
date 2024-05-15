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
      <h1 class="font-semibold text-3xl mb-3">Best Online Casinos Slots Bonus Offers</h1>
      <p class="mb-3">
        If you're passionate about online slots and looking to maximize your gaming experience,
        you're in the right place. At mybetbible, we bring you the best slots bonus offers, free
        spins, and promotions from top UK online casinos. Whether you're a seasoned slots enthusiast
        or new to online gaming, our platform is the go-to resource for finding valuable slot
        bonuses and enhancing your chances of winning big.
      </p>
      <p class="mb-3">
        <strong>
          Enter the online slots world by claiming the best available Casino Slot Bonus Offers.
        </strong>
      </p>

      <MbbBonusTable :data="casinoOffers" />
    </div>

    <hr class="my-5 divide-y-5" />

    <div>
      <div>
        <h3 class="text-2xl font-medium my-5">What Are Slots Bonus Offers?</h3>
        <p class="mb-5">
          Slots bonus offers are promotions designed to attract and retain online casino players.
          These bonuses can come in various forms, such as free spins, deposit matches, and cashback
          offers, providing extra playing funds or additional spins on popular slot games. By taking
          advantage of these offers, you can explore new slots, enjoy more spins, and increase your
          chances of hitting a jackpot.
        </p>
      </div>

      <div>
        <h3 class="text-2xl font-medium my-5">Types of Slots Bonus Offers</h3>
        <p class="mb-5">
          At mybetbible, we curate the best slots bonus offers available in the UK. Here are some of
          the most common types of slots bonuses you can find on our platform:
        </p>

        <ul class="list-decimal pl-5">
          <li class="mb-3">
            <strong>Free Spins</strong>
            <p>
              Free spins are one of the most popular types of slots bonus offers. They allow you to
              play slot games without using your own money, providing a risk-free way to explore new
              games and win real cash prizes. Free spins are often offered as part of welcome
              bonuses or ongoing promotions, making them a valuable addition to your gaming
              experience.
            </p>
          </li>
          <li class="mb-3">
            <strong>Deposit Match Bonuses</strong>
            <p>
              Deposit match bonuses reward you with extra funds based on your initial deposit. A
              100% deposit match bonus, for example, will double your playing funds, giving you more
              to spend on slot games. This type of bonus is an excellent way to boost your bankroll
              and increase your chances of winning.
            </p>
          </li>
          <li class="mb-3">
            <strong>No-Deposit Bonuses</strong>
            <p>
              No-deposit bonuses offer players a small amount of bonus credit or free spins without
              requiring a deposit. This is a great way to try out an online casino and its slot
              games without any financial risk. No-deposit bonuses are ideal for new players looking
              to test the waters.
            </p>
          </li>
          <li class="mb-3">
            <strong>Cashback Offers</strong>
            <p>
              Cashback offers provide a percentage of your losses back as bonus credit or cash.
              These bonuses can be especially beneficial during a losing streak, helping to offset
              some of the losses and encouraging continued play. Cashback offers are a great way to
              maintain a healthy bankroll while enjoying slot games.
            </p>
          </li>
          <li class="mb-3">
            <strong>Loyalty Rewards</strong>
            <p>
              Loyalty rewards are designed to retain existing players by offering ongoing benefits.
              As you play slot games, you earn points or rewards that can be redeemed for bonus
              credit, free spins, or other perks. Loyalty rewards are a great way to encourage
              continued play and reward loyal customers.
            </p>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-medium my-5">How to Choose the Best Slots Bonus Offers</h3>
        <p class="mb-5">
          Choosing the best slots bonus offers requires careful consideration of your gaming style
          and preferences. Here are some tips to help you select the most valuable slots bonuses:
        </p>

        <ul class="pl-8 list-disc">
          <li class="mb-2">
            <strong>Read the Terms and Conditions:</strong> Always read the terms and conditions
            before claiming any slots bonus. Look for wagering requirements, eligible games, and
            other restrictions.
          </li>
          <li class="mb-2">
            <strong>Evaluate the Bonus Value:</strong> Consider the bonus amount, deposit match
            percentage, and other benefits. Choose bonuses that offer the most value for your
            playing style.
          </li>
          <li class="mb-2">
            <strong>Check for Ongoing Promotions:</strong> Look for online casinos that offer
            ongoing promotions, such as free spins and cashback offers. This ensures you continue to
            receive benefits as you play.
          </li>
          <li class="mb-2">
            <strong>Choose Reputable Online Casinos:</strong> Select online casinos that are
            licensed and regulated by reputable authorities. This ensures a safe and fair gaming
            environment.
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-medium my-5">Find the Best Slots Bonus Offers at mybetbible</h3>
        <p class="mb-2">
          At mybetbible, we make it easy to find the best slots bonus offers in the UK. Our platform
          provides a comprehensive guide to the latest slots promotions, free spins, and exclusive
          deals from top online casinos. With our expert reviews and comparisons, you can choose the
          slots bonuses that offer the most value and excitement for your online gaming experience.
        </p>
        <p class="mb-5">
          Visit our site to explore the latest slots bonus offers and start maximizing your online
          slot gaming today. We're dedicated to providing the most up-to-date information and
          helping you make informed decisions. Whether you enjoy classic slots, video slots, or
          progressive jackpots, we've got you covered with the best slots bonuses in the UK.
        </p>
      </div>
    </div>
  </div>
</template>
