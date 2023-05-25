export default /* css */`
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
`;
