import GraphQLServices from '../../../src/dataCenter/graphqlClient/services';

describe('GraphQL client services unit tests', () => {

    test('Service throws error if graphql engine is not provided' ,() => {

        const mocked = jest.fn(GraphQLServices);
        const expected = Error('ERROR::: GraphQL engine must be provided :: REPORTED BY::: GraphQL service');
        const result = mocked();

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith();
        expect(result).toMatchObject(expected);

    });
});
