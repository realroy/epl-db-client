<template>
  <div>
    <detail-hero
      :title="$route.name"
      textAlign="has-text-left"
      :subtitles="[{ name: '', value: 'Premier League 2016/17' }]">
    </detail-hero>
    <div class="container is-multiline is-mobile">
      <br>
      <filter-bar
        :name="'fixture'"
        :filters="filters"
        :onUpdate="onUpdate"
        :onReset="onReset">
      </filter-bar>
      <fixture-table
        :info="fixtures"
        :attrs="attrs">
      </fixture-table>
      </div>
    </div>
  </div>
</template>

<script>
import { fixtureEnum } from '../enums'
const { shortAttrs, filters } = fixtureEnum
import {
  DetailHero,
  FilterBar,
  FixtureTable
} from '@/components'

export default {
  async created () {
  },
  components: {
    DetailHero,
    FilterBar,
    FixtureTable
  },
  data () {
    return {
      attrs: shortAttrs,
      filters
    }
  },
  methods: {
    onUpdate ({ name, value }) {
    },
    onReset () {
    }
  }
}
</script>
