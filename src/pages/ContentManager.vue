<template>
  <div>
    <detail-hero :title="$route.name" :subtitles="[{name: '' , value: 'Welcome to EPL dashboard'}]"></detail-hero>
    <div class="container">
      <filter-bar name="" :filter="[]"></filter-bar>
    </div>
  </div>
</template>

<script>
  import { DetailHero, FilterBar } from '@/components'
  export default {
    components: {
      DetailHero,
      FilterBar
    },
    data () {
      return {
        fixtures: {
          keys: ['id', 'date', 'Home', 'Away'],
          filters: [{
            name: 'day'
          }]
        }
      }
    }
  }
</script>
