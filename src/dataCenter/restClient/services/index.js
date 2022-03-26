import ErrorManager from '../../../errorManager';

export default (engine) => {

    if(!engine) {
        ErrorManager.processError({
            error: 'GraphQL engine must be provided',
            reporter: 'REST service'
        });
    }

    async function get(requestURI) {

        if(!requestURI) {
            ErrorManager.processError({
                error: 'URI must be provided',
                reporter: 'Get function - REST service'
            });
        }

        try {
            const response = await engine.get(requestURI);
            return response?.data;
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
    };
};
