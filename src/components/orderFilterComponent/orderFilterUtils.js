import OrderFilterLabels from './orderFilterLabels';
import ErrorManager from '../../errorManager';
import {ref} from 'vue';

export default (emit) => {

    if(!emit) {
        ErrorManager.processError({
            error: 'Required params must be provided',
            reporter: 'Order Filter Utils'
        });
    }

    const isInDescOrder = ref(true);
    const toggleLabel = ref(OrderFilterLabels.orderDescending);

    function toggleSortDirection(isDescOrder) {

        isInDescOrder.value = !isDescOrder;
        toggleLabel.value = ( isInDescOrder.value ) ? OrderFilterLabels.orderDescending : OrderFilterLabels.orderAscending;
        const direction = (isInDescOrder.value) ? 'desc': 'asc';
        emit('update:toggle-sort-order', direction);

    }

    return {
        isInDescOrder,
        toggleLabel,
        toggleSortDirection
    };
};
