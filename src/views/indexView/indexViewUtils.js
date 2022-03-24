import { Store } from '../../dataCenter';
import ErrorManager from '../../errorManager';

const tokensStore = Store.tokensStore;

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


export default {
    getTokens,
};
