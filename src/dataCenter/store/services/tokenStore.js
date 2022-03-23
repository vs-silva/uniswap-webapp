import ErrorManager from '../../../errorManager';
import Config from '../../../config';
import TokensQuery from '../../graphqlQueries/tokensQuery';
import TokensService from '../../entitiesServices/tokensService';

export default (client) => {

    if(!client) {
        ErrorManager.processError({
            error: 'GraphQL client must be provided',
            reporter: 'Tokens store service'
        });
    }

    async function getTokens({orderBy, orderDirection, amount, skipAmount}) {

        const { defaultRequestParams } = Config.api.graphql;

        const tokens = await client.get(TokensQuery({
            orderBy: orderBy || defaultRequestParams.orderBy,
            orderDirection: orderDirection || defaultRequestParams.orderDirection,
            amount: amount || defaultRequestParams.first,
            skipAmount: skipAmount || defaultRequestParams.skip,
        }));

        return TokensService.convertDTOToEntity(tokens);
    }

    return {
        getTokens
    };
};
