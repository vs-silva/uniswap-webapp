<template>

  <div>
    <p class="content is-small m-0 is-unselectable has-text-left has-text-weight-semibold">{{$t(SearchLabels.label)}}</p>

    <div class="control has-icons-left">
      <input
          type="text" v-model="search"
          @change="searchUtils.emitChange(search)"
          :placeholder="$t(SearchLabels.placeholder)"
          class="input is-small"/>
      <span class="icon is-small is-left">
      <font-awesome-icon icon="search"></font-awesome-icon>
    </span>
    </div>

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
