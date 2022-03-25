<template>
  <div>

    <div>
      <button
          v-for="(type, index) in ChartManager.chartType"
          :key="index"
          @click="chartUtils.generateChart(type)">
        {{ $t(`chart.type.${type}`) }}
      </button>
    </div>

    <div>
      <canvas ref="chartContainer" />
    </div>

  </div>
</template>

<script setup>
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
