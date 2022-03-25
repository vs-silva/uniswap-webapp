import Config from '../../config';
import { Store } from '../../dataCenter';
import ErrorManager from '../../errorManager';
import {reactive, ref} from "vue";

const tokensStore = Store.tokensStore;

export default () => {

    const defaultRequest = Config.api.graphql.defaultRequestParams;

    const request = reactive({
        orderBy: defaultRequest.orderBy,
        orderDirection:defaultRequest.orderDirection,
        amount: defaultRequest.first,
        skip: defaultRequest.skip
    });

    const tokens = ref(null);

    const pagination = reactive({
        currentPage: 1,
        direction: 'reset'
    });

    function getTokens() {

        tokensStore.getTokens({
            orderBy: request.orderBy,
            orderDirection: request.orderDirection,
            amount: request.amount,
            skipAmount: request.skip
        }).then( res => {
            tokens.value = res;
            updateCurrentPage(pagination.direction);
        }).catch(err => {
            ErrorManager.processError({
                error: err,
                reporter: 'Get tokens - Index View Utils'
            });
        });

    }

    function updateRequestOrderBy(orderBy) {
        request.orderBy = orderBy;
        pagination.direction = '';
        getTokens();
    }

    function updateRequestOrderDirection(direction) {
        request.orderDirection = direction;
        pagination.direction = '';
        getTokens();
    }

    function updateRequestAmount(amount) {
        request.amount = amount;
        request.skip = 0;
        pagination.direction = 'reset';
        getTokens();
    }

    function updateRequestSkipAmount(direction) {

        let tempSkip = request.skip;
        pagination.direction = direction;

        switch (direction) {
            case 'prev':
                tempSkip -= request.amount;
                break;
            case 'next':
                tempSkip += request.amount;
                break;
        }

        if(tempSkip <= 0) {
            tempSkip = 0;
            pagination.direction = 'reset';
        }

        request.skip = tempSkip;
        getTokens()
    }

    function updateCurrentPage(direction) {
        switch (direction){
            case 'reset':
                pagination.currentPage = 1;
                break;
            case 'prev':
                pagination.currentPage --;
                break;
            case 'next':
                pagination.currentPage ++;
                break;
        }
    }

    return{
        tokens,
        pagination,
        getTokens,
        updateRequestOrderBy,
        updateRequestOrderDirection,
        updateRequestAmount,
        updateRequestSkipAmount
    };
};
