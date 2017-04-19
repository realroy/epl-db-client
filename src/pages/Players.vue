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
        :results="filters"
      ></filter-bar>
      <nav class="pagination is-centered">
        <a class="pagination-previous" @click="updatePage('PREV')">< Previous</a>
        <a class="pagination-next" @click="updatePage('NEXT')">Next page ></a>
      </nav>
      <br>
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
    this.clearFilters()
  },
  components: {
    FilterBar,
    Hero,
    PlayerTable
  },
  computed: {
    ...mapState({
      players: state => state.players.players,
      clubs: state => state.clubs.clubs,
      filters: state => state.platers.filters
    }),
    filters () {
      return [
        {
          name: 'position',
          data: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward']
        },
        {
          name: 'club_name',
          data: this.clubs.map(({name}) => name)
        },
        {
          name: 'nationality',
          data: ['British']
        }
      ]
    }
  },
  methods: {
    ...mapActions(['updatePage', 'getPlayers', 'updateFilters', 'clearFilters']),
    onUpdate ({name, value}) {
      this.updateFilters({ name, value })
    },
    onReset () {
      this.clearFilters()
    }

  }
}
</script>
