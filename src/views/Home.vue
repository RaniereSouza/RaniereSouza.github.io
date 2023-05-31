<template>
  <main :class="{'backdrop-shadow': showNav}">
    <header>
      <nav :class="{collapsed: !showNav}">
        <div class="nav-links">
          <a href="#start" @click="scrollToSection">Start</a>
          <a href="#about-me" @click="scrollToSection">About Me</a>
          <a href="#portfolio" @click="scrollToSection">Works and Projects</a>
          <a href="https://github.com/RaniereSouza">
            GitHub Profile <span class="material-icons">north_east</span>
          </a>
        </div>

        <button
          class="material-icons menu-icon"
          @click="toggleShowNav"
        >
          {{!showNav ? 'menu' : 'close'}}
        </button>
      </nav>
    </header>

    <section id="start">
      <h1>Welcome, Traveler!</h1>

      <img class="profile-pic" src="../assets/profile-pic.jpg" alt="RS" title="Raniere Souza Santos"/>

      <p class="text-box">I'm <span class="highlighted-text">Raniere</span>, and I'm a <span class="highlighted-text">Programmer/Software Developer</span>. Learn a little bit <a class="highlighted-text" href="#about-me" @click="scrollToSection">about me</a>, my <a class="highlighted-text" href="#portfolio" @click="scrollToSection">work</a> and my interests &#x1F604;</p>

      <waves />
    </section>

    <section id="about-me">
      <h2>About Me</h2>
      <ul class="topics-list">
        <li class="text-box topic">
          <h3 class="topic-title">Who Am I</h3>
          <ul>
            <li>Hello! My name is <span class="highlighted-text">Raniere Souza Santos</span>, my pronouns are <span class="highlighted-text">he/him</span>, and I'm a <span class="highlighted-text">31yo cis man</span>. I'm a <span class="highlighted-text">Brazilian</span> person living in <span class="highlighted-text">Salvador, Bahia</span>. I can communicate a little bit in <span class="highlighted-text">English</span> but my native language is <span class="highlighted-text">Portuguese</span>. I'm  racially <span class="highlighted-text">biracial</span> (<span class="highlighted-text">black</span> dad and <span class="highlighted-text">white</span> mom), and ethnically <span class="highlighted-text">latino</span> by both of my parents and myself. And last but not least, I'm a <span class="highlighted-text">Software Developer</span>, specialized in the last few years in <span class="highlighted-text">Front-End</span> development.</li>
          </ul>
        </li>

        <li class="text-box topic">
          <h3 class="topic-title">Technologies, Tools and Programming Languages</h3>
          <ul>
            <li><span class="highlighted-text">HTML/CSS/JavaScript</span>: The "meat and potatoes" (or for us Brazilians, "rice and beans") of Web and <span class="highlighted-text">Front-End</span> development. It's behind every page we access on the web, so we might as well know how to work with it.</li>
            <li><span class="highlighted-text">Git</span>: Source code versioning is essential, it doesn't matter which category of Developer you are. And the most popular tool to do that is <span class="highlighted-text">Git</span>, so it's important to be confortable with it. I've also been working with cloud based repositories, like <span class="highlighted-text">GitHub</span>, <span class="highlighted-text">GitLab</span>, and <span class="highlighted-text">Bitbucket</span>.</li>
            <li><span class="highlighted-text">Vue.js</span>: The <span class="highlighted-text">JavaScript</span> community has been bubbling up with new libs, new packages, new frameworks, every day... But since 2021 I've chosen <span class="highlighted-text">Vue</span> as my favorite, with some influence of my current job (but I've been learning a bit of <span class="highlighted-text">React</span> too).</li>
            <li><span class="highlighted-text">Vite</span>: It's fast, it's very "to the point" and simple, and with a lot of available configuration, it's a really cool bundler/builder. It also works very well with <span class="highlighted-text">TypeScript</span>, <span class="highlighted-text">Vue</span>, <span class="highlighted-text">React</span>, and other technologies. It is currently my favorite bundler/builder.</li>
            <li><span class="highlighted-text">Automated Testing</span>: Pairing up with <span class="highlighted-text">Vite</span> we've got <span class="highlighted-text">Vitest</span> as a JavaScript <span class="highlighted-text">Unit Testing</span> platform. I really like it, but I also learned a bit of <span class="highlighted-text">Jest</span>, since it's more popular. I also learned to combine the <span class="highlighted-text">Cypress</span> platform for <span class="highlighted-text">End-to-End Testing</span> with the <span class="highlighted-text">Cucumber/Gherkin</span> technologies for <span class="highlighted-text">BDD</span> test scenarios.</li>
            <li>(More soon...)</li>
          </ul>
        </li>

        <li class="text-box topic">
          <h3 class="topic-title">Soft Skills</h3>
          <ul>
            <li>Fast friends</li>
            <li>Good at integrating different parts of the teams</li>
            <li>Clear communication</li>
            <li>Sincerity with sensibility</li>
            <li>A knack for Systemic Vision (understanding how different parts of the projects and teams interact and communicate with each other)</li>
            <li>(More soon...)</li>
          </ul>
        </li>

        <li class="text-box topic">
          <h3 class="topic-title">Hobbies</h3>
          <ul>
            <li>I love <span class="highlighted-text">movies</span>! I think my favorite movie series is <span class="highlighted-text">The Lord Of The Rings</span> trilogy. Two great recommendations I have are <span class="highlighted-text">Spider-Man: Into The Spider-Verse</span> and <span class="highlighted-text">Everything Everywhere All At Once</span>.</li>
            <li>I love <span class="highlighted-text">music</span>! Jazz, Electronic, Rock, you name it, I dabble a little bit into everything. At first my favorite genre was <span class="highlighted-text">Metal</span> music, but I've been listening to <span class="highlighted-text">Hip-Hop</span> and <span class="highlighted-text">R&amp;B</span> a lot more recently. And of course, I cannot leave out my beloved <span class="highlighted-text">Brazilian music</span> (Samba, Funk, Pagode, Forró, etc).</li>
            <li>I've been watching <span class="highlighted-text">anime</span> since I was a teen, but in the lockdown times I begun watching it a lot more. Some personal recommendations are <span class="highlighted-text">Dr. Stone</span>, <span class="highlighted-text">Spy x Family</span>, and <span class="highlighted-text">Eizouken</span>.</li>
            <li>I've been playing <span class="highlighted-text">tabletop roleplaying games</span> a lot, <span class="highlighted-text">Dungeons &amp; Dragons</span> more specifically. At one of the tables, the campaign has been going on for like, 5 years at least. (Related: I love <span class="highlighted-text">Critical Role</span>)</li>
            <li>I've been practicing <span class="highlighted-text">Capoeira</span> for a few years now, I'm back to it since October 2022 after a looong break.</li>
            <li>I occasionally play the <span class="highlighted-text">bass guitar</span>, I love it but I've not been practicing a lot.</li>
          </ul>
        </li>
      </ul>
    </section>

    <section id="portfolio">
      <h2>Works and Projects</h2>
      <!-- TODO -->
      <p class="text-box">(Soon...)</p>
    </section>

    <footer>
      <!-- TODO -->
    </footer>
  </main>
