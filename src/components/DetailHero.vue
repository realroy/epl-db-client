<template>
  <section class="hero is-danger">
      <div class="hero-body">
        <div class="container has-text-centered">
          <img v-if="hasImage" :src="picUrl" width="128">
          <h1 class="title">
            {{ title }}
          </h1>
          <h2 class="subtitle">
            <div v-for="s in subtitles">
              <strong v-if="s.name !== undefined">{{ s.name }}: </strong>
              <a v-if="s.hasLink"
              :href="s.value"> {{ s.value }}</a>
              <span v-else>{{ s.value }}</span>
              <br>
            </div>
          </h2>
        </div>
      </div>
      <div class="hero-foot" v-if="footerList.length > 0">
        <nav class="tabs is-boxed is-centered is-fullwidth">
            <ul>
              <router-link
                active-class="is-active"
                :to="f.path"
                v-for="(f, i) in footerList"
                :key="i"
                >
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
      hasImage: {
        type: Boolean,
        default: false
      },
      picUrl: {
        type: String,
        default: '/static/Player-Photo-Missing.png'
      },
      title: {
        require: true,
        type: String
      },
      subtitles: {
        require: true,
        type: Array
      },
      footerList: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>
