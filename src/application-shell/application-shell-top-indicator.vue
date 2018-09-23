<!-- Renderless component with edge case of interacting with NProgress that controls it's relevant section of DOM. -->
<!-- eslint-disable-next-line -->
<template></template>

<script>
import { mapGetters } from 'vuex';
import NProgress from 'nprogress';
import '../../node_modules/nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

export default {
    name: 'ApplicationShellTopIndicator',
    computed: {
        ...mapGetters('applicationShellModule', [
            'topIndicator'
        ])
    },
    watch: {
        'topIndicator.active': function (value) {
            console.log('active ' + value);
            if (!value) {
                setTimeout(() => {
                    NProgress.done();
                }, 150);
            }
        },
        'topIndicator.value': function (value) {
            NProgress.set(value);
        },
        'topIndicator.trickle': function (value) {
            console.log('active ' + value);
            if (value) {
                console.log('nprogress start');
                NProgress.start();
            } else {
                setTimeout(() => {
                    console.log('nprogress done');
                    NProgress.done();
                }, 150);
                // NProgress.set(this.topIndicator.value);
            }
        }
    },
    created () {
    },
    methods: {
        
    }
};
</script>