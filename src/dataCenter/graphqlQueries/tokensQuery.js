import gql from 'graphql-tag';

export default ({name, orderBy, orderDirection, amount, skipAmount}) => {

    return gql`
        query {
            tokens(where: {name_contains: "${name}"}, orderBy: ${orderBy}, orderDirection: ${orderDirection}, first: ${amount}, skip: ${skipAmount}) {
                id,
                name,
                symbol,
                totalSupply,
                totalValueLockedUSD
            }
        }
    `;
};
