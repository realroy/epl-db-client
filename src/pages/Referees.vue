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
        <div class="column is-3" v-for="referee in referees">
          <manager-card :info="referee"></manager-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { fetch } from '../libs'
import { DetailHero, ManagerCard } from '@/components'
export default {
  async created () {
    this.referees = await this.fetchReferees()
  },
  components: {
    DetailHero,
    ManagerCard
  },
  data () {
    return {
      referees: []
    }
  },
  methods: {
    async fetchReferees () {
      const info = fetch('referees')
      return info
    }
  }
}
</script>

