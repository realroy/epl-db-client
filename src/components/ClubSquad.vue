<template>
  <div>
    <h1 class="title">Squad</h1>
    <br>
    <div class="container">
      <filter-bar
        :name="'player'"
        :filters="filters">
      </filter-bar>
      <br>
      <div class="columns is-multiline is-mobile">
        <div
          v-for="player in  players"
          class="column is-3">
          <player-card :info="player"></player-card>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>


<script>
import { playerEnum } from '../enums'
import { FilterBar, PlayerCard } from './index'
export default {
  created () {
  },
  components: {
    FilterBar,
    PlayerCard
  },
  data () {
    return {
      filters: [playerEnum.filters[1], playerEnum.filters[2]]
    }
  }
}
</script>
