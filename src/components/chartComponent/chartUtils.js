import ChartLabels from './chartLabels';
import ChartManager from '../../chartManager';
import { Translate } from '../../langResources';
import ErrorManager from '../../errorManager';

export default (props, chartContainer) => {

    if(!props || !chartContainer) {
        return ErrorManager.processError({
            error: 'Required params must be provided',
            reporter: 'Chart Utils'
        });
    }

    let chart;

    function generateChart(charType) {

        if(chart) {
            chart.destroy();
        }

        chart = ChartManager.createChart(chartContainer.value, {
            type: charType
        });

        updateChart(props);
    }

    function updateChart(props) {
        const chartData = generateChartData(extractTokensData(props));

        if(chart) {
            ChartManager.updateChart(chart, chartData);
        }
    }

    function generateChartData(tokensData) {
        const result = {
            labels: [],
            datasets: [{
                label: '',
                data: [],
                backgroundColor: []
            }]
        };

        if(!tokensData) {
            return result;
        }

        result.datasets[0].label = Translate(ChartLabels.title);

        tokensData.forEach(item => {
            result.labels.push(`${item.name} ( ${item.symbol} )`);
            result.datasets[0].data.push(item.tvlUSD);
            result.datasets[0].backgroundColor.push(generateRandomColor());
        });

        return result;
    }

    function generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    function extractTokensData(props) {
        const { tokensData } = JSON.parse(JSON.stringify(props));
        return tokensData;
    }

    return {
        generateChart,
        updateChart
    };
};
