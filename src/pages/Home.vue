<template>
  <div>
    <hero></hero>
    <div>
      <div class="columns">
        <div class="column is-3">
          <custom-table :head="head" :body="body"></custom-table>
        </div>
        <div class="column"></div>
      </div>

    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import CustomTable from '@/components/CustomTable'
  import Hero from '../components/Hero'
  export default {
    created () {
      this.getRanking()
    },
    components: {
      CustomTable,
      Hero
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
