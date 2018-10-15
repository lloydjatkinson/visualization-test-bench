<template>
    <div>
        <div
            ref="map"
            class="map-size" />

    </div>
</template>

<script>
import { buildMapConfiguration } from './mapbox-gl-configuration-factory.js';

export default {
    name: 'MapboxGl',
    data () {
        return {
            map: {}
        };
    },
    mounted () {
        this.map = buildMapConfiguration({
            accessToken: 'pk.eyJ1IjoibGxveWRqYXRraW5zb24iLCJhIjoiY2ptdG94NnBkMmdveDNrb2VwMnpuZ2xlbiJ9.P_aB3PF24QZL0uAlNvpDVw',
            container: this.$refs.map
        });
    }
};
</script>

<style lang="scss">
@import '~mapbox-gl/dist/mapbox-gl.css';
@import '~@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

.map-size {
    height: 1000px;
}
</style>