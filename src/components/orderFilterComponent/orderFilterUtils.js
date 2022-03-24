import OrderFilterLabels from './orderFilterLabels';
import ErrorManager from '../../errorManager';

export default (emit) => {

    if(!emit) {
        ErrorManager.processError({
            error: 'Required params must be provided',
            reporter: 'Order Filter Utils'
        });
    }

    function toggleSortDirection(isInDescOrder) {

        const orderDesc = !isInDescOrder;
        const direction = (orderDesc) ? 'desc': 'asc';
        emit('update:toggle-sort-order', direction);

        return {
            isInDescOrder: orderDesc,
            label: (orderDesc) ? OrderFilterLabels.orderDescending : OrderFilterLabels.orderAscending
        };
    }

    return {
        toggleSortDirection
    };
};
