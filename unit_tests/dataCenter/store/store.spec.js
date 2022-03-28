import Store from '../../../src/dataCenter/store';

describe('Store unit tests', () => {

    test('Get tokens performs default request if no args are provided', async () => {

        const tokenStore = Store.tokensStore;
        const mocked = jest.fn(tokenStore.getTokens);
        const result = await mocked();

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith();
        expect(result).toBeDefined();

    });

    test('Get user performs default request if no args are provided', async () => {

        const tokenStore = Store.userStore;
        const mocked = jest.fn(tokenStore.getUser);
        const result = await mocked();

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith();
        expect(result).toBeDefined();

    });

});
