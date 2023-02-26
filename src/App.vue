<template>
  
    <NavbarView/>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <router-view />
      </div>
    </div>
  </div>
  
  </template>

<script>
import NavbarView from './components/NavbarView.vue';

export default {
  components: {
    NavbarView
  }
  
}
</script>

<style scoped>
</style>
