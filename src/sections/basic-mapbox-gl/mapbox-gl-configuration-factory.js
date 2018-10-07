import MapBoxGl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

const buildMapConfiguration = ({ accessToken, container, center = [8, 50] }) => {
    MapBoxGl.accessToken = accessToken;
    const map = new MapBoxGl.Map({
        container,
        style: 'mapbox://styles/mapbox/streets-v10',
        center,
        zoom: 4,
    });

    map.addControl(new MapboxGeocoder({ accessToken: MapBoxGl.accessToken }));
    map.addControl(new MapBoxGl.GeolocateControl({ positionOptions: { enableHighAccuracy: true }, trackUserLocation: true }));
    map.addControl(new MapBoxGl.NavigationControl());
    map.addControl(new MapBoxGl.FullscreenControl());
    map.addControl(new MapBoxGl.ScaleControl({ unit: 'imperial' }));

    map.on('load', () => {
        // Insert the layer beneath any symbol layer.
        const layers = map.getStyle().layers;

        let labelLayerId;

        for (let i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                labelLayerId = layers[i].id;
                break;
            }
        }

        map.addLayer({
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
            map.setLayoutProperty(layer, 'text-field',
                ['format', ['get', 'name_en'], { 'font-scale': 1.2 }, '\n', {},
                    ['get', 'name'], {
                        'font-scale': 0.8,
                        'text-font': ['literal', [ 'DIN Offc Pro Italic', 'Arial Unicode MS Regular' ]]
                    }]);
        }

    });
    
    return map;
};

export {
    buildMapConfiguration
};