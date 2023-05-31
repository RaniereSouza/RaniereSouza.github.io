<template>
  <header>
    <nav :class="{collapsed: !modelValue}">
      <div class="nav-links">
        <a
          v-for="item of navItems"
          :href="item.href"
          v-html="item.textContent"
          @click="item.action?.($event)"
        />
      </div>

      <button
        class="material-icons menu-icon"
        @click="toggleShowNav"
      >
        {{!modelValue ? 'menu' : 'close'}}
      </button>
    </nav>
  </header>
</template>

<script setup>
  const props = defineProps({
    navItems: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits(['update:modelValue']);

  function toggleShowNav() {
    emit('update:modelValue', !props.modelValue);
  }

  if (window.innerWidth >= 576) toggleShowNav();
</script>

<style>
  @media screen and (max-width: 575px) {
    body.nav-backdrop-shadow::after, main.nav-backdrop-shadow::after {
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
  }
</style>

<style scoped>
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
    border-radius: var(--nav-btn-half-size);
    background-color: var(--highlight-color);
    font-size: var(--nav-btn-half-size);
    color: var(--font-color-light);
    transition: background-color .2s, color .2s;
  }

  nav .menu-icon:hover {
    background-color: var(--highlight-color-darker);
  }
</style>
