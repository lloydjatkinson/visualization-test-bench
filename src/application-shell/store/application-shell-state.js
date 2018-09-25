const state = {
    navigationDrawerActive: false,
    footerMessage: 'Lloyd Atkinson 2018',
    errorCondition: {
        exists: false,
        details: 'Something went wrong.',
    },
    warningCondition: {
        exists: false,
        details: 'Something went wrong.',
    },
    snackbar: {
        expanded: false,
        message: '',
        timeout: 3000,
        dismissText: 'Close'
    },
    indication: {
        active: false,
        value: 0,
        trickle: false
    }
};

export default state;