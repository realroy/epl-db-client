import Vue from 'vue'
import Router from 'vue-router'
import { mapState } from 'vuex'

import store from '../store'

import {
  AdminPage,
  ClubPage,
  ClubDetail,
  ContentManager,
  Dashboard,
  FixturePage,
  HomePage,
  LoginPage,
  ManagerPage,
  PlayerDetail,
  PlayerPage,
  ResultDetailPage,
  ResultPage,
  TablePage
} from '@/pages'

import { PlayerTable, ClubOverview, FixtureTable, ClubStats, ResultLineUp, ResultOverview, ResultStats } from '@/components'

import fixturesModel from '../models/fixtures'
import clubsModel from '../models/clubs'
import playersModel from '../models/players'
import managerModel from '../models/managers'
import refereesModel from '../models/referees'

Vue.use(Router)

const redirectToDashBoard = (to, from, next) => {
  if (store.state.validAuth) {
    next('admin/dashboard')
  } else {
    next()
  }
}

const verifyAuth = (to, from, next) => {
  store.state.validAuth ? next() : next('/admin/login')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/clubs',
      name: 'Clubs',
      component: ClubPage
    },
    {
      path: '/managers',
      name: 'Managers',
      component: ManagerPage
    },
    {
      path: '/players',
      name: 'Players',
      component: PlayerPage
    },
    {
      path: '/fixtures',
      name: 'Fixtures',
      component: FixturePage

    },
    {
      path: '/results',
      name: 'Results',
      component: ResultPage
    },
    {
      path: '/tables',
      name: 'Table',
      component: TablePage
    },
    {
      path: '/player/:id/',
      name: 'PlayerDetail',
      component: PlayerDetail
    },
    {
      path: '/result/:id',
      name: 'Result Detail',
      redirect: '/result/:id/overview',
      component: ResultDetailPage,
      children: [
        { path: 'overview', component: ResultOverview },
        { path: 'lineup', component: ResultLineUp },
        { path: 'stats', component: ResultStats }
      ]
    },
    {
      path: '/club/:id',
      name: 'Club Detail',
      redirect: '/club/:id/overview',
      component: ClubDetail,
      children: [
        { path: 'overview', component: ClubOverview },
        { path: 'squad', component: PlayerTable },
        {
          beforeEnter: (to, from, next) => {
            store.dispatch('clearFixtures')
            store.dispatch('clearFixtureFilter')
            store.dispatch('updateFixtureFilter', { name: 'club_id', value: to.params.id })
            store.dispatch('getFixtures', { allPage: true })
            next()
          },
          path: 'fixtures',
          component: FixtureTable,
          props: {
            info: store.state.fixtures.fixtures,
            head: fixturesModel.attrs
          }
        },
        { path: 'results', component: PlayerTable },
        { path: 'stats', component: ClubStats }
      ]
    },
    {
      beforeEnter (to, from, next) {
        alert('Enter to admin zone')
        next()
      },
      path: '/admin',
      name: 'Admin',
      component: AdminPage,
      children: [
        { beforeEnter: redirectToDashBoard, name: 'Admin Login', path: 'login', component: LoginPage },
        { beforeEnter: verifyAuth, name: 'Admin Dashboard', path: 'dashboard', component: Dashboard },
        {
          name: 'Fixtures Content Manager',
          path: 'fixtures',
          component: ContentManager,
          props: {
            ...mapState({
              info: state => state.fixtures.fixtures
            }),
            attrs: fixturesModel.attrs,
            name: 'Fixtures',
            filters: fixturesModel.filters,
            onCreate () {
              store.dispatch('getFixtures', { allPage: false })
            },
            onUpdate ({ name, value }) {
              store.dispatch('clearFixtures')
              store.dispatch('updateFixturesFilter', { name, value })
              store.dispatch('resetFixturesPage')
              store.dispatch('getFixtures', { allPage: false })
            },
            onReset () {
              store.dispatch('clearFixtures')
              store.dispatch('clearFixtureFilter')
              store.dispatch('resetFixturesPage')
              store.dispatch('getFixtures', { allPage: false })
            }
          }
        },
        {
          name: 'Results Content Manager',
          path: 'results',
          component: ContentManager,
          props: {
            ...mapState({
              info: state => state.fixtures.fixtures
            }),
            attrs: fixturesModel.attrs,
            name: 'Fixtures',
            filters: fixturesModel.filters,
            onCreate () {
              store.dispatch('getFixtures', { allPage: false })
            },
            onUpdate ({ name, value }) {
              store.dispatch('clearFixtures')
              store.dispatch('updateFixturesFilter', { name, value })
              store.dispatch('resetFixturesPage')
              store.dispatch('getFixtures', { allPage: false })
            },
            onReset () {
              store.dispatch('clearFixtures')
              store.dispatch('clearFixtureFilter')
              store.dispatch('resetFixturesPage')
              store.dispatch('getFixtures', { allPage: false })
            }
          }
        },
        {
          name: 'Clubs Content Manager',
          path: 'clubs',
          component: ContentManager,
          props: {
            ...mapState({
              info: state => state.clubs.clubs
            }),
            attrs: clubsModel.attrs,
            name: 'Clubs',
            filters: [],
            onCreate () {
              store.dispatch('getAllClubs')
            }
          }
        },
        {
          name: 'Players Content Manager',
          path: 'players',
          component: ContentManager,
          props: {
            ...mapState({
              info: state => state.players.players
            }),
            attrs: playersModel.attrs,
            name: 'Players',
            filters: playersModel.filters,
            onCreate () {
              store.dispatch('clearPlayerFilter')
              store.dispatch('resetPlayerPage')
              store.dispatch('clearPlayers')
              store.dispatch('getPlayers', { allPage: false })
            },
            onUpdate ({ name, value }) {
              store.dispatch('clearPlayers')
              store.dispatch('updatePlayersFilter', { name, value })
              store.dispatch('resetPlayerPage')
              store.dispatch('getPlayers', { allPage: false })
            },
            onReset () {
              store.dispatch('clearPlayers')
              store.dispatch('clearPlayersFilter')
              store.dispatch('resetPlayerPage')
              store.dispatch('getPlayers', { allPage: false })
            }
          }
        },
        {
          name: 'Manager Content Manager',
          path: 'managers',
          component: ContentManager,
          props: {
            ...mapState({
              info: state => state.managers
            }),
            attrs: managerModel.attrs,
            name: managerModel.name,
            onCreate () {
              store.dispatch('getManagers')
            },
            onUpdate ({ name, value }) {},
            onReset () {}
          }
        },
        {
          name: 'Referees Content Manager',
          path: 'referees',
          component: ContentManager,
          props: {
            ...mapState({
              info: state => state.managers
            }),
            attrs: refereesModel.attrs,
            name: refereesModel.name,
            onCreate () {},
            onUpdate ({ name, value }) {},
            onReset () {}
          }
        }
      ]
    }
  ]
})
