<template>
  <div>
    <div class="mb-5">
      <h1 class="content is-unselectable is-size-1 has-text-left m-0">{{$t(HeaderLabels.title)}}</h1>
      <p class="content is-normal m-0 is-unselectable has-text-left has-text-weight-semibold">{{$t(HeaderLabels.subtitle)}}</p>
    </div>

    <hr/>
  </div>
</template>

<script setup>
import HeaderLabels from './headerLabels';
</script>
