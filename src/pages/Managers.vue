<template>
  <div>
    <hero></hero>
    <br>
    <div class="container">
      <div class="columns is-multiline is-mobile">
        <div class="column is-3" v-for="manager in  managers">
          <manager-card :info="manager"></manager-card>
        </div>
      </div>
    </div>

  </div>
</template>



<script>
  import ManagerCard from '../components/ManagerCard.vue'
  import Hero from '../components/Hero'
  import { mapState } from 'vuex'
  export default {
    created () {
      this.$store.dispatch('getManagers')
    },
    components: {
      Hero,
      ManagerCard
    },
    computed: {
      ...mapState({
        managers: state => state.managers
      })
    }
  }
</script>
