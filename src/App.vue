<template>
  <div class="container is-max-desktop">
    <HeaderComponent />
    <NavigationComponent />
    <router-view/>
  </div>
</template>

<script setup>
import HeaderComponent from './components/hearderComponent/headerComponent.vue';
import NavigationComponent from './components/navigationComponent/navigationComponent.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
