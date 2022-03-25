<template>

  <div>
    <p class="content is-small m-0 is-unselectable has-text-left has-text-weight-semibold">{{$t(OrderLabels.label)}}</p>

    <div class="select is-small is-fullwidth">
      <select v-model="selectedOption" @change="orderByUtils.emitChange(selectedOption)">
        <option disabled value="">{{$t(OrderLabels.select.placeholder)}}</option>
        <option v-for="(item, index) in orderByData.options" :key="index" :value="item.value" :class="`select-option-${item.value}`">
          {{item.description}}
        </option>
      </select>
    </div>

  </div>

</template>

<script setup>
import OrderLabels from './orderByFilterLabels';
import OrderByFilterUtils from './orderByFilterUtils';
import {watchEffect} from 'vue';

const props = defineProps({
  tokensData: {
    type: Object,
    required: false,
    default: () => {}
  }
});

const emit = defineEmits([
  'update:token-sortBy'
]);

const orderByUtils = OrderByFilterUtils(props, emit);
const orderByData = orderByUtils.orderByData;
const selectedOption = orderByUtils.selectedOption;

watchEffect(() => {
  orderByData.value = orderByUtils.generateOrderByData(props);
  selectedOption.value = orderByData.value.options?.[0]?.value || '';
});

</script>
