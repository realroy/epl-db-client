<template>
  <div>
    <detail-hero :title="$route.name" :subtitles="[{name: '' , value: 'Welcome to EPL dashboard'}]">
    </detail-hero>
    <div class="columns">
      <div class="column is-2">
        <br>
        <nav class="panel">
          <p class="panel-heading">
            Commands
          </p>
          <div class="panel-block">
            <button class="button is-primary is-fullwidth">New Item</button>
          </div>
          <div class="panel-block">
            <button class="button is-primary is-fullwidth">Select All</button>
          </div>
          <div class="panel-block">
            <button class="button is-primary is-fullwidth">Unselect All</button>
          </div>
          <div class="panel-block">
            <button class="button is-danger is-fullwidth">Delete</button>
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
            :info="info()">
          </content-table>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import { ContentTable, DetailHero, FilterBar } from '@/components'
  export default {
    created () {
      this.onCreate()
    },
    components: {
      ContentTable,
      DetailHero,
      FilterBar
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
        type: Function
      },
      onCreate: {
        default: () => {},
        type: Function
      },
      onUpdate: {
        default: () => {},
        type: Function
      },
      onReset: {
        default: () => {},
        type: Function
      }
    }
  }
</script>
