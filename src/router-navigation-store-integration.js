/**
 * Configures the router to dispatch actions for the Application Shell.
 * @param {Object} router The router used to integrate with the store.
 * @param {Object} store The store used to integrate with the router.
 * @returns {undefined}
 */
const integrate = (router, store) => {
    // eslint-disable-next-line
    router.beforeResolve((to, from, next) => {
        setTimeout(() => {
            store.dispatch('applicationShellModule/topIndicatorStartTrickle');

        }, 0);
        next();
    });
    router.afterEach(() => {
        store.dispatch('applicationShellModule/topIndicatorClearActive');
    });
};

export {
    integrate
};