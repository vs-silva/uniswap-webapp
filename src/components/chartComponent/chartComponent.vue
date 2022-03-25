<template>
  <div>

    <div class="box">
      <p class="content is-small m-0 is-unselectable has-text-left has-text-weight-semibold mb-2">{{$t(ChartLabels.label)}}</p>
      <div class="columns">
        <div v-for="(type, index) in ChartManager.chartType"
             :key="index" class="column">
          <button @click="chartUtils.generateChart(type)" class="button is-small is-fullwidth">
            {{ $t(`chart.type.${type}`) }}
          </button>
        </div>
      </div>
    </div>

    <div>
      <canvas ref="chartContainer" />
    </div>

  </div>
</template>

<script setup>
import ChartLabels from './chartLabels';
import ChartUtils from './chartUtils';
import ChartManager from '../../chartManager';
import {onMounted, ref, watchEffect} from 'vue';

const props = defineProps({
  tokensData: {
    type: Object,
    required: false,
    default: () => {}
  }
});

const chartContainer = ref('');
const chartUtils = ChartUtils(props, chartContainer);

onMounted(() => {
  chartUtils.generateChart(ChartManager.chartType.line);
});

watchEffect(() => {
  chartUtils.updateChart(props);
});
</script>
