<template>
  <div>
    <detail-hero
      :title="'Dashboard'"
      :subtitles="[{name: '' , value: 'Welcome to EPL dashboard'}]"
    ></detail-hero>
  </div>
</template>

<script>
  import DetailHero from '../components/DetailHero.vue'
  export default {
    components: {
      DetailHero
    }
  }
</script>
