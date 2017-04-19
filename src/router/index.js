import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/Home'
import ClubPage from '@/pages/Clubs'
import ManagerPage from '@/pages/Managers'
import PlayerPage from '@/pages/Players'
import PlayerDetail from '@/pages/PlayerDetail'
import ClubDetail from '@/pages/ClubDetail'
import PlayerTable from '@/components/PlayerTable'

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
      path: '/player/:id',
      name: 'PlayerDetail',
      component: PlayerDetail
    },
    {
      path: '/club/:name',
      name: 'ClubDetail',
      component: ClubDetail,
      children: [
        { path: 'overview', component: PlayerTable },
        { path: 'squad', component: PlayerTable },
        { path: 'fixtures', component: PlayerTable },
        { path: 'results', component: PlayerTable },
        { path: 'stats', component: PlayerTable }
      ]
    }

  ]
})
