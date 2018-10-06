<template>
    <v-container
        v-resize="resize"
        grid-list-xs
        fluid>
        <v-layout
            row
            wrap>
            <section-header
                :title="'Basic Mapbox GL'"
                :technologies="['js', 'vuejs', 'mapboxgl']" />            
        </v-layout>
        <v-layout
            row
            wrap>
            <v-flex xs12>
                <mapbox-gl />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import MapboxGl from './mapbox-gl.vue';

export default {
    name: 'BasicMapBoxGl',
    components: {
        MapboxGl
    },
    data () {
        return {

        };
    },
    methods: {
        resize () {
            // this.mapSize = `${document.body.scrollHeight}px !important`;
            // // this.mapObject.resize();
            // if (this.mapObject.resize) {
            //     console.log('resize')
            //     // this.mapObject.resize();
                
            // }

        }
    }
};
</script>

<style>
.map {
    position: absolute;
    top: 150px;
    bottom: 25px;
    width: 96%;
    display: inline-block;
    /* height: 600px; */
}
</style>