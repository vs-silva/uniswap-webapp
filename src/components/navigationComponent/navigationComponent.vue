<template>
  <div>

    <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
      <ul>
        <li v-for="(route, index) in routes" :key="index" :class="{ 'is-active' : route.meta.isActive }">
          <a :href="route.path" class="has-text-grey-dark is-capitalized" :class="{ 'is-underlined' : route.meta.isActive}">{{route.name}}</a>
        </li>
      </ul>
    </nav>

    <hr />
  </div>
</template>

<script setup>
import NavigationUtils from './navigationUtils';
import {useRouter} from 'vue-router';
import {watchEffect} from "vue";

const navigationUtils = NavigationUtils(useRouter());
const routes = navigationUtils.routes;

watchEffect(() => {
  navigationUtils.activateRouteLink();
});

</script>
