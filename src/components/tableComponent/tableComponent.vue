<template>
  <div class="table-container">
    <table v-if="tableUtils.displayTable(props)" class="table is-hoverable is-fullwidth">
      <thead>
      <tr class="table-header-row">
        <th class="table-column-name">{{$t(tableData.header.name)}}</th>
        <th class="table-column-symbol">{{$t(tableData.header.symbol)}}</th>
        <th class="table-column-supply">{{$t(tableData.header.supply)}}</th>
        <th class="table-column-tvlUSD">{{$t(tableData.header.tvlUSD)}}</th>
      </tr>
      </thead>
      <tbody>
      <tr class="table-item-row" v-for="(item, index) in tableData.items" :key="index" :id="item.id">
        <td class="table-item-name">{{item.name}}</td>
        <td class="table-item-symbol">{{item.symbol}}</td>
        <td class="table-item-supply">{{item.supply}}</td>
        <td class="table-item-tvlUSD">${{item.tvlUSD}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import TableUtils from './tableUtils';
import {onMounted, watchEffect} from 'vue';

const props = defineProps({
  tokensData: {
    type: Object,
    required: false,
    default: () => {}
  }
});

const tableUtils = TableUtils(props);
const tableData = tableUtils.tableData;

onMounted(() => {
  tableData.value = tableUtils.generateTableData();
});

watchEffect(() => {
  tableUtils.updateTable(props);
});

</script>
