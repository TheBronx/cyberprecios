<template>
  <div class="home">
    <img src="../assets/logo.png">

    <br>

    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <CategoryList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import CategoryList from './CategoryList.vue'

export default {
  name: 'Home',
  components: {
    CategoryList
  }
};
</script>

<style scoped>
</style>
