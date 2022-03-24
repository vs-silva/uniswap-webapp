import { Store } from '../../dataCenter';
import ErrorManager from '../../errorManager';

const tokensStore = Store.tokensStore;

export default () => {

    async function getTokens() {

        try {
            return await tokensStore.getTokens({});
        }
        catch (err) {
            ErrorManager.processError({
                error: err,
                reporter: 'Get tokens - Index View Utils'
            });
        }
    }

    function updateRequestOrderBy(orderBy) {
        console.log(orderBy)
    }

    function updateRequestOrderDirection(direction) {
        console.log(direction);
    }

    function updateRequestAmount(amount) {
        console.log(amount);
    }

    return{
        getTokens,
        updateRequestOrderBy,
        updateRequestOrderDirection,
        updateRequestAmount
    };
};
