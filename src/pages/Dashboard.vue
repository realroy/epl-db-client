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
          <dashboard-card :info="each"></dashboard-card>
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
          { name: 'Fixtures', icon: '', size: 0 },
          { name: 'Results', icon: '', size: 0 },
          { name: 'Clubs', icon: '', size: 0 },
          { name: 'Players', icon: '', size: 0 },
          { name: 'Managers', icon: '', size: 0 },
          { name: 'Referees', icon: '', size: 0 }
        ]
      }
    }
  }
</script>
