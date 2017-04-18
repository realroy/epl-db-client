<template>
  <div class="">
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
