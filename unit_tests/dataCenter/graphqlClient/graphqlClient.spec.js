import GraphQLClient from '../../../src/dataCenter/graphqlClient';
import TokensQuery from '../../../src/dataCenter/graphqlQueries/tokensQuery';

describe('GraphQL Client unit tests', () => {

    test('Get throws error is required params is not provided',  async () => {

        const mocked = jest.fn(GraphQLClient.get);
        const expected = Error('ERROR::: Query must be provided :: REPORTED BY::: Get function - GraphQL service');
        const result = await mocked();

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith();
        expect(result).toMatchObject(expected);

    });

    test('Get fetches tokens data if required params are correctly provided',  async () => {

        const mocked = jest.fn(GraphQLClient.get);
        const expected = 'Token';
        const payload = TokensQuery({
            name: '',
            orderBy: 'totalValueLockedUSD',
            orderDirection: 'desc',
            amount: 1,
            skipAmount: 0
        });

        const result = await mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toBeDefined();
        expect(result.length).toBe(1);
        expect(result[0].__typename).toMatch(expected);

    });

    test('Get throws catch error is required params is not provided',  async () => {

        const mocked = jest.fn(GraphQLClient.get);
        const payload = TokensQuery({
            name: '',
            orderDirection: 'desc',
            amount: 1,
            skipAmount: 0
        });

        const expected = Error('ERROR::: Error: GraphQL error: Invalid value provided for argument `orderBy`: Enum("undefined") :: REPORTED BY::: Get function - GraphQL service');
        const result = await mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toMatchObject(expected);

    });

});
