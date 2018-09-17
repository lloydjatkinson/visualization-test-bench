<template>
    <v-layout
        row
        wrap>
        <v-flex md12>
            <section-title>
                Basic Colour Scales with Chroma.js
            </section-title>
            <technology-chips :technologies="technologies" />
        </v-flex>
        <v-flex md8>
            <v-data-table
                :headers="years"
                :items="temperatures"
                hide-actions
                class="elevation-1">
                <template 
                    slot="items" 
                    slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.calories }}</td>
                    <td class="text-xs-right">{{ props.item.fat }}</td>
                    <td class="text-xs-right">{{ props.item.carbs }}</td>
                    <td class="text-xs-right">{{ props.item.protein }}</td>
                    <td class="text-xs-right">{{ props.item.iron }}</td>
                </template>
            </v-data-table>
        </v-flex>
        <v-flex md4>
            Test
        </v-flex>
    </v-layout>
</template>

<script>
import SectionTitle from './../components/section-title.vue';
import TechnologyChips from './../components//technology-chips.vue';

export default {
    name: 'BasicColourScales',
    components: {
        SectionTitle,
        TechnologyChips
    },
    data () {
        return {
            technologies: [ 'chromajs', 'vuejs', 'js' ],
            years: [
                {
                    text: 'Year',
                    align: 'left',
                    sortable: true,
                    value: 'temperature',
                    width: '5%'
                },
                { text: 'January', value: 'january', width: '5%' },
                { text: 'February', value: 'february', width: '5%' },
                { text: 'March', value: 'march', width: '5%' },
                { text: 'April', value: 'april', width: '5%' },
                { text: 'May', value: 'may', width: '5%' },
                { text: 'June', value: 'june', width: '5%' },
                { text: 'July', value: 'july', width: '5%' },
                { text: 'August', value: 'august', width: '5%' },
                { text: 'September', value: 'september', width: '5%' },
                { text: 'October', value: 'october', width: '5%' },
                { text: 'November', value: 'november', width: '5%' },
                { text: 'December', value: 'december', width: '5%' }
            ],
            temperatures: [
                {
                    value: false,
                    temperature: '20'
                }
            ]
            // desserts: [
            //     {
            //         value: false,
            //         name: 'Frozen Yogurt',
            //         calories: 159,
            //         fat: 6.0,
            //         carbs: 24,
            //         protein: 4.0,
            //         iron: '1%'
            //     },
            //     {
            //         value: false,
            //         name: 'Ice cream sandwich',
            //         calories: 237,
            //         fat: 9.0,
            //         carbs: 37,
            //         protein: 4.3,
            //         iron: '1%'
            //     },
            //     {
            //         value: false,
            //         name: 'Eclair',
            //         calories: 262,
            //         fat: 16.0,
            //         carbs: 23,
            //         protein: 6.0,
            //         iron: '7%'
            //     },
            //     {
            //         value: false,
            //         name: 'Cupcake',
            //         calories: 305,
            //         fat: 3.7,
            //         carbs: 67,
            //         protein: 4.3,
            //         iron: '8%'
            //     },
            //     {
            //         value: false,
            //         name: 'Gingerbread',
            //         calories: 356,
            //         fat: 16.0,
            //         carbs: 49,
            //         protein: 3.9,
            //         iron: '16%'
            //     },
            //     {
            //         value: false,
            //         name: 'Jelly bean',
            //         calories: 375,
            //         fat: 0.0,
            //         carbs: 94,
            //         protein: 0.0,
            //         iron: '0%'
            //     },
            //     {
            //         value: false,
            //         name: 'Lollipop',
            //         calories: 392,
            //         fat: 0.2,
            //         carbs: 98,
            //         protein: 0,
            //         iron: '2%'
            //     },
            //     {
            //         value: false,
            //         name: 'Honeycomb',
            //         calories: 408,
            //         fat: 3.2,
            //         carbs: 87,
            //         protein: 6.5,
            //         iron: '45%'
            //     },
            //     {
            //         value: false,
            //         name: 'Donut',
            //         calories: 452,
            //         fat: 25.0,
            //         carbs: 51,
            //         protein: 4.9,
            //         iron: '22%'
            //     },
            //     {
            //         value: false,
            //         name: 'KitKat',
            //         calories: 518,
            //         fat: 26.0,
            //         carbs: 65,
            //         protein: 7,
            //         iron: '6%'
            //     }
            // ]
        };
    }
};
</script>