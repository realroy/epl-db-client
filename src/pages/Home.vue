<template>
  <div>
    <hero></hero>
    <div class="container">
      <custom-table :head="head" :body="rankings"></custom-table>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import CustomTable from '@/components/CustomTable'
  import Hero from '../components/Hero'
  export default {
    created () {
      this.$store.dispatch('getRanking')
    },
    components: {
      'custom-table': CustomTable,
      'hero': Hero
    },
    computed: {
      ...mapState({
        rankings: state => state.rankings
      })
    },
    data () {
      return {
        head: ['Position ', 'Club']
      }
    }
  }
</script>
