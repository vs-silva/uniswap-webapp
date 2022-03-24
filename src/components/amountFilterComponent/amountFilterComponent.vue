<template>
  <div>
    <p>{{ $t(AmountFilterLabels.filterLabel) }}</p>
    <input type="number"
           v-model="amount"
           @change="amountFilterUtils.updateAmountRequest(amount)"
           :min="amountFilterUtils.minRequestAmount"
           :max="amountFilterUtils.maxRequestAmount" />
  </div>
</template>

<script setup>
import AmountFilterLabels from './amountFilterLabels';
import AmountFilterUtils from './amountFilterUtils';
import {onMounted, ref, watchEffect} from "vue";

const emit = defineEmits([
  'update:tokens-amount'
]);

const amountFilterUtils = AmountFilterUtils(emit);
const amount = ref(0);

onMounted(() => {
  amount.value = amountFilterUtils.minRequestAmount;
});

watchEffect(() => {
  amount.value = amountFilterUtils.validateRequestedAmount(amount.value);
});

</script>
