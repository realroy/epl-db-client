<template>
  <div id="app">
    <navbar></navbar>
     <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Navbar } from './components'
export default {
  name: 'app',
  components: { Navbar }
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
