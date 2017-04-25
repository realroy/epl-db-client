<template>
  <div>
    <detail-hero :title="'Dashboard'" :subtitles="[{name: '' , value: 'Welcome to EPL dashboard'}]"></detail-hero>
    <div class="container">
      <br>
      <div class="notification is-danger">
        <h1 class="title">Start live commentary</h1>
        <br>
        <button class="button is-danger is-inverted is-outlined">Live now!</button>
      </div>
      <div class="columns is-multiline is-mobile">
        <div class="column is-6-desktop" v-for="each in cards">
          <dashboard-card :info="each" :onClick="() => $router.push(each.link)"></dashboard-card>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  import { DetailHero, DashboardCard } from '@/components'
  export default {
    components: {
      DetailHero,
      DashboardCard
    },
    data () {
      return {
        cards: [
          { name: 'Fixtures', icon: '', size: 0, link: 'fixtures' },
          { name: 'Results', icon: '', size: 0, link: 'results' },
          { name: 'Clubs', icon: '', size: 0, link: 'clubs' },
          { name: 'Players', icon: '', size: 0, link: 'players' },
          { name: 'Managers', icon: '', size: 0, link: 'managers' },
          { name: 'Referees', icon: '', size: 0, link: 'referees' }
        ]
      }
    }
  }
</script>
