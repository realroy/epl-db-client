<template>
  <table class="table">
  <thead>
    <tr>
      <th v-for="h in head"> {{ h }} </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(b, index) in body">
      <td>{{ index + 1 }}</td>
      <td>
        <router-link :to="'/club/' + b.name">
          {{ b.name }}
        </router-link>
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
        type: Array,
        required: true,
        default () {
          return []
        }
      }
    }
  }
</script>
