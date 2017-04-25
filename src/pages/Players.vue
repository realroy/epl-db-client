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
        :filters="filters"
        :onUpdate="onUpdate"
        :onReset="onReset"
      ></filter-bar>
      <br>
      <player-table :isInfinite="true" :players="players"></player-table>
      <br>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { FilterBar, DetailHero, PlayerTable } from '@/components'
import playersModel from '../models/players'

export default {
  created () {
    this.resetPlayerPage()
    this.clearPlayers()
    this.clearPlayerFilter()
  },
  components: {
    FilterBar,
    DetailHero,
    PlayerTable
  },
  computed: {
    ...mapState({
      players: state => state.players.players,
      clubs: state => state.clubs.clubs
    })
  },
  data () {
    return {
      filters: playersModel.filters
    }
  },
  methods: {
    ...mapActions(['updatePlayerPage', 'getPlayers', 'updatePlayerFilter', 'clearPlayerFilter', 'clearPlayers', 'resetPlayerPage']),
    onUpdate ({ name, value }) {
      this.resetPlayerPage()
      this.clearPlayers()
      this.updatePlayerFilter({ name, value })
      this.getPlayers({ allPage: false })
    },
    onReset () {
      this.resetPlayerPage()
      this.clearPlayers()
      this.clearPlayerFilter()
      this.getPlayers({ allPage: false })
    }
  }
}
</script>
