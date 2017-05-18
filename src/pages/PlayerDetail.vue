<template>
  <div>
    <player-hero :number="player.number" :name="player.name" :clubId="player.clubId" :clubName="player.clubName" :position="player.position">
    </player-hero>
    <br>
    <div class="container">
      <div class="columns is-mutiline">
        <div class="column">
          <custom-card :name="'Personal Detail'" :info="[
                {name: 'Nationality', value: this.player.nationality},
                {name: 'Age', value: 0},
                {name: 'Date of birth', value: this.player.dob},
                {name: 'Height', value: this.player.height},
                {name: 'Weight', value: this.player.weight}]">
          </custom-card>
        </div>
        <div class="column is-three-quarters">
          <custom-level :name="overview.name" :info="overview.info">
          </custom-level>
          <br>
          <div class="columns">
            <div class="column" v-if="player.position === 'Goalkeeper'">
              <custom-card :name="goalKeeping.name" :info="goalKeeping.info"></custom-card>
            </div>
            <div class="column" v-else-if="player.position === 'Forward' || player.position === 'Midfielder'">
              <custom-card :name="attack.name" :info="attack.info"></custom-card>
            </div>
          </div>
          <div class="columns">
            <div class="column" v-if="player.position === 'Goalkeeper' || player.position === 'Defender'">
              <custom-card :name="defence.name" :info="defence.info"></custom-card>
            </div>
            <div class="column">
              <custom-card :name="discipline.name" :info="discipline.info"></custom-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetch } from '../libs'
import {
  CustomCard,
  CustomLevel,
  PlayerHero
} from '../components'
export default {
  async created () {
    this.player = await this.fetchPlayer()
  },
  components: {
    CustomLevel,
    PlayerHero,
    CustomCard
  },
  computed: {
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
  data () {
    return {
      player: []
    }
  },
  methods: {
    async fetchPlayer () {
      const player = await fetch(`players/${this.$route.params.id}`)
      return player[0]
    }
  }
}
</script>
