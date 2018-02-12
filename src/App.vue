<template>
  <div id="app">
  <div class="container">
  <banner/>
  <div class="main-vue">
  <div class="row">
  <div class="col-sm-3">
  <ul class="app-pages list-group">
    <side-nav-link :title="'Welcome'" :route="'/'" :name="'Home'"></side-nav-link>
    <side-nav-link :title="'Email Sign-Up'" :route="'/'" :name="'Provision'"></side-nav-link>
    <side-nav-link :title="'Listserv Subscriptions'" :route="'/'" :name="'ListServSubscriptions'"></side-nav-link>
    <side-nav-link :title="'My Aliases'" :route="'/'" :name="'MyAliases'"></side-nav-link>
    <side-nav-link :title="'My AD Groups'" :route="'/'" :name="'MyAdGroups'"></side-nav-link>
    <side-nav-link :title="'My Resources'" :route="'/'" :name="'MyResources'"></side-nav-link>
  </ul>
  </div>
  <div class="col-sm-9 pr-5 mt-3">
    <router-view />
  </div>
  </div>
  </div>
  </div>
  </div>
</template>

<script>
import banner from './components/shared/Banner.vue'
import sideNavLink from './components/shared/SideNavLink.vue'
export default {
  name: 'App',
  components: {
    banner,
    sideNavLink
  },
  methods: {
    navigateTo () {
      console.log('navigating...')
    }
  }
}
</script>

<style>
#app {
  }
</style>
<style lang="scss">
  </style>
