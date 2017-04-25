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
        <custom-table :head="head" :body="body"></custom-table>
      </div>
      <div class="column">
        <div class="column">
          <fixture-box
            name="Recently results"
            :heads="['Home', 'Score', 'Away']"
            :info="fixtures"
          ></fixture-box>
        </div>
        <div class="column">
          <fixture-box
            name="Recently fixtures"
            :heads="['Home', 'Kick off', 'Away']"
            :info="fixtures"
          ></fixture-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { CustomTable, DetailHero, FixtureBox } from '@/components'
  export default {
    created () {
      this.clearFixtureFilter()
      this.getRanking()
      this.clearFixtures()
      this.getFixtures({ allPage: false })
    },
    components: {
      CustomTable,
      DetailHero,
      FixtureBox
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
      ...mapActions(['getRanking', 'getFixtures', 'clearFixtures', 'clearFixtureFilter'])
    }
  }
</script>
