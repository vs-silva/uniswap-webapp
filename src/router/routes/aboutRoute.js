export default {
    name: 'about',
    path: '/about',
    meta: {
        isActive: false
    },
    component: () => import('../../views/aboutView/aboutView.vue')
};
