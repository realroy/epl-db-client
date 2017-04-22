<template>
  <div class="">
    <div v-for="(d, i) in dateList" :key="i">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <strong class="title">{{ d }}</strong>
          </div>
        </div>
      </div>
      <custom-table :head="head" :body="body(d)"></custom-table>
    </div>
  </div>
</template>

<script>
  import CustomTable from './CustomTable.vue'
  export default {
    components: {
      CustomTable
    },
    computed: {
      dateList () {
        const obj = {}
        this.info.forEach(each => {
          const key = new Date(each.date).toDateString()
          obj[key] = key
        })
        return Object.keys(obj)
      }
    },
    props: {
      info: {
        required: true,
        type: Array
      },
      body: {
        required: true,
        type: Function
      },
      head: {
        required: true,
        type: Array
      }
    }
  }
</script>
