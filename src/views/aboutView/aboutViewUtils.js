import Config from '../../config';
import { Store } from '../../dataCenter';
import ErrorManager from '../../errorManager';
import {reactive, ref} from "vue";

const userStore = Store.userStore;

export default () => {

    const defaultRequest = Config.api.rest;

    const request = reactive({
        resource: defaultRequest.resource,
        params: defaultRequest.param
    });

    const user = ref(null);

    function getUser() {

        userStore.getUser({
            resource: request.resource,
            params: request.params
        }).then( res => {
            user.value = res;
        }).catch(err => {
            return ErrorManager.processError({
                error: err,
                reporter: 'Get user - About View Utils'
            });
        });
    }

    return {
        user,
        getUser
    };
};
