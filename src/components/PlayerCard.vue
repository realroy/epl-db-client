<template>
  <transition name="fade">
    <div class="card" @click="viewMore(info.id || 0)">
      <div class="card-image">
        <img :src="(info.imgUrl) ? `/static/players/${id}.png` : '/static/Player-Photo-Missing.png'"/>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ info.number || 0 }} {{ info.name || '' }}</p>
            <p class="subtitle is-6">
              <strong>Position: </strong>
              <span class="is-pulled-right">{{ info.position || '' }}</span><br>
              <strong>Club: </strong>
              <span class="is-pulled-right">{{ info.club_id || '' }}</span><br>
              <strong>Nationality: </strong>
              <span class="is-pulled-right">{{ info.nationality || '' }}</span>
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
        default: () => []
      }
    },
    methods: {
      viewMore (id = 0) {
        this.$router.push(`/player/${id}`)
      }
    }
  }

</script>
