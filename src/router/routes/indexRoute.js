export default {
    name: 'search',
    path: '/',
    meta: {
        isActive: true
    },
    component: () => import('../../views/indexView/indexView.vue')
};
