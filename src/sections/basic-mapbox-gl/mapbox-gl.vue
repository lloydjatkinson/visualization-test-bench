<template>
    <div
        ref="map"
        class="map-size" />
</template>

<script>
import MapBoxGl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

export default {
    name: 'MapboxGl',
    data () {
        return {
            map: {}
        };
    },
    mounted () {
        MapBoxGl.accessToken = 'pk.eyJ1IjoibGxveWRqYXRraW5zb24iLCJhIjoiY2ptdG94NnBkMmdveDNrb2VwMnpuZ2xlbiJ9.P_aB3PF24QZL0uAlNvpDVw';
        this.map = new MapBoxGl.Map({
            container: this.$refs.map,
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [8, 50],
            zoom: 4,
        });

        this.map.addControl(new MapboxGeocoder({ accessToken: MapBoxGl.accessToken }));
        this.map.addControl(new MapBoxGl.GeolocateControl({ positionOptions: { enableHighAccuracy: true }, trackUserLocation: true }));
        this.map.addControl(new MapBoxGl.NavigationControl());
        this.map.addControl(new MapBoxGl.FullscreenControl());
        this.map.addControl(new MapBoxGl.ScaleControl({ unit: 'imperial' }));

        this.map.on('load', () => {
            // Insert the layer beneath any symbol layer.
            const layers = this.map.getStyle().layers;

            let labelLayerId;
            for (let i = 0; i < layers.length; i++) {
                if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                    labelLayerId = layers[i].id;
                    break;
                }
            }

            this.map.addLayer({
                'id': '3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#aaa',

                    // use an 'interpolate' expression to add a smooth transition effect to the
                    // buildings as the user zooms in
                    'fill-extrusion-height': [
                        "interpolate", ["linear"], ["zoom"],
                        15, 0,
                        15.05, ["get", "height"]
                    ],
                    'fill-extrusion-base': [
                        "interpolate", ["linear"], ["zoom"],
                        15, 0,
                        15.05, ["get", "min_height"]
                    ],
                    'fill-extrusion-opacity': .6
                }
            }, labelLayerId);

            const localisedCountryNamelayers = ['country-label-lg', 'country-label-md', 'country-label-sm'];

            for (const layer of localisedCountryNamelayers) {
                this.map.setLayoutProperty(layer, 'text-field',
                    ['format', ['get', 'name_en'], { 'font-scale': 1.2 }, '\n', {},
                    ['get', 'name'], {
                        'font-scale': 0.8,
                        'text-font': ['literal', [ 'DIN Offc Pro Italic', 'Arial Unicode MS Regular' ]]
                    }])
            }
        });
    },
};
</script>

<style lang="scss">
@import '~mapbox-gl/dist/mapbox-gl.css';
@import '~@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

.map-size {
    height: 1000px;
}
</style>