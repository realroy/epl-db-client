<template>
  <div class="hero is-dark">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item">Sun 23 Apr 2017</a>
            <a class="nav-item">Andre Marriner</a>
          </div>
          <div class="nav-right">
            <a class="nav-item">Anfield, Liverpool</a>
            <a class="nav-item">Att: 53,086</a>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container">
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <h1 class="title">Liverpool</h1>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <button class="button is-large is-danger">
              1 - 2
            </button>
          </div>
          <div class="level-right">
            <div class="level-item">
              <h1 class="title">
                Crystal Palace
              </h1>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="hero-foot">
      <nav class="tabs is-boxed">
        <div class="container">
          <ul>
            <li>
              <router-link :to="`/result/${$route.params.id}/overview`">Overview</router-link>
            </li>
            <li>
              <router-link :to="`/result/${$route.params.id}/lineup`">Line up</router-link>
            </li>
            <li>
              <router-link :to="`/result/${$route.params.id}/stats`">Stats</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
