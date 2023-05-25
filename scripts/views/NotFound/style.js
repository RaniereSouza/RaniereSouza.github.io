export default /* css */`
  html {
    background:
      url("../assets/empty-road.jpg")
      no-repeat
      center center /
      min(100vw, 100%) auto;
  }

  @media (orientation: portrait) {
    html {
      background-size: auto min(100vh, 100%);
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  code {
    background-color: #ccc;
    padding: .125rem;
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

  .not-found-title, .not-found-subtitle {
    text-align: center;
    margin: 0;
  }

  .not-found-title {
    font-size: 4rem;
    text-shadow: var(--default-shadow);
  }

  .not-found-subtitle {
    margin-top: var(--default-spacing-y);
    max-width: min(90vw, 90%);
  }
`;
