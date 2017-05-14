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
      <custom-table :onClick="onClick" :attrs="attrs" :info="filteredInfo[i]"></custom-table>
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
    },
    filteredInfo () {
      const arr = []
      this.dates.forEach(date => {
        const raw = this.info.filter(each => new Date(each.date).toDateString() === date)
        arr.push(
          raw.map(each => ([
            { id: each.id, value: each.home_id, link: `/club/${each.home_id}/` },
            { id: each.id, value: new Date(each.date).toTimeString().split(' ')[0].split(':').slice(0, -1).join('.'), hasTag: true },
            { id: each.id, value: each.away_id, link: `/club/${each.away_id}/` }
          ]))
        )
      })
      return arr
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
    },
    attrs: {
      required: true,
      type: Array,
      default: () => []
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
