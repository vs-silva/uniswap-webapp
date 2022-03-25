<template>
  <div>
    <button :disabled="(currentPage < 2)" @click="paginationUtils.emitPaginationChange(paginationUtils.paginationOptions.prev)">{{$t(PaginationLabels.prev)}}</button>
    <p>{{ currentPage }}</p>
    <button @click="paginationUtils.emitPaginationChange(paginationUtils.paginationOptions.next)">{{$t(PaginationLabels.next)}}</button>
  </div>
</template>

<script setup>
import PaginationLabels from './paginationLabels';
import PaginationUtils from './paginationUtils';

const props = defineProps({
  currentPage: {
    type: Number,
    required: false,
    default: () => 1
  }
});

const emit = defineEmits([
  'update:token-pagination'
]);

const paginationUtils = PaginationUtils(props, emit);
</script>
