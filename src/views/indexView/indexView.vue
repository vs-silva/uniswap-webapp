<template>
  <div>

    <div class="mb-5">
      <p class="content is-normal m-0 is-unselectable has-text-left has-text-weight-semibold">{{$t(IndexViewLabels.searchTitle)}}</p>
    </div>

    <div class="mb-6">
      <div class="box mb-5">
        <div class="columns">
          <SearchComponent @update:tokens-search="indexUtils.updateRequestSearch" class="column is-half"/>
          <OrderByFilterComponent :tokensData="tokens" @update:token-sortBy="indexUtils.updateRequestOrderBy" class="column is-one-quarter"/>
          <OrderFilterComponent @update:toggle-sort-order="indexUtils.updateRequestOrderDirection" class="column"/>
          <AmountFilterComponent @update:tokens-amount="indexUtils.updateRequestAmount" class="column"/>
        </div>
      </div>

      <div class="mb-5">
        <PaginationComponent :currentPage="pagination.currentPage" @update:token-pagination="indexUtils.updateRequestSkipAmount"/>
      </div>

    </div>

    <hr/>

    <div class="mb-5">
      <p class="content is-normal m-0 is-unselectable has-text-left has-text-weight-semibold">{{$t(IndexViewLabels.chartTitle)}}</p>
    </div>

    <div class="mb-6">

      <div class="mb-5">
        <ChartComponent :tokensData="tokens"/>
      </div>

      <div class="mb-5">
        <PaginationComponent :currentPage="pagination.currentPage" @update:token-pagination="indexUtils.updateRequestSkipAmount"/>
      </div>

    </div>

    <hr/>

    <div class="mb-5">
      <p class="content is-normal m-0 is-unselectable has-text-left has-text-weight-semibold">{{$t(IndexViewLabels.tableTitle)}}</p>
    </div>

    <div class="mb-6">

      <div class="mb-5">
        <TableComponent :tokensData="tokens"/>
      </div>

      <div class="mb-5">
        <PaginationComponent :currentPage="pagination.currentPage" @update:token-pagination="indexUtils.updateRequestSkipAmount"/>
      </div>

    </div>

  </div>
</template>

<script setup>
import IndexViewLabels from './indexViewLabels';
import IndexViewUtils from './indexViewUtils';
import {onBeforeMount} from 'vue';

//Components
import SearchComponent from '../../components/searchComponent/searchComponent.vue';
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
