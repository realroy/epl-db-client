<template>
  <div>
    <result-hero></result-hero>
    <router-view></router-view>
  </div>
</template>

<script>
  import ResultHero from '../components/ResultHero'
  export default {
    components: {
      ResultHero
    }
  }
</script>
