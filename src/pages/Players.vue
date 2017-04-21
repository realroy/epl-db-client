<template>
  <div>
    <hero></hero>
    <br>
    <div class="container">
      <filter-bar
        :name="'player'"
        :filters="filterList"
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
import FilterBar from '../components/FilterBar'
import Hero from '../components/Hero'
import PlayerTable from '../components/PlayerTable'
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
    }),
    filterList () {
      return [
        {
          name: 'Filter By Position',
          type: 'position',
          data: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward']
        },
        {
          name: 'Filter By Club',
          type: 'club_id',
          data: this.clubs.map(({ name }) => name)
        },
        {
          name: 'Filter By Nationality',
          type: 'nationality',
          data: ['France']
        }
      ]
    }
  },
  methods: {
    ...mapActions(['updatePlayerPage', 'getPlayers', 'updatePlayerFilter', 'clearPlayerFilter', 'clearPlayers', 'resetPlayerPage']),
    onUpdate ({name, value}) {
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
