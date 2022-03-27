import ErrorManager from '../../../errorManager';
import Config from '../../../config';
import UserURI from '../../restURIs/userURI';
import UserService from '../../entitiesServices/userService';

export default (client) => {

    if(!client) {
        return ErrorManager.processError({
            error: 'GraphQL client must be provided',
            reporter: 'User store service'
        });
    }

    const { defaultRequestParams } = Config.api.rest;

    async function getUser({resource = defaultRequestParams.resource, params = defaultRequestParams.param}) {

        const user = await client.get(UserURI({
            resource : resource,
            params: params
        }));

        return UserService.convertDTOToEntity(user);
    }

    return {
        getUser
    };
};
