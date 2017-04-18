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
      <nav class="pagination is-centered">
        <a class="pagination-previous" @click="updatePage('PREV')">< Previous</a>
        <a class="pagination-next" @click="updatePage">Next page ></a>
      </nav>
      <br>
      <div class="columns is-multiline is-mobile">
        <div class="column is-3" v-for="player in  players">
          <player-card :info="player"></player-card>
        </div>
      </div>

      <br>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
import FilterBar from '../components/FilterBar'
import Hero from '../components/Hero'
import PlayerCard from '../components/PlayerCard'
export default {
  created () {
    this.getPlayers()
  },
  components: {
    FilterBar,
    Hero,
    PlayerCard
  },
  computed: {
    ...mapState({
      players: state => state.players.players,
      clubs: state => state.clubs.clubs,
      pageCount: state => state.player.page
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
      this.clearFilter()
    }

  }
}
</script>
