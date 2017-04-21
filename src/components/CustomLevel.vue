<template>
  <div class="custom-level">
    <div class="notification is-primary">
      <h1 class="title">{{ name }}</h1>
    </div>
    <nav class="level">
      <div
        class="level-item has-text-centered"
        v-for="i in info">
        <div>
          <p class="heading">{{ i.name }}</p>
          <p class="title">{{ i.value }}</p>
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
        type: String
      },
      info: {
        required: true,
        type: Array
      }
    }
  }
</script>

<style lang="css">
  .custom-level {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  }
</style>
