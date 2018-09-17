import {
    NAVIGATION_DRAWER_HIDE,
    NAVIGATION_DRAWER_SHOW,
    UPDATE_FOOTER_MESSAGE
} from './application-shell-mutation-types.js';

const mutations = {
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

export default mutations;