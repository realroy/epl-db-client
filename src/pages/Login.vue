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
              v-bind:class="{'is-danger': notValid}"
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
                v-bind:class="{'is-danger': notValid}"
                v-model="password"
                type="password"
                class="input"
                placeholder="Enter your password">
            </p>
            <p class="help is-danger" v-show="notValid">Invalid username or password</p>
        </div>
        <p class="control">
          <button class="button is-primary">Login</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import DetailHero from '../components/DetailHero'
  export default {
    components: {
      DetailHero
    },
    data () {
      return {
        username: '',
        password: '',
        notValid: false
      }
    },
    methods: {
      ...mapActions(['verifyAuthRequest']),
      isFormComplete () {
        this.notValid = this.username === '' && this.password === ''
      },
      async onSubmit () {
        if (!this.notValid) {
          await this.verifyAuthRequest({ username: this.username, password: this.password })
          if (this.$store.state.validAuth) {
            this.notValid = false
            this.$router.push('/admin/dashboard')
          } else {
            this.notValid = true
          }
        }
      }
    }
  }
</script>
