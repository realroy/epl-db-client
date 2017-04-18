<template>
  <nav>
    <div class="container">
      <div class="nav-left">
        <router-link to="/" class="nav-item">
          <img src="../assets/premier-league-logo-header.svg" alt="logo">
        </router-link>
        <router-link class="nav-item is-tab" to="/"> Home</router-link>
        <router-link class="nav-item is-tab" to="/ranking">Ranking</router-link>
        <router-link class="nav-item is-tab " to="/clubs">Clubs</router-link>
        <router-link class="nav-item is-tab" to="/players">Players</router-link>
        <router-link class="nav-item is-tab" to="/managers">Managers</router-link>
      </div>
    </div>
  </nav>
</template>
