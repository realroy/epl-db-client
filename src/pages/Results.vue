<template>
  <div>
    <detail-hero
      :title="$route.name"
      textAlign="has-text-left"
      :subtitles="[{ name: '', value: 'Premier League 2016/17' }]">
    </detail-hero>
    <div class="container is-multiline is-mobile">
      <br>
      <page-pagination 
        :onNextPage="onNextPage"
        :onPrevPage="onPrevPage">
      </page-pagination>
      <br>
      <match-table
        type="RESULT"
        :info="info">
       </match-table>
      <page-pagination 
        :onNextPage="onNextPage"
        :onPrevPage="onPrevPage">
      </page-pagination>
    </div>
  </div>
</template>

<script>
import { fetch } from '../libs'
import {
  DetailHero,
  MatchTable,
  PagePagination
} from '../components'

export default {
  async created () {
    this.info = await this.fetchInfo()
  },
  components: {
    DetailHero,
    MatchTable,
    PagePagination
  },
  data () {
    return {
      info: [],
      page: 1,
      limit: 20
    }
  },
  methods: {
    async fetchInfo () {
      const info = await fetch('results', {}, this.limit, this.page)
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

