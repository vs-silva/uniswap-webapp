import ErrorManager from '../../errorManager';

export default (props, emit) => {

    if(!props || !emit) {
        ErrorManager.processError({
            error: 'Required params must be provided',
            reporter: 'Pagination Utils'
        });
    }

    const paginationOptions = {
      prev: 'prev',
      next: 'next'
    };

    function emitPaginationChange(direction) {
        emit('update:token-pagination', direction);
    }

    return {
        paginationOptions,
        emitPaginationChange
    };
};
