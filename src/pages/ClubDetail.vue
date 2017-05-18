<template>
  <div>
    <detail-hero
      :title="club.name"
      :imgUrl="`/static/club-badge/${$route.params.id}.svg`"
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
import { fetch } from '../libs'
import { DetailHero } from '../components'
export default {
  async created () {
    this.club = this.fetchClub()
  },
  components: {
    DetailHero
  },
  data () {
    return {
      club: {}
    }
  },
  methods: {
    async fetchClub () {
      const data = await fetch(`clubs/${this.$route.params.id}`)
      return data[0]
    }
  }
}
</script>
