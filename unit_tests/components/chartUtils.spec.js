/**
 * @jest-environment jsdom
 */

import ChartUtils from '../../src/components/chartComponent/chartUtils';

describe('Chart Utils unit tests', () => {

    test('Returns Error if required props param is not provided', () => {

        const mocked = jest.fn(ChartUtils);
        const expected = Error('ERROR::: Required params must be provided :: REPORTED BY::: Chart Utils');
        const result = mocked();

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith();
        expect(result).toMatchObject(expected);
    });

    test('Returns Error if required charContainer param is not provided', () => {

        const mocked = jest.fn(ChartUtils);
        const expected = Error('ERROR::: Required params must be provided :: REPORTED BY::: Chart Utils');
        const payload = {
            props: {},
        };
        const result = mocked(payload.props);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload.props);
        expect(result).toMatchObject(expected);
    });

    test('chart utils is generated', () => {

        const mocked = jest.fn(ChartUtils);

        const payload = {
            props: {},
            container: document.createElement('canvas')
        };

        const result = mocked(payload.props, payload.container);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload.props, payload.container);
        expect(result).toBeDefined();

    });


});
