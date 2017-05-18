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
    <p class="control" v-for="(filter, index) in filters" :key="index">
      <span class="select">
        <select
          v-model="selecteds[index]"
          :name="filter.type"
          @change="updateSelect">
            <option value="">{{ filter.name }}</option>
            <option v-for="(data, dataIndex) in filter.data" :key="dataIndex">{{ data }}</option>
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
      type: Function,
      default: () => {}
    }
  },
  methods: {
    // updateText (e) {
    //   this.onUpdate({
    //     name: 'textField',
    //     value: e.target.value.trim()
    //   })
    // },
    updateSelect (e) {
      console.log(e.target.name, e.target.selectedIndex, e.target.value)
      this.onUpdate(e.target.name, e.target.selectedIndex, e.target.value)
    },
    resetFilter () {
      this.onReset()
      this.selecteds = new Array(this.filters.length).fill('')
    }
  }
}

</script>
