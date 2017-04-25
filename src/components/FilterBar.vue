<template>
  <div class="field has-addons">
    <!--<p class="control is-expanded">
      <input
        class="input"
        type="text"
        :placeholder="'Enter something to find a ' + name"
        @input="updateText"
      >
    </p>-->
    <p class="control" v-for="(f, i) in filters" :key="i">
      <span class="select">
        <select
          v-model="selecteds[i]"
          :name="f.type"
          :data-index="i"
          @change="updateSelect">
            <option value="">{{ f.name }}</option>
            <option v-for="(each, i) in f.data">{{ each }}</option>
        </select>
      </span>
    </p>
    <p class="control">
      <button @click="resetFilter" class="button is-danger">Reset Filter</button>
    </p>
</div>
</template>

<script>
export default {
  data () {
    return {
      selecteds: new Array(this.filters.length).fill('')
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
      type: Function,
      default: () => {}
    },
    onReset: {
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
      console.log(e.srcElement.dataset.index)
      if (e.target.name === 'club_name') {
        const index = e.target.selectedIndex
        this.onUpdate({ name: 'club_id', value: index })
      } else {
        this.onUpdate({name: e.target.name, value: this.selecteds[e.srcElement.dataset.index]})
      }
    },
    resetFilter () {
      this.onReset()
      this.selecteds = new Array(this.filters.length).fill('')
    }
  }
}

</script>
