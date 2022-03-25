<template>
  <div>
    <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          <a :href="route.path">{{route.name}}</a>
        </li>
      </ul>
    </nav>
    <hr/>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
import {ref} from "vue";

const router = useRouter();
const routes = ref(router.getRoutes());
</script>

