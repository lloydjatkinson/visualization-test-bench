<template>
    <div>
        <v-chip
            v-for="item in mappedIcons"
            :key="item.icon">
            {{ item.name }}
            <v-icon right>{{ item.icon }}</v-icon>
        </v-chip>
    </div>
</template>

<script>
const technologyIconMap = new Map([
    [ 'js', { name: 'Javascript', icon: 'mdi-language-javascript', colour: '#F7DF1E' }],
    [ 'vuejs', { name: 'Vue.js', icon: 'mdi-vuejs', colour: '#42B883' }],
    [ 'chromajs', { name: 'Chroma.js', icon: 'mdi-palette', colour: '#ff3399' } ],
    [ 'd3', { name: 'D3.js', icon: 'mdi-chart-scatterplot-hexbin', colour: '#F68849' }],
    [ 'about', { name: 'About', icon: 'dictionary' }]
]);

export default {
    name: 'TechnologyChip',
    props: {
        technologies: {
            type: Array,
            default: undefined
        }
    },
    computed: {
        mappedIcons () {
            return this.technologies
                .filter(item => item)
                .map(item => technologyIconMap.get(item));
        }
    }
};
</script>