<template>

    <v-alert
        :value="true"
        :type="alertType">
        {{ details }}
    </v-alert>

</template>

<script>
export default {
    name: 'ApplicationShellAlert',
    props: {
        alertType: {
            type: String,
            required: true
        },
        details: {
            type: String,
            required: true
        }
    }
};
</script>

<style>

</style>
