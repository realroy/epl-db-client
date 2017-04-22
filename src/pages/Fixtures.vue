<template>
  <div>
    <hero></hero>
    <div class="container is-multiline is-mobile">
      <br>
      <fixture-table :isInfinite="true" :info="fixtures" :head="head"></fixture-table>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { FixtureTable, Hero } from '@/components'
  export default {
    created () {
      this.clearFixtureFilter()
      this.resetFixturePage()
      this.$store.dispatch('clearFixtures')
      this.$store.dispatch('getFixtures', { allPage: false })
    },
    components: {
      FixtureTable,
      Hero
    },
    computed: {
      ...mapState({
        fixtures: state => state.fixtures.fixtures,
        clubs: state => state.clubs.clubs
      })
    },
    data () {
      return {
        head: ['Home', 'Kick off', 'Away']
      }
    },
    methods: {
      ...mapActions(['getFixtures, clearFixtures', 'resetFixturePage', 'clearFixtureFilter'])
    }
  }
</script>
