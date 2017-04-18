// mutations.spec.js
import { expect } from 'chai'
import mutations from '../../../src/store/mutations'

// destructure assign mutations
const { GET_ALL_CLUB, GET_RANKING } = mutations

const mockedState = {
  rankings: [],
  clubs: [],
  players: [],
  managers: []
}

describe('mutations', () => {
  it('GET_ALL_CLUB should equal to data that get from Api', () => {
    const data = [
      {
        name: 'Arsenal',
        stadium_name: 'Emirates Statdium',
        official_site: 'http://www.arsenal.com',
        manager_id: 2
      }
    ]
    GET_ALL_CLUB(mockedState, data)
    expect(mockedState.clubs).to.equal(data)
  })
  it('GET_RANKING should equal to data that get from Api', () => {
    const data = [
      {
        team_id: 4,
        played: 31,
        won: 24,
        drawn: 3,
        lost: 4,
        gf: 65,
        ga: '+40',
        points: 75
      }
    ]
    GET_RANKING(mockedState, data)
    expect(mockedState.rankings).to.equal(data)
  })
})
