<template>
  <div>
    <detail-hero :title="'Login'" :subtitles="[{name: '', value: 'EPL Administrator system'}]"></detail-hero>
    <br>
    <div class="container">
      <form v-on:submit.prevent="onSubmit">
        <div class="field">
          <label class="label">Username</label>
          <p class="control">
            <input
              v-bind:class="{'is-danger': !isValid}"
              v-model="username"
              type="text"
              class="input"
              placeholder="Enter your username">
          </p>
        </div>
        <div class="field">
          <label class="label">Password</label>
            <p class="control">
              <input
                v-bind:class="{'is-danger': !isValid}"
                v-model="password"
                type="password"
                class="input"
                placeholder="Enter your password">
            </p>
            <p class="help is-danger" v-show="!isValid">Invalid username or password</p>
        </div>
        <p class="control">
          <button class="button is-primary">Login</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { DetailHero } from '../components'
export default {
  components: {
    DetailHero
  },
  data () {
    return {
      username: '',
      password: '',
      isValid: true
    }
  },
  methods: {
    onSubmit () {
      const payload = { username: this.username, password: this.password }
      this.$store.dispatch.verifyAuth(payload)
      if (this.$store.state.validAuth) this.$router.push('/admin/dashboard')
      else this.isValid = false
    }
  }
}
</script>
