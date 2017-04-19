<template>
  <div class="columns is-multiline is-mobile">
    <div :class="'column is-' + column" v-for="player in  players">
      <player-card :info="player"></player-card>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import PlayerCard from './PlayerCard.vue'
  export default {
    computed: {
      ...mapState({
        players: store => store.players.players
      })
    },
    components: {
      PlayerCard
    },
    props: {
      column: {
        type: Number,
        default: 3
      }
    }
  }
</script>
