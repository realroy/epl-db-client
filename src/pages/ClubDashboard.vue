<template>
  <content-dashboard
    :info="info"
    :filterInfo="filterInfo"
    :refreshInfo="refreshInfo"
    :handleNextPage="onNextPage"
    :handlePrevPage="onPrevPage"
    :name="name">
  </content-dashboard>
</template>

<script>
import { fetch } from '../libs'
import ContentDashboard from './ContentDashboard'
import { clubEnum } from '../enums'
export default {
  async created () {
    await this.refreshInfo()
  },
  components: {
    'content-dashboard': ContentDashboard
  },
  data () {
    return {
      name: 'clubs',
      filterInfo: [],
      filter: {},
      info: [],
      page: 1,
      limit: 20,
      attrs: clubEnum.attrs
    }
  },
  methods: {
    async refreshInfo () {
      this.info = await this.fetchInfo()
    },
    async fetchInfo () {
      const info = await fetch(this.name, this.filter, 20, this.page)
      return info.map(({ id, stadium_name, official_site, manager_id }) => ({ id, stadium_name, official_site, manager_id }))
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

