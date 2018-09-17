import {
    NAVIGATION_DRAWER_HIDE,
    NAVIGATION_DRAWER_SHOW,
    UPDATE_FOOTER_MESSAGE
} from './application-shell-mutation-types.js';

const actions = {
    navigationDrawerToggle ({ commit, state }) {
        if (state.navigationDrawerVisible) {
            commit(NAVIGATION_DRAWER_HIDE);
        } else {
            commit(NAVIGATION_DRAWER_SHOW);
        }
    },

    navigationDrawerHide ({ commit }) {
        commit(NAVIGATION_DRAWER_HIDE);
    },

    navigationDrawerShow ({ commit }) {
        commit(NAVIGATION_DRAWER_SHOW);
    },

    updateFooterText ({ commit }, { message }) {
        commit(UPDATE_FOOTER_MESSAGE, { message });
    }
};

export default actions;