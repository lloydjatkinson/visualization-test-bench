import Vue from 'vue';
import Router from 'vue-router';
import Home from './sections/home/home.vue';

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
            component: () => import('./sections/page-one.vue')
        },
        {
            path: '/page-two',
            name: 'page-two',
            component: () => import('./sections/page-two.vue')
        },
        // {
        //     path: '/basic-colour-scales',
        //     name: 'basic-colour-scales',
        //     component: () => import('./sections/basic-colour-scales/basic-colour-scales.vue')
        // },
        {
            path: '/d3-basic-bar-chart',
            name: 'd3-basic-bar-chart',
            component: () => import('./sections/d3-basic-bar-charts/d3-basic-bar-charts.vue')
        }
    ]
});