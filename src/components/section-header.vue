<template>
    <div class="pb-4">
        <h4 class="title font-weight-light pb-2">
            {{ title }}
        </h4>
        <technology-chips :technologies="technologies" />
    </div>
</template>

<script>
import TechnologyChips from './technology-chips.vue';
export default {
    name: 'SectionHeader',
    components: {
        TechnologyChips
    },
    props: {
        title: {
            type: String,
            required: true
        },
        technologies: {
            type: Array,
            default: () => []
        }
    }
};
</script>