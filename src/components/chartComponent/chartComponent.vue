<template>
  <div v-if="ChartUtils.displayChart(chartData)">
    <div>
      <button
          v-for="(chartType, index) in ChartManager.chartType"
          :key="index"
          @click="generateChart(chartType)">
        {{ $t(`chart.type.${chartType}`) }}
      </button>
    </div>
    <canvas ref="chartContainer" />
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
const chartData = ref(null);
let tokensChart;

onMounted(() => {
  generateChart(ChartManager.chartType.line);
});

watchEffect(() => {
  updateChart();
});

function generateChart(charType) {

  if(tokensChart) {
    tokensChart.destroy();
  }

  tokensChart = ChartManager.createChart(chartContainer.value, {
    type: charType
  });

  updateChart();
}

function updateChart() {
  chartData.value = ChartUtils.processPropsTokensData(props);

  if(tokensChart) {
    ChartManager.updateChart(tokensChart, chartData.value);
  }
}

</script>
