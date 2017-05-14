<template>
  <div>
    <detail-hero
      :title="$route.name"
      textAlign="has-text-left"
      :subtitles="[{ name: '', value: 'Premier League 2016/17' }]">
    </detail-hero>
    <div class="container is-multiline is-mobile">
      <br>
      <fixture-table
        :onClick="goToResultDetail"
        :info="fixtures"
        :attrs="attrs">
      </fixture-table>
      </div>
    </div>
  </div>
</template>

<script>
import { resultEnum } from '../enums'
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
      attrs: resultEnum.shortAttrs
    }
  },
  methods: {
    onUpdate ({ name, value }) {
    },
    onReset () {
    },
    goToResultDetail (id) {
      this.$router.push(`/result/${id}`)
    }
  }
}
</script>
