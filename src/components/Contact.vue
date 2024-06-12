<template>
  <div class="contact-message-wrapper">
    <p class="text-box">
      Wanna talk to me about something? If you have any questions, suggestions, corrections or requests, you can either <a class="contact-text elevated" target="_blank" href="mailto:raniere.souza.cc@gmail.com"><i>✉️</i>Email</a> me, or send me a message on <a class="contact-text elevated" target="_blank" href="https://t.me/raniere_souza"><img src="../assets/telegram-icon.svg" alt="TG">Telegram</a>, or even on <a class="contact-text elevated" target="_blank" href="https://wa.me/5571991655209"><img src="../assets/whatsapp-icon.svg" alt="WA">WhatsApp</a>. We could collaborate on <a class="contact-text elevated" target="_blank" href="https://github.com/RaniereSouza"><img src="../assets/github-icon.svg" alt="GH">GitHub</a> too, if you reach me there.
      <br>
      You could also find me on my socials:
      <br>
      <span class="contact-text elevated disabled" v-tooltip="'Soon...'"><img src="../assets/linkedin-icon.svg" alt="LI">LinkedIn</span>&nbsp;
      <span class="contact-text elevated disabled" v-tooltip="'Soon...'"><img src="../assets/instagram-icon.svg" alt="IG">Instagram</span>&nbsp;
      <span class="contact-text elevated disabled" v-tooltip="'Soon...'"><img src="../assets/x-twitter-icon.svg" alt="TT">Twitter</span>&nbsp;
      <span class="contact-text elevated disabled">...</span>
    </p>
  </div>
</template>

<script setup>
  import vTooltip from './directives/vTooltip';
</script>

<style scoped>
  .contact-message-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .contact-message-wrapper .text-box {
    line-height: 2.6rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  .contact-text {
    padding: .5rem .75rem;
    background-color: var(--highlight-color);
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    border-radius: 1.1rem;
    display: inline-flex;
    align-items: center;
    gap: .25rem;
    overflow: hidden;
    line-height: initial;
    transform: translateY(.25rem);
    transition: all .2s;
  }

  .contact-text:has(> img, > i) + .contact-text:not(:has(> img, > i)) {
    transform: translateY(-0.25rem);
  }

  .contact-text:not(.disabled):hover {
    transform: translateY(.125rem);
    box-shadow: .125rem .25rem .875rem rgba(0, 0, 0, .5);
    background-color: var(--highlight-color-darker);
  }

  .contact-text.disabled {
    cursor: default;
    opacity: 50%;
  }

  .contact-text img {
    height: 1.5rem;
    margin: -0.25rem 0;
  }

  .contact-text i {
    font-style: normal;
    font-size: 1.5rem;
    height: 1.5rem;
    overflow: hidden;
    margin: -0.25rem 0;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
  }
</style>
