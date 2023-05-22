import { defineComponent, ref } from 'vue';

import useStyle from '../lib/vue-composables/useStyle.js';

export default defineComponent({
  template: /* html */`
    <header>
      <nav :class="{collapsed: !showNav}">
        <div class="nav-links">
          <a href="">Start</a>
          <a href="">About Me</a>
          <a href="">Works and Projects</a>
          <a href="https://github.com/RaniereSouza">GitHub Profile <span class="material-icons">north_east</span></a>
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
      <img class="profile-pic" src="../assets/profile-pic.jpg" alt="RS">
      <!-- TODO -->
      <p class="text-box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores corrupti voluptates. Quos placeat amet debitis excepturi tempore culpa repudiandae, quae est. Distinctio voluptate nihil ea quas rem quaerat atque dolores eveniet iste laborum. Nisi officiis, incidunt pariatur ducimus, et quod placeat recusandae consequatur aliquam, animi ab accusamus doloremque libero!</p>
    </section>

    <section id="about-me">
      <h2>About Me</h2>
      <!-- TODO -->
      <p class="text-box">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, amet? A qui quo minus reiciendis ab rem neque corrupti consequatur!</p>
      <p class="text-box">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, amet? A qui quo minus reiciendis ab rem neque corrupti consequatur!</p>
    </section>

    <section id="projects">
      <h2>Works and Projects</h2>
      <!-- TODO -->
      <p class="text-box">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse molestias quos sit quasi error perspiciatis totam eligendi nam reprehenderit. Doloremque.</p>
    </section>

    <footer>
      <!-- TODO -->
    </footer>
  `,
  setup() {
    const showNav = ref(false);

    function toggleShowNav() {
      showNav.value = !showNav.value;
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

        height: var(--nav-btn-size);
        border-radius: calc(var(--nav-btn-size) / 2);
        background-color: #fff;
        transition: background-color .2s ease;
      }

      nav.collapsed {
        background-color: transparent;
      }

      nav .nav-links {
        gap: var(--default-spacing-x);
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
        border-color: var(--highlight-color);
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
        border-radius: calc(var(--nav-btn-size) / 2);
        background-color: var(--highlight-color);
        font-size: calc(var(--nav-btn-size) / 2);
        color: var(--font-color-light);
        transition: background-color .2s, color .2s;
      }

      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        min-height: min(100vh, 100%);
        background-color: #f0f4f8;
      }

      section:nth-child(odd) {
        background-color: #f0f8f4;
      }

      section > * {
        max-width: min(90vw, 45rem);
        text-align: center;
      }

      .profile-pic {
        overflow: hidden;
        width: min(50vw, 15rem);
        height: auto;
        border-radius: 50%;
      }
    `);

    return {
      showNav,
      toggleShowNav,
    };
  },
});
