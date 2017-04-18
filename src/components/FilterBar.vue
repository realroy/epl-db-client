<template>
  <div class="field has-addons">
    <p class="control is-expanded">
      <input
        class="input"
        type="text"
        :placeholder="'Enter something to find a ' + name"
        @input="updateText"
      >
    </p>
    <p class="control" v-for="f in filters">
      <span class="select">
        <select :name="f.name" @change="updateSelect">
          <option value="none">{{ f.name.charAt(0).toUpperCase() + f.name.replace('-', ' ').substr(1) }}</option>
          <option :value="each" v-for="each in f.data">{{ each }}</option>
        </select>
      </span>
    </p>
    <p class="control">
      <button @click="onReset" class="button is-danger">Reset Filter</button>
    </p>
</div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    },
    filters: {
      required: true,
      type: Array
    },
    onUpdate: {
      required: true,
      type: Function
    },
    onReset: {
      required: true,
      type: Function
    }
  },
  methods: {
    updateText (e) {
      this.onUpdate({
        name: 'textField',
        value: e.target.value.trim()
      })
    },
    updateSelect (e) {
      this.onUpdate({
        name: e.target.name, value: e.target.value
      })
    }
  }
}

</script>
