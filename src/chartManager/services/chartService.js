import ErrorManager from '../../errorManager';
import ChartTypes from './chartTypes';

export default (engine) => {

    if(!engine) {
        ErrorManager.processError({
            error: 'Chart engine must be provided',
            reporter: 'Chart service'
        });
    }

    function createChart(container, {type= ChartTypes.line}) {

        if(!container) {
            ErrorManager.processError({
                error: 'Chart container must be provided',
                reporter: 'createChart - Chart service'
            });
        }

        return new engine(container, {
            type: type,
            data: {
                labels:[],
                datasets: [{
                    label: '',
                    data: [],
                    backgroundColor: []
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    function clearChar(chart) {

        if(!chart) {
            ErrorManager.processError({
                error: 'Chart must be provided',
                reporter: 'clearChar - Chart service'
            });
        }

        chart.data.labels = [];
        chart.data.datasets = [];

        chart.update();
    }

    function updateChart(chart, data) {

        if(!chart || !data) {
            ErrorManager.processError({
                error: 'Required params must be provided',
                reporter: 'updateChart - Chart service'
            });
        }

        clearChar(chart);

        data.labels.forEach( label => {
            chart.data.labels.push(label);
        });

        data.datasets.forEach( dataset => {
            chart.data.datasets.push(dataset);
        });

        chart.update();

    }

    return {
      chartType: ChartTypes,
      createChart,
      updateChart,
      clearChar,
    };
};
