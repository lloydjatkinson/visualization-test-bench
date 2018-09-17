import Vue from 'vue';
import Vuex from 'vuex';
import applicationShellModule from './store/modules/application-shell/application-shell-module.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        applicationShellModule
    }
});