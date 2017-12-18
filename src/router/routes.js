import home from '../views/home/home.vue';
import catatory from '../views/catatory/catatory.vue';
import community from '../views/community/community.vue';
import shopping from '../views/shoppingCar/shoppingCar.vue';
import my from '../views/my/my.vue';
import index from '../views/index.vue';
import search from '../views/search/search';
import detail from '../views/detail/detail';
import login from '../views/login/login';
import register from '../views/register/register';
import location from '../views/location/location';
import newLocation from '../views/newLocation/newLocation';
let routes = [
    {
        path: '/',
        redirect: '/index/home'
    },
    {
        path: '/index',
        name: 'index',
        component: index,
        children: [
            {
                path: 'home',
                name: 'home',
                component: home
            },
            {
                path: 'catatory',
                name: 'catatory',
                component: catatory
            },
            {
                path: 'community',
                name: 'community',
                component: community
            },
            {
                path: 'shopping',
                name: 'shopping',
                component: shopping
            },
            {
                path: 'my',
                name: 'my',
                component: my,
                meta: {
                    requireAuth: true
                }
            }
        ]
    },
    {
        path: '/search',
        name: 'search',
        component: search
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: detail
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path: '/location',
        name: 'location',
        component: location
    },
    {
        path: '/newLocation',
        name: 'newLocation',
        component: newLocation
    }
];
export default routes;