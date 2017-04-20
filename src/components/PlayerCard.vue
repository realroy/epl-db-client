<template>
  <transition name="fade">
    <div class="card" @click="viewMore(info.id)">
      <div class="card-image">
        <img src="../assets/Player-Photo-Missing.png"/>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ info.number }} {{ info.name }}</p>
            <p class="subtitle is-6">
              <strong>Position: </strong>
              <span class="is-pulled-right">{{ info.position }}</span><br>
              <strong>Club: </strong>
              <span class="is-pulled-right">{{ info.club_name }}</span><br>
              <strong>Nationality: </strong>
              <span class="is-pulled-right">{{ info.nationality }}</span>
            </p>
          </div>
        </div>
        <button class="button is-primary is-fullwidth">View more...</button>
      </div>
    </div>
  </transition>
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
        this.$router.push(`/player/${name}`)
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
