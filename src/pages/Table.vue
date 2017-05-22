<template>
  <div>
    <detail-hero
      :title="$route.name"
      textAlign="has-text-left"
      :subtitles="[{ name: '', value: 'Premier League 2016/17' }]">
    </detail-hero>
    <div class="container">
      <custom-table :attrs="attrs" :info="info"></custom-table>
    </div>
  </div>
</template>

<script>
import { fetch } from '../libs'
import { CustomTable, DetailHero } from '@/components'
import { attrs } from '../enums/table'

export default {
  async created () {
    this.info = await this.fetchTable()
  },
  components: {
    CustomTable,
    DetailHero
  },
  data () {
    return {
      attrs,
      info: []
    }
  },
  methods: {
    async fetchTable () {
      const info = await fetch(`points`)
      return this.applyLinkToClubDetail(info)
    },
    applyLinkToClubDetail (info = []) {
      return info.map(({ clubs, played, wins, draws, losses, points }, index) => [
        { value: index + 1 },
        { value: clubs },
        { value: played },
        { value: wins },
        { value: draws },
        { value: losses },
        { value: points }
      ])
    }
  }
}
</script>
