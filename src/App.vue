<template>
  <router-view></router-view>
</template>

<script setup>
  import { onBeforeMount, onMounted } from 'vue';
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
</script>
