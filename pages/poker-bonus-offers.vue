<script setup lang="ts">
import { onBeforeMount, computed } from 'vue'
import { useOffersStore } from '~/stores/offers'
import MbbBonusTable from '~/components/ui/MbbBonusTable.vue'

const offersStore = useOffersStore()

const pokerOffers = computed(() => {
  const poker = offersStore.getPokerOffers

  return poker.filter((p) => {
    return p.bonuses.length
  })
})

onBeforeMount(() => {
  offersStore.fetchPoker()
})
</script>

<template>
  <div>
    <div class="">
      <h1 class="font-semibold text-3xl mb-3">
        Poker Bonus Offers: Unlock the Best Poker Promotions and Deals
      </h1>
      <p class="mb-3">
        Are you searching for the best poker bonus offers to enhance your online poker experience?
        At mybetbible, we offer a comprehensive guide to the latest poker bonuses, promotions, and
        exclusive deals from top UK poker rooms. Whether you're an experienced poker player or just
        starting, our platform is your ultimate resource for discovering valuable poker bonuses and
        maximizing your bankroll.
      </p>
      <p class="mb-3">
        <strong>
          Enter the online Poker world by claiming the best available Poker Bonus Offers.
        </strong>
      </p>

      <MbbBonusTable :data="pokerOffers" />
    </div>

    <hr class="my-5 divide-y-5" />

    <div>
      <div>
        <h3 class="text-2xl font-medium my-5">What Are Poker Bonus Offers?</h3>
        <p class="mb-5">
          Poker bonus offers are promotional incentives provided by online poker rooms to attract
          new players and retain existing ones. These bonuses can come in various forms, such as
          welcome bonuses, deposit bonuses, freerolls, and loyalty rewards, giving players
          additional funds or tournament entries. Poker bonus offers are a great way to explore new
          poker rooms, try different poker variants, and increase your chances of winning.
        </p>
      </div>

      <div>
        <h3 class="text-2xl font-medium my-5">Types of Poker Bonus Offers</h3>
        <p class="mb-5">
          At mybetbible, we bring you a curated selection of the best poker bonus offers in the UK.
          Here's an overview of the common types of poker bonuses you can find on our platform:
        </p>

        <ul class="list-decimal pl-5">
          <li class="mb-3">
            <strong>Welcome Bonuses</strong>
            <p>
              Welcome bonuses are designed to attract new players to an online poker room. These
              bonuses typically offer a deposit match or bonus credit, providing extra funds to play
              poker. For example, a 100% deposit match bonus on your first deposit can double your
              bankroll, giving you more opportunities to enter tournaments or cash games.
            </p>
          </li>
          <li class="mb-3">
            <strong>No-Deposit Bonuses</strong>
            <p>
              No-deposit bonuses are among the most attractive poker promotions. They offer a small
              bonus or tournament entry without requiring a deposit, allowing you to start playing
              poker with no risk. This type of bonus is perfect for beginners who want to try online
              poker without committing their own money.
            </p>
          </li>
          <li class="mb-3">
            <strong>Reload Bonuses</strong>
            <p>
              Reload bonuses are aimed at existing players who make additional deposits. These
              bonuses work similarly to welcome bonuses, offering a deposit match or bonus credit to
              encourage continued play. Reload bonuses are a fantastic way to maintain a healthy
              bankroll as you play more poker.
            </p>
          </li>
          <li class="mb-3">
            <strong>Freerolls</strong>
            <p>
              Freerolls are free poker tournaments with cash prizes or other rewards. They allow you
              to compete against other players without paying an entry fee, providing a risk-free
              opportunity to win real money. Many poker rooms offer freerolls as part of their
              regular promotions or loyalty programs.
            </p>
          </li>
          <li class="mb-3">
            <strong>Loyalty Rewards</strong>
            <p>
              Loyalty rewards are designed to retain existing players by offering ongoing benefits.
              As you play poker, you earn points or rewards that can be redeemed for bonus credit,
              tournament entries, or other perks. Loyalty rewards are a great way to keep players
              engaged and rewarded for their continued play.
            </p>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-medium my-5">How to Choose the Best Poker Bonus Offers</h3>
        <p class="mb-5">
          Choosing the best poker bonus offers requires careful consideration. Here are some tips
          for selecting the most valuable poker bonuses:
        </p>

        <ul class="pl-8 list-disc">
          <li class="mb-2">
            <strong>Read the Terms and Conditions:</strong> Before claiming any poker bonus, read
            the terms and conditions to understand wagering requirements, time limits, and eligible
            poker games.
          </li>
          <li class="mb-2">
            <strong>Consider the Bonus Value:</strong> Evaluate the bonus amount, deposit match
            percentage, and additional benefits. Choose bonuses that offer the most value for your
            poker playing style.
          </li>
          <li class="mb-2">
            <strong>Check for Ongoing Promotions:</strong> Look for poker rooms that offer ongoing
            promotions and freerolls, not just welcome bonuses. This ensures you continue to receive
            benefits as you play.
          </li>
          <li class="mb-2">
            <strong>Choose Reputable Poker Rooms:</strong> Select poker rooms that are licensed and
            regulated by reputable authorities. This ensures a safe and fair poker environment.
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-medium my-5">Find the Best Poker Bonus Offers at mybetbible</h3>
        <p class="mb-2">
          At mybetbible, we make it easy to find the best poker bonus offers in the UK. Our platform
          provides a comprehensive guide to the latest poker promotions, bonuses, and exclusive
          deals from top online poker rooms. With our expert reviews and comparisons, you can choose
          the poker bonuses that offer the most value for your playing style and experience level.
        </p>
        <p class="mb-5">
          Visit our site to explore the latest poker bonus offers and start maximizing your online
          poker experience today. We are committed to providing the most up-to-date information and
          helping you make informed decisions. Whether you're interested in Texas Hold'em, Omaha, or
          other poker variants, we have you covered with the best poker bonuses in the UK.
        </p>
      </div>
    </div>
  </div>
</template>
