import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SelfService from '@/components/SelfService'
import Provision from '@/components/Provision'
import ListServSubscriptions from '@/components/ListServSubscriptions'
import MyAliases from '@/components/MyAliases'
import MyResources from '@/components/MyResources'
import MyAdGroups from '@/components/MyAdGroups'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/self-service',
      name: 'SelfService',
      component: SelfService
    },
    {
      path: '/provision',
      name: 'Provision',
      component: Provision
    },
    {
      path: '/listserv-subscriptions',
      name: 'ListServSubscriptions',
      component: ListServSubscriptions
    },
    {
      path: '/my-aliases',
      name: 'MyAliases',
      component: MyAliases
    },
    {
      path: '/my-resources',
      name: 'MyResources',
      component: MyResources
    },
    {
      path: '/my-ad-groups',
      name: 'MyAdGroups',
      component: MyAdGroups
    }
  ]
})
