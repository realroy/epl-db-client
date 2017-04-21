<template>
  <div>
    <detail-hero
      :title="club.name"
      :hasImage="true"
      :picUrl="'/static/club-badge/' + $router.currentRoute.params.id + '.svg'"
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
        {name: 'Overview', path: `${club.id}/overview`},
        {name: 'Squad', path: `${club.id}/squad`},
        {name: 'Fixtures', path: `${club.id}/fixtures`},
        {name: 'Results', path: `${club.id}/results`},
        {name: 'Stats', path: `${club.id}/stats`}
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
    const { id } = this.$router.currentRoute.params
    this.clearPlayerFilter()
    this.getClubById(id)
    this.updatePlayerFilter({name: 'club_id', value: id})
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
    ...mapActions(['getClubById', 'updatePlayerFilter', 'getPlayers', 'clearPlayerFilter'])
  }
}
</script>
