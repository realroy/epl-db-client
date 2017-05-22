<template>
  <content-manager
    :name="name"
    :attrs="attrs"
    :info="info"
    :handlePost="onPost"
    :handlePut="onPut"
    :handleDelete="onDelete"
    :handleNextPage="handleNextPage"
    :handlePrevPage="handlePrevPage">
  </content-manager>
</template>

<script>
import { post, put, del } from '../libs'
import { ContentManager } from './index'
export default {
  components: {
    ContentManager
  },
  methods: {
    async onPost (data = {}) {
      await post(this.name.toLowerCase(), data)
      await this.fetchInfo()
    },
    async onPut (data = {}) {
      await put(this.name.toLowerCase(), data)
      await this.fetchInfo()
    },
    async onDelete (id = 0) {
      await del(this.name.toLowerCase(), id)
      await this.fetchInfo()
    }
  },
  props: {
    attrs: {
      type: Array,
      default: () => [],
      required: true
    },
    info: {
      type: Array,
      default: () => [],
      required: true
    },
    filterInfo: {
      type: Array,
      default: () => []
    },
    limit: {
      type: Number,
      default: 20
    },
    name: {
      type: String,
      required: true
    },
    handleNextPage: {
      type: Function,
      required: true,
      default: () => {}
    },
    handlePrevPage: {
      type: Function,
      required: true,
      default: () => {}
    }
  }
}
</script>
