import months from './months'
import days from './days'
import { data } from './clubs'

export const name = 'Fixtures'
export const shortAttrs = ['Home', 'Kick Off', 'Away']
export const attrs = ['id', 'date', 'home_name', 'away_name']
export const filters = [
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
    data
  }
]
