<template>
  <div>
    <div class="columns">
      <div class="column">
        <custom-level :name="overview.name" :info="overview.info"></custom-level>
      </div>
    </div>
    <div class="columns">
      <div class="column" v-for="each in cardData">
        <side-box :name="each.name" :info="each.info"></side-box>
      </div>
    </div>
  </div>
</template>

<script>
  import CustomLevel from './CustomLevel'
  import SideBox from './SideBox'
  export default {
    components: {
      CustomLevel,
      SideBox
    },
    data () {
      return {
        overview: {
          name: 'Overview',
          info: [
            { name: 'Matches Played', value: 0 },
            { name: 'Wins', value: 0 },
            { name: 'Losses', value: 0 },
            { name: 'Goals', value: 0 },
            { name: 'Goals Conceded', value: 0 },
            { name: 'Clean Sheets', value: 0 }
          ]
        },
        cardData: [
          {
            name: 'Attack',
            info: [
              { name: 'Goals', value: 0 },
              { name: 'Goals Per Match', value: 0.0 },
              { name: 'Shots', value: 0 },
              { name: 'Shots on target', value: 0 },
              { name: 'Shooting Accuracy %', value: 0 },
              { name: 'Penalties Scored', value: 0 }
            ]
          },
          {
            name: 'Team Play',
            info: [
              { name: 'Passes', value: 0 },
              { name: 'Passes Per Match', value: 0.0 },
              { name: 'Pass Accuracy %', value: 0 }
            ]
          },
          {
            name: 'Defence',
            info: [
              { name: 'Clean Sheets', value: 0 },
              { name: 'Goal Conceded', value: 0.0 },
              { name: 'Goal Conceded Per Match', value: 0 },
              { name: 'Saves', value: 0 },
              { name: 'Tackle', value: 0 },
              { name: 'Tackle Success %', value: 0 },
              { name: 'Blocked Shots', value: 0 },
              { name: 'Clearances', value: 0 },
              { name: 'Own Goals', value: 0 }
            ]
          },
          {
            name: 'Discipline',
            info: [
              { name: 'Yellow Cards', value: 0 },
              { name: 'Red Cards', value: 0.0 },
              { name: 'Fouls', value: 0 },
              { name: 'Offsides', value: 0 }
            ]
          }
        ]
      }
    }
  }
</script>
