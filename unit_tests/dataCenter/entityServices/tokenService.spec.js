import TokenService from '../../../src/dataCenter/entitiesServices/tokensService';

describe('TokenService unit tests',() => {

    test('Empty array is returned if required param is not provided', () => {

        const mocked = jest.fn(TokenService.convertDTOToEntity);
        const expected = [];
        const result = mocked();

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith();
        expect(result).toMatchObject(expected);
    });

    test('Empty array is returned if required param is an empty array', () => {

        const mocked = jest.fn(TokenService.convertDTOToEntity);
        const payload = [];
        const expected = [];
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toMatchObject(expected);
    });

    test('TokenEntity array is return if proper param is provided', () => {

        const mocked = jest.fn(TokenService.convertDTOToEntity);

        const payload = [{
            id: "0x12b32f10a499bf40db334efe04226cca00bf2d9b",
            name: "UMIIE COIN",
            symbol: "UMIIE",
            totalSupply: "28240",
            totalValueLockedUSD: "1173209145293.138877239859816699963",
            __typename: "Token"
        }];

        const expected =  [{
                id: '0x12b32f10a499bf40db334efe04226cca00bf2d9b',
                name: 'UMIIE COIN',
                symbol: 'UMIIE',
                supply: '28240',
                tvlUSD: 1173209145293.14
            }];

        const result = mocked(payload);
        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toMatchObject(expected);

    });

});
