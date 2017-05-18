<template>
  <div>
    <detail-hero
      :title="$route.name"
      textAlign="has-text-left"
      :subtitles="[{ name: '', value: 'Premier League 2016/17' }]">
    </detail-hero>
    <br>
    <div class="container">
      <div class="columns is-multiline is-mobile">
        <div class="column is-3" v-for="club in clubs">
          <club-card :info="club"></club-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { fetch } from '../libs'
import { ClubCard, DetailHero } from '@/components'

export default {
  async created () {
    this.clubs = await this.fetchClubs()
  },
  components: {
    ClubCard,
    DetailHero
  },
  data () {
    return {
      clubs: []
    }
  },
  methods: {
    async fetchClubs () {
      const clubs = await fetch('clubs')
      return clubs
    }
  }
}
</script>
