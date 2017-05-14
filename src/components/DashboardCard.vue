<template>
  <div class="card" @click="onClick">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-96x96">
            <img :src="info.icon || 'http://bulma.io/images/placeholders/96x96.png'" alt="Icon">
          </figure>
        </div>
        <div class="media-content">
          <p class="title">{{ info.name }}</p>
          <p class="subtitles">Click here to manipulate {{ info.name }}</p>
        </div>
      </div>
      <div class="content has-text-right">
        <small>Total {{ info.size }}</small>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        default: () => {}
      },
      onClick: {
        type: Function,
        default: () => {}
      }
    }
  }
</script>
