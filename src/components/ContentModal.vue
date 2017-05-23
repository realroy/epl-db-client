<template>
  <div
    v-bind:class="{ 'is-active' : isActive }"
    class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"> {{ name }} </p>
        <button
          @click="handleClose"
          class="delete is-large">
        </button>
      </header>
      <section class="modal-card-body">
        <form>
          <div
            v-for="(value, key) in info"
            :key="key"
            class="field has-addons">
            <p class="control">
              <a class="button"> {{ key }} </a>
            </p>
            <p class="control is-expanded">
              <input
                :ref="key"
                type="text"
                :value="value"
                class="input">
            </p>
          </div>
        </form>
      </section>
      <footer class="modal-card-foot">
        <a @click="onSave"
          class="button is-success" >
          Save changes
        </a>
        <a @click="handleClose"
          class="button is-danger" >
          Cancel
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSave () {
      const result = Object.keys(this.$refs).reduce(
        (prev, key) => {
          (this.$refs[key][0].value) ? prev[key] = this.$refs[key][0].value : prev
          prev[key] = (parseInt(prev[key])) ? parseInt(prev[key]) : prev[key]
          return prev
        }
      , {})
      this.handleSave(result)
    }
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    info: {
      type: Object,
      default: () => {}
    },
    handleClose: {
      type: Function,
      default: () => {}
    },
    handleSave: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
