import ErrorManager from '../../errorManager';

export default (emit) => {

    if(!emit) {
        ErrorManager.processError({
            error: 'Required params must be provided',
            reporter: 'Search Utils'
        });
    }

    function emitChange(search) {
        emit('update:tokens-search', sanitizeRegex(search));
    }

    function sanitizeRegex(str) {
        const result = typeof str === 'string' || str instanceof String ? str : '';
        return result.replace(/[-[/\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }

    return {
        emitChange
    };
};
