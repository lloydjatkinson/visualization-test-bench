const getters = {
    navigationDrawerActive: state => state.navigationDrawerActive,
    topIndicator: state => state.indication,
    footerMessage: state => state.footerMessage,
    errorCondition: state => state.errorCondition,
    warningCondition: state => state.warningCondition
};

export default getters;