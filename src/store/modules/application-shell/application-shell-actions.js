import {
    NAVIGATION_DRAWER_HIDE,
    NAVIGATION_DRAWER_SHOW,
    UPDATE_FOOTER_MESSAGE,
    SET_ERROR_CONDITION,
    CLEAR_ERROR_CONDITION,
    SET_WARNING_CONDITION,
    CLEAR_WARNING_CONDITION
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
    },

    displayAppError ({ commit }, { error }) {
        commit(SET_ERROR_CONDITION, { error });
    },

    removeAppError ({ commit }, { error }) {
        commit(CLEAR_ERROR_CONDITION, { error });
    },

    displayAppWarning ({ commit }, { error }) {
        commit(SET_WARNING_CONDITION, { error });
    },

    removeAppWarning ({ commit }, { error }) {
        commit(CLEAR_WARNING_CONDITION, { error });
    }
};

export default actions;