import TokenEntity from '../entities/tokenEntity';

function convertDTOToEntity(tokenData) {

    if(!Array.isArray(tokenData) || !tokenData.length) {
        return [];
    }

    return tokenData.map( x => TokenEntity({
        id: x.id,
        name: x.name,
        symbol: x.symbol,
        supply: x.totalSupply,
        tvlUSD: processTVLUSDValue(x.totalValueLockedUSD)

    }));

}

function processTVLUSDValue(value) {
    return Math.round(value * 100 + Number.EPSILON) / 100;
}

export default {
    convertDTOToEntity
}
