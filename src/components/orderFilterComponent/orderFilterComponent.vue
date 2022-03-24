<template>
  <div>
    <p>{{$t(OrderFilterLabels.filterLabel)}}</p>
    <button
      v-if="toggleLabel"
      @click="toggle"
    >{{$t(toggleLabel)}}</button>
  </div>
</template>

<script setup>
import OrderFilterLabels from './orderFilterLabels';
import OrderFilterUtils from './orderFilterUtils';
import {ref} from "vue";

const emit = defineEmits([
  'update:toggle-sort-order'
]);

const orderFilterUtils = OrderFilterUtils(emit);
const isInDescOrder = ref(true);
const toggleLabel = ref(OrderFilterLabels.orderDescending);

function toggle() {
  const result = orderFilterUtils.toggleSortDirection(isInDescOrder.value);
  isInDescOrder.value = result.isInDescOrder;
  toggleLabel.value = result.label;
}

</script>
