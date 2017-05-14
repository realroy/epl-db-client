<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">
        {{ name }}
      </div>
    </div>
    <div class="card-content">
      <div class="content">
        <div class="columns is-mutiline" v-for="(each, index) in info" :key="index">
          <div class="column is-6">
            <h5>{{ each.name }}</h5>
          </div>
          <div class="column is-6 has-text-right">
            <span>{{ each.value }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  props: {
    name: {
      required: true,
      type: String,
      default: ''
    },
    info: {
      required: true,
      type: Array,
      default: ''
    }
  }
}
</script>
