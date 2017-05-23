<template>
  <content-dashboard
    :attrs="attrs"
    :info="info"
    :filterInfo="filterInfo"
    :handleNextPage="onNextPage"
    :handlePrevPage="onPrevPage"
    :name="name">
  </content-dashboard>
</template>

<script>
import { fetch } from '../libs'
import { ContentDashboard } from './index'
import { resultEnum } from '../enums'
export default {
  async created () {
    this.info = await this.fetchInfo()
  },
  components: {
    ContentDashboard
  },
  data () {
    return {
      name: 'results',
      filterInfo: resultEnum.filters,
      filter: {},
      info: [],
      page: 1,
      limit: 20,
      attrs: resultEnum.attrs
    }
  },
  methods: {
    async fetchInfo () {
      const info = await fetch(this.name, this.filter, 20, this.page)
      return info.map(({ fixtureId, date, homeId, homeName, awayId, awayName, homeGoal, awayGoal }) => ({ fixtureId, date, homeId, homeName, awayId, awayName, homeGoal, awayGoal }))
    },
    async onNextPage () {
      this.page++
      this.info = await this.fetchInfo()
    },
    async onPrevPage () {
      (this.page > 1) ? this.page-- : this.page
      this.info = await this.fetchInfo()
    }
  }
}
</script>
