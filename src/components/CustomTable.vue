<template>
  <table class="table">
  <thead>
    <tr>
      <th v-for="h in head" class="has-text-centered"> {{ h }} </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(b, i) in body" :key="i">
      <td v-for="(each, j) in b" :key="j">
        <div v-if="each.link !== undefined">
          <router-link v-if="each.link.type === 'IN'" :to="each.link.value">
            {{ each.value }}
          </router-link>
          <a v-else-if="each.link.type === 'OUT'" :href="each.link.value">
            {{ each.value }}
          </a>
        </div>
        <div v-bind:class="{'tag is-danger': each.isTag }" v-else>
          {{ each.value }}
        </div>
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
