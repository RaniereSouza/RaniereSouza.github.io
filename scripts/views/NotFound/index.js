import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

import useStyle from '../../lib/vue-composables/useStyle.js';

import template from './template.js';
import style from './style.js';

export default defineComponent({
  template,
  setup() {
    const route = useRoute();
    const currentRoute = computed(() => route?.path);

    useStyle(style);

    return {
      currentRoute,
    };
  },
});
