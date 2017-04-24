<template>
  <div class="">
    <div v-for="(d, i) in dateList" :key="i">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <strong>{{ d }}</strong>
          </div>
        </div>
      </div>
      <custom-table :onClick="onClick" :head="head" :body="filteredFixture[i]"></custom-table>
    </div>
    <infinite-loading v-if="isInfinite" :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading'
  import { mapActions } from 'vuex'
  import CustomTable from './CustomTable'
  export default {
    components: {
      CustomTable,
      InfiniteLoading
    },
    computed: {
      dateList () {
        const obj = {}
        this.info.forEach(each => {
          const key = new Date(each.date).toDateString()
          obj[key] = key
        })
        return Object.keys(obj)
      },
      filteredFixture () {
        const arr = []
        this.dateList.forEach(date => {
          const raw = this.info.filter(each => new Date(each.date).toDateString() === date)
          arr.push(
            raw.map(each => ([
              { id: each.id, value: each.home_id, link: `/club/${each.home_id}/` },
              { id: each.id, value: new Date(each.date).toTimeString().split(' ')[0].split(':').slice(0, -1).join('.'), hasTag: true },
              { id: each.id, value: each.away_id, link: `/club/${each.away_id}/` }
            ]))
          )
        })
        return arr
      }
    },
    methods: {
      ...mapActions(['updateFixturePage', 'getFixtures']),
      onInfinite () {
        this.updateFixturePage()
        this.getFixtures({allPage: false, cb: () => this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')})
      }
    },
    props: {
      info: {
        required: true,
        type: Array
      },
      head: {
        required: true,
        type: Array
      },
      isInfinite: {
        type: Boolean,
        default: false
      },
      onClick: {
        type: Function
      }
    }
  }
</script>
