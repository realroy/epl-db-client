<template>
  <div class="">
    <div v-for="(date, dateIndex) in dates" :key="dateIndex">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <strong>{{ date }}</strong>
          </div>
        </div>
      </div>
      <custom-table :onClick="onClick" :attrs="attrs" :info="filteredInfo(dates[dateIndex])"></custom-table>
    </div>
  </div>
</template>

<script>
import { CustomTable } from './index'
export default {
  components: {
    CustomTable
  },
  computed: {
    dates () {
      const obj = {}
      this.info.forEach(each => {
        const key = new Date(each.date).toDateString()
        obj[key] = key
      })
      return Object.keys(obj)
    }
  },
  data () {
    return {
      attrs: (this.type === 'RESULT') ? require('../enums/results').shortAttrs : require('../enums/fixtures.js').shortAttrs
    }
  },
  methods: {
    onClick (id) {
      (this.type === 'RESULT') ? this.$router.push(`/result/${id}`) : 'Do nothing'
    },
    formatResults ({ fixtureId, homeName, homeGoal, awayName, awayGoal }) {
      return [
        { id: fixtureId, value: homeName, link: `/result/${fixtureId}` },
        { id: fixtureId, value: `${homeGoal} - ${awayGoal}`, hasTag: true },
        { id: fixtureId, value: awayName, link: `/result/${fixtureId}` }
      ]
    },
    formatFixtures ({ fixtureId, homeName, homeId, date, awayName, awayId }) {
      return [
        { id: fixtureId, value: homeName, link: `/club/${homeId}/` },
        { id: fixtureId, value: new Date(date).toTimeString().split(' ')[0].split(':').slice(0, -1).join('.'), hasTag: true },
        { id: fixtureId, value: awayName, link: `/club/${awayId}/` }
      ]
    },
    filteredInfo (date) {
      const info = this.info.filter(match => new Date(match.date).toDateString() === date)
      const results = (this.type === 'RESULT') ? info.map(this.formatResults) : info.map(this.formatFixtures)
      return results
    }
  },
  props: {
    type: {
      required: true,
      type: String,
      default: 'FIXTURE' || 'RESULT'
    },
    info: {
      required: true,
      type: Array,
      default: () => []
    }
  }
}
</script>
