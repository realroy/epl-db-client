<template>
  <div
    v-bind:class="{ 'is-active' : modalActive }"
    class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"> {{ name }} </p>
        <button
          @click="onClose"
          class="delete is-large">
        </button>
      </header>
      <section class="modal-card-body">
        <div
          v-for="(key, value) in info"
          :key="key"
          class="field has-addons">
          <p class="control">
            <a v-if="key === 'id'" class="button" disabled> {{ key }} </a>
            <a v-else class="button"> {{ key }} </a>
          </p>
          <p class="control is-expanded">
            <input
              v-if="key === 'id'"
              type="text"
              :value="value"
              class="input"
              disabled>
            <input
              type="text"
              :value="value"
              class="input">
          </p>
        </div>
      </section>
      <footer class="modal-card-foot">
        <a @click="onSave"
          class="button is-success" >
          Save changes
        </a>
        <a @click="onClose"
          class="button is-danger" >
          Cancel
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    onClose: {
      type: Function,
      default: () => {}
    },
    onSave: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
