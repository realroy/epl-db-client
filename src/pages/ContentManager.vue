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
            v-if="filters.length > 0"
            :name="name"
            :filters="filters"
            :onUpdate="onUpdate"
            :onReset="onReset">
          </filter-bar>
          <br>
          <content-table
            :name="name"
            :attrs="attrs"
            :info="info"
            :handleSelectAll="onSelectAll"
            :handleClick="onClickTable">
          </content-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ContentModal,
  ContentTable,
  DetailHero,
  FilterBar
} from '../components'
export default {
  components: {
    ContentModal,
    ContentTable,
    DetailHero,
    FilterBar
  },
  computed: {
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
      this.handleDelete(this.id)
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
      this.info.map((each) => {
        each.isSelected = true
        return each
      })
    },
    onSelect (id = 1) {
      this.selected[id] = id
      this.id = id
    },
    onUnselectAll () {
      this.selected = {}
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
    attrs: {
      required: true,
      type: Array
    },
    filters: {
      type: Array,
      default: () => []
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
    }
  }
}
</script>
