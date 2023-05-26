import { defineComponent, ref, onUnmounted } from 'vue';

import useStyle from '../../lib/vue-composables/useStyle.js';

import template from './template.js';
import style from './style.js';

export default defineComponent({
  template,
  setup() {
    const showNav = ref(false);
    const bodyClassList = document.body.classList;

    function toggleShowNav() {
      showNav.value = !showNav.value;
      bodyClassList.toggle('backdrop-shadow');
    }

    if (window.innerWidth >= 576) toggleShowNav();

    function scrollToSection(event) {
      event.preventDefault();
      if (showNav.value) toggleShowNav();
      document.querySelector(event.target.hash)?.scrollIntoView({behavior: 'smooth'});
    }

    useStyle(style);

    onUnmounted(() => bodyClassList.remove('backdrop-shadow'));

    return {
      showNav,
      toggleShowNav,
      scrollToSection,
    };
  },
});
