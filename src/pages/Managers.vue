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
        <div class="column is-3" v-for="manager in managers">
          <manager-card
            :imgUrl="`/static/managers/${manager.name}.png`"
            :info="manager">
          </manager-card>
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
    this.managers = await this.fetchManagers()
  },
  components: {
    DetailHero,
    ManagerCard
  },
  data () {
    return {
      managers: []
    }
  },
  methods: {
    async fetchManagers () {
      const info = fetch('managers')
      return info
    }
  }
}
</script>
