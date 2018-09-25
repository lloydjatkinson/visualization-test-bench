<template>
    <v-toolbar 
        :clipped-left="$vuetify.breakpoint.mdAndUp"
        fixed
        app>
        <v-toolbar-side-icon @click.stop="navigationDrawerToggle" />
        <v-toolbar-title>Visualization Test Bench</v-toolbar-title>
    </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'ApplicationShellToolbar',
    methods: {
        ...mapActions('applicationShellModule', [
            'navigationDrawerToggle'
        ])
    }
};
</script>