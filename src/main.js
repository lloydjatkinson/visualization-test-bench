import Vue from 'vue';
import NProgress from 'nprogress';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import '../node_modules/nprogress/nprogress.css';

import ApplicationShell from './application-shell/application-shell.vue';
import store from './store.js';
import router from './router.js';

Vue.use(Vuetify, {
    iconfont: 'mdi'
});




// Vue.config.errorHandler = (error, vm, info) => {
//     console.warn('Oops.');
// };
    
// Vue.config.warnHandler = (message, vm, trace) => {
//     console.warn('More oops.');
// };

NProgress.configure({ showSpinner: false });
router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start();
    }
    next();
})
  
router.afterEach((to, from) => {
    NProgress.done();
});

        
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(ApplicationShell)
}).$mount('#app');