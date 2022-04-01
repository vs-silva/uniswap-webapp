/**
 * @jest-environment jsdom
 */

import ChartService from '../../src/chartManager/services/chartService';
import Chart from "chart.js/auto";


describe('Chart Service unit tests', () => {

    test('Returns if required params are not provided', () => {

        const mocked = jest.fn(ChartService);
        const expected = Error('ERROR::: Chart engine must be provided :: REPORTED BY::: Chart service');
        const result = mocked();

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith();
        expect(result).toMatchObject(expected);

    });

    test('Enables chart service if required params is provided', () => {

        const mocked = jest.fn(ChartService);
        const payload = Chart;
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toBeDefined();

    });

    test('Create chart returns error if chart container is not provided', () => {

        const chartService = ChartService(Chart);
        const mocked = jest.fn(chartService.createChart);
        const expected = Error('ERROR::: Chart container must be provided :: REPORTED BY::: createChart - Chart service');
        const result = mocked();

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith();
        expect(result).toMatchObject(expected);

    });

    test('Create chart renders a chart if a canvas container is provided', () => {

        const chartService = ChartService(Chart);
        const mocked = jest.fn(chartService.createChart);
        const payload = document.createElement('canvas');
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toBeDefined();

    });

    test('Clear chart throw error if chart is not provided', () => {

        const chartService = ChartService(Chart);
        const mocked = jest.fn(chartService.clearChar);
        const expected = Error('ERROR::: Chart must be provided :: REPORTED BY::: clearChar - Chart service');
        const result = mocked();

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith();
        expect(result).toMatchObject(expected);

    });

    test('Clear chart is able to clear chart data', () => {

        const chartService = ChartService(Chart);
        const mocked = jest.fn(chartService.clearChar);

        const payload = {
          data: {
              labels: ['a','b'],
              datasets: [1,2,3]
          },
          update: () => {}
        };

        mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);

        expect(payload.data.labels).toMatchObject([]);
        expect(payload.data.datasets).toMatchObject([]);

    });

    test('update chart throw error if chart is not provided', () => {

        const chartService = ChartService(Chart);
        const mocked = jest.fn(chartService.updateChart);
        const expected = Error('ERROR::: Required params must be provided :: REPORTED BY::: updateChart - Chart service');
        const result = mocked();

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith();
        expect(result).toMatchObject(expected);

    });

    test('update chart throw error if data is not provided', () => {

        const chartService = ChartService(Chart);
        const mocked = jest.fn(chartService.updateChart);
        const payload = {
            data: {
                labels: ['a','b'],
                datasets: [1,2,3]
            },
            update: () => {}
        };

        const expected = Error('ERROR::: Required params must be provided :: REPORTED BY::: updateChart - Chart service');
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toMatchObject(expected);

    });

    test('update chart updates chart data', () => {

        const chartService = ChartService(Chart);
        const mocked = jest.fn(chartService.updateChart);
        const payload = {
            chart: {
                data: {
                    labels: ['x','y', 'z'],
                    datasets: [7,8,9]
                },
                update: () => {}
            },
            data: {
                labels: ['a', 'b'],
                datasets: [ 1, 2]
            }
        };

        mocked(payload.chart, payload.data);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload.chart, payload.data);
        expect(payload.chart.data.labels).toMatchObject(['a','b']);
        expect(payload.chart.data.datasets).toMatchObject([ 1, 2]);
    });

});
