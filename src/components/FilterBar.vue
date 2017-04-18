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
    <p class="control" v-for="(f, i) in filterData">
      <span class="select">
        <select :name="f.name" @change="updateSelect">
          <option value="none">{{ f.name.charAt(0).toUpperCase() + f.name.replace('-', ' ').substr(1) }}</option>
          <option :value="each" v-for="each in f.data">{{ each }}</option>
        </select>
      </span>
    </p>
    <p class="control">
      <button @click="resetFilter" class="button is-danger">Reset Filter</button>
    </p>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      filterPlayerList: state => state.filterPlayerList,
      filterList: state => state.filterList
    })
  },
  props: {
    name: {
      required: true,
      type: String
    },
    filterData: {
      required: true,
      type: Array
    }
  },
  methods: {
    updateText (e) {
      this.$store.dispatch('updateTextFilter', e.target.value)
    },
    updateSelect (e) {
      const result = { name: e.target.name, value: e.target.value }
      this.$store.dispatch('updateFilter', result)
      this.$store.dispatch('getFilteredPlayers')
      this.$store.dispatch('resetPagePlayer')
    },
    resetFilter (e) {
      this.$store.dispatch('clearFilteredPlayers')
      this.$store.dispatch('getFilteredPlayers')
    }
  }
}

</script>
