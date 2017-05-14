import Vue from 'vue'
import Router from 'vue-router'

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
} from '../pages'

import {
  PlayerTable,
  ClubOverview,
  FixtureTable,
  ClubStats,
  ResultLineUp,
  ResultOverview,
  ResultStats
} from '../components'

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
        {
          path: 'overview',
          component: ResultOverview
        },
        {
          path: 'lineup',
          component: ResultLineUp
        },
        {
          path: 'stats',
          component: ResultStats
        }
      ]
    },
    {
      path: '/club/:id',
      name: 'Club Detail',
      redirect: '/club/:id/overview',
      component: ClubDetail,
      children: [
        {
          path: 'overview',
          component: ClubOverview
        },
        {
          path: 'squad',
          component: PlayerTable
        },
        {
          path: 'fixtures',
          component: FixtureTable
        },
        {
          path: 'results',
          component: PlayerTable
        },
        { path: 'stats',
          component: ClubStats
        }
      ]
    },
    {
      beforeEnter (to, from, next) {
        store.state.validAuth ? next() : next('/admin/login')
      },
      path: '/admin',
      name: 'Admin',
      component: AdminPage,
      children: [
        {
          beforeEnter: redirectToDashBoard,
          name: 'Admin Login',
          path: 'login',
          component: LoginPage
        },
        {
          beforeEnter: verifyAuth,
          name: 'Admin Dashboard',
          path: 'dashboard',
          component: Dashboard
        },
        {
          name: 'Fixtures Content Manager',
          path: 'fixtures',
          component: ContentManager
        }
      ]
    }
  ]
})
