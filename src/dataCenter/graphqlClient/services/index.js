import ErrorManager from '../../../errorManager';

export default (engine) => {

    if(!engine) {
        return ErrorManager.processError({
           error: 'GraphQL engine must be provided',
           reporter: 'GraphQL service'
       });
    }

    async function get(requestQuery) {

        if(!requestQuery) {
            return ErrorManager.processError({
                error: 'Query must be provided',
                reporter: 'Get function - GraphQL service'
            });
        }

        try {
            const response = await engine.query({query: requestQuery});
            return response?.data?.tokens;
        }
        catch (err) {
            return ErrorManager.processError({
                error: err,
                reporter: 'Get function - GraphQL service'
            });
        }

    }

    return {
        get
    }
};
