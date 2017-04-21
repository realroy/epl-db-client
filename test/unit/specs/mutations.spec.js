// mutations.spec.js
import { expect } from 'chai'
import initState from '../../../src/store/initState'
import mutations from '../../../src/store/mutations'

// destructure assign mutations
const {
  GET_MANAGERS,
  GET_RANKING,
  VALID_AUTH,
  INVALID_AUTH,
  LOGOUT_SUCCESSFULLY
} = mutations

const mockedState = Object.assign({}, initState)

describe('mutations', () => {
  it('GET_MANAGERS expect store.managers to equal the response from API.', () => {
    const data = [
      {
        id: 1,
        name: 'Eddie Howe',
        country_of_birth: 'England',
        dob: '29/11/1977'
      },
      {
        id: 2,
        name: 'Arsène Wenger',
        country_of_birth: 'France',
        dob: '22/10/1949'
      }, {
        id: 3,
        name: 'Sean Dyche',
        country_of_birth: 'England',
        dob: '28/06/1971'
      },
      {
        id: 4,
        name: 'Antonio Conte',
        country_of_birth: 'Italy',
        dob: '31/07/1969'
      }
    ]
    GET_MANAGERS(mockedState, data)
    expect(mockedState.managers).to.equal(data)
  })
  it('GET_RANKING expect store.ranking to equal the response from API.', () => {
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
  it('VALID_AUTH expect store.validAuth to be true when username and password is correct.', () => {
    VALID_AUTH(mockedState)
    expect(mockedState.validAuth).to.be.true
  })
  it('IN_VALID_AUTH expect store.validAuth to be false when username and password is incorrect.', () => {
    INVALID_AUTH(mockedState)
    expect(mockedState.validAuth).to.be.false
  })
  it('LOGOUT_SUCCESSFULLY expect store.validAuth to be false when logout was complete.', () => {
    LOGOUT_SUCCESSFULLY(mockedState)
    expect(mockedState.validAuth).to.be.false
  })
})
