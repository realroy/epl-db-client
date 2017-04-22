import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

import {
  AdminPage,
  ClubPage,
  ClubDetail,
  Dashboard,
  FixturePage,
  HomePage,
  LoginPage,
  ManagerPage,
  PlayerDetail,
  PlayerPage,
  ResultPage,
  TablePage
} from '@/pages'

import { PlayerTable, ClubOverview, FixtureTable, ClubStats } from '@/components'

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
      path: '/club/:id',
      name: 'ClubDetail',
      redirect: '/club/:id/overview',
      component: ClubDetail,
      children: [
        { path: 'overview', component: ClubOverview },
        { path: 'squad', component: PlayerTable },
        {
          beforeEnter: (to, from, next) => {
            console.log(this)
          },
          path: 'fixtures',
          component: FixtureTable,
          props: {}
        },
        { path: 'results', component: PlayerTable },
        { path: 'stats', component: ClubStats }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminPage,
      children: [
        { beforeEnter: redirectToDashBoard, name: 'Admin Login', path: 'login', component: LoginPage },
        { beforeEnter: verifyAuth, name: 'Admin DashBoard', path: 'dashboard', component: Dashboard }
      ]
    }
  ]
})
