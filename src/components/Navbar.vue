<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <router-link to="/" class="nav-item">
          <img src="../assets/premier-league-logo-header.svg" alt="logo">
        </router-link>
        <router-link
          v-for="(r, i) in routes"
          class="nav-item is-tab is-hidden-mobile"
          active-class="is-active"
          :to="r.path"
          :key="i">
            {{ r.name }}
        </router-link>
      </div>
    </div>
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        routes: [
          {name: 'Home', path: '/'},
          {name: 'Fixtures', path: '/fixtures'},
          {name: 'Results', path: '/results'},
          {name: 'Tables', path: '/tables'},
          {name: 'Ranking', path: '/ranking'},
          {name: 'Club', path: '/clubs'},
          {name: 'Players', path: '/players'},
          {name: 'Manager', path: '/managers'}
        ]
      }
    }
  }
</script>
