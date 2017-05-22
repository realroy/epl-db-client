<template>
  <content-manager
    :name="name"
    :attrs="attrs"
    :info="info"
    :handlePost="onPost"
    :handlePut="onPut"
    :handleDelete="onDelete"
    :handleNextPage="onNextPage"
    :handlePrevPage="onPrevPage">
   </content-manager>
</template>

<script>
import { fetch, post, put, del } from '../libs'
import { fixtureEnum } from '../enums'
import { ContentManager } from './index'
export default {
  async created () {
    this.info = await this.fetchInfo()
  },
  components: {
    ContentManager
  },
  data () {
    return {
      name: fixtureEnum.name,
      attrs: fixtureEnum.attrs,
      filters: fixtureEnum.filters,
      info: [],
      page: 1,
      limit: 20
    }
  },
  methods: {
    async fetchInfo () {
      const info = await fetch('fixtures', {}, this.limit, this.page)
      return info.map(({ id, date, homeName, awayName }) => ({ id, date, homeName, awayName }))
    },
    async onNextPage () {
      this.page++
      this.info = await this.fetchInfo()
    },
    async onPrevPage () {
      (this.page > 1) ? this.page-- : this.page
      this.info = await this.fetchInfo()
    },
    async onPost (data = {}) {
      await post(this.name.toLowerCase(), data)
      await this.fetchInfo()
    },
    async onPut (data = {}) {
      await put(this.name.toLowerCase(), data)
      await this.fetchInfo()
    },
    async onDelete (id = 0) {
      await del(this.name.toLowerCase(), id)
      await this.fetchInfo()
    }
  }
}
</script>
