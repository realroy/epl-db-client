<template>
  <div class="container">
    <br>
    <div class="notification is-info is-fullwidth">
      <h1 class="title">Starters</h1>
    </div>
    <div class="columns">
      <div class="column is-6">
        <player-box></player-box>
      </div>
      <div class="column is-6">
        <player-box></player-box>
      </div>
    </div>
    <div class="notification is-info is-fullwidth">
      <h1 class="title">Substitutes</h1>
    </div>
    <div class="columns">
      <div class="column is-6">
        <player-box></player-box>
      </div>
      <div class="column is-6">
        <player-box></player-box>
      </div>
    </div>
  </div>
</template>

<script>
  import PlayerBox from './PlayerBox'
  export default {
    components: {
      PlayerBox
    }
  }
</script>
