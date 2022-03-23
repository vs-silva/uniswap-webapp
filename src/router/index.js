import { createRouter, createWebHistory } from 'vue-router';
import AccessService from './services/accessService';
import Routes from './routes';

const _engine = createRouter({
    strict: true,
    history: createWebHistory(),
    routes: Routes
});

_engine.beforeEach(AccessService.checkIfUserHasAccess);

export default _engine;
