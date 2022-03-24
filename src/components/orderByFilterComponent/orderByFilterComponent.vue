<template>
  <div>
    <p>{{$t(OrderLabels.label)}}</p>
    <select v-model="selectedOption" @change="orderByUtils.emitChange(selectedOption)">
      <option disabled value="">{{$t(OrderLabels.select.placeholder)}}</option>
      <option v-for="(item, index) in orderByData.options" :key="index" :value="item.value" :class="`select-option-${item.value}`">
        {{item.description}}
      </option>
    </select>
  </div>
</template>

<script setup>
import OrderLabels from './orderByFilterLabels';
import OrderByFilterUtils from './orderByFilterUtils';
import {ref, watchEffect} from 'vue';

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
const orderByData = ref(orderByUtils.generateOrderByData(props));
const selectedOption = ref('');
const hasDataContent = ref(false);

watchEffect(() => {
  orderByData.value = orderByUtils.generateOrderByData(props);
  const { options } = orderByData.value;

  if(!options.length) {
    return;
  }

  hasDataContent.value = (options.length > 0);
});

</script>
