import { Store } from '../../dataCenter';
import ErrorManager from '../../errorManager';
import {reactive} from 'vue';

const tokensStore = Store.tokensStore;

const uiData = reactive({
    tokens: null,
    filtersData: null,
    tableData: null,
    chartData: null
});


async function getTokens() {

    try {
        const tokens = await tokensStore.getTokens({});
        uiData.tokens = tokens;
    }
    catch (err) {
        ErrorManager.processError({
            error: err,
            reporter: 'Get tokens - Index View Utils'
        });
    }
}


export default {
    uiData,
    getTokens,
};
