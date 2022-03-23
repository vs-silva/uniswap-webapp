<template>
  <h1>Index view</h1>
  <TableComponent :tokensData="tokens"/>
</template>

<script setup>
import IndexViewUtils from './indexViewUtils';
import {onBeforeMount, ref} from 'vue';

//Components
import TableComponent from '../../components/tableComponent/tableComponent.vue';

const tokens = ref(null);

onBeforeMount(() => {
  IndexViewUtils.getTokens().then(res => {
    tokens.value = res;
  });
});

</script>
