<template>
  <div>
    <p>{{$t(OrderFilterLabels.filterLabel)}}</p>
    <button
      v-if="toggleLabel"
      @click="orderFilterUtils.toggleSortDirection(isInDescOrder)"
    >{{$t(toggleLabel)}}</button>
  </div>
</template>

<script setup>
import OrderFilterLabels from './orderFilterLabels';
import OrderFilterUtils from './orderFilterUtils';

const emit = defineEmits([
  'update:toggle-sort-order'
]);

const orderFilterUtils = OrderFilterUtils(emit);
const isInDescOrder = orderFilterUtils.isInDescOrder;
const toggleLabel = orderFilterUtils.toggleLabel;

</script>
