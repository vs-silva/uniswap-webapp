<template>
  <h1>Index view</h1>
  <div>
    <OrderByFilterComponent :tokensData="tokens" @update:token-sortBy="indexUtils.updateRequestOrderBy"/>
    <OrderFilterComponent @update:toggle-sort-order="indexUtils.updateRequestOrderDirection"/>
    <AmountFilterComponent @update:tokens-amount="indexUtils.updateRequestAmount"/>
    <PaginationComponent :currentPage="pagination.currentPage" @update:token-pagination="indexUtils.updateRequestSkipAmount"/>
  </div>
  <ChartComponent :tokensData="tokens"/>
  <TableComponent :tokensData="tokens"/>
</template>

<script setup>
import IndexViewUtils from './indexViewUtils';
import {onBeforeMount} from 'vue';

//Components
import OrderByFilterComponent from '../../components/orderByFilterComponent/orderByFilterComponent.vue';
import AmountFilterComponent from '../../components/amountFilterComponent/amountFilterComponent.vue';
import OrderFilterComponent from '../../components/orderFilterComponent/orderFilterComponent.vue';
import ChartComponent from '../../components/chartComponent/chartComponent.vue';
import TableComponent from '../../components/tableComponent/tableComponent.vue';
import PaginationComponent from '../../components/paginationComponent/paginationComponent.vue';

const indexUtils = IndexViewUtils();

const pagination = indexUtils.pagination;
const tokens = indexUtils.tokens;

onBeforeMount(() => {
  indexUtils.getTokens();
});

</script>
