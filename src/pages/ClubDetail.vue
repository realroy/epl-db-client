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
import { mapActions, mapState } from 'vuex'
import DetailHero from '../components/DetailHero'
export default {
  created () {
    const { id } = this.$route.params
    this.clearPlayers()
    this.clearPlayerFilter()
    this.getClubById(id)
    this.updatePlayerFilter({ name: 'club_id', value: id })
    this.getPlayers({ allPage: true })
    this.$router.push('overview')
  },
  components: {
    DetailHero
  },
  computed: {
    ...mapState({
      club: state => state.clubs.club
    })
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      'getClubById',
      'getFixtures',
      'updatePlayerFilter',
      'updateFixtureFilter',
      'getPlayers',
      'clearPlayerFilter',
      'clearFixtureFilter',
      'clearPlayers',
      'clearFixtureFilter'
    ])
  }
}
</script>
