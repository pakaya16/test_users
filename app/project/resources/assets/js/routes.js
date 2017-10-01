import VueRouter from 'vue-router';

let routes = [
    {
        name: 'CreateUser',
        path: '/items/create',
        component:require('./components/CreateUser')
    },
    {
        name: 'DisplayUser',
        path: '/',
        component:require('./components/DisplayUser')
    },
    {
        name: 'EditUser',
        path: '/edit/:id',
        component:require('./components/EditUser')
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});