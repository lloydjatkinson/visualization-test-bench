<template>
    <v-content>
        <v-container 
            fluid 
            grid-list-md>
            <v-layout>
                <v-scale-transition
                    appear
                    mode="out-in">
                    <router-view />
                </v-scale-transition>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
export default {
    name: 'ApplicationShellContent'
};
</script>