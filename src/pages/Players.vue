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
        :results="filters"
      ></filter-bar>
      <player-table :players="players"></player-table>
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
    this.clearPlayerFilter()
    this.getPlayers()
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
      const clubNames = this.clubs.map(({ name }) => name)
      return [
        {
          name: 'Filter By Position',
          type: 'position',
          data: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward']
        },
        {
          name: 'Filter By Club',
          type: 'club_id',
          data: clubNames
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
    ...mapActions(['updatePlayerPage', 'getPlayers', 'updatePlayerFilter', 'clearPlayerFilter']),
    onUpdate ({name, value}) {
      this.updatePlayerFilter({ name, value })
      this.getPlayers()
    },
    onReset () {
      this.clearPlayerFilter()
      this.getPlayers()
    }

  }
}
</script>
