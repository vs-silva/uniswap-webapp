import GraphQLClient from '../graphqlClient';
import RestClient from '../restClient';

//stores
import TokensStore from './services/tokenStore';
import UserStore from './services/userStore';

export default {
    tokensStore: TokensStore(GraphQLClient),
    userStore: UserStore(RestClient)
};
