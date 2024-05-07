<template>
  <main>
    <p class="not-found-title">
      <span class="highlighted-text">404:</span> Not Found<span class="highlighted-text">...</span>
    </p>

    <p class="text-box elevated not-found-subtitle">
      We could not find a page for the address <code>{{currentRoute}}</code>. Looking for something else? 🤔
    </p>

    <footer>
      <router-link class="default-btn pill-btn elevated back-btn" to="/">
        <span class="material-icons">arrow_back</span> Back to the start
      </router-link>
    </footer>
  </main>
</template>

<script setup>  
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const currentRoute = computed(() => route?.path);
</script>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:
      url("../assets/empty-road.jpg")
      no-repeat
      center center /
      min(100vw, 100%) auto;
  }

  @media (orientation: portrait) {
    main {
      background-size: auto min(100vh, 100%);
    }
  }

  code {
    background-color: var(--highlight-color-lighter);
    padding: .125rem;
  }

  footer {
    position: fixed;
    display: flex;
    align-items: center;
    gap: calc(var(--default-spacing-x) / 3);
    right: var(--default-spacing-x);
    bottom: var(--default-spacing-y);
    padding: var(--default-spacing);
  }

  @media screen and (max-width: 575px) {
    footer {
      right: 0;
      bottom: 0;
    }
  }

  @media screen and (max-width: 439px) {
    footer {
      right: 50vw;
      transform: translateX(50%);
      width: max-content;
    }
  }

  .not-found-title, .not-found-subtitle {
    text-align: center;
    margin: 0;
  }

  .not-found-title {
    font-size: 4rem;
    text-shadow: var(--default-shadow);
  }

  .not-found-subtitle {
    margin-top: var(--default-spacing-y);
    max-width: min(90vw, 90%);
  }
</style>
