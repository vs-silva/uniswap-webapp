import Config from '../../config';
import ErrorManager from '../../errorManager';

const { minRequestAmount, maxRequestAmount } = Config.api.graphql.filters;

export default (emit) => {

    if(!emit) {
        ErrorManager.processError({
            error: 'Required params must be provided',
            reporter: 'Skip Filter Utils'
        });
    }

    function updateAmountRequest(amount) {
        emit('update:tokens-amount', validateRequestedAmount(amount));
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

    return {
        minRequestAmount,
        maxRequestAmount,
        updateAmountRequest,
        validateRequestedAmount
    };
};
