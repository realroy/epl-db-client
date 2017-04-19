<template>
  <div id="app">
    <navbar></navbar>
    <br>
     <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './components/Navbar'

export default {
  created () {
    this.getAllClubs()
    this.getManagers()
    this.getPlayers()
  },
  name: 'app',
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['getAllClubs', 'getManagers', 'getPlayers'])
  }
}
</script>

<style lang="css">
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
