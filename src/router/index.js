import Vue from 'vue'
import Router from 'vue-router'

import {
  ClubPage,
  ClubDetail,
  DashboardPage,
  FixturePage,
  HomePage,
  LoginPage,
  ManagerPage,
  PlayerDetail,
  PlayerPage,
  ResultPage
} from '@/pages'

import { PlayerTable, ClubOverview, FixtureTable } from '@/components'

Vue.use(Router)

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
      path: '/player/:id/',
      name: 'PlayerDetail',
      component: PlayerDetail
    },
    {
      path: '/club/:id',
      name: 'ClubDetail',
      component: ClubDetail,
      children: [
        { path: 'overview', component: ClubOverview },
        { path: 'squad', component: PlayerTable },
        { path: 'fixtures', component: FixtureTable },
        { path: 'results', component: PlayerTable },
        { path: 'stats', component: PlayerTable }
      ]
    },
    {
      path: '/admin',
      name: 'Login',
      component: LoginPage,
      children: [
        { path: 'dashboard', component: DashboardPage }
      ]
    }
  ]
})
