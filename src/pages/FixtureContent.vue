<template>
  <content-manager
    :name="name"
    :attrs="attrs"
    :info="info"
    :handlePost="onPost"
    :handlePut="onPut"
    :handleDelete="onDelete">
   </content-manager>
</template>

<script>
import { fetch, post, put, del } from '../libs'
import { fixtureEnum } from '../enums'
import { ContentManager } from './index'
export default {
  async created () {
    this.info = await this.fetchFixtures()
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
    async fetchFixtures () {
      const fixtures = await fetch('fixtures', {}, this.limit, this.page)
      return fixtures.map(({ id, date, homeName, awayName }) => ({ isSelected: false, id, date, homeName, awayName }))
    },
    async onPost (data = {}) {
      await post(this.name.toLowerCase(), data)
      await this.fetchFixtures()
    },
    async onPut (data = {}) {
      await put(this.name.toLowerCase(), data)
      await this.fetchFixtures()
    },
    async onDelete (id = 0) {
      await del(this.name.toLowerCase(), id)
      await this.fetchFixtures()
    }
  }
}
</script>
