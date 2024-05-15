<script setup lang="ts">
import { onBeforeMount, computed } from 'vue'
import { useOffersStore } from '~/stores/offers'
import MbbBonusTable from '~/components/ui/MbbBonusTable.vue'

const offersStore = useOffersStore()

const allOffers = computed(() => offersStore.getAllOffers)

onBeforeMount(() => {
  offersStore.fetchAllCategories()
})
</script>

<template>
  <div>
    <div class="">
      <h1 class="font-semibold text-3xl mb-3">
        Free Bets: Unlock the Best Free Bet Offers and Promotions
      </h1>
      <p class="mb-3">
        Are you seeking free bets to boost your sports betting experience? At mybetbible, we provide
        a comprehensive guide to the latest free bet offers, promotions, and exclusive deals from
        top UK sportsbooks. Whether you're a seasoned bettor or new to online betting, our platform
        is the ultimate resource for finding the best free bets and maximizing your chances of
        winning.
      </p>
      <p class="mb-3">
        <strong>Find the best Free Bets that suits you now!</strong>
      </p>

      <MbbBonusTable :data="allOffers" />
    </div>

    <hr class="my-5 divide-y-5" />

    <div>
      <div>
        <h3 class="text-2xl font-medium my-5">What Are Free Bets?</h3>
        <p class="mb-5">
          Free bets are promotional offers provided by online sportsbooks that allow you to place
          bets without risking your own money. These offers are often part of welcome bonuses,
          special promotions, or loyalty programs. Free bets can be a valuable tool for exploring
          new sports and betting markets while potentially winning real money without a significant
          upfront investment.
        </p>
      </div>

      <div>
        <h3 class="text-2xl font-medium my-5">Types of Free Bet Offers</h3>
        <p class="mb-5">
          Free bet offers come in various forms, each with unique benefits. At mybetbible, we
          showcase a range of free bet promotions to suit different betting styles and preferences.
          Here are some common types of free bet offers you can find on our platform:
        </p>

        <ul class="list-decimal pl-5">
          <li class="mb-3">
            <strong>Welcome Free Bets</strong>
            <p>
              Welcome free bets are designed to attract new customers to a sportsbook. As part of a
              welcome bonus, you might receive free bets upon signing up and making your first
              deposit. These free bets give you a risk-free way to start betting and explore what
              the sportsbook offers.
            </p>
          </li>
          <li class="mb-3">
            <strong>No-Deposit Free Bets</strong>
            <p>
              No-deposit free bets are among the most attractive offers because they don't require a
              deposit to claim. Upon registration, you'll receive a free bet to use on a specific
              event or sport. This is an excellent opportunity to test the sportsbook without
              spending any of your own money.
            </p>
          </li>
          <li class="mb-3">
            <strong>Matched Free Bets</strong>
            <p>
              Matched free bets are often part of deposit bonuses or promotions. The sportsbook
              matches a portion of your deposit or your first bet with a free bet of equal value.
              This approach allows you to double your betting power without additional risk.
            </p>
          </li>
          <li class="mb-3">
            <strong>Risk-Free Bets</strong>
            <p>
              Risk-free bets provide you with a safety net. If your bet loses, the sportsbook
              refunds your stake in the form of a free bet or bonus credit. This type of free bet is
              especially useful for high-stakes bets, giving you the confidence to bet without the
              fear of losing your money.
            </p>
          </li>
          <li class="mb-3">
            <strong>Loyalty Free Bets</strong>
            <p>
              Loyalty free bets are offered to existing customers as part of a sportsbook's loyalty
              program. As you bet and earn points, you can redeem them for free bets, bonus credit,
              or other rewards. These free bets are a great way to reward regular players and
              encourage continued betting.
            </p>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-medium my-5">How to Make the Most of Free Bets</h3>
        <p class="mb-5">
          Free bets are a valuable resource, but it's essential to understand how to use them
          effectively. Here are some tips for making the most of free bet offers:
        </p>

        <ul class="pl-8 list-disc">
          <li class="mb-2">
            <strong>Read the Terms and Conditions:</strong> Before claiming any free bet, read the
            terms and conditions to understand wagering requirements, eligible sports, and other
            restrictions.
          </li>
          <li class="mb-2">
            <strong>Choose the Right Free Bet Offers:</strong> Consider your betting style and
            preferences when selecting free bet offers. Look for free bets that align with your
            favorite sports and betting markets.
          </li>
          <li class="mb-2">
            <strong>Use Free Bets Strategically:</strong> Use free bets on wagers with favorable
            odds to maximize your potential returns. Consider using free bets on underdogs or
            higher-odds bets to increase your winnings.
          </li>
          <li class="mb-2">
            <strong>Combine with Other Promotions:</strong> Some sportsbooks allow you to combine
            free bets with other promotions, such as cashback offers or reload bonuses. Look for
            opportunities to stack promotions for even greater value.
          </li>
        </ul>
      </div>

      <div class="mb-5">
        <h3 class="text-2xl font-medium my-5">Find the Best Free Bets at mybetbible</h3>
        <p class="mb-2">
          At mybetbible, we make it easy to find the best free bet offers in the UK. Our platform
          provides a comprehensive guide to the latest free bet promotions and exclusive deals from
          top online sportsbooks. With our expert reviews and comparisons, you can choose the free
          bets that offer the most value for your betting style.
        </p>
        <p class="mb-5">
          Visit our site to explore the latest free bet offers and start maximizing your sports
          betting experience today. We are dedicated to providing the most up-to-date information
          and helping you make informed decisions. Whether you're interested in football, horse
          racing, tennis, or other sports, we have you covered with the best free bets in the UK.
        </p>
      </div>
    </div>
  </div>
</template>
