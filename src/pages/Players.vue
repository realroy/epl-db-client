<template>
  <div>
    <hero></hero>
    <br>
    <div class="container">
      <filter-bar
        :name="'player'"
        :filters="filters"
        :onUpdate="onUpdate"
        :onReset="onReset"
      ></filter-bar>
      <player-table :isInfinite="true" :players="players"></player-table>
      <br>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { FilterBar, Hero, PlayerTable } from '@/components'
import playersModel from '../models/players'

export default {
  created () {
    this.resetPlayerPage()
    this.clearPlayers()
    this.clearPlayerFilter()
  },
  components: {
    FilterBar,
    Hero,
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
    onUpdate ({name, value}) {
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
