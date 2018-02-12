<template>
  <div>
  <div class="banner">
    <div class="banner-container">
      <div class="banner-overlay"></div>
      <img src="../../assets/img/UNC_logo_white.png" class="unc-logo" />
    </div>
    <div class="row">
      <div class="offset-8 col-md-4">
        <div class="application">
          <div class="department">
            ITS Workgroup Services
          </div>
          <div class="app-name">
            Self Service
          </div>
          <div class="features">
            Active Directory,Exchange,Heelmail,Listserv,MassMail
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="mnu">
      <ul class="list-inline">
        <li class="list-inline-item btn btn-primary">Home</li>
        <li class="list-inline-item btn btn-primary">List Manager</li>
        <li class="list-inline-item btn btn-primary">Mass Mail</li>
        <li class="list-inline-item btn btn-primary">Win Tools</li>
        <li class="list-inline-item btn btn-primary">Office365 Groups</li>
      </ul>
    </div></div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>

</style>
