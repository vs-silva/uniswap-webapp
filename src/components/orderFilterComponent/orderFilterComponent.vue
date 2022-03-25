<template>

  <div>
    <p class="content is-small m-0">{{$t(OrderFilterLabels.filterLabel)}}</p>

    <div>
      <button v-if="toggleLabel"
          @click="orderFilterUtils.toggleSortDirection(isInDescOrder)"
          class="button is-small is-fullwidth"
      >{{$t(toggleLabel)}}</button>
    </div>

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
