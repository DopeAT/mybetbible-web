<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import MbbBonusTable from '~/components/ui/MbbBonusTable.vue'
import { useOffersStore } from '~/stores/offers'

const offersStore = useOffersStore()

const sportsOffers = computed(() => offersStore.getSportOffers)

onBeforeMount(() => {
  offersStore.fetchSport()
})
</script>

<template>
  <div>
    <div class="">
      <h1 class="font-semibold text-3xl mb-3">Sports Bonus Offers</h1>
      <p class="mb-3">
        Are you looking for the best sports bonus offers to boost your online betting experience? At
        mybetbible, we provide a comprehensive guide to the latest sports bonuses, promotions, and
        offers available at UK sportsbooks. Whether you're a seasoned bettor or new to sports
        betting, our platform is your one-stop resource for discovering exclusive deals and
        maximizing your betting potential.
      </p>
      <p class="mb-3">
        We searched and found for you the best sport betting sites and betting bonus offers. You can
        save time by browsing from site to site, and giving a list with the best available bonus
        offers in the market.
      </p>
      <p class="mb-3">
        <strong>Find the Best Sportsbook Promotions and Bonuses</strong>
      </p>

      <MbbBonusTable :data="sportsOffers" />
    </div>

    <hr class="my-5 divide-y-5" />

    <div>
      <div>
        <h3 class="text-2xl font-medium my-5">Why Sports Bonus Offers Are Important</h3>
        <p class="mb-5">
          Sports bonus offers are an excellent way to increase your betting bankroll and enjoy extra
          value. These bonuses can come in various forms, such as welcome bonuses, free bets,
          deposit matches, cashback offers, and more. They give you additional funds to play with,
          allowing you to explore new betting markets, try different sports, and increase your
          chances of winning.
        </p>
      </div>

      <div>
        <h3 class="text-2xl font-medium my-5">Types of Sports Bonus Offers</h3>
        <p class="mb-5">
          Our team at My Bet Bible has scoured the UK sports betting landscape to bring you the most
          attractive sports bonus offers. Here are some of the common types of sports bonuses you
          can find on our platform:
        </p>

        <ul class="list-decimal pl-5">
          <li class="mb-3">
            <strong>Welcome Bonuses</strong>
            <p>
              Welcome bonuses are designed to attract new players to a sportsbook. They often come
              in the form of deposit matches or free bets. If you're new to sports betting, these
              bonuses can give you a great start by providing extra betting funds.
            </p>
          </li>
          <li class="mb-3">
            <strong>Free Bets</strong>
            <p>
              Free bets allow you to place a wager without risking your own money. They are a
              popular promotion among UK sportsbooks, often offered as part of welcome bonuses or
              special promotions. With free bets, you can explore different sports and betting
              markets without the risk.
            </p>
          </li>
          <li class="mb-3">
            <strong>Deposit Match Bonuses</strong>
            <p>
              Deposit match bonuses reward you with extra funds based on your initial deposit. For
              example, a 100% deposit match bonus will double your first deposit, giving you more
              funds to bet with. This type of bonus is a fantastic way to maximize your bankroll.
            </p>
          </li>
          <li class="mb-3">
            <strong>Cashback Offers</strong>
            <p>
              Cashback offers give you a percentage of your losses back as bonus credit or cash.
              These promotions are especially beneficial during a losing streak, as they help reduce
              the impact of losses and encourage continued betting.
            </p>
          </li>
          <li class="mb-3">
            <strong>Risk-Free Bets</strong>
            <p>
              Risk-free bets allow you to place a bet with the assurance that if you lose, you'll
              receive your stake back in the form of bonus credit or a free bet. This type of bonus
              is a great way to try higher-stakes betting without worrying about losing your money.
            </p>
          </li>
          <li class="mb-3">
            <strong>Loyalty Programs</strong>
            <p>
              Loyalty programs reward you for your continued betting activity. As you bet on
              different sports, you earn points that can be redeemed for free bets, bonus credit, or
              other perks. These programs encourage player retention and offer long-term benefits.
            </p>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-medium my-5">How to Choose the Best Sports Bonus Offers</h3>
        <p class="mb-5">
          With so many sports bonus offers available, it's essential to choose the ones that align
          with your betting style and goals. Here are some tips for selecting the best sports bonus
          offers:
        </p>

        <ul class="pl-8 list-disc">
          <li class="mb-2">
            <strong>Read the Terms and Conditions:</strong> Always read the fine print before
            claiming any bonus. Look for wagering requirements, time limits, and any restrictions on
            eligible bets or sports.
          </li>
          <li class="mb-2">
            <strong>Consider the Bonus Value:</strong> Evaluate the bonus amount, deposit match
            percentage, and any additional benefits. Choose bonuses that provide the most value for
            your deposit.
          </li>
          <li class="mb-2">
            <strong>Check for Ongoing Promotions:</strong> Look for sportsbooks that offer ongoing
            promotions, not just welcome bonuses. This ensures you continue to receive benefits as
            you bet.
          </li>
          <li class="mb-2">
            <strong>Choose Reputable Sportsbooks:</strong> Select sportsbooks that are licensed and
            regulated in the UK. This ensures a safe and fair betting environment.
          </li>
        </ul>
      </div>

      <div class="mb-5">
        <h3 class="text-2xl font-medium my-5">Find the Best Sports Bonus Offers at mybetbible</h3>
        <p class="mb-2">
          At mybetbible, we make it easy to find the best sports bonus offers in the UK. Our
          platform is dedicated to helping you discover exclusive promotions, bonuses, and deals
          from top sportsbooks. With our comprehensive guide, you can compare different offers, read
          expert reviews, and choose the bonuses that best suit your betting preferences.
        </p>
        <p>
          Visit our site to explore the latest sports bonus offers and start maximizing your betting
          experience today. We are committed to providing the most up-to-date information and
          helping you get the most out of your sports betting journey. Whether you're interested in
          football, horse racing, tennis, or other sports, we have you covered with the best bonus
          offers in the UK.
        </p>
      </div>
    </div>
  </div>
</template>
