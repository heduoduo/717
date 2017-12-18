import vue from 'vue';
import VueRouter from 'vue-router';
import {getCookie } from '../utils/utils.js';
import routes from './routes';

vue.use(VueRouter);
let router = new VueRouter({
    routes
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(val => val.meta.requireAuth) && !getCookie('token')) {
        next({
            name: 'login',
            query: {
                from: to.name
            }});
    } else {
        next();
    }
});
export default router;