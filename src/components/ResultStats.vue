<template>
  <div class="container">
    <br>
    <div
      v-for="(stat, statIndex) in stats"
      :key="statIndex"
      class="columns has-text-centered">
      <div
        v-for="(each, eachIndex) in stat"
        :key="eachIndex"
        class="column">
        {{ each || '' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stats: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

