<template>
    <v-navigation-drawer
        :value="navigationDrawerVisible"
        :clipped="$vuetify.breakpoint.mdAndUp"
        app
        @input="syncCollapseStateWithStore">
        <application-shell-section-list />
    </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ApplicationShellSectionList from './application-shell-section-list.vue';

export default {
    name: 'ApplicationShellNavigation',
    components: {
        ApplicationShellSectionList
    },
    computed: {
        ...mapGetters('applicationShellModule', [
            'navigationDrawerVisible'
        ]),
    },
    methods: {
        ...mapActions('applicationShellModule', [
            'navigationDrawerHide',
            'navigationDrawerShow'
        ]),
        syncCollapseStateWithStore (value) {
            // We are required to do this as the navigation drawer can be collapsed either as the screen resizes,
            // or if the user on a mobile device taps outside of the navigation bar.
            // If  we don't do this, then the UI would not be in sync with the store.
            if (!value) {
                this.navigationDrawerHide();
            } else {
                this.navigationDrawerShow();
            }
        }
    }
};
</script>