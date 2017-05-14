<template>
  <div>
    <detail-hero
      :title="club.name"
      :imgUrl="`/static/club-badge/${club.id}.svg`"
      :subtitles="[
        {
          name: 'Stadium Name',
          value: club.stadium_name
        },
        {
          name: 'Official Site',
          linkTo: club.official_site,
          value: club.official_site
        }
      ]"
      :footers="[
        { name: 'Overview', path: `overview` },
        { name: 'Squad', path: `squad` },
        { name: 'Fixtures', path: `fixtures` },
        { name: 'Results', path: `results` },
        { name: 'Stats', path: `stats` }
      ]">
    </detail-hero>
    <br>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { DetailHero } from '../components'
export default {
  created () {
  },
  components: {
    DetailHero
  }
}
</script>
