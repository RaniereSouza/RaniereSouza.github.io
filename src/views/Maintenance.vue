<template>
  <main>
    <h1>
      Work In Progress<span class="highlighted-text">...</span>
    </h1>

    <footer>
      Go to my <a class="default-btn pill-btn" href="https://github.com/RaniereSouza">
        GitHub Profile <span class="material-icons compact append">north_east</span>
      </a>
    </footer>
  </main>
</template>

<style scoped>
  main {
    background:
      url("../assets/cogs-optimized.gif")
      no-repeat
      center center /
      min(50vw, 240px) auto;
  }

  h1 {
    text-align: center;
  }

  @media screen and (max-width: 575px) {
    h1 {
      margin: .5rem 0;
    }
  }

  @media screen and (max-height: 450px) {
    h1 {
      text-align: left;
      padding-left: var(--default-spacing-x);
    }
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
</style>
