import NProgress from 'nprogress';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import '../node_modules/nprogress/nprogress.css';

import store from './store.js';
import router from './router.js';
import './registerServiceWorker';

import ApplicationShell from './application-shell/components/application-shell.vue';
import SectionHeader from './components/section-header.vue';
Vue.component('section-header', SectionHeader);

Vue.use(Vuetify, {
    iconfont: 'mdi'
});

// eslint-disable-next-line
router.beforeResolve((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    setTimeout(() => {
        NProgress.done();
    }, 150);
});

router.onError(() => {
    store.dispatch('applicationShellModule/showSnackbar', { message: 'Unable to load section' });
});

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(ApplicationShell)
}).$mount('#app');

// TODO:
// import { integrate } from './router-navigation-store-integration.js';
// integrate(router, store);

// Vue.config.errorHandler = (error, vm, info) => {
//     console.warn('Oops.');
// };

// Vue.config.warnHandler = (message, vm, trace) => {
//     console.warn('More oops.');
// };