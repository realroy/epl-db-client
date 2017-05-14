<template>
  <div class="custom-level">
    <div class="notification is-primary">
      <h1 class="title">{{ name }}</h1>
    </div>
    <nav class="level">
      <div
        class="level-item has-text-centered"
        v-for="(each, index) in info" :key="index">
        <div>
          <p class="heading">{{ each.name }}</p>
          <p class="title">{{ each.value }}</p>
          <br>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  props: {
    name: {
      required: name,
      type: String,
      default: ''
    },
    info: {
      required: true,
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="css">
  .custom-level {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  }
</style>
