<template>
  <footer>
    &copy;Raniere Souza Santos, {{currentYear}}
    <a target="_blank" href="mailto:raniere.souza.cc@gmail.com" v-tooltip="'Email'">
      <span class="material-icons">alternate_email</span>
    </a>
    <a target="_blank" href="https://t.me/raniere_souza" v-tooltip="'Telegram'">
      <span class="material-icons">send</span>
    </a>
    <a target="_blank" href="https://wa.me/5571991655209" v-tooltip="'WhatsApp'">
      <span class="material-icons">phone</span>
    </a>
    <a target="_blank" href="https://github.com/RaniereSouza" v-tooltip="'GitHub'">
      <img src="../assets/github-mark-white.svg" alt="GH">
    </a>
  </footer>
</template>

<script setup>
  import vTooltip from './directives/vTooltip';

  const currentYear = (new Date()).getFullYear();
</script>

<style scoped>
  footer {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: var(--footer-height);
    padding: var(--default-spacing);
    text-align: center;
    width: min(100vw, 100%);
    font-size: .75rem;
  }

  footer a {
    padding: 0 1.5rem;
    border-left: 1px dashed #fff;
    color: var(--font-color-light);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
  }

  footer a:first-of-type {
    margin-left: 1.5rem;
  }

  footer a .material-icons {
    font-size: 1.25rem;
  }

  footer a img {
    height: 1.25rem;
  }

  @media screen and (max-width: 575px) {
    footer {
      padding: var(--default-spacing-y);
    }

    footer a {
      padding: 0 .75rem;
    }

    footer a:first-of-type {
      margin-left: .75rem;
    }

    footer a .material-icons {
      font-size: 1.125rem;
    }

    footer a img {
      height: 1.125rem;
    }
  }
</style>
