<template>
  <div class="container">
  <banner/>
    <div class="main-vue">
      <div class="row">
        <div class="col-sm-3">
          <ul class="app-pages list-group">
            <li class="list-group-item btn btn-primary active"><i class='fa fa-chevron-right'></i> Welcome</li>
            <li class="list-group-item btn btn-primary"> Email Sign-Up</li>
            <li class="list-group-item btn btn-primary">Listserv Subscriptions</li>
            <li class="list-group-item btn btn-primary">My Aliases</li>
            <li class="list-group-item btn btn-primary">My AD Groups</li>
            <li class="list-group-item btn btn-primary">My Resources</li>
          </ul>
        </div>
        <div class="col-sm-9">
          <p class="py-4">
  Welcome to the ITS Email Self Service Site. Use the links on this site to perform actions such as creating an email account, requesting an alias or automating calendar events. Some users will get an Exchange account and some will get a Heelmail account. 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import banner from './Banner.vue'

export default {
  name: 'SelfService',
  data () {
    return {
      msg: 'SelfService'
    }
  },
  created () {},
  computed: { },
  methods: { },
  components: {
    banner
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
