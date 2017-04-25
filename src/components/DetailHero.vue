<template>
  <section class="hero is-dark">
      <div class="hero-body">
        <div :class="`container ${this.textAlign}`">
          <img
            v-if="imgUrl !== ''"
            :src="imgUrl || '/static/Player-Photo-Missing.png'"
            width="128">
          <h1 class="title">
            {{ title }}
          </h1>
          <h2 class="subtitle">
            <div v-for="s in subtitles">
              <strong v-if="s.name !== ''">
                {{ s.name + ':' }}
              </strong>
              <a v-if="s.linkTo !== undefined"
                :href="s.value">
                {{ s.value }}
              </a>
              <span v-else>
                {{ s.value }}
              </span>
              <br>
            </div>
          </h2>
        </div>
      </div>
      <div class="hero-foot" v-if="footers.length > 0">
        <nav class="tabs is-boxed is-centered is-fullwidth">
            <ul>
              <router-link
                active-class="is-active"
                :to="f.path"
                v-for="(f, i) in footers"
                :key="i">
                  <span>{{ f.name }}</span>
              </router-link>
            </ul>
        </nav>
      </div>
    </section>
</template>

<script>
  export default {
    props: {
      imgUrl: {
        type: String,
        default: ''
      },
      textAlign: {
        type: String,
        default: 'has-text-centered'
      },
      title: {
        require: true,
        type: String
      },
      subtitles: {
        type: Array,
        default: () => []
      },
      footers: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
