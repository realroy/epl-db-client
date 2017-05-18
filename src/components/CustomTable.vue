<template>
  <table class="table">
  <thead>
    <tr>
      <th v-for="(attr, index) in attrs" class="has-text-centered" :key="index"> {{ attr }} </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(rows, rowIndex) in info" :key="rowIndex">
      <td v-for="(columns, columnIndex) in rows" @click="onClick(columns.id)">
        <router-link v-if="columns.link" :to="columns.link">{{ columns.value }}</router-link>
        <span v-else-if="columns.hasTag" class="tag is-danger">{{ columns.value }}</span>
        <span v-else>{{ columns.value }}</span>
      </td>
    </tr>
  </tbody>
</table>
</template>
<script>
  export default {
    props: {
      attrs: {
        type: Array,
        required: true,
        default: () => []
      },
      info: {
        type: Array,
        required: true,
        default: () => []
      },
      onClick: {
        type: Function,
        default () {
          return (id) => {}
        }
      }
    }
  }
</script>
