<template>
  <div>
    <detail-hero :title="$route.name" :subtitles="[{name: '' , value: 'Welcome to EPL dashboard'}]">
    </detail-hero>
    <div class="columns">
      <content-modal
        :name="name"
        :isActive="isModalActive"
        :info="(mode === 'INSERT') ? templateInfo : info[id]"
        :handleSave="onSaveModal"
        :handleClose="onCloseModal">
      </content-modal>
      <div class="column is-2">
        <br>
        <nav class="panel">
          <p class="panel-heading">
            Commands
          </p>
          <div class="panel-block">
            <button
              @click="onNew"
              class="button is-primary is-fullwidth">New Item</button>
          </div>
          <div class="panel-block">
            <button
              @click="onSelectAll"
              class="button is-primary is-fullwidth">Select All</button>
          </div>
          <div class="panel-block">
            <button
              @click="onUnselectAll"
              class="button is-primary is-fullwidth">Unselect All</button>
          </div>
          <div class="panel-block">
            <button 
              @click="onDelete"
              class="button is-danger is-fullwidth">Delete</button>
          </div>
        </nav>
      </div>
      <div class="column">
        <div class="container">
          <br>
          <filter-bar
            v-if="filterInfo.length > 0"
            :name="name"
            :filters="filters"
            :onUpdate="onUpdate"
            :onReset="onReset">
          </filter-bar>
          <br>
          <page-pagination
            :onNextPage="handleNextPage"
            :onPrevPage="handlePrevPage">
          </page-pagination>
          <br>
          <div>
            <table class="table is-bordered is-narrow">
              <thead>
                <tr>
                  <th></th>
                  <th v-for="(attr, index) in attrs" :key="index">
                    {{ attr }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(rows, rowIndex) in info">
                  <td>
                    <input
                    :id="`${rowIndex}`"
                    :value="rows.id"
                    type="checkbox"
                    v-model="selected">
                  </td>
                  <td v-for="(value, key) in rows">
                    <span @click="onClickTable(rowIndex)">{{ typeof value === 'boolean' ? '': value }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ContentModal,
  DetailHero,
  FilterBar,
  PagePagination
} from '../components'
export default {
  name: 'content-manager',
  components: {
    ContentModal,
    DetailHero,
    FilterBar,
    PagePagination
  },
  computed: {
    attrs () {
      return Object.keys(this.info[0]) || []
    },
    templateInfo () {
      return this.attrs.reduce((prev, key) => {
        prev[key] = ''
        return prev
      }, {})
    }
  },
  data () {
    return {
      id: 0,
      mode: 'DEFAULT' || 'INSERT' || 'UPDATE' || 'DELETE',
      isModalActive: false,
      selected: []
    }
  },
  methods: {
    onDelete () {
      this.handleDelete(this.selected)
    },
    onClickTable (id) {
      this.id = id
      this.isModalActive = true
      this.mode = 'UPDATE'
    },
    onCloseModal () {
      this.isModalActive = false
      this.mode = 'DEFAULT'
    },
    onSelectAll () {
      this.selected = this.info.map(each => each.id)
    },
    onUnselectAll () {
      this.selected = []
    },
    async onSaveModal (data) {
      switch (this.mode) {
        case 'INSERT':
          await this.handlePost(data)
          break
        case 'UPDATE':
          await this.handlePut(data)
          break
        case 'DELETE':
          await this.handleDelete(data.id)
          break
        default:
          break
      }
      console.log(this.mode, data)
      this.isModalActive = false
      this.mode = 'DEFAULT'
    },
    onNew () {
      this.mode = 'INSERT'
      this.isModalActive = true
    }
  },
  props: {
    name: {
      required: true,
      type: String
    },
    filterInfo: {
      type: Array,
      default: () => []
    },
    filters: {
      type: Object,
      default: () => {}
    },
    info: {
      required: true,
      type: Array
    },
    handleUpdate: {
      default: () => {},
      type: Function
    },
    handleReset: {
      default: () => {},
      type: Function
    },
    handlePost: {
      default: () => {},
      type: Function
    },
    handlePut: {
      default: () => {},
      type: Function
    },
    handleDelete: {
      default: () => {},
      type: Function
    },
    handleNextPage: {
      default: () => {},
      type: Function
    },
    handlePrevPage: {
      default: () => {},
      type: Function
    }
  }
}
</script>
