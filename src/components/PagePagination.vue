<template>
  <nav class="pagination is-centered">
    <a
      @click="prev"
      class="pagination-previous">
      Previous
    </a>
    <a
      @click="next"
      class="pagination-next">
      Next page
    </a>
  </nav>
</template>

<script>
export default {
  props: {
    onNextPage: {
      type: Function,
      default: () => {}
    },
    onPrevPage: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    next () {
      this.onNextPage()
    },
    prev () {
      this.onPrevPage
    }
  }
}
</script>

