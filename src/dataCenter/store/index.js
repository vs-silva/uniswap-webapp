import GraphQLClient from '../graphqlClient';

//stores
import TokensStore from './services/tokenStore';

export default {
    tokensStore: TokensStore(GraphQLClient)
}
