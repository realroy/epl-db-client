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
import ContentDashboard from './ContentDashboard'
import { refereeEnum } from '../enums'
export default {
  async created () {
    this.info = await this.fetchInfo()
  },
  components: {
    'content-dashboard': ContentDashboard
  },
  data () {
    return {
      name: 'referees',
      filterInfo: [],
      filter: {},
      info: [],
      page: 1,
      limit: 20,
      attrs: refereeEnum.attrs
    }
  },
  methods: {
    async fetchInfo () {
      const info = await fetch(this.name, this.filter, 20, this.page)
      return info.map(({ name, bio }) => ({ name, bio }))
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

