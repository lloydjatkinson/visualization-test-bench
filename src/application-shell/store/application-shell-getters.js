const getters = {
    snackbarExpanded: state => state.snackbar.expanded,
    snackbarMessage: state => state.snackbar.message,
    snackbarTimeout: state => state.snackbar.timeout,
    snackbarDismissText: state => state.snackbar.dismissText,
    navigationDrawerActive: state => state.navigationDrawerActive,
    topIndicator: state => state.indication,
    footerMessage: state => state.footerMessage,
    errorCondition: state => state.errorCondition,
    warningCondition: state => state.warningCondition
};

export default getters;