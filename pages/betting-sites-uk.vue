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
      <h1 class="font-semibold text-3xl mb-3">Best betting sites & Betting Offers in the UK</h1>
      <p class="mb-3">
        Are you looking for the top betting sites in the UK? At My Bet Bible, we've done the
        research to bring you a comprehensive list of the best online sportsbooks in the UK. Whether
        you're interested in football, horse racing, tennis, or other sports, our platform is your
        go-to source for finding reputable and trustworthy betting sites. With our detailed reviews
        and comparisons, you can make an informed choice and enjoy a safe and enjoyable betting
        experience.
      </p>
      <p class="mb-3">
        <strong>Find the best Bonus Offers that suits you now!</strong>
      </p>

      <MbbBonusTable :data="sportsOffers" />
    </div>

    <hr class="my-5 divide-y-5" />

    <div>
      <div>
        <h3 class="text-2xl font-medium my-5">What to Look for in UK Betting Sites</h3>
        <p class="mb-5">
          Choosing the right betting site is crucial for a successful and enjoyable online betting
          experience. Here are some key factors to consider when selecting a betting site in the UK:
        </p>

        <ul class="list-decimal pl-5">
          <li class="mb-3">
            <strong>Licensing and Regulation</strong>
            <p>
              Ensure the betting site is licensed and regulated by the UK Gambling Commission. This
              certification ensures the site operates legally and follows strict industry standards,
              providing a safe environment for bettors.
            </p>
          </li>
          <li class="mb-3">
            <strong>Betting Markets and Sports Coverage</strong>
            <p>
              The best betting sites in the UK offer a wide variety of betting markets and cover
              numerous sports. Look for sites that provide options for football, horse racing,
              cricket, rugby, tennis, and other popular sports. A diverse selection of betting
              markets ensures you have plenty of opportunities to find value.
            </p>
          </li>
          <li class="mb-3">
            <strong>Competitive Odds</strong>
            <p>
              Competitive odds are a key consideration when choosing a betting site. Compare the
              odds offered by different sportsbooks to ensure you're getting the best value for your
              bets. Sites with low margins generally offer more attractive odds for bettors.
            </p>
          </li>
          <li class="mb-3">
            <strong>Betting Bonuses and Promotions</strong>
            <p>
              Bonuses and promotions can enhance your betting experience. Look for betting sites
              that offer welcome bonuses, free bets, cashback offers, and other promotions. However,
              always read the terms and conditions to understand wagering requirements and any
              restrictions.
            </p>
          </li>
          <li class="mb-3">
            <strong>User-Friendly Interface</strong>
            <p>
              A user-friendly website and mobile app are essential for a seamless betting
              experience. Test the site to ensure it's easy to navigate, with clear betting options
              and quick access to your account information.
            </p>
          </li>
          <li class="mb-3">
            <strong>Payment Methods and Fast Withdrawals</strong>
            <p>
              Choose a betting site that offers a variety of payment methods, including credit/debit
              cards, e-wallets, and bank transfers. Fast withdrawals are also important, so look for
              sites with quick processing times and low fees.
            </p>
          </li>
          <li class="mb-3">
            <strong>Reliable Customer Support</strong>
            <p>
              Reliable customer support is crucial for resolving any issues or answering questions.
              Look for betting sites with multiple contact options, such as live chat, email, and
              phone support. The best sites offer 24/7 customer service to assist you at any time.
            </p>
          </li>
          <li class="mb-3">
            <strong>Responsible Gambling Tools</strong>
            <p>
              Responsible gambling tools are vital for maintaining a healthy betting experience.
              Ensure the betting site provides features like deposit limits, self-exclusion, and
              reality checks to help you manage your betting habits.
            </p>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-medium my-5">Top Betting Sites in the UK</h3>
        <p class="mb-5">
          At mybetbible, we've compiled a list of the top betting sites in the UK based on the above
          criteria. Here are some of the leading online sportsbooks you should consider:
        </p>

        <ul class="pl-8 list-disc">
          <li class="mb-2">
            <nuxt-link to="/" class="text-green underline font-semibold">Bet365:</nuxt-link> Known
            for its extensive sports coverage, competitive odds, and live streaming options, Bet365
            is a popular choice among UK bettors. It offers a user-friendly interface and a wide
            range of betting markets.
          </li>
          <li class="mb-2">
            <nuxt-link to="/" class="text-green underline font-semibold">William Hill:</nuxt-link> A
            trusted name in sports betting, William Hill provides a comprehensive selection of
            sports, competitive odds, and generous bonuses. It also has a strong reputation for
            customer service and responsible gambling tools.
          </li>
          <li class="mb-2">
            <nuxt-link to="/" class="text-green underline font-semibold">Betway:</nuxt-link> With a
            sleek interface and a variety of betting markets, Betway is a top choice for UK bettors.
            It offers attractive bonuses and promotions, along with a reliable customer support
            system.
          </li>
          <li class="mb-2">
            <nuxt-link to="/" class="text-green underline font-semibold">Ladbrokes:</nuxt-link>
            Ladbrokes is a well-established sportsbook with a rich history in the UK betting
            industry. It offers a wide range of sports, competitive odds, and user-friendly mobile
            betting options.
          </li>
          <li class="mb-2">
            <nuxt-link to="/" class="text-green underline font-semibold">Paddy Power:</nuxt-link>
            Known for its innovative promotions and engaging content, Paddy Power is a popular
            sportsbook in the UK. It offers a variety of betting markets, competitive odds, and
            entertaining features.
          </li>
        </ul>
      </div>

      <div class="mb-5">
        <h3 class="text-2xl font-medium my-5">
          Find the Best Betting Sites in the UK with mybetbible
        </h3>
        <p class="mb-2">
          At My Bet Bible, we make it easy to find the best betting sites in the UK. Our platform
          provides detailed reviews, comparisons, and expert insights to help you choose the right
          sportsbook for your needs. Whether you're a football fan, a horse racing enthusiast, or
          interested in other sports, we have you covered with the best betting sites in the UK.
        </p>
        <p class="mb-5">
          Visit our site to explore our recommended betting sites and start your online betting
          journey today. We are dedicated to providing the most accurate information and helping you
          make informed choices. With My Bet Bible, you can bet with confidence and enjoy a safe and
          rewarding betting experience.
        </p>
      </div>
    </div>
  </div>
</template>
