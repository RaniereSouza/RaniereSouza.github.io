import { defineComponent, ref } from 'vue';

import useStyle from '../../lib/vue-composables/useStyle.js';

import template from './template.js';
import style from './style.js';

export default defineComponent({
  template,
  setup() {
    const showNav = ref(true);

    function toggleShowNav() {
      showNav.value = !showNav.value;
    }

    function navigateHome(event) {
      showNav.value = false;
      console.log(event.target);
    }

    useStyle(style);

    return {
      showNav,
      toggleShowNav,
      navigateHome,
    };
  },
});
