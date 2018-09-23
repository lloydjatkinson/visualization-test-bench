<template>
    <v-app :dark="dark">
        <application-shell-top-indicator />
        <application-shell-navigation />
        <application-shell-toolbar />
        <application-shell-content />
        <!-- <application-shell-footer /> -->
    </v-app>
</template>

<script>
import ApplicationShellTopIndicator from './application-shell-top-indicator.vue';
import ApplicationShellNavigation from './application-shell-navigation.vue';
import ApplicationShellSectionList from './application-shell-section-list.vue';
import ApplicationShellToolbar from './application-shell-toolbar.vue';
import ApplicationShellContent from './application-shell-content.vue';
import ApplicationShellFooter from './application-shell-footer.vue';

export default {
    name: 'ApplicationShell',
    components: {
        ApplicationShellTopIndicator,
        ApplicationShellNavigation,
        ApplicationShellSectionList,
        ApplicationShellToolbar,
        ApplicationShellContent,
        ApplicationShellFooter
    },
    data () {
        return {
            dark: false
        };
    }
};
</script>