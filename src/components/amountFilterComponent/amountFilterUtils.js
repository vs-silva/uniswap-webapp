import Config from '../../config';
import ErrorManager from '../../errorManager';

const { minRequestAmount, maxRequestAmount } = Config.api.graphql.filters;

export default (emit) => {

    if(!emit) {
        return ErrorManager.processError({
            error: 'Required params must be provided',
            reporter: 'Amount Filter Utils'
        });
    }

    function validateRequestedAmount(amount) {

        if(amount > maxRequestAmount) {
           return maxRequestAmount;
        }

        if(amount < minRequestAmount) {
            return minRequestAmount;
        }

        return amount;
    }

    function updateAmountRequest(amount) {
        emit('update:tokens-amount', amount);
    }

    return {
        minRequestAmount,
        maxRequestAmount,
        updateAmountRequest,
        validateRequestedAmount
    };
};
