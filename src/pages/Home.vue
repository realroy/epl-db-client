<template>
  <div>
    <detail-hero
      :title="$route.name"
      textAlign="has-text-left"
      :subtitles="[{ name: '', value: 'Premier League 2016/17' }]">
    </detail-hero>
    <div class="columns">
      <div class="column is-3">
        <br>
        <custom-table
          :attrs="table.attrs"
          :info="table.info">
        </custom-table>
      </div>
      <div class="column">
        <div class="column">
          <match-table
            type="RESULT"
            :info="result.info"
            :attrs="result.attrs">
          </match-table>
        </div>
        <div class="column">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetch } from '../libs'
import { tableEnum, resultEnum } from '../enums'
import { CustomTable, DetailHero, MatchTable } from '../components'

export default {
  async created () {
    this.table.info = await this.fetchTable()
    this.result.info = await this.fetchResult()
  },
  components: {
    CustomTable,
    DetailHero,
    MatchTable
  },
  data () {
    return {
      result: {
        attrs: resultEnum.shortAttrs,
        info: []
      },
      table: {
        attrs: tableEnum.shortAttrs,
        info: []
      }
    }
  },
  methods: {
    async fetchTable () {
      const info = await fetch('points')
      return this.applyLinkToClubDetail(info)
    },
    async fetchResult () {
      const info = await fetch('results', {}, 20, 1)
      return info
    },
    applyLinkToClubDetail (info = []) {
      return info.map(({ clubs, played, points }, index) => [
        { value: index + 1 },
        { value: clubs },
        { value: played },
        { value: points }
      ])
    }
  }
}
</script>
