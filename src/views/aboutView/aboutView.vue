<template>

  <div>
    <div class="mb-5">
      <p class="content is-normal m-0 is-unselectable has-text-weight-semibold">{{$t(AboutViewLabels.cardTitle)}}</p>
    </div>

    <UserCardComponent :userData="user" />
  </div>

</template>

<script setup>
import AboutViewLabels from './aboutViewLabels';
import AboutViewUtils from './aboutViewUtils';
import {onBeforeMount} from 'vue';

//Components
import UserCardComponent from '../../components/userCardComponent/userCardComponent.vue';

const aboutUtils = AboutViewUtils();
const user = aboutUtils.user;

onBeforeMount(() => {
  aboutUtils.getUser();
});

</script>
