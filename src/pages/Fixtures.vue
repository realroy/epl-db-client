<template>
  <div>
    <hero></hero>
    <div class="container is-multiline is-mobile">
      <filter-bar
        :name="'player'"
        :filters="filterList"
        :onUpdate="onUpdate"
        :onReset="onReset"
      ></filter-bar>
      <fixture-table :isInfinite="true" :info="fixtures" :head="head"></fixture-table>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { FixtureTable, Hero, FilterBar } from '@/components'
  export default {
    created () {
      this.clearFixtureFilter()
      this.resetFixturePage()
      this.$store.dispatch('clearFixtures')
      this.$store.dispatch('getFixtures', { allPage: false })
    },
    components: {
      FilterBar,
      FixtureTable,
      Hero
    },
    computed: {
      ...mapState({
        fixtures: state => state.fixtures.fixtures,
        clubs: state => state.clubs.clubs
      }),
      filterList () {
        return [
          {
            name: 'Filter By Club',
            type: 'club_id',
            data: this.clubs.map(({ name }) => name)
          }
        ]
      }
    },
    data () {
      return {
        head: ['Home', 'Kick off', 'Away']
      }
    },
    methods: {
      ...mapActions(['updateFixturePage', 'getFixtures', 'updateFixtureFilter', 'clearFixtureFilter', 'clearFixtures', 'resetFixturePage']),
      onUpdate ({name, value}) {
        this.clearFixtures()
        this.updateFixtureFilter({ name, value })
        this.getFixtures({ allPage: false })
      },
      onReset () {
        this.resetFixturePage()
        this.clearFixtures()
        this.clearFixturesFilter()
        this.getFixtures({ allPage: false })
      }
    }
  }
</script>
