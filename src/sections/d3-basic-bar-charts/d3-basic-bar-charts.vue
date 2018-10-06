<template>
    <v-container 
        grid-list-md
        fluid>
        <v-layout
            row
            wrap>
            <section-header
                :title="'Basic Bar Charts with D3'"
                :technologies="['js', 'vuejs', 'd3']"/>
        </v-layout>
        <v-layout 
            row
            wrap>
            <v-flex 
                xs12
                md6>
                <v-card
                    height="300">
                    <v-card-text>xs4</v-card-text>
                    <d3-bar-chart :series="series" />
                </v-card>
            </v-flex>
            <v-flex
                xs12
                md6>
                <v-card
                    height="300">
                    <v-card-text>xs4</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout 
            row
            wrap>
            <v-flex 
                xs12 
                md6>
                <v-card
                    height="300"
                    color="orange">
                    <v-card-text>xs4</v-card-text>
                </v-card>
            </v-flex>
            <v-flex 
                xs12 
                md6>
                <v-card
                    height="300"
                    color="teal">
                    <v-card-text>xs4</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import D3BarChart from './components/d3-bar-chart.vue';

export default {
    name: 'D3BasicBarCharts',
    components: {
        D3BarChart
    },
    data () {
        return {
            series: [5, 8, 9, 10, 12, 15]
        };
    }
};
</script>