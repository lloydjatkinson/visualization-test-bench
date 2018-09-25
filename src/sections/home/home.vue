<template>
    <div class="home">
        <img 
            alt="Vue logo" 
            src="../../assets/logo.png">
        <v-btn @click="$store.dispatch('applicationShellModule/showSnackbar', { message: 'Hello'})">Snackbar</v-btn>
    </div>
</template>

<script>
export default {
    name: 'Home',
};
</script>