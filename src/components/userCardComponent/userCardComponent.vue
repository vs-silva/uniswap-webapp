<template>

  <div v-if="userCardData">

    <div>

      <div class="columns is-flex is-centered">
        <figure class="image is-128x128">
          <img :src="userCardData.avatarURL" alt="developer image" class="is-rounded">
        </figure>
      </div>

      <h1 class="has-text-weight-semibold is-unselectable">{{userCardData.name}}</h1>
      <p class="m-0 mb-2 is-unselectable">{{$t(UserCardLabels.subtitle)}}</p>

      <a :href="userCardData.bio" target="_blank" class="button mr-1">
        <font-awesome-icon icon="globe"></font-awesome-icon>
      </a>

      <a href="mailto:me@vitalinosilva.com" class="button ml-1">
        <font-awesome-icon icon="envelope"></font-awesome-icon>
      </a>

    </div>

  </div>
</template>

<script setup>
import UserCardLabels from './userCardLabels';
import UserCardUtils from './userCardUtils';
import {watchEffect} from "vue";

const props = defineProps({
  userData: {
    type: Object,
    required: false,
    default: () => {}
  }
});

const userCardUtils = UserCardUtils(props);
const userCardData = userCardUtils.userCardData;

watchEffect(() => {
  userCardUtils.updateCard(props);
});

</script>

