import months from './months'
import days from './days'
import { list } from './clubs'

export default {
  name: 'Fixtures',
  attrs: ['id', 'date', 'home', 'away'],
  filters: [
    {
      name: 'Filter by month',
      type: 'month',
      data: months
    },
    {
      name: 'Filter by day',
      type: 'day',
      data: days
    },
    {
      name: 'Filter by club',
      type: 'club_name',
      data: list
    }
  ]
}
