import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/page-one',
            name: 'page-one',
            component: () => import('./views/page-one.vue')
        },
        {
            path: '/basic-colour-scales',
            name: 'basic-colour-scales',
            component: () => import('./views/basic-colour-scales.vue')
        },
        {
            path: '/page-two',
            name: 'page-two',
            component: () => import('./views/page-two.vue')
        },
        {
            path: '/d3-basic-bar-chart',
            name: 'd3-basic-bar-chart',
            component: () => import('./views/d3-basic-bar-chart.vue')
        }
    ]
});