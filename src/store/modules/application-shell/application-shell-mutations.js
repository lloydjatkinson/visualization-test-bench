import {
    NAVIGATION_DRAWER_HIDE,
    NAVIGATION_DRAWER_SHOW,

    UPDATE_FOOTER_MESSAGE,

    SET_ERROR_CONDITION,
    CLEAR_ERROR_CONDITION,
    SET_WARNING_CONDITION,
    CLEAR_WARNING_CONDITION
} from './application-shell-mutation-types.js';

const navigationBar = {
    [NAVIGATION_DRAWER_HIDE] (state) {
        state.navigationDrawerVisible = false;
    },
    
    [NAVIGATION_DRAWER_SHOW] (state) {
        state.navigationDrawerVisible = true;
    },
    
    [UPDATE_FOOTER_MESSAGE] (state, { message }) {
        state.footerMessage = message;
    }
};

const toolbar = {

};

const errorState = {
    [SET_ERROR_CONDITION] (state, { error }) {
        state.errorState.exists = true;
        state.errorState.details = error;
    },

    [CLEAR_ERROR_CONDITION] (state) {
        state.errorState.exists = false;
        state.errorState.details = {};
    },

    [SET_WARNING_CONDITION] (state, { error }) {
        state.warningState.exists = true;
        state.warningState.details = error;
    },

    [CLEAR_WARNING_CONDITION] (state) {
        state.warningState.exists = true;
        state.warningState.details = {};
    }
};

const mutations = {
    ...navigationBar,
    ...toolbar,
    ...errorState
};

export default mutations;