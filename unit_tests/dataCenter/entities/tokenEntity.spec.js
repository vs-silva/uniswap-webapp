import TokenEntity from '../../../src/dataCenter/entities/tokenEntity';

describe('TokenEntity unit tests',() => {

    test('Token entity is generated with default values',() => {

        const mocked = jest.fn(TokenEntity);
        const expected = { id: '', name: '', symbol: '', supply: 0, tvlUSD: 0 };
        const payload = {};
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toMatchObject(expected);

    });

    test('Token entity is generated if generated with provided values',() => {

        const mocked = jest.fn(TokenEntity);
        const payload = { id: '1', name: 'Test Coin', symbol: 'TCOIN', supply: 100, tvlUSD: 2000 };
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toMatchObject(payload);

    });

});
