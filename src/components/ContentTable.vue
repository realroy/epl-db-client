<template>
  <div>
    <table class="table is-bordered is-narrow">
      <thead>
        <tr>
          <th></th>
          <th 
            v-for="(attr, index) in attrs"
            :key="index">
            {{ attr }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rows, rowIndex) in info">
          <td v-for="(value, key, tdIndex) in rows">
            <input
              v-if='key === "isSelected"'
              :id="`${rowIndex}-${tdIndex}`"
              :value="rows.id"
              type="checkbox"
              v-model="selected">
            <span @click="onClick(rowIndex)">{{ typeof value === 'boolean' ? '': value }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: [],
      id: 0
    }
  },
  methods: {
    onClick (id) {
      this.handleClick(id)
    },
    onSelectAll () {
      this.selected = this.info.map(({ id }) => id)
      console.log(this.selected)
      this.handleSelectAll(this.selected)
    },
    onUnSelectAll () {
      this.selected = []
    }
  },
  props: {
    name: {
      required: true,
      type: String,
      default: ''
    },
    attrs: {
      required: true,
      type: Array,
      default: () => []
    },
    info: {
      required: true,
      type: Array,
      default: () => []
    },
    handleClick: {
      required: true,
      type: Function,
      default: () => {}
    },
    handleSelectAll: {
      required: true,
      type: Function,
      default: () => {}
    }
  }
}
</script>

