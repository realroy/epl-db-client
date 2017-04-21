<template>
  <div>
    <player-hero
      :number="player.number"
      :name="player.name"
      :clubName="player.club_id"
      :position="player.position">
    </player-hero>
    <br>
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <sidebox
            :name="'Personal Details'"
            :info="[
              {name: 'Nationality', value: player.nationality},
              {name: 'Age', value: 0},
              {name: 'Date of birth', value: player.dob},
              {name: 'Height', value: player.height},
              {name: 'Weight', value: player.weight},
            ]"></sidebox>
        </div>
        <div class="column">
          <custom-level
            :name="'Overview'"
            :info="[
              {name: 'Appearances', value: 0},
              {name: 'Clean Sheets', value: 0},
              {name: 'Goals', value: 0},
              {name: 'Assists', value: 0},]">
          </custom-level>
          <br>
          <div class="columns">
            <div class="column">
              <sidebox
                :name="'Defence'"
                :info="[
                  {name: 'Goals Conceded', value: 0},
                  {name: 'Own Goals', value: 0},
                ]"
              ></sidebox>
            </div>
            <div class="column" v-show="player.position==='GoalKeeper'">
              <sidebox
                :name="'GoalKeeping'"
                :info="[
                  {name: 'Saves', value: 0},
                  {name: 'Penalties Saves', value: 0}
                ]"
              ></sidebox>
            </div>
            <div class="column">
              <sidebox
                :name="'Discipline'"
                :info="[
                  {name: 'Yellow Cards', value: 0},
                  {name: 'Red Cards', value: 0},
                  {name: 'Fouls', value: 0},
                  {name: 'Offsides', value: 0}
                ]"
              ></sidebox>
            </div>
            <div class="column">
              <sidebox
                :name="'TeamPlay'"
                :info="[
                  {name: 'Big Chances Created', value: 0}
                ]"
              ></sidebox>
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
    })
  },
  methods: {
    ...mapActions(['getPlayerById'])
  }
}
</script>
