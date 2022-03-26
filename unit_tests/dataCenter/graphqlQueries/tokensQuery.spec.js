import TokensQuery from '../../../src/dataCenter/graphqlQueries/tokensQuery';

describe('TokensQuery unit tests', () => {

    test('Returns a graphql query object', () => {

        const mocked = jest.fn(TokensQuery);
        const payload = {};

        const expected = {
            kind: 'OperationDefinition',
            operation: 'query',
            name: undefined,
        };

        const result = mocked(payload);

        const parsedResult = {
            kind: result.definitions[0].kind,
            operation: result.definitions[0].operation,
            name: result.definitions[0].name
        };

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(parsedResult).toMatchObject(expected);

    });

});
