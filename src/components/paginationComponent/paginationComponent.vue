<template>

  <div>

    <div class="columns">
      <div class="column">
        <button :disabled="(currentPage < 2)"
                @click="paginationUtils.emitPaginationChange(paginationUtils.paginationOptions.prev)"
                class="button is-small is-fullwidth">
          {{$t(PaginationLabels.prev)}}
        </button>
      </div>

      <div class="column is-one-fifth">
        <p class="content is-small m-0 pt-2 is-fullwidth is-unselectable">{{ currentPage }}</p>
      </div>

      <div class="column">
        <button @click="paginationUtils.emitPaginationChange(paginationUtils.paginationOptions.next)"
                class="button is-small is-fullwidth">
          {{$t(PaginationLabels.next)}}
        </button>
      </div>
    </div>


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
