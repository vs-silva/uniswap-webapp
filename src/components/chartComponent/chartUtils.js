import ChartLabels from './chartLabels';
import { Translate } from "../../langResources";

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

function processPropsTokensData(props) {
    const { tokensData } = JSON.parse(JSON.stringify(props));
    return generateChartData(tokensData);
}

function displayChart(chartData) {
    const { datasets } = JSON.parse(JSON.stringify(chartData));
    return (datasets.length > 0);
}

export default {
    processPropsTokensData,
    displayChart
}
