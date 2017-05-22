<template>
  <content-dashboard
    :attrs="attrs"
    :info="info"
    :filterInfo="filterInfo"
    :handleNextPage="onNextPage"
    :handlePrevPage="onPrevPage"
    :name="'fixtures'">
  </content-dashboard>
</template>

<script>
import { fetch } from '../libs'
import { ContentDashboard } from './index'
import { fixtureEnum } from '../enums'
export default {
  async created () {
    this.info = await this.fetchInfo()
  },
  components: {
    ContentDashboard
  },
  data () {
    return {
      name: 'fixtures',
      filterInfo: fixtureEnum.filters,
      filter: {},
      info: [],
      page: 1,
      limit: 20,
      attrs: fixtureEnum.attrs
    }
  },
  methods: {
    async fetchInfo () {
      const info = await fetch(this.name, this.filter, 20, this.page)
      return info
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

