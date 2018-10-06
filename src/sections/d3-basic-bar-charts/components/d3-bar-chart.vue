<template>
    <div 
        ref="chart" 
        class="svg-container chart" />
</template>

<script>
import * as d3 from 'd3';
export default {
    name: 'D3BarChart',
    props: {
        series: {
            type: Array,
            required: true
        }
    },
    mounted () {
        // d3
        //     .select(this.$refs.chart)
        //     .selectAll('div')
        //     .data(this.series)
        //     .enter()
        //     .append('div')
        //     .style('width', value => `${value * 20}px`)
        //     .text(value => value);
        // const svg = d3
        //     .select(this.$refs.chart)
        //     .append('svg')
        //     .attr('preserveAspectRatio', 'xMinYMin meet')
        //     .attr('viewBox', '0 0 300 200')
        //     .classed('svg-content', true);
        const temperatures = [
            { temp: 32, month: 'January' },
            { temp: 38, month: 'February' },
            { temp: 47, month: 'March' },
            { temp: 59, month: 'April' },
            { temp: 70, month: 'May' },
            { temp: 80, month: 'June' },
            { temp: 84, month: 'July' },
            { temp: 83, month: 'Auguest' },
            { temp: 76, month: 'September' },
            { temp: 64, month: 'October' },
            { temp: 49, month: 'November' },
            { temp: 37, month: 'December' }
        ];
        const months = temperatures.map(t => t.month);

        
    }
};
</script>

<style lang="scss">
$text-colour: #ffffff;
$bar-colour: #ffa500;

.chart {
	div {
		font: 12px sans-serif;
		background-color: $bar-colour;
		text-align: right;
		padding: 3px;
		margin-bottom: 3px;
		color: $text-colour;
	}
}
.svg-container {
	display: inline-block;
	position: relative;
	width: 100%;
	padding-bottom: 100%;
	vertical-align: top;
	overflow: hidden;
}
.svg-content {
	display: inline-block;
	position: absolute;
	top: 0;
	left: 0;
}
</style>