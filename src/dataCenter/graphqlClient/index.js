import Config from '../../config';
import fetch from 'cross-fetch';
import ApolloClient from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import Services from './services';

const _engine = new ApolloClient({
    link: createHttpLink({
        uri: Config.api.graphql.endpoint,
        fetch: fetch
    }),
    cache: new InMemoryCache()
});

export default Services(_engine);
