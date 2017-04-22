<template>
  <table class="table">
  <thead>
    <tr>
      <th v-for="h in head" class="has-text-centered"> {{ h }} </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(b, i) in body" :key="i">
      <td v-for="each in b">
        <router-link v-if="each.link !== undefined" :to="each.link">{{ each.value }}</router-link>
        <span v-else-if="each.hasTag" class="tag is-danger">{{ each.value }}</span>
      </td>
    </tr>
  </tbody>
</table>
</template>
<script>
  export default {
    props: {
      head: {
        type: Array,
        required: true,
        default () {
          return []
        }
      },
      body: {
        type: Function,
        required: true
      }
    }
  }
</script>
