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
          <td>
            <input type="checkbox" v-model="selecteds[rowIndex]">
          </td>
          <td v-for="column in rows" @click="onClick(rows.id)">
            {{ column }}
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
      selecteds: new Array(this.info.length).fill(false),
      id: 0,
      modalActive: false
    }
  },
  methods: {
    onClick (id) {
      this.id = id
      this.modalActive = true
    },
    onClose () {
      this.modalActive = false
    },
    onSelect (id) {
      this.selecteds[id] = true
      this.whenSelect(this.selecteds)
    },
    onUnselect (id) {
      this.selecteds[id] = false
      this.whenSelect(this.selecteds)
    },
    onSelectAll () {
      this.selecteds = this.selecteds.fill(true)
      this.whenSelect(this.selecteds)
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
    }
  }
}
</script>

