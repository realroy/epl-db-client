import clubs from './clubs'
import position from './positions'
import nationality from './nationality'

export default {
  name: 'Players',
  attrs: ['id', 'number', 'name', 'club_id', 'position', 'nationality', 'dob', 'height', 'weight', 'img url'],
  filters: [
    {
      name: 'Filter by position',
      type: 'position',
      data: position
    },
    {
      name: 'Filter by club',
      type: 'club_name',
      data: clubs.list
    },
    {
      name: 'Filter by nationality',
      type: 'nationality',
      data: nationality
    }
  ]
}
