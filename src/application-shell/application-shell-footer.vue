<template>
    <v-footer 
        color="indigo" 
        app>
        <span class="white--text pl-1">{{ footerMessage }}</span>
    </v-footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'ApplicationShellFooter',
    computed: {
        ...mapGetters('applicationShellModule', [
            'footerMessage'
        ])
    }
};
</script>

<style>

</style>
