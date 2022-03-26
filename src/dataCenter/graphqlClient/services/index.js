import ErrorManager from '../../../errorManager';

export default (engine) => {

    if(!engine) {
       ErrorManager.processError({
           error: 'GraphQL engine must be provided',
           reporter: 'GraphQL service'
       });
    }

    async function get(requestQuery) {

        if(!requestQuery) {
            ErrorManager.processError({
                error: 'Query must be provided',
                reporter: 'Get function - GraphQL service'
            });
        }

        try {
            const response = await engine.query({query: requestQuery});
            return response?.data?.tokens;
        }
        catch (err) {
            ErrorManager.processError({
                error: err,
                reporter: 'Get function - GraphQL service'
            });
        }

    }

    return {
        get
    }
};
