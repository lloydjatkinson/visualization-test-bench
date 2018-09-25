<template>
    <div>
        <section-header
            :title="'Basic Bar Charts with D3'"
            :technologies="['js', 'vuejs', 'd3']" />
        <v-layout
            row
            wrap>
            <v-flex xs12>
                <div 
                    ref="chart" 
                    class="chart" />
            </v-flex>
            <v-flex>
                <v-card>
                    <v-container
                        fill-height
                        fluid
                        pa-2>
                        <v-layout fill-height>
                            <v-flex 
                                xs12 
                                align-end 
                                flexbox>
                                <span 
                                    class="headline" 
                                    v-text="'card.title'"/>
                            </v-flex>
                        </v-layout>
                    </v-container>

                    <v-card-actions>
                        <v-spacer/>
                        <v-btn icon>
                            <v-icon>mdi-favorite</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-bookmark</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-share</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import * as d3 from 'd3';

export default {
    name: 'D3BasicBarCharts',
    data () {
        return {
            series: [5, 8, 9, 10, 12, 15]
        };
    },
    mounted () {
        d3
            .select(this.$refs.chart)
            .selectAll('div')
            .data(this.series)
            .enter()
            .append('div')
            .style('width', value => `${value * 20}px`)
            .text(value => value);
    }
};
</script>

<style>
.chart div {
    font: 12px sans-serif;
    background-color: steelblue;
    text-align: right;
    padding: 3px;
    margin: 1px;
    color: white;
}
</style>