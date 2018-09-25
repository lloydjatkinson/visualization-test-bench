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

const snackbar = {
    [SNACKBAR_EXPAND] (state) {
        state.snackbar.expanded = true;
    },

    [SNACKBAR_COLLAPSE] (state) {
        state.snackbar.expanded = false;
    },

    [SNACKBAR_MESSAGE] (state, { message }) {
        state.snackbar.message = message;
    },

    [SNACKBAR_DISMISS_TEXT] (state, { dismissText }) {
        state.snackbar.dismissText = dismissText;
    },

    [SNACKBAR_TIMEOUT] (state, { timeout }) {
        state.snackbar.timeout = timeout;
    }
};

const topIndicator = {
    [SET_TOP_INDICATOR_ACTIVE] (state) {
        state.indication.active = true;
    },
    
    [CLEAR_TOP_INDICATOR_ACTIVE] (state) {
        state.indication.value = 0;
        state.indication.active = false;
        state.indication.trickle = false;
    },

    [SET_TOP_INDICATOR_VALUE] (state, { value }) {
        if (value === 1) {
            state.indication.value = 0;
            state.indication.active = false;
            state.indication.trickle = false;
        } else {
            state.indication.value = value;
        }
        state.indication.active = true;
        state.indication.trickle = false;
    },

    [SET_TOP_INDICATOR_TRICKLE] (state) {
        state.indication.active = true;
        state.indication.trickle = true;
    },
    
    [CLEAR_TOP_INDICATOR_TRICKLE] (state) {
        state.indication.value = 0;
        state.indication.active = false;
        state.indication.trickle = false;
    }
};

const navigationBar = {
    [NAVIGATION_DRAWER_COLLAPSE] (state) {
        state.navigationDrawerActive = false;
    },
    
    [NAVIGATION_DRAWER_EXPAND] (state) {
        state.navigationDrawerActive = true;
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
    ...snackbar,
    ...topIndicator,
    ...navigationBar,
    ...toolbar,
    ...errorState
};

export default mutations;