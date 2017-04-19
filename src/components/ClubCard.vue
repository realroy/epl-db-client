<template>
  <div class="card" @click="viewMore(info.name)">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="'/static/club-badge/' + info.name + '.svg'" alt="ClubBadge">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ info.name }}</p>
          <p class="subtitle is-6">{{ info.stadium_name }}</p>
        </div>
      </div>
      <button class="button is-primary is-fullwidth">View more...</button>
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
        this.$router.push(`club/${name}`)
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
