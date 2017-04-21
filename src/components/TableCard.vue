<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Table
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <custom-table></custom-table>
      </div>
    </div>
  </div>
</template>

<script>
import CustomTable from './CustomTable'
export default {
  components: {
    CustomTable
  }
}
</script>
