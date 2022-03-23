<template>
  <h1>Index view</h1>
</template>

<script setup>
import IndexViewUtils from './indexViewUtils';
import {onBeforeMount} from "vue";

onBeforeMount(() => {
  console.log('ready to work');
});


console.log(IndexViewUtils);

</script>
