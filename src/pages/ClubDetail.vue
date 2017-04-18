<template>
  <div>
    <detail-hero
      :title="club.name"
      :subtitles="[
        {name: 'Stadium Name', value: club.stadium_name},
        {
          name: 'Official Site',
          hasLink: true,
          linkTo: club.official_site,
          value: club.official_site,
        }
      ]"
      :footerList="[
        {name: 'Overview'},
        {name: 'Squad'},
        {name: 'Fixtures'},
        {name: 'Result'},
        {name: 'Stats'}
      ]"
    ></detail-hero>
    <div class="container">
      <club-fixture v-if="clubDetailTab == 2"></club-fixture>
      <club-squad v-if="clubDetailTab == 1"></club-squad>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sidebox from '../components/SideBox'
import ClubFixture from '../components/ClubFixture'
import ClubSquad from '../components/ClubSquad'
import CustomLevel from '../components/CustomLevel'
import DetailHero from '../components/DetailHero'
export default {
  created () {
    this.$store.dispatch('updateFilter', {})
    this.$store.dispatch('updateClubDetailTab')
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
      club: state => state.club,
      clubDetailTab: state => state.clubDetailTab
    })
  }
}
</script>
