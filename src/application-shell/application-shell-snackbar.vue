<template>
    <v-snackbar
        :top="true"
        :value="true"
        :timeout="6000">
        Hello, World!
    </v-snackbar>
</template>

<script>
export default {
    name: 'ApplicationShellSnackbar'
};
</script>