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
      <custom-table :onClick="() => {}" :attrs="attrs" :info="filteredInfo(dates[dateIndex])"></custom-table>
    </div>
  </div>
</template>

<script>
/* eslint-disable camelcase */
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
    formatResults ({ fixture_id, home_name, home_score, away_name, away_score }) {
      return [
        { id: fixture_id, value: home_name },
        { id: fixture_id, value: `${home_score} - ${away_score}`, hasTag: true },
        { id: fixture_id, value: away_name }
      ]
    },
    formatFixtures ({ fixture_id, home_name, home_id, date, away_name, away_id }) {
      return [
        { id: fixture_id, value: home_name },
        { id: fixture_id, value: new Date(date).toTimeString().split(' ')[0].split(':').slice(0, -1).join('.'), hasTag: true },
        { id: fixture_id, value: away_name }
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
