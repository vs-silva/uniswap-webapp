<template>
  <div>
    <p>{{$t(SearchLabels.label)}}</p>
    <input type="text" v-model="search" @change="searchUtils.emitChange(search)" />
  </div>
</template>

<script setup>
import SearchLabels from './searchLabels';
import SearchUtils from './searchUtils';
import {ref} from 'vue';

const emit = defineEmits([
  'update:tokens-search'
]);

const searchUtils = SearchUtils(emit);
const search = ref('');

</script>
