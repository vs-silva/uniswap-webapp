<template>
  <div class="container is-max-desktop">

    <div class="mb-5">
      <h1 class="content is-unselectable is-size-1 has-text-left m-0">{{$t('app.title')}}</h1>
      <p class="content is-normal m-0 is-unselectable has-text-left has-text-weight-semibold">{{$t('app.subtitle')}}</p>
    </div>

    <hr/>

    <router-view/>
  </div>
</template>

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
