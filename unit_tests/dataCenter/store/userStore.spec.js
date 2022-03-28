import UserStore from '../../../src/dataCenter/store/services/userStore';

describe('Token store unit tests', () => {

    test('Store service throws error if client is not provided', () => {

        const mocked = jest.fn(UserStore);
        const expected = Error('ERROR::: REST client must be provided :: REPORTED BY::: User store service');
        const result = mocked();

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith();
        expect(result).toMatchObject(expected);

    });

});
