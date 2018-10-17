import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import TechnologyTags from '@/components/technology-tags.vue';
import Vue from 'vue';

describe('technology-tags.vue', () => {
    beforeEach(() => {
        Vue.use(Vuetify);
    });

    
    it('should render known tag with icon', () => {
        const tags = ['js'];
        const wrapper = shallowMount(TechnologyTags, {
            propsData: {
                technologies: tags
            },
        });

        expect(wrapper.text()).toMatch(/Javascript/);
        expect(wrapper.text()).toMatch(/mdi-language-javascript/);
    });
    
    it('should render unknown tags with no icon', () => {
        const tags = ['abc'];
        const wrapper = shallowMount(TechnologyTags, {
            propsData: {
                technologies: tags
            },
        });
        
        expect(wrapper.text()).toBe('abc');
    });

    it('should render a tag collection', () => {
        const tags = ['js', 'vuejs', 'abc'];
        const wrapper = mount(TechnologyTags, {
            propsData: {
                technologies: tags
            },
        });

        expect(wrapper.findAll('.v-chip').length).toBe(3);
    });

    it('should not render empty tags in a collection', () => {
        const tags = ['a', '', 'b', '', 'c'];
        const wrapper = mount(TechnologyTags, {
            propsData: {
                technologies: tags
            },
        });

        expect(wrapper.findAll('.v-chip').length).toBe(3);
    });

    it('should not render anything if given an empty tag collection', () => {
        const tags = ['js', 'vuejs', 'abc'];
        const wrapper = mount(TechnologyTags, {
            propsData: {
                technologies: []
            },
        });

        expect(wrapper.html()).toBeUndefined();
    });
});