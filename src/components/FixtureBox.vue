<template>
  <div>
    <div class="notification is-info">
      <div class="media">
        <div class="media-content">
          <h1 class="title">{{ name }}</h1>
        </div>
        <div class="media-right">
          <button @click="onClick" class="button is-danger">{{ (isShow) ? '-': '+' }}</button>
        </div>
      </div>
    </div>
    <div class="container" v-if="isShow">
      <fixture-table :head="heads" :info="info"></fixture-table>
    </div>
  </div>
</template>

<script>
  import FixtureTable from '@/components/FixtureTable'
  export default {
    components: {
      FixtureTable
    },
    props: {
      name: {
        required: true,
        type: String
      },
      heads: {
        required: true,
        type: Array
      },
      info: {
        required: true,
        type: Array
      }
    },
    data () {
      return {
        isShow: false
      }
    },
    methods: {
      onClick () {
        this.isShow = !this.isShow
      }
    }
  }
</script>
