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
    this.goal = await this.fetchGoal()
    this.assist = await this.fetchAssist()
    this.yellow = await this.fetchYellow()
    this.red = await this.fetchRed()
    this.foul = await this.fetchFoul()
    this.offside = await this.fetchOffside()
  },
  components: {
    CustomLevel,
    PlayerHero,
    CustomCard
  },
  computed: {
    overview () {
      return {
        name: 'Overview',
        info: [
          { name: 'Goals', value: this.goal },
          { name: 'Assists', value: this.assist },
          { name: 'Win', value: 0 },
          { name: 'Losses', value: 0 }
        ]
      }
    },
    discipline () {
      return {
        name: 'Discipline',
        info: [
          { name: 'Yellow Cards', value: this.yellow },
          { name: 'Red Cards', value: this.red },
          { name: 'Fouls', value: this.foul },
          { name: 'Offsides', value: this.offside }
        ]
      }
    }
  },
  data () {
    return {
      player: [],
      goal: '',
      assist: '',
      win: 0,
      lost: 0,
      yellow: '',
      red: '',
      foul: '',
      offside: ''
    }
  },
  methods: {
    async fetchPlayer () {
      const player = await fetch(`players/${this.$route.params.id}`)
      return player[0]
    },
    async fetchGoal () {
      const data = await fetch(`players/${this.$route.params.id}/goals`)
      return (data.length === 0) ? 0 : data[0].goals
    },
    async fetchAssist () {
      const data = await fetch(`players/${this.$route.params.id}/assist`)
      return (data.length === 0) ? 0 : data[0].assist
    },
    // async fetchWin () {
    //   const data = await fetch(`players/${this.$route.params.id}/wins`)
    //   return (data.length () === 0) ? 0 : data[0].wins
    // },
    // async fetchLost () {
    //   const data = await fetch(`players/${this.$route.params.id}/losts`)
    //   return (data.length () === 0) ? 0 : data[0].losts
    // },
    async fetchYellow () {
      const data = await fetch(`players/${this.$route.params.id}/yellowCard`)
      return (data.length === 0) ? 0 : data[0].yellowCard
    },
    async fetchRed () {
      const data = await fetch(`players/${this.$route.params.id}/redCard`)
      return (data.length === 0) ? 0 : data[0].redCard
    },
    async fetchFoul () {
      const data = await fetch(`players/${this.$route.params.id}/fouls`)
      return (data.length === 0) ? 0 : data[0].fouls
    },
    async fetchOffside () {
      const data = await fetch(`players/${this.$route.params.id}/offside`)
      return (data.length === 0) ? 0 : data[0].offside
    }
  }
}
</script>
