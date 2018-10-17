<template>
    <div class="pb-4">
        <h4 class="title font-weight-light pb-2">
            {{ title }}
        </h4>
        <technology-tags :technologies="technologies" />
    </div>
</template>

<script>
import TechnologyTags from './technology-tags.vue';
export default {
    name: 'SectionHeader',
    components: {
        TechnologyTags
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