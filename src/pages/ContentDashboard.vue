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
import ContentManager from './ContentManager'
export default {
  components: {
    'content-manager': ContentManager
  },
  methods: {
    async onPost (data = {}) {
      console.log('onPost')
      const res = await post(this.name.toLowerCase(), data)
      console.log(res)
      await this.refreshInfo()
    },
    async onPut (data = {}) {
      console.log('onPut')
      const res = await put(this.name.toLowerCase(), data)
      console.log(res)
      await this.refreshInfo()
    },
    async onDelete (id = []) {
      console.log('onDelete')
      await id.forEach(async (each) => await del(this.name.toLowerCase(), each))
      await this.refreshInfo()
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
    refreshInfo: {
      type: Function,
      default: () => {}
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
