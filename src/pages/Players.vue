<template>
  <div>
    <detail-hero
      :title="$route.name"
      textAlign="has-text-left"
      :subtitles="[{ name: '', value: 'Premier League 2016/17' }]">
    </detail-hero>
    <div class="container">
      <br>
      <filter-bar
        :name="'player'"
        :filters="filterInfo"
        :onUpdate="onUpdate"
        :onReset="onReset">
      </filter-bar>
      <br>
      <page-pagination
        :onNextPage="onNextPage"
        :onPrevPage="onPrevPage">
      </page-pagination>
      <br>
      <player-table :players="players"></player-table>
      <br>
    </div>
  </div>
</template>

<script>
/* eslint-disable camelcase */
import { fetch } from '../libs'
import {
  FilterBar,
  DetailHero,
  PlayerTable,
  PagePagination
} from '@/components'
import { playerEnum } from '../enums'

export default {
  async created () {
    this.clubs = await fetch('clubs')
    this.players = await this.fetchPlayers()
  },
  components: {
    FilterBar,
    DetailHero,
    PlayerTable,
    PagePagination
  },
  data () {
    return {
      filterInfo: playerEnum.filters,
      players: [],
      clubs: [],
      page: 1,
      filters: {},
      limit: 20
    }
  },
  methods: {
    async fetchPlayers () {
      const data = await fetch('players', this.filters, this.limit, this.page)
      return data.map(({ club_id, dob, height, id, weight, position, number, nationality, name }) => ({
        club_id,
        dob,
        height,
        id,
        weight,
        position,
        number,
        nationality,
        name,
        club_name: this.clubs.find(club => club.id === club_id).name
      }))
    },
    async onUpdate (type = '', index = 0, value = '') {
      (type === 'club_name') ? this.filters['club_id'] = index : this.filters[type] = value
      this.players = await this.fetchPlayers()
    },
    async onReset () {
      this.page = 1
      this.filters = {}
      this.limit = 20
      this.players = await this.fetchPlayers()
    },
    async onNextPage () {
      this.page++
      const data = await this.fetchPlayers('players', this.filters, this.limit, this.page)
      this.players = data
    },
    async onPrevPage () {
      this.page > 1 ? this.page-- : this.page
      const data = await this.fetchPlayers('players', this.filters, this.limit, this.page)
      this.players = data
    }
  }
}
</script>
