<template>
  <div>
    <detail-hero
      :title="$route.name"
      textAlign="has-text-left"
      :subtitles="[{ name: '', value: 'Premier League 2016/17' }]">
    </detail-hero>
    <div class="columns">
      <div class="column is-3">
        <br>
        <custom-table
          :attrs="table.attrs"
          :info="table.info">
        </custom-table>
      </div>
      <div class="column">
        <div class="column">
        </div>
        <div class="column">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tableEnum } from '../enums'
import { CustomTable, DetailHero } from '../components'
const attrs = tableEnum.shortAttrs
export default {
  async created () {
  },
  components: {
    CustomTable,
    DetailHero
  },
  data () {
    return {
      table: {
        attrs,
        info: []
      }
    }
  }
}
</script>
