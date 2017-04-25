<template>
  <div>
    <detail-hero
      :title="$route.name"
      textAlign="has-text-left"
      :subtitles="[{ name: '', value: 'Premier League 2016/17' }]">
    </detail-hero>
    <div class="columns">
      <div class="column is-one-quarter">
        <br>
        <custom-table :head="head" :body="body"></custom-table>
      </div>
      <div class="column">
        <div class="column">
          <div class="notification is-info">
            <button @click="() => showFixtures = !showFixtures" class="button is-danger has-pulled-right">{{ (!showFixtures) ? '+': '-' }}</button>
            <h1 class="title">Recently Results</h1>
          </div>
          <div class="container" v-if="showFixtures">
            <fixture-table :head="['Home', 'KickOff', 'Away']" :info="fixtures"></fixture-table>
          </div>

        </div>
        <div class="column">
          <div class="notification is-info">
            <h1 class="title">Recently Fixture</h1>
            <button @click="() => showResults = !showResults" class="button is-danger">{{ (!showResults) ? '+': '-' }}</button>
          </div>
            <div class="container" v-if="showResults" >
              <fixture-table :head="['Home', 'KickOff', 'Away']" :info="fixtures"></fixture-table>
            </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { CustomTable, DetailHero, FixtureTable } from '@/components'
  export default {
    created () {
      this.getRanking()
    },
    components: {
      CustomTable,
      DetailHero,
      FixtureTable
    },
    computed: {
      ...mapState({
        ranking: state => state.ranking,
        fixtures: state => state.fixtures.fixtures
      // TODO: Implement results result: state => state.result.results
      }),
      body () {
        const arr = []
        this.ranking.forEach((r, i) => {
          const temp = []
          temp.push({value: r.id})
          temp.push({
            value: r.name,
            link: {
              type: 'IN',
              value: `/club/${r.id}`
            }
          })
          temp.push({value: 0})
          temp.push({value: 0})
          temp.push({value: 0})
          temp.push({value: 0})
          temp.push({value: 0})
          arr.push(temp)
        })
        return arr
      }
    },
    data () {
      return {
        head: ['Pos ', 'Club', 'Pld', 'W', 'D', 'L', 'Pts'],
        showFixtures: true,
        showResults: true
      }
    },
    methods: {
      ...mapActions(['getRanking'])
    }
  }
</script>
