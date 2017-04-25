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
        :name="'result'"
        :filters="filters"
        :onUpdate="onUpdate"
        :onReset="onReset">
      </filter-bar>
      <fixture-table
        :onClick="goToResultDetail"
        :isInfinite="true"
        :info="fixtures"
        :head="head">
      </fixture-table>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import fixtureModel from '../models/fixtures.js'
  import { DetailHero, FilterBar, FixtureTable } from '@/components'
  export default {
    created () {
      this.clearFixtureFilter()
      this.resetFixturePage()
      this.$store.dispatch('clearFixtures')
      this.$store.dispatch('getFixtures', { allPage: false })
    },
    components: {
      DetailHero,
      FilterBar,
      FixtureTable
    },
    computed: {
      ...mapState({
        fixtures: state => state.fixtures.fixtures
      })
    },
    data () {
      return {
        head: ['Home', 'Score', 'Away'],
        filters: fixtureModel.filters
      }
    },
    methods: {
      ...mapActions(['updateFixturePage', 'getFixtures', 'updateFixtureFilter', 'clearFixtureFilter', 'clearFixtures', 'resetFixturePage']),
      onUpdate ({ name, value }) {
        this.resetFixturePage()
        this.clearFixtures()
        if (name === 'club_id') {
          this.updateFixtureFilter({ name: 'home_id', value })
        } else {
          this.updateFixtureFilter({ name, value })
        }
        this.getFixtures({ allPage: false })
      },
      onReset () {
        this.resetFixturePage()
        this.clearFixtures()
        this.clearFixtureFilter()
        this.getFixtures({ allPage: false })
      },
      goToResultDetail (id) {
        this.$router.push(`/result/${id}`)
      }
    }
  }

</script>
