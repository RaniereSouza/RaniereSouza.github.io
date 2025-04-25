<template>
  <router-view></router-view>
  <div style="display: none;">
    [DEBUG] Current import.meta.env: {{ import.meta.env }}
  </div>
</template>

<script setup>
  import { onBeforeMount } from 'vue';
  import { useRouter } from 'vue-router';

  onBeforeMount(() => {
    const router = useRouter();
    const path = localStorage.getItem('@ranieresouza.github.io:path')?.trim();

    if (path) {
      router
        .replace(path)
        .finally(() => localStorage.removeItem('@ranieresouza.github.io:path'));
    }
  });

  console.debug('[DEBUG] Current import.meta.env:', import.meta.env)
</script>
