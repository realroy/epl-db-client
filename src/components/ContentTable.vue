<template>
  <div>
    <table class="table is-bordered is-narrow">
      <thead>
        <tr>
          <th></th>
          <th v-for="each in attrs">{{ each }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rows, index) in info">
          <td>
            <input type="checkbox" v-model="selecteds[index]">
          </td>
          <td v-for="cols in rows" @click="onClick(rows.id)">
            {{ cols }}
          </td>
        </tr>
      </tbody>
    </table>
    <nav class="pagination is-centered">
      <a class="pagination-previous">Previous</a>
      <a class="pagination-next">Next page</a>
    </nav>
    <div class="modal" v-bind:class="{ 'is-active' : modalActive }" >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ name }}</p>
          <button class="delete is-large" @click="onClose"></button>
        </header>
        <section class="modal-card-body">
          <div class="field has-addons" v-for="(each, index) in info[id]">
            <p class="control">
              <a class="button">{{ index }}</a>
            </p>
            <p class="control is-expanded">
              <input type="text" class="input" :value="each">
            </p>
          </div>
        </section>
        <footer class="modal-card-foot">
          <a class="button is-success">Save changes</a>
          <a class="button is-danger" @click="onClose">Cancel</a>
        </footer>
      </div>
    </div>
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
        type: String
      },
      attrs: {
        required: true,
        type: Array
      },
      info: {
        required: true,
        type: Array
      }
    }
  }
</script>

