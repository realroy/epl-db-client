<template>
  <div>
    <detail-hero
      :title="$route.name"
      textAlign="has-text-left"
      :subtitles="[{ name: '', value: 'Premier League 2016/17' }]">
    </detail-hero>
    <div class="container">
      <custom-table :head="head" :body="body"></custom-table>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import { CustomTable, DetailHero } from '@/components'

  export default {
    created () {
      this.getRanking()
    },
    components: {
      CustomTable,
      DetailHero
    },
    computed: {
      ...mapState({
        ranking: state => state.ranking
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
        head: ['Pos ', 'Club', 'Pld', 'W', 'D', 'L', 'Pts']
      }
    },
    methods: {
      ...mapActions(['getRanking'])
    }
  }
</script>
