<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
          <img :src="(info.name) ? `/static/managers/${info.name}.png` : '/static/Player-Photo-Missing.png'">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ info.name || '' }}</p>
          <p class="subtitle is-6">{{ info.country_of_birth || '' }}</p>
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
      default: () => []
    }
  },
  methods: {
    viewMore (name) {
      (name) ? this.$router.push(`managers/${name}`) : 'Do nothing'
    }
  }
}
</script>
