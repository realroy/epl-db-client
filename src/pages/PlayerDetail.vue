<template>
  <div>
    <player-hero :number="player.number" :name="player.name" :clubName="player.club_id" :position="player.position">
    </player-hero>
    <br>
    <div class="container">
      <div class="columns is-mutiline">
        <div class="column">
          <sidebox :name="'Personal Detail'" :info="[
                {name: 'Nationality', value: this.player.nationality},
                {name: 'Age', value: 0},
                {name: 'Date of birth', value: this.player.dob},
                {name: 'Height', value: this.player.height},
                {name: 'Weight', value: this.player.weight}]">
          </sidebox>
        </div>
        <div class="column is-three-quarters">
          <custom-level :name="overview.name" :info="overview.info">
          </custom-level>
          <br>
          <div class="columns">
            <div class="column" v-if="player.position === 'Goalkeeper'">
              <sidebox :name="goalKeeping.name" :info="goalKeeping.info"></sidebox>
            </div>
            <div class="column" v-else-if="player.position === 'Forward' || player.position === 'Midfielder'">
              <sidebox :name="attack.name" :info="attack.info"></sidebox>
            </div>
          </div>
          <div class="columns">
            <div class="column" v-if="player.position === 'Goalkeeper' || player.position === 'Defender'">
              <sidebox :name="defence.name" :info="defence.info"></sidebox>
            </div>
            <div class="column">
              <sidebox :name="discipline.name" :info="discipline.info"></sidebox>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import { mapState, mapActions } from 'vuex'
import Sidebox from '../components/SideBox'
import CustomLevel from '../components/CustomLevel'
import PlayerHero from '../components/PlayerHero'
export default {
  created () {
    const { id } = this.$router.currentRoute.params
    this.getPlayerById(id)
  },
  components: {
    CustomLevel,
    PlayerHero,
    Sidebox
  },
  computed: {
    ...mapState({
      player: state => state.players.player
    }),
    overview: () => ({
      name: 'Overview',
      info: [
        {name: 'Appearances', value: 0},
        {name: 'Clean Sheets', value: 0, only: ['GoalKeeper', 'Defender']},
        {name: 'Goals', value: 0},
        {name: 'Assists', value: 0},
        {name: 'Win', value: 0},
        {name: 'Losses', value: 0}
      ]
    }),
    defence: () => ({
      name: 'Defence',
      info: [
        {name: 'Clean Sheets', value: 0, only: ['GoalKeeper', 'Defender']},
        {name: 'Goals Conceded', value: 0},
        {name: 'Own Goals', value: 0},
        {name: 'Blocked Shots', value: 0}
      ]
    }),
    goalKeeping: () => ({
      name: 'GoalKeeping',
      info: [
        {name: 'Saves', value: 0},
        {name: 'Penalties Saves', value: 0}
      ]
    }),
    attack: () => ({
      name: 'Attack',
      info: [
        {name: 'Goals', value: 0},
        {name: 'Goals Per Match', value: 0.0},
        {name: 'Penalties Scored', value: 0},
        {name: 'Shots', value: 0},
        {name: 'Shots On target', value: 0},
        {name: 'Shooting Acc %', value: 0.0}
      ]
    }),
    discipline: () => ({
      name: 'Discipline',
      info: [
        {name: 'Yellow Cards', value: 0},
        {name: 'Red Cards', value: 0},
        {name: 'Fouls', value: 0},
        {name: 'Offsides', value: 0}
      ]
    })
  },
  methods: {
    ...mapActions(['getPlayerById'])
  }
}
</script>
