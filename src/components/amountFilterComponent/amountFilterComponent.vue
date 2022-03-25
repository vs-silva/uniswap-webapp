<template>
  <div>
    <p class="content is-small m-0 is-unselectable has-text-left has-text-weight-semibold">{{ $t(AmountFilterLabels.filterLabel) }}</p>
    <input
        type="number"
        v-model="amount"
        @change="emitChange"
        :min="amountFilterUtils.minRequestAmount"
        :max="amountFilterUtils.maxRequestAmount"
        class="input is-small"/>
  </div>
</template>

<script setup>
import AmountFilterLabels from './amountFilterLabels';
import AmountFilterUtils from './amountFilterUtils';
import {ref} from "vue";

const emit = defineEmits([
  'update:tokens-amount'
]);

const amountFilterUtils = AmountFilterUtils(emit);
const amount = ref(amountFilterUtils.minRequestAmount);

function emitChange() {
  amount.value = amountFilterUtils.validateRequestedAmount(amount.value);
  amountFilterUtils.updateAmountRequest(amount.value);
}

</script>
