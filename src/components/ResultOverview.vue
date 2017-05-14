<template>
  <div class="container">
    <br>
    <div 
      v-for="(event, eventIndex) in events"
      :key="eventIndex"
      class="notification">
      <article class="media">
        <div class="media-left">{{ event.min || '' }}'</div>
        <div class="media-content">
          <div class="content"> {{ event.type || '' }}, by {{ event.playerName || '' }} ({{ event.clubName || '' }}). </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    events: {
      props: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