</template>

<script setup>  
  import { ref } from 'vue';

  import Waves from '../components/animations/Waves.vue';

  const showNav = ref(false);

  function toggleShowNav() {
    showNav.value = !showNav.value;
  }

  if (window.innerWidth >= 576) toggleShowNav();

  function scrollToSection(event) {
    event.preventDefault();
    if (showNav.value) toggleShowNav();
    document.querySelector(event.target.hash)?.scrollIntoView({behavior: 'smooth'});
  }
</script>

<style scoped>
  * {
    z-index: 1;
  }

  main {
    overflow-y: auto;
    scroll-behavior: smooth;
  }

  header {
    position: fixed;
    top: 1rem;
    right: max(calc(40vw - (var(--default-contained-width) / 2)), 2.5vw);
    z-index: 3;
  }

  nav, nav .nav-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  nav {
    --nav-btn-size: 3rem;
    --nav-btn-half-size: calc(var(--nav-btn-size) / 2);

    height: var(--nav-btn-size);
    border: 1px solid #e8e8e8;
    border-right: none;
    border-radius: var(--nav-btn-half-size);
    border-top-left-radius: var(--default-border-radius);
    border-bottom-left-radius: var(--default-border-radius);
    background-color: #fff;
    transition:
      background-color .2s ease,
      border-radius .2s ease,
      border-color .2s ease;
  }

  nav.collapsed {
    border-color: transparent;
    border-top-left-radius: var(--nav-btn-half-size);
    border-bottom-left-radius: var(--nav-btn-half-size);
    background-color: transparent;
  }

  nav .nav-links {
    gap: calc(var(--default-spacing-x) * 2);
    margin-top: 1px;
    padding: 0 var(--default-spacing-x) 0 calc(var(--default-spacing-x) * 2);
    width: calc(100% - var(--nav-btn-size));
    overflow: hidden;
    transition: width .2s ease, height .2s ease, padding .2s ease;
  }

  nav.collapsed .nav-links {
    padding: 0;
    width: 0;
  }

  @media screen and (max-width: 575px) {
    main.backdrop-shadow::after {
      content: "";
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color:rgba(0, 0, 0, .125);
      -webkit-backdrop-filter: blur(.25rem);
      backdrop-filter: blur(.25rem);
      z-index: 2;
    }

    nav {
      border-bottom-right-radius: var(--default-border-radius);
      height: auto;
      align-items: flex-start;
      border: none;
    }

    nav .nav-links {
      flex-direction: column;
      align-items: flex-end;
      padding-top: var(--nav-btn-size);
      padding-bottom: var(--nav-btn-size);
      gap: var(--nav-btn-size);
      margin-right: -0.5rem;
    }
  }

  nav .nav-links a {
    display: flex;
    align-items: center;
    gap: calc(var(--default-spacing-x) / 3);
    border-bottom: 1px solid transparent;
    white-space: nowrap;
    text-decoration: none;
    color: var(--highlight-color);
  }

  nav .nav-links a:hover {
    color: var(--highlight-color-darker);
    border-color: var(--highlight-color-darker);
  }

  nav .nav-links a .material-icons {
    font-size: 1rem;
  }

  nav .menu-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--nav-btn-size);
    height: var(--nav-btn-size);
    border: 1px solid var(--highlight-color);
    border-radius: var(--nav-btn-half-size);
    background-color: var(--highlight-color);
    font-size: var(--nav-btn-half-size);
    color: var(--font-color-light);
    transition: background-color .2s, color .2s;
  }

  nav .menu-icon:hover {
    background-color: var(--highlight-color-darker);
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: min(100vh, 100%);
    background-color: #f0f4f8;
    padding: 1.25rem 0 2.5rem 0;
  }

  section:nth-child(odd) {
    background-color: #e0e4e8;
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

  section#about-me {
    background-image:
      url("../assets/doodle-chat-bg.webp"),
      linear-gradient(#e0e4e8, #e0e4e8);
    background-blend-mode: lighten;
    background-size: max(50vw, 50vh) auto;
    background-position: center center;
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

  .profile-pic {
    overflow: hidden;
    width: min(50vw, 12.5rem);
    height: auto;
    border-radius: 50%;
  }

  .topics-list {
    list-style: none;
    padding: 0;
  }

  .topics-list .topic {
    width: calc(100% - 4rem);
    padding: 1rem 1.5rem;
  }

  .topics-list .topic:nth-of-type(even) {
    margin-right: 4rem;
  }

  .topics-list .topic:nth-of-type(odd) {
    margin-left: 4rem;
  }

  @media screen and (max-width: 767px) {
    .topics-list .topic {
      width: 100%;
    }

    .topics-list .topic:nth-of-type(even) {
      margin-right: 0;
    }

    .topics-list .topic:nth-of-type(odd) {
      margin-left: 0;
    }
  }

  .topics-list .topic + .topic {
    margin-top: calc(var(--default-spacing-y) * 4.5);
  }

  .topics-list .topic::before {
    content: 'arrow_left';
    font-family: 'Material Icons';
    position: absolute;
    left: calc(-1.5rem - .25rem);
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
    font-size: 3rem;
    width: 3rem;
    height: 3rem;
    color: rgba(255, 255, 255, .75);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .topics-list .topic:nth-of-type(odd)::before {
    content: 'arrow_right';
    left: auto;
    right: calc(-1.5rem - .25rem);
  }

  .topics-list .topic > * {
    margin: 0;
  }

  .topics-list .topic > * + * {
    margin-top: 1rem;
  }

  .topics-list .topic ul {
    --marker-size: .625em;

    display: flex;
    flex-direction: column;
    gap: var(--default-spacing-y);
    padding-left: 1rem;
    list-style-type: none;
  }

  .topics-list .topic ul li {
    text-align: left;
  }

  .topics-list .topic ul li::before {
    content: '■';
    display: flex;
    align-items: center;
    position: absolute;
    width: var(--marker-size);
    height: var(--marker-size);
    left: -0.75rem;
    top: calc(.75rem - (var(--marker-size) / 6));
    transform: translateY(-50%);
    font-size: var(--marker-size);
    overflow: hidden;
    color: var(--highlight-color);
  }

  .topics-list .topic .topic-title {
    line-height: 1em;
  }
</style>

