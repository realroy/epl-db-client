import { data } from './clubs'
import position from './positions'
import nationality from './nationality'

export const name = 'Players'
export const attrs = ['id', 'number', 'name', 'club_id', 'position', 'nationality', 'dob', 'height', 'weight']
export const filters = [
  {
    name: 'Filter by club',
    type: 'club_name',
    data: data
  },
  {
    name: 'Filter by position',
    type: 'position',
    data: position
  },
  {
    name: 'Filter by nationality',
    type: 'nationality',
    data: nationality
  }
]

