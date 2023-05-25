import { defineComponent } from 'vue';

import useStyle from '../../lib/vue-composables/useStyle.js';

import template from './template.js';
import style from './style.js';

export default defineComponent({
  template,
  setup() {
    useStyle(style);
  },
});
