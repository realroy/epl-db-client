<template>
  <div>
    <hero></hero>
    <br>
    <div class="container">
      <div class="columns is-multiline is-mobile">
        <div class="column is-3" v-for="club in  clubs">
          <club-card :info="club"></club-card>
        </div>
      </div>
    </div>

  </div>
</template>



<script>
  import ClubCard from '../components/ClubCard'
  import Hero from '../components/Hero.vue'
  import { mapState } from 'vuex'
  export default {
    created () {
      this.$store.dispatch('getAllClubs')
    },
    components: {
      'hero': Hero,
      'club-card': ClubCard
    },
    computed: {
      ...mapState({
        clubs: state => state.clubs
      })
    }
  }
</script>
