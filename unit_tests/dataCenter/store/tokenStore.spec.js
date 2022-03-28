import TokenStore from '../../../src/dataCenter/store/services/tokenStore';

describe('Token store unit tests', () => {

    test('Store service throws error if client is not provided', () => {

        const mocked = jest.fn(TokenStore);
        const expected = Error('ERROR::: GraphQL client must be provided :: REPORTED BY::: Tokens store service');
        const result = mocked();

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith();
        expect(result).toMatchObject(expected);

    });

});
