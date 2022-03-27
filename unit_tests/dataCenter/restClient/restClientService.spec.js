import RestServices from '../../../src/dataCenter/restClient/services';

describe('Rest client services unit tests', () => {

    test('Service throws error if rest engine is not provided', () => {

        const mocked = jest.fn(RestServices);
        const expected = Error('ERROR::: GraphQL engine must be provided :: REPORTED BY::: REST service');
        const result = mocked();

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith();
        expect(result).toMatchObject(expected);

    });
});
