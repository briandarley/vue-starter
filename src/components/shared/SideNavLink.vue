<template>
  <li
      class="list-group-item btn btn-primary"
      v-bind:class="{active: isActive}"
      v-on:click="navigateTo">
        <i
           class='fa'
           v-bind:class="{'fa-chevron-right': isActive, 'fa-blank': !isActive}"
           ></i> {{title}}
  </li>
</template>
<script>
export default {
  name: 'SideNavLink',
  props: {
    title: '',
    name: {
      type: String,
      default: ''
    },
    route: '',
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    isActive: function () {
      return this.$route.name === this.name
    }
  },
  methods: {
    navigateTo: function (route) {
      this.$router.push({ name: this.name })
    }
  }
}</script>

<style scoped>

</style>
