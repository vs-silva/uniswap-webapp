export default ({id = '', name = '', symbol = '', supply = 0, tvlUSD = 0}) => {
    return {
        id,
        name,
        symbol,
        supply,
        tvlUSD
    };
};
