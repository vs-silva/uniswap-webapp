<template>
  <h1>Index view</h1>
  <div>
    <OrderByFilterComponent :tokensData="tokens" @update:token-sortBy="indexUtils.updateRequestOrderBy"/>
    <OrderFilterComponent @update:toggle-sort-order="indexUtils.updateRequestOrderDirection"/>
    <AmountFilterComponent @update:tokens-amount="indexUtils.updateRequestAmount"/>
  </div>
  <ChartComponent :tokensData="tokens"/>
  <TableComponent :tokensData="tokens"/>
</template>

<script setup>
import IndexViewUtils from './indexViewUtils';
import {onBeforeMount, ref} from 'vue';

//Components
import TableComponent from '../../components/tableComponent/tableComponent.vue';
import ChartComponent from '../../components/chartComponent/chartComponent.vue';
import OrderByFilterComponent from '../../components/orderByFilterComponent/orderByFilterComponent.vue';
import AmountFilterComponent from '../../components/amountFilterComponent/amountFilterComponent.vue';
import OrderFilterComponent from '../../components/orderFilterComponent/orderFilterComponent.vue';

const indexUtils = IndexViewUtils();
const tokens = ref(null);

onBeforeMount(() => {
  indexUtils.getTokens().then(res => {
    tokens.value = res;
  });
});

</script>
