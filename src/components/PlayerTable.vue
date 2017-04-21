<template>
  <div class="columns is-multiline is-mobile">
    <div class="column is-3-desktop " v-for="p in  players">
      <player-card :info="p"></player-card>
    </div>
    <infinite-loading v-if="isInfinite" :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading'
  import { mapState, mapActions } from 'vuex'
  import PlayerCard from './PlayerCard.vue'
  export default {
    computed: {
      ...mapState({
        players: store => store.players.players
      })
    },
    components: {
      PlayerCard,
      InfiniteLoading
    },
    methods: {
      ...mapActions(['updatePlayerPage', 'getPlayers']),
      onInfinite () {
        this.updatePlayerPage()
        this.getPlayers({allPage: false, cb: () => this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')})
      }
    },
    props: {
      column: {
        type: Number,
        default: 3
      },
      isInfinite: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
