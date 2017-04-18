<template>
  <div>
    <div class="notification">
      <h1 class="title">{{ name }}</h1>
    </div>
    <div class="columns">
      <div class="column has-text-left">
        <span v-for="i in info">{{ i.name }}<br></span>
      </div>
      <div class="column has-text-right">
        <small v-for="i in info" >{{ i.value }}<br></small>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        required: true,
        type: String
      },
      info: {
        required: true,
        type: Array
      }
    }
  }
</script>
