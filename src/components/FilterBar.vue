<template>
  <div class="field has-addons is-hidden-mobile">
    <p class="control is-expanded">
      <input
        class="input"
        type="text"
        :placeholder="'Enter something to find a ' + name"
        @input="updateText"
      >
    </p>
    <p class="control" v-for="(f, i) in filters">
      <span class="select">
        <select
          v-model="selecteds[i]"
          :name="f.name"
          @change="updateSelect(f.name, i)"
        >
          <option value="none">{{ f.name }}</option>
          <option v-for="each in f.data">{{ each }}</option>
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
  data () {
    return {
      selecteds: new Array(this.filters.length).fill('none')
    }
  },
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
    },
    results: {
      required: true,
      type: Array
    }
  },
  methods: {
    updateText (e) {
      this.onUpdate({
        name: 'textField',
        value: e.target.value.trim()
      })
    },
    updateSelect (name, i) {
      this.onUpdate({name, value: this.selecteds[i]})
    }
  }
}

</script>
