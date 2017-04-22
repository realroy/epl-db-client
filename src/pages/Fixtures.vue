<template>
  <div>
    <hero></hero>
    <div class="container is-multiline is-mobile">
      <br>
      <fixture-table :isInfinite="true" :info="fixtures" :head="head" :body="body"></fixture-table>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import CustomTable from '@/components/CustomTable'
  import Hero from '../components/Hero'
  import FixtureTable from '../components/FixtureTable.vue'
  export default {
    created () {
      this.getFixtures()
    },
    components: {
      CustomTable,
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
      ...mapActions(['getFixtures']),
      body (date) {
        const sameDateFixture = []
        sameDateFixture.push(...this.fixtures.filter(f => new Date(f.date).toDateString() === date))
        const body = []
        sameDateFixture.forEach(f => {
          const arr = []
          const date = new Date(f.date).toTimeString().split(' ')[0]
          arr.push({ value: f.home_id, link: {type: 'IN', value: `/club/${f.home_id}`} })
          arr.push({ value: date, isTag: true })
          arr.push({ value: f.away_id, link: {type: 'IN', value: `/club/${f.away_id}`} })
          body.push(arr)
        })
        return body
      }
    }
  }
</script>
