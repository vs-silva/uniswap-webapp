import gql from 'graphql-tag';

export default ({orderBy, orderDirection, amount, skipAmount}) => {

    return gql`
        query {
            tokens(orderBy: ${orderBy}, orderDirection: ${orderDirection}, first: ${amount}, skip: ${skipAmount}) {
                id,
                name,
                symbol,
                totalSupply,
                totalValueLockedUSD
            }
        }
    `;
};
