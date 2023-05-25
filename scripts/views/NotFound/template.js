export default /* html */`
  <p class="not-found-title">
    <span class="highlighted-text">404:</span> Not Found<span class="highlighted-text">...</span>
  </p>

  <p class="text-box elevated not-found-subtitle">
    We could not find a page for the address <code>{{ currentRoute }}</code>. Looking for something else? 🤔
  </p>

  <footer>
    <router-link class="default-btn pill-btn elevated back-btn" to="/">
      <span class="material-icons">arrow_back</span> Back to the start
    </router-link>
  </footer>
`;
