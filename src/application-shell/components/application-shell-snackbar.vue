<template>
    <v-snackbar
        :top="true"
        :value="snackbarExpanded"
        :timeout="0">
        {{ snackbarMessage }}
        <v-btn
            flat
            @click="dismissSnackbar">
            {{ snackbarDismissText }}
        </v-btn>
    </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'ApplicationShellSnackbar',
    computed: {
        ...mapGetters('applicationShellModule', [
            'snackbarExpanded',
            'snackbarMessage',
            'snackbarDismissText'
        ])
    },
    methods: {
        ...mapActions('applicationShellModule', [
            'dismissSnackbar'
        ])
    }
};
</script>