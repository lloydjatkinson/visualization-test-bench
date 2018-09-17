import state from './application-shell-state.js';
import mutations from './application-shell-mutations.js';
import getters from './application-shell-getters.js';
import actions from './application-shell-actions.js';

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};