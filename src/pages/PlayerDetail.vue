<template>
  <div>
    <player-hero
      :number="player.number"
      :name="player.name"
      :clubName="player.club_name"
      :position="player.position"></player-hero>
    <br>
    <div class="columns is-mobile is-multiline">
      <div class="column"></div>
      <div class="column is-2">
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
        <div class="container">
          <custom-level
            :name="'Overview'"
            :info="[
              {name: 'Appearances', value: 0},
              {name: 'Clean Sheets', value: 0},
              {name: 'Goals', value: 0},
              {name: 'Assists', value: 0},]">
          </custom-level>
          <br>
          <br>
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
            <div class="column" v-if="player.position=='GoalKeeper'">
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
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sidebox from '../components/SideBox'
import CustomLevel from '../components/CustomLevel'
import PlayerHero from '../components/PlayerHero'
export default {
  created () {
    this.$store.dispatch('getPlayer', this.$router.currentRoute.params.id)
  },
  components: {
    CustomLevel,
    PlayerHero,
    Sidebox
  },
  computed: {
    ...mapState({
      player: state => state.player
    })
  }
}
</script>
