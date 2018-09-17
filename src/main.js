import Vue from 'vue';
import ApplicationShell from './application-shell/application-shell.vue';
import router from './router.js';
import store from './store.js';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify, {
    iconfont: 'mdi'
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(ApplicationShell)
}).$mount('#app');