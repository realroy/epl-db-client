<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <custom-card :name="appearance.name" :info="appearance.info"></custom-card>
      </div>
      <div class="column">
        <custom-card :name="goals.name" :info="goals.info"></custom-card>
      </div>
      <div class="column">
        <custom-card :name="wins.name" :info="wins.info"></custom-card>
      </div>
      <div class="column">
        <custom-card :name="assists.name" :info="assists.info"></custom-card>
      </div>
    </div>

  </div>
</template>

<script>
import { CustomCard } from '@/components'
export default {
  components: {
    CustomCard
  },
  data () {
    return {
      appearance: {
        name: 'Appearance',
        info: [
          { name: '1. Ryan Giggs', value: 632 },
          { name: '2. Paul Scholes', value: 499 },
          { name: '3. Gary Nevile', value: 400 },
          { name: '4. Wayne Rooney', value: 387 },
          { name: '5. Roy Keane', value: 326 },
          { name: '6. Rio Ferdinand', value: 312 },
          { name: '7. Michael Carrick', value: 307 },
          { name: '8. Denis Irwin', value: 296 },
          { name: '9. Patrice Evra', value: 273 },
          { name: '10. Nicky Butt', value: 270 }
        ]
      },
      goals: {
        name: 'Goals',
        info: [
          { name: '1. Ryan Giggs', value: 632 },
          { name: '2. Paul Scholes', value: 499 },
          { name: '3. Gary Nevile', value: 400 },
          { name: '4. Wayne Rooney', value: 387 },
          { name: '5. Roy Keane', value: 326 },
          { name: '6. Rio Ferdinand', value: 312 },
          { name: '7. Michael Carrick', value: 307 },
          { name: '8. Denis Irwin', value: 296 },
          { name: '9. Patrice Evra', value: 273 },
          { name: '10. Nicky Butt', value: 270 }
        ]
      },
      wins: {
        name: 'Wins',
        info: [
          { name: '1. Ryan Giggs', value: 632 },
          { name: '2. Paul Scholes', value: 499 },
          { name: '3. Gary Nevile', value: 400 },
          { name: '4. Wayne Rooney', value: 387 },
          { name: '5. Roy Keane', value: 326 },
          { name: '6. Rio Ferdinand', value: 312 },
          { name: '7. Michael Carrick', value: 307 },
          { name: '8. Denis Irwin', value: 296 },
          { name: '9. Patrice Evra', value: 273 },
          { name: '10. Nicky Butt', value: 270 }
        ]
      },
      assists: {
        name: 'Assists',
        info: [
          { name: '1. Ryan Giggs', value: 632 },
          { name: '2. Paul Scholes', value: 499 },
          { name: '3. Gary Nevile', value: 400 },
          { name: '4. Wayne Rooney', value: 387 },
          { name: '5. Roy Keane', value: 326 },
          { name: '6. Rio Ferdinand', value: 312 },
          { name: '7. Michael Carrick', value: 307 },
          { name: '8. Denis Irwin', value: 296 },
          { name: '9. Patrice Evra', value: 273 },
          { name: '10. Nicky Butt', value: 270 }
        ]
      }
    }
  }
}
</script>
