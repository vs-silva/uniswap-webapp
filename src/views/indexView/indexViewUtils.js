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

    function updateRequestAmount(amount) {
        console.log(amount);
    }

    function updateRequestOrderDirection(direction){
        console.log(direction);
    }

    return{
        getTokens,
        updateRequestAmount,
        updateRequestOrderDirection
    };
};
