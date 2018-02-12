<template>
  <div class="card">
    <div class="card-header">
      Mail Routing
    </div>
    <div class="card-block p-5">
      <p class="card-text">Select an option below to proceed.</p>
      <ul class="list-group">
        <li class="list-group-item btn btn-outline-secondary"><i class="f-size-1 fa fa-eye"></i> Show Aliases</li>
        <li class="list-group-item btn btn-outline-secondary"><i class="f-size-1 fa fa-plus"></i> Add Alias</li>
        <li class="list-group-item btn btn-outline-secondary"><i class="f-size-1 fa fa-minus"></i> Remove Alias</li>
        <li class="list-group-item btn btn-outline-secondary"><i class="f-size-1 fa fa-user-circle"></i> Set Primary</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyAliases',
    data() {
      return {}
    },
    components: {}
  }
</script>

<style scoped>
  .fa
{
  padding-right:20px;
  line-height:40px;
  vertical-align:middle;
}
</style>
