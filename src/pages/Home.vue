<template>
  <div>
    <hero></hero>
    <div class="container is-multiline is-mobile">
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
      CustomTable,
      Hero
    },
    computed: {
      ...mapState({
        rankings: state => state.clubs.clubs
      })
    },
    data () {
      return {
        head: ['Position ', 'Club']
      }
    }
  }
</script>
