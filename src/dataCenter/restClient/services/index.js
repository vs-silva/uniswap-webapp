import ErrorManager from '../../../errorManager';

export default (engine) => {

    if(!engine) {
        return ErrorManager.processError({
            error: 'GraphQL engine must be provided',
            reporter: 'REST service'
        });
    }

    async function get(requestURI) {

        if(!requestURI) {
            return ErrorManager.processError({
                error: 'URI must be provided',
                reporter: 'Get function - REST service'
            });
        }

        try {
            const response = await engine.get(requestURI);
            return response?.data;
        }
        catch (err) {
            return ErrorManager.processError({
                error: err,
                reporter: 'Get function - REST service'
            });
        }

    }

    return {
        get
    };
};
