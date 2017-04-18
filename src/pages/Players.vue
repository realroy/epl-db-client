<template>
  <div>
    <hero></hero>
    <br>
    <div class="container">
      <filter-bar :name="'player' || '' " :filterData="filterData || []"></filter-bar>
      <nav class="pagination is-centered">
        <a class="pagination-previous" @click="prevPage">< Previous</a>
        <a class="pagination-next" @click="nextPage">Next page ></a>
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
import { mapState } from 'vuex'
import FilterBar from '../components/FilterBar'
import Hero from '../components/Hero'
import PlayerCard from '../components/PlayerCard'
export default {
  created () {
    this.$store.dispatch('getMorePlayers', this.pageCount)
  },
  components: {
    FilterBar,
    Hero,
    PlayerCard
  },
  computed: {
    ...mapState({
      players: state => state.filteredPlayers,
      clubs: state => state.clubs,
      pageCount: state => state.playerPage
    }),
    filterData () {
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
  data () {
    return {
      pageCount: 1
    }
  },
  methods: {
    nextPage () {
      this.pageCount++
      this.$store.dispatch('getFilteredPlayers', this.pageCount)
    },
    prevPage () {
      (this.pageCount - 1 > 0) ? this.pageCount-- : this.pageCount
      this.$store.dispatch('getFilteredPlayers', this.pageCount)
    }
  }
}
</script>
