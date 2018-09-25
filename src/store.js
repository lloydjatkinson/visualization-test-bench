import Vue from 'vue';
import Vuex from 'vuex';
import applicationShellModule from './application-shell/store/application-shell-module.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        applicationShellModule
    }
});