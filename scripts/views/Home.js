import { defineComponent, ref } from 'vue';

import useStyle from '../lib/vue-composables/useStyle.js';

export default defineComponent({
  template: /* html */`
    <header>
      <nav :class="{collapsed: !showNav}">
        <div class="nav-links">
          <a href="#banner" @click="navigateHome">Start</a>
          <a href="#about-me" @click="navigateHome">About Me</a>
          <a href="#portfolio" @click="navigateHome">Works and Projects</a>
          <a href="https://github.com/RaniereSouza">
            GitHub Profile <span class="material-icons">north_east</span>
          </a>
        </div>

        <button
          class="material-icons menu-icon"
          @click="toggleShowNav"
        >
          {{!showNav ? 'more_vert' : 'close'}}
        </button>
      </nav>
    </header>

    <section id="banner">
      <h1>Welcome, Traveler!</h1>
      <img class="profile-pic" src="../assets/profile-pic.jpg" alt="RS" title="Raniere Souza Santos"/>
      <p class="text-box">Learn a little bit about me, my work and my interests &#x1F604;</p>
    </section>

    <section id="about-me">
      <h2>About Me</h2>
      <ul class="topics-list">
        <li class="text-box topic">
          <h3 class="topic-title">Who Am I</h3>
          <p>Hello! My name is <span class="highlighted-text">Raniere Souza Santos</span>, my pronouns are <span class="highlighted-text">he/him</span>, and I'm a <span class="highlighted-text">31yo man</span>. I'm a <span class="highlighted-text">Brazilian</span> person living in <span class="highlighted-text">Salvador, Bahia</span>. I can communicate a little bit in <span class="highlighted-text">English</span> but my native language is <span class="highlighted-text">Portuguese</span>. I'm  racially <span class="highlighted-text">biracial</span> (<span class="highlighted-text">black</span> dad and <span class="highlighted-text">white</span> mom), and ethnically <span class="highlighted-text">latino</span> by both of my parents and myself. And last but not least, I'm a <span class="highlighted-text">Software Developer</span>, specialized in the last few years in <span class="highlighted-text">Front-End</span> development.</p>
        </li>

        <li class="text-box topic">
          <h3 class="topic-title">Technologies, Tools and Programming Languages</h3>
          <!-- TODO -->
          <ul>
            <li><span class="highlighted-text">HTML/CSS/JavaScript</span>: The "meat and potatoes" (or for us Brazilians, "rice and beans") of Web and Front-End development. It's behind every page we access on the web, so we might as well know how to work with it.</li>
            <li><span class="highlighted-text">Git</span>: Source code versioning is essential, it doesn't matter which category of Developer you are. And the most popular tool to do that is <span class="highlighted-text">Git</span>, so it's important to be confortable with it.</li>
            <li><span class="highlighted-text">Vue.js</span>: The JavaScript community has been bubbling up with new libs, new packages, new frameworks, every day... But since 2021 I've chosen <span class="highlighted-text">Vue.js</span> as my favorite, with some influence of my current job (but I've been learning a bit of <span class="highlighted-text">React</span> too).</li>
            <li>(More soon...)</li>
          </ul>
        </li>

        <li class="text-box topic">
          <h3 class="topic-title">Soft Skills</h3>
          <!-- TODO -->
          <ul>
            <li>Fast friends</li>
            <li>Good at integrating different parts of the teams</li>
            <li>Clear communication</li>
            <li>Sincerity with sensibility</li>
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
  `,
  setup() {
    const showNav = ref(true);

    function toggleShowNav() {
      showNav.value = !showNav.value;
    }

    function navigateHome(event) {
      showNav.value = false;
      console.log(event.target);
    }

    useStyle(/* css */`
      main {
        overflow-y: auto;
      }

      header {
        position: fixed;
        top: 1rem;
        right: 1.5rem;
        z-index: 1;
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
        transition: width .2s ease, padding .2s ease;
      }

      nav.collapsed .nav-links {
        padding: 0;
        width: 0;
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
        padding: 1.25rem 0;
      }

      section:nth-child(odd) {
        background-color: #e0e4e8;
      }

      section > * {
        max-width: min(90vw, 45rem);
        text-align: center;
      }

      section > *:first-child {
        margin-top: 0;
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

      .profile-pic {
        overflow: hidden;
        width: min(50vw, 15rem);
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
    `);

    return {
      showNav,
      toggleShowNav,
      navigateHome,
    };
  },
});
