<template>
  <main :class="{'nav-backdrop-shadow': showNav}" @scroll="handleMainScroll">
    <nav-header
      :class="{'on-odd-section': isOddSection}"
      :nav-items="navItems"
      v-model="showNav"
    />

    <section id="start">
      <h1>Welcome, Traveler!<span class="highlighted-text blink">_</span></h1>
      <img class="profile-pic" src="../assets/profile-pic.jpg" alt="RS" title="Raniere Souza Santos"/>
      <p class="text-box">I'm <span class="highlighted-text">Raniere</span>, and I'm a <span class="highlighted-text">Programmer/Software Developer</span>. Here you'll learn a little bit <a class="highlighted-text" href="#about-me" @click="scrollToSection">about me</a>, my <a class="highlighted-text" href="#portfolio" @click="scrollToSection">work</a> and my interests &#x1F604;</p>
      <waves />
    </section>

    <section id="about-me">
      <h2>About Me</h2>
      <who-am-i />
    </section>

    <section id="portfolio">
      <h2>Works and Projects</h2>
      <carousel />
    </section>

    <section id="resume">
      <h2>Resume</h2>
      <resume />
    </section>

    <footer>
      &copy;Raniere Souza Santos, {{currentYear}}
    </footer>
  </main>
</template>

<script setup>
  import { ref, onMounted, watch } from 'vue';

  import { remToPx } from '../lib/helpers';

  import NavHeader from '../components/NavHeader.vue';
  import Waves from '../components/animations/Waves.vue';
  import WhoAmI from '../components/WhoAmI.vue';
  import Carousel from '../components/Carousel.vue';
  import Resume from '../components/Resume.vue';

  const currentYear = (new Date()).getFullYear();

  const showNav = ref();
  function toggleShowNav() {
    showNav.value = !showNav.value;
  }

  function scrollToSection(event) {
    event.preventDefault();
    if (showNav.value) toggleShowNav();
    document.querySelector(event.target.hash)?.scrollIntoView({behavior: 'smooth'});
  }

  const navItems = ref([
    {href: '#start',     textContent: 'Start',              action: scrollToSection},
    {href: '#about-me',  textContent: 'About Me',           action: scrollToSection},
    {href: '#portfolio', textContent: 'Works and Projects', action: scrollToSection},
    {href: '#resume',    textContent: 'Resume',             action: scrollToSection},
    {href: 'https://github.com/RaniereSouza', textContent: /* html */`
      GitHub Profile <span class="material-icons">north_east</span>
    `},
  ]);

  const sectionTransitionThreshold = remToPx(2.5) + 1;
  const currentSectionData = ref({});
  function getCurrentSection() {
    Array.from(document.querySelectorAll('section')).some((sectionEl, index) => {
      const sectionRect = sectionEl.getClientRects()[0];

      if (
        (sectionRect.top <= sectionTransitionThreshold)
        && (sectionRect.bottom >= sectionTransitionThreshold)
      ) {
        currentSectionData.value = {
          id: sectionEl.id,
          index,
        };
        return true;
      }

      return false;
    });
  }

  const isOddSection = ref(false);
  function toggleIsOddSection() {
    isOddSection.value = !!(currentSectionData.value?.index % 2);
  }

  function setActiveNav() {
    if (isNaN(Number(currentSectionData.value.index))) getCurrentSection();
    const currentSection = currentSectionData.value;

    navItems.value.some(item => {
      if (!item.active) return false;
      item.active = false; return true;
    });

    navItems.value[currentSection.index].active = true;
  }

  function handleMainScroll(event) {
    window.dispatchEvent(new CustomEvent('main-scroll', {detail: event}));
    getCurrentSection();
  }

  onMounted(() => {
    setActiveNav();
    watch(currentSectionData, () => {
      setActiveNav(); toggleIsOddSection();
    });
  });
</script>

<style>
  header.on-odd-section {
    --highlight-color: hsl(127, 53%, 48%);
    --highlight-color-darker: hsl(127, 53%, 35.5%);
    --highlight-color-lighter: hsl(127, 53%, 83%);
  }
</style>

<style scoped>
  * {
    z-index: 1;
  }

  main {
    overflow-y: auto;
    scroll-behavior: smooth;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: min(100vh, 100%);
    background-color: var(--highlight-color-lighter);
    padding: 1.25rem 0 2.5rem 0;
  }

  section:nth-child(odd) {
    --highlight-color: hsl(127, 53%, 48%);
    --highlight-color-darker: hsl(127, 53%, 35.5%);
    --highlight-color-lighter: hsl(127, 53%, 88%);

    background-color: var(--highlight-color-lighter);
  }

  section:last-of-type {
    min-height: calc(min(100vh, 100%) - 2.2rem);
  }

  section + footer {
    background-color: var(--highlight-color);
    color: var(--font-color-light);
  }

  section:nth-child(odd) + footer {
    --highlight-color: hsl(127, 53%, 48%);
    --highlight-color-darker: hsl(127, 53%, 35.5%);
    --highlight-color-lighter: hsl(127, 53%, 83%);
  }

  section > * {
    max-width: var(--default-contained-width);
    text-align: center;
  }

  section > *:first-child {
    margin-top: 0;
    margin-bottom: 2rem;
  }

  section > *:last-child {
    margin-bottom: 0;
  }

  section .text-box .highlighted-text {
    color: #444;
    text-decoration: underline;
    text-decoration-color: var(--highlight-color-darker);
    font-weight: 600;
  }

  section#start a[href="#about-me"], section#start a[href="#portfolio"] {
    color: var(--highlight-color-darker);
    animation: blink-underscore 1.25s infinite ease;
  }

  section#start #waves-animation {
    position: absolute;
    bottom: 0;
    max-width: none;
    width: 100vw;
    z-index: 0;
  }

  .profile-pic {
    overflow: hidden;
    width: min(50vw, 12.5rem);
    height: auto;
    border-radius: 50%;
  }

  @keyframes blink-underscore {
    0% {
      text-decoration-color: transparent;
    }
    50% {
      text-decoration-color: var(--highlight-color-darker);
    }
    100% {
      text-decoration-color: transparent;
    }
  }

  section#about-me {
    background-image:
      url("../assets/doodle-chat-bg.webp"),
      linear-gradient(#e0e4e8, #e0e4e8);
    background-blend-mode: lighten;
    background-size: max(50vw, 50vh) auto;
    background-position: center center;
  }

  footer {
    height: 2.2rem;
    padding: var(--default-spacing);
    text-align: center;
  }
</style>

