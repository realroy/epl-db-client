<template>
  <nav class="nav has-shadow" v-if="!$store.isValidAuth">
    <div class="container">
      <div class="nav-left">
        <router-link to="/" class="nav-item">
          <img src="/static/Premier_League_Logo.svg" alt="logo">
        </router-link>
        <router-link
          v-for="(route, index) in routes"
          class="nav-item is-tab is-hidden-mobile"
          active-class="is-active"
          :to="route.path"
          :key="index">
            {{ route.name }}
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
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Fixtures',
          path: '/fixtures'
        },
        {
          name: 'Results',
          path: '/results'
        },
        {
          name: 'Tables',
          path: '/tables'
        },
        {
          name: 'Clubs',
          path: '/clubs'
        },
        {
          name: 'Players',
          path: '/players'
        },
        {
          name: 'Managers',
          path: '/managers'
        },
        {
          name: 'Referees',
          path: '/referees'
        }
      ]
    }
  }
}
</script>
