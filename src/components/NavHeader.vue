<template>
  <header>
    <nav :class="{collapsed: !modelValue}">
      <div class="nav-links">
        <a
          v-for="item of navItems"
          :class="{active: !!item.active}"
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
      background-color:rgba(0, 0, 0, .25);
      -webkit-backdrop-filter: blur(.25rem);
      backdrop-filter: blur(.25rem);
      z-index: 2;
    }
  }
</style>

<style scoped>
  header {
    --nav-btn-size: 3rem;
    --nav-btn-half-size: calc(var(--nav-btn-size) / 2);

    position: fixed;
    top: 1rem;
    right: max(calc(40vw - (var(--default-contained-width) / 2)), 2.5vw);
    z-index: 3;
    transition: top .2s, right .2s;
  }

  header:has(nav:not(.collapsed)), header:has(nav .menu-icon:hover) {
    right: calc(
      max(calc(40vw - (var(--default-contained-width) / 2)), 2.5vw)
      - (var(--nav-btn-half-size) * .125)
    );
  }

  @media screen and (max-width: 575px) {
    header:has(nav:not(.collapsed)), header:has(nav .menu-icon:hover) {
      top: calc(1rem - (var(--nav-btn-half-size) * .125));
    }
  }

  nav, nav .nav-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  nav {
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
    font-family: var(--highlight-font);
    font-weight: 600;
    transition: width .2s ease, height .2s ease, padding .2s ease;
  }

  nav.collapsed .nav-links {
    padding: 0;
    width: 0;
  }

  @media screen and (max-width: 575px) {
    nav {
      border-top-right-radius: calc(var(--nav-btn-half-size) * 1.125);
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
      padding-left: var(--nav-btn-half-size);
      gap: var(--nav-btn-size);
      margin-right: -0.125rem;
    }
  }

  nav .nav-links a {
    display: flex;
    align-items: center;
    gap: calc(var(--default-spacing-x) / 3);
    border-bottom: 1px solid transparent;
    padding: 0 .375rem;
    white-space: nowrap;
    text-decoration: none;
    color: var(--highlight-color);
    opacity: 1;
    transition: opacity .2;
  }

  nav.collapsed .nav-links a {
    opacity: 0;
  }

  nav .nav-links a:hover {
    color: var(--highlight-color-darker);
    border-color: var(--highlight-color-darker);
  }

  nav .nav-links a.active, nav .nav-links a.active:hover {
    color: var(--highlight-color-darker);
    border-radius: calc(var(--default-border-radius) / 2);
    border-bottom: none;
    padding: .125rem .375rem;
    background-color: var(--highlight-color-lighter);
  }

  nav .nav-links :deep(a .material-icons) {
    font-size: .75rem;
    margin-left: -0.125rem;
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
    transition: background-color .2s,
                color .2s,
                width .2s,
                height .2s,
                border-radius .2s;
  }

  nav:not(.collapsed) .menu-icon, nav .menu-icon:hover {
    width: calc(var(--nav-btn-size) * 1.125);
    height: calc(var(--nav-btn-size) * 1.125);
    border-radius: calc(var(--nav-btn-half-size) * 1.125);
  }

  nav .menu-icon:hover {
    background-color: var(--highlight-color-darker);
  }
</style>
