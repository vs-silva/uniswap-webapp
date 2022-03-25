import ErrorManager from '../../errorManager';
import {ref} from 'vue';

export default (router) => {

    if(!router) {
        ErrorManager.processError({
            error: 'Required params must be provided',
            reporter: 'Navigation Utils'
        });
    }

    const routes = ref(router.getRoutes());

    function activateRouteLink() {

        routes.value.forEach( route => {

            if(route.name !== router.currentRoute.value.name) {
                route.meta.isActive = false;
                return;
            }

            route.meta.isActive = true;
        });

    }

    return {
        routes,
        activateRouteLink
    };
};
