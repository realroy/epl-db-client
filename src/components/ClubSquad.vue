<template>
  <div>
    <h1 class="title">Squad</h1>
    <br>
    <div class="container">
      <filter-bar :name="'player' || '' " :filterData="filterData || []"></filter-bar>
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
    this.$store.dispatch('getFilteredPlayers')
  },
  components: {
    FilterBar,
    Hero,
    PlayerCard
  },
  computed: {
    ...mapState({
      club: state => state.club,
      players: state => state.filteredPlayers
    }),
    filterData () {
      return [
        {
          name: 'position',
          data: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward']
        },
        {
          name: 'club_name',
          data: this.club.name
        },
        {
          name: 'nationality',
          data: ['British']
        }
      ]
    }
  },
  methods: {
  }
}
</script>
