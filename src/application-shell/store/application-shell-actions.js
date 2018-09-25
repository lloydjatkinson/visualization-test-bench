import {
    SNACKBAR_EXPAND,
    SNACKBAR_COLLAPSE,
    SNACKBAR_MESSAGE,
    SNACKBAR_DISMISS_TEXT,
    SNACKBAR_TIMEOUT,

    SET_TOP_INDICATOR_ACTIVE,
    CLEAR_TOP_INDICATOR_ACTIVE,
    
    SET_TOP_INDICATOR_VALUE,

    SET_TOP_INDICATOR_TRICKLE,
    CLEAR_TOP_INDICATOR_TRICKLE,

    NAVIGATION_DRAWER_COLLAPSE,
    NAVIGATION_DRAWER_EXPAND,

    UPDATE_FOOTER_MESSAGE,

    SET_ERROR_CONDITION,
    CLEAR_ERROR_CONDITION,
    SET_WARNING_CONDITION,
    CLEAR_WARNING_CONDITION
} from './application-shell-mutation-types.js';

const actions = {
    showSnackbar ({ commit, state }, { message }) {
        commit(SNACKBAR_MESSAGE, { message });
        commit(SNACKBAR_EXPAND);

        setTimeout(() => {
            // Prevent needless mutation if user has already dismissed snackbar.
            if (state.snackbar.expanded) {
                commit(SNACKBAR_COLLAPSE);
            }
        }, state.snackbar.timeout);
    },

    dismissSnackbar ({ commit }) {
        commit(SNACKBAR_COLLAPSE);
    },

    topIndicatorSetActive ({ commit }) {
        commit(SET_TOP_INDICATOR_ACTIVE);
    },

    topIndicatorClearActive ({ commit }) {
        commit(CLEAR_TOP_INDICATOR_ACTIVE);
    },

    topIndicatorStartTrickle ({ commit }) {
        console.log('Starting trickle mode.');
        commit(SET_TOP_INDICATOR_TRICKLE);
    },

    topIndicatorClearTrickle ({ commit }) {
        commit(CLEAR_TOP_INDICATOR_TRICKLE);
    },

    topIndicatorSetValue ({ commit }) {
        commit(SET_TOP_INDICATOR_VALUE);
    },

    navigationDrawerToggle ({ commit, state }) {
        if (state.navigationDrawerActive) {
            commit(NAVIGATION_DRAWER_COLLAPSE);
        } else {
            commit(NAVIGATION_DRAWER_EXPAND);
        }
    },

    navigationDrawerHide ({ commit }) {
        commit(NAVIGATION_DRAWER_COLLAPSE);
    },

    navigationDrawerShow ({ commit }) {
        commit(NAVIGATION_DRAWER_EXPAND);
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