<template>
  <div class="card" @click="viewMore(info.name)">
    <div class="card-image">
      <figure class="image">
          <img src="../assets/Player-Photo-Missing.png">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ info.name }}</p>
          <p class="subtitle is-6">{{ info.country_of_birth }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        required: true,
        default () {
          return []
        }
      }
    },
    methods: {
      viewMore (name) {
        this.$router.push(`managers/${name}`)
      }
    }
  }

</script>

<style lang="css" scoped>
  .card {
    display: flex;
    flex-direction: column;
  }
  .cart-footer {
    margin-top: auto;
  }
</style>
