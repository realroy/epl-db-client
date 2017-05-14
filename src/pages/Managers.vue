<template>
  <div>
    <detail-hero
      :title="$route.name"
      textAlign="has-text-left"
      :subtitles="[{ name: '', value: 'Premier League 2016/17' }]">
    </detail-hero>
    <br>
    <div class="container">
      <div class="columns is-multiline is-mobile">
        <div class="column is-3" v-for="manager in  managers">
          <manager-card :info="manager"></manager-card>
        </div>
      </div>
    </div>

  </div>
</template>



<script>
import { DetailHero, ManagerCard } from '@/components'

export default {
  created () {
  },
  components: {
    DetailHero,
    ManagerCard
  },
}
</script>
