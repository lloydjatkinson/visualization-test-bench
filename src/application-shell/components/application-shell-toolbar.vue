<template>
    <v-toolbar 
        :clipped-left="$vuetify.breakpoint.mdAndUp"
        :dense="test"
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
    data () {
        return {
            test: false
        };
    },
    methods: {
        ...mapActions('applicationShellModule', [
            'navigationDrawerToggle'
        ])
    }
};
</script>