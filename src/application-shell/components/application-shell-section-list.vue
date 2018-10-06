<template>
    <v-list dense>
        <v-list-tile 
            :to="{ path: '/' }" 
            ripple>
            <v-list-tile-action>
                <v-icon>mdi-home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>

        <v-divider />

        <v-list-tile 
            :to="{ path: '/basic-colour-scales' }" 
            ripple>
            <v-list-tile-action>
                <v-icon>mdi-view-column</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Basic Colour Scales</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>

        <v-list-tile 
            :to="{ path: '/page-one' }" 
            ripple>
            <v-list-tile-action>
                <v-icon>mdi-numeric</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Page One</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        
        <v-list-tile 
            :to="{ path: '/page-two' }" 
            ripple>
            <v-list-tile-action>
                <v-icon>mdi-numeric</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Page Two</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>

        <v-list-tile 
            :to="{ path: '/d3-basic-bar-chart' }" 
            ripple>
            <v-list-tile-action>
                <v-icon>mdi-chart-bar</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>D3 Basic Bar Chart</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>

        <v-list-tile 
            :to="{ path: '/basic-mapbox-gl' }" 
            ripple>
            <v-list-tile-action>
                <v-icon>mdi-map</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Basic Mapbox GL</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>

        <v-divider />

        <v-list-tile
            :to="{ path: '/glossary' }"
            ripple>
            <v-list-tile-action>
                <v-icon>mdi-help-circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Glossary</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>
export default {

};
</script>

<style>

</style>
