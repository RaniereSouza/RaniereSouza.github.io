<template>
  <div
    class="resume-wrapper"
    :title="`Resume PDF Preview from Google Drive - ${langDescriptions[selectedLang]}`"
  >
    <ul class="lang-switcher elevated">
      <li
        v-for="lang of resumeLangs"
        :class="{selected: lang === selectedLang}"
        @click="() => selectedLang = lang"
      >
        {{lang}}
      </li>
    </ul>
    <iframe
      :src="resumeSrcs[selectedLang]"
      allow="autoplay,fullscreen"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const resumeSrcs = Object.freeze({
    'en': 'https://drive.google.com/file/d/1UFiwvu-rx3VvMYrR2cw9FskmdvhFKSPF/preview',
    'pt': 'https://drive.google.com/file/d/1wnPxrgyfMWvmza-5CJvJ2L_99BZ1hUrF/preview',
  });

  const resumeLangs = Object.keys(resumeSrcs);

  const langDescriptions = Object.freeze({
    [resumeLangs[0]]: 'English (USA)',
    [resumeLangs[1]]: 'Português Brasileiro (Brazilian Portuguese)',
  });

  const selectedLang = ref(resumeLangs[0]);
</script>

<style scoped>
  .resume-wrapper {
    position: relative;
  }

  ul.lang-switcher {
    list-style: none;
    position: absolute;
    z-index: 1;
    padding: 0;
    margin: 0;
    background-color: #fff;
    display: flex;
    padding: 0;
    border-radius: var(--default-border-radius);
    left: var(--default-spacing-x);
    top: var(--default-spacing-y);
    overflow: hidden;
    filter: brightness(200%) grayscale(75%) opacity(.5);
    transition: filter .2s;
  }
  .resume-wrapper:hover ul.lang-switcher {
    filter: brightness(100%) grayscale(0%) opacity(1);
  }

  ul.lang-switcher li {
    cursor: default;
    padding: var(--default-spacing-y) calc(var(--default-spacing-x) / 2);
  }
  ul.lang-switcher li:first-child {
    padding-left: var(--default-spacing-x);
  }
  ul.lang-switcher li:last-child {
    padding-right: var(--default-spacing-x)
  }
  ul.lang-switcher li.selected {
    background-color: var(--highlight-color);
    color: #fff;
  }
  ul.lang-switcher li:not(.selected) {
    cursor: pointer;
  }
  ul.lang-switcher li:not(.selected):hover {
    text-decoration: underline;
  }

  iframe {
    width: var(--default-contained-width);
    height: 36rem;
  }

  @media screen and (max-width: 575px) {
    iframe {
      height: min(36rem, 65vh);
    }
  }
</style>
