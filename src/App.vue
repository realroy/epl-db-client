<template>
  <div id="app">
    <transition name="fade">
      <navbar></navbar>
    </transition>
     <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>



<script>
import Navbar from './components/Navbar'
export default {
  created () {
    this.$store.dispatch('getAllClubs')
  },
  name: 'app',
  components: {
    'navbar': Navbar
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
