export default {
    api: {
        graphql : {
            endpoint: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
            defaultRequestParams: {
                orderBy: 'totalValueLockedUSD',
                orderDirection: 'desc',
                first: 1,
                skip: 0
            }
        },
        rest: {
            endpoint: 'https://api.github.com/users/vs-silva'
        }
    },
    multiLang: {
        locale: 'en',
        fallback: 'en',
    }
};
