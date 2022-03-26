
const _tokensRequestAmount = {
    min: 1,
    max: 100
};

export default {
    api: {
        graphql : {
            endpoint: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
            defaultRequestParams: {
                name: '',
                orderBy: 'totalValueLockedUSD',
                orderDirection: 'desc',
                first: _tokensRequestAmount.min,
                skip: 0
            },
            filters: {
                minRequestAmount: _tokensRequestAmount.min,
                maxRequestAmount: _tokensRequestAmount.max,
            }
        },
        rest: {
            endpoint: 'https://api.github.com',
            resource: 'users',
            param: 'vs-silva'
        }
    },
    multiLang: {
        locale: 'en',
        fallback: 'en',
    }
};
