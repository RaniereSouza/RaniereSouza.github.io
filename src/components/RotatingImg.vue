<template>
  <Transition mode="out-in">
    <img :src="currentImgSrc" :key="currentImgSrc" v-smart-img />
  </Transition>
</template>

<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import vSmartImg from './directives/vSmartImg';

  const props = defineProps({
    imgSrcs: {
      type: Array,
      required: true,
    },
    idleTimeMS: {
      type: Number,
      default: 6000, // 6 seconds
    },
    transitionTimeMS: {
      type: Number,
      default: 200, // 0.2 seconds
    },
  });

  const currentImgIdx = ref(0);

  const currentImgSrc = computed(() => {
    const src = props.imgSrcs[currentImgIdx.value];

    if (typeof src === 'string') return src;
    else if (src instanceof URL) return src.href;
    return '';
  });

  const transitionTime = computed(() => `${props.transitionTimeMS}ms`);

  onMounted(() => {
    const switchIntervalId = setInterval(() => {
      if (currentImgIdx.value + 1 >= props.imgSrcs.length) currentImgIdx.value = 0;
      else currentImgIdx.value = currentImgIdx.value + 1;
    }, props.idleTimeMS);

    onUnmounted(() => {
      clearInterval(switchIntervalId);
    });
  });
</script>

<style scoped>
  .v-enter-active, .v-leave-active {
    transition: opacity v-bind('transitionTime') ease;
  }

  .v-enter-from, .v-leave-to {
    opacity: 0;
  }
</style>
