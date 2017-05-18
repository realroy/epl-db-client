<template>
  <div class="columns is-multiline is-mobile">
    <div class="column is-3-desktop " v-for="(player, index) in  players">
      <player-card :info="player"></player-card>
    </div>
  </div>
</template>

<script>
import { PlayerCard } from './index'
export default {
  components: {
    PlayerCard
  },
  props: {
    players: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
