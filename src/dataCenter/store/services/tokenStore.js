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

    const { defaultRequestParams } = Config.api.graphql;

    async function getTokens({name = defaultRequestParams.name, orderBy = defaultRequestParams.orderBy, orderDirection = defaultRequestParams.orderDirection, amount = defaultRequestParams.first, skipAmount = defaultRequestParams.skip}) {

        const tokens = await client.get(TokensQuery({
            name: name,
            orderBy: orderBy,
            orderDirection: orderDirection ,
            amount: amount,
            skipAmount: skipAmount,
        }));

        return TokensService.convertDTOToEntity(tokens);
    }

    return {
        getTokens
    };
};
