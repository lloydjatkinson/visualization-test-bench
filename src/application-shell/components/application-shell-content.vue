<template>
    <v-content>
        <v-container 
            fluid 
            grid-list-md>
            <v-layout
                row
                wrap>
                <v-flex xs12>
                    <application-shell-alert
                        v-if="errorCondition.exists"
                        :alert-type="'error'"
                        :details="errorCondition.details" />
                    <application-shell-alert
                        v-if="warningCondition.exists"
                        :alert-type="'warning'"
                        :details="warningCondition.details" />
                </v-flex>
                <v-flex xs12>
                    <v-scale-transition
                        appear
                        mode="out-in">
                        <router-view />
                    </v-scale-transition>

                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import { mapGetters } from 'vuex';
import ApplicationShellAlert from './application-shell-alert.vue';

export default {
    name: 'ApplicationShellContent',
    components: {
        ApplicationShellAlert
    },
    computed: {
        ...mapGetters('applicationShellModule', [
            'errorCondition',
            'warningCondition'
        ])
    }
};
</script>