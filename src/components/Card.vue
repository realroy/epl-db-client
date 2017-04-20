<template>
  <div
    class="card"
    @click="onClick">
    <div
      class="card-image"
      v-show="img.hasOwnProperty('url')">
      <figure class="image is-1by1">
        <img
          :src="img.url"
          :height="img.height || 'auto'"
          :width="img.width || 'auto'"
          :alt="img.alt || 'Image'">
      </figure>
    </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      {{ content.text }}
      <div
        v-if="content.links.length > 0"
        v-for="l in content.links">
        <router-link
          v-if="l.type === 'INNER'"
          :to="l.url">
          {{ l.url }}
        </router-link>
        <a v-else :href="l.url">{{ l.url }}</a>
      </div>
      <br>
      <div
        v-if="content.smalls.length > 0"
        v-for="s in content.smalls">
        <small>{{ s }}</small>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    props: {
      headerTitle: {
        type: String
      },
      iconClass: {
        type: String
      },
      content: {
        type: Array,
        required: true
      },
      footer: {
        type: Array,
        default () {
          return []
        }
      },
      onClick: {
        type: Function,
        default () {
          return () => {}
        }
      },
      img: {
        type: Object,
        default: {}
      },
      imgContent: {
        type: Object,
        default: {}
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
