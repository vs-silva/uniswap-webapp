<template>
  <table v-if="TableUtils.displayTable(tableData)">
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
</template>

<script setup>
import TableUtils from './tableUtils';
import {ref, watchEffect} from 'vue';

const props = defineProps({
  tokensData: {
    type: Object,
    required: false,
    default: () => {}
  }
});

const tableData = ref(TableUtils.generateTableData());

watchEffect(() => {
  const { tokensData } = JSON.parse(JSON.stringify(props));
  tableData.value = TableUtils.generateTableData(tokensData);
});

</script>
