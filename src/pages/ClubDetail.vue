<template>
  <div>
    <detail-hero
      :title="club.name"
      :hasImage="true"
      :picUrl="'/static/club-badge/' + club.name + '.svg'"
      :subtitles="[
        {
          name: 'Stadium Name',
          value: club.stadium_name},
        {
          name: 'Official Site',
          hasLink: true,
          linkTo: club.official_site,
          value: club.official_site,
        }
      ]"
      :footerList="[
        {name: 'Overview', path: `/club/${club.name}/overview`},
        {name: 'Squad', path: `/club/${club.name}/squad`},
        {name: 'Fixtures', path: `/club/${club.name}/fixtures`},
        {name: 'Results', path: `/club/${club.name}/results`},
        {name: 'Stats', path: `/club/${club.name}/stats`}
      ]"
    ></detail-hero>
    <br>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Sidebox from '../components/SideBox'
import ClubFixture from '../components/ClubFixture'
import ClubSquad from '../components/ClubSquad'
import CustomLevel from '../components/CustomLevel'
import DetailHero from '../components/DetailHero'
export default {
  created () {
    const clubName = this.$router.currentRoute.params.name
    this.clearFilters()
    this.getClubByName(clubName)
    this.updateFilters({name: 'club_name', value: clubName})
    this.getPlayers(true)
  },
  components: {
    ClubFixture,
    ClubSquad,
    CustomLevel,
    DetailHero,
    Sidebox
  },
  computed: {
    ...mapState({
      club: state => state.clubs.club
    })
  },
  methods: {
    ...mapActions(['getClubByName', 'updateFilters', 'getPlayers', 'clearFilters'])
  }
}
</script>
