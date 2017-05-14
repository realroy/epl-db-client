<template>
  <div>
    <detail-hero
      :title="$route.name"
      textAlign="has-text-left"
      :subtitles="[{ name: '', value: 'Premier League 2016/17' }]">
    </detail-hero>
    <div class="container">
      <br>
      <filter-bar
        :name="'player'"
        :filters="filters"
        :onUpdate="onUpdate"
        :onReset="onReset">
      </filter-bar>
      <br>
      <player-table :players="players"></player-table>
      <br>
    </div>
  </div>
</template>

<script>
import { FilterBar, DetailHero, PlayerTable } from '@/components'
import { filters } from '../enums/fixtures'

export default {
  created () {
  },
  components: {
    FilterBar,
    DetailHero,
    PlayerTable
  },
  data () {
    return {
      filters
    }
  },
  methods: {
    onUpdate ({ name, value }) {
    },
    onReset () {
    }
  }
}
</script>
