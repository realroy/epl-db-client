<template>
  <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <img :src="picUrl" width="128">
          <h1 class="title">
            {{ number }} {{ name }}
          </h1>
          <h2 class="subtitle">
            <strong>Club: </strong>
            <router-link :to="'/club/' + clubName">{{ clubName }}</router-link><br>
            <strong>Position</strong>
            {{ position }}
          </h2>
        </div>
      </div>
    </section>
</template>

<script>
  export default {
    props: {
      picUrl: {
        type: String,
        default: '/static/Player-Photo-Missing.png'
      },
      name: {
        require: true,
        type: String
      },
      number: {
        require: true,
        type: Number
      },
      clubName: {
        require: true,
        type: String
      },
      position: {
        require: true,
        type: String
      }
    }
  }
</script>
