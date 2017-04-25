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

  import fixturesModel from '../models/fixtures'
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
        head: ['Home', 'Kick off', 'Away'],
        filters: fixturesModel.filters
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
      }
    }
  }
</script>
