<template>
  <nav>
    <div class="container">
      <div class="nav-left">
        <router-link to="/" class="nav-item">
          <img src="../assets/premier-league-logo-header.svg" alt="logo">
        </router-link>
        <router-link
          v-for="(r, i) in routes"
          class="nav-item is-tab"
          active-class="is-active"
          :to="r.path"
          :key="i">
            {{ r.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        routes: [
          {name: 'Home', path: '/'},
          {name: 'Ranking', path: '/ranking'},
          {name: 'Club', path: '/clubs'},
          {name: 'Players', path: '/players'},
          {name: 'Manager', path: '/managers'}
        ]
      }
    }
  }
</script>
