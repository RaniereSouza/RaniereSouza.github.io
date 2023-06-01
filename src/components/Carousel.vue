<template>
  <div class="carousel-wrapper">
    <ul class="carousel">
      <li class="carousel-card">
        <div class="carousel-card-img">
          <a href="https://ntopus.com.br/" target="_blank">
            <img src="../assets/ntopus-home.jpg" alt="" />
          </a>
        </div>
        <div class="carousel-card-body">
          <h3>nTopus</h3>
          <p>Technological ecosystem of tools designed to help on Emergency Management and Mission-critical Environments, using real-time device tracking, sensors, multiple variations of wireless communication, and other things. It's my current workplace.</p>
        </div>
        <div class="carousel-card-footer">
          <span class="default-btn pill-btn tag">HTML</span>
          <span class="default-btn pill-btn tag">CSS</span>
          <span class="default-btn pill-btn tag">Sass</span>
          <span class="default-btn pill-btn tag">JavaScript</span>
          <span class="default-btn pill-btn tag">TypeScript</span>
          <span class="default-btn pill-btn tag">Vue.js</span>
          <span class="default-btn pill-btn tag">Vite</span>
          <span class="default-btn pill-btn tag">Cypress</span>
          <span class="default-btn pill-btn tag">Git</span>
          <span class="default-btn pill-btn tag">GitLab</span>
          <span class="default-btn pill-btn tag">Docker</span>
        </div>
      </li>

      <li class="carousel-card">
        <div class="carousel-card-img">
          <a href="https://radarsebrae.com.br/" target="_blank">
            <img src="../assets/radar-sebrae-home.jpg" alt="" />
          </a>
        </div>
        <div class="carousel-card-body">
          <h3>Radar SEBRAE</h3>
          <p>Analysis and ranking of business oportunities by category using various criteria such as: geographic location, population size, average income, companies average lifetime, and many others; It also offers tips about how to start a business. It was my previous job.</p>
        </div>
        <div class="carousel-card-footer">
          <span class="default-btn pill-btn tag">HTML</span>
          <span class="default-btn pill-btn tag">CSS</span>
          <span class="default-btn pill-btn tag">JavaScript</span>
          <span class="default-btn pill-btn tag">.NET (Front-End)</span>
          <span class="default-btn pill-btn tag">Ionic</span>
          <span class="default-btn pill-btn tag">Angular</span>
        </div>
      </li>

      <li class="carousel-card">
        <div class="carousel-card-img">
          <a href="https://www.npmjs.com/package/heimdall-visual-test" target="_blank">
            <img class="alt-icon-npm" src="" alt="&#xf3d4;" />
          </a>
        </div>
        <div class="carousel-card-body">
          <h3>heimdall-visual-test</h3>
          <p>A work-in-progress personal project for a NPM Package to be used as a Visual Regression Testing tool for JavaScript, in integration with applications like the Cypress platform, for example. It's pretty much in infant stage.</p>
        </div>
        <div class="carousel-card-footer">
          <span class="default-btn pill-btn tag">JavaScript</span>
          <span class="default-btn pill-btn tag">Vite</span>
          <span class="default-btn pill-btn tag">Vitest</span>
          <span class="default-btn pill-btn tag">Cypress</span>
          <span class="default-btn pill-btn tag">Git</span>
          <span class="default-btn pill-btn tag">GitHub</span>
        </div>
      </li>

      <li class="carousel-card">
        <div class="carousel-card-img">
          <a href="https://github.com/RaniereSouza/rpg-grid-map" target="_blank">
            <img class="alt-icon-github" src="" alt="&#xf09b;" />
          </a>
        </div>
        <div class="carousel-card-body">
          <h3>RPG Grid Map</h3>
          <p>A work-in-progress personal project for a Web Application to be used as a minimalistic helping tool for Tabletop RPGs, specifically for handling maps, scenarios, dungeons, terrain, positioning and movement. It's not even in it's beta version yet.</p>
        </div>
        <div class="carousel-card-footer">
          <span class="default-btn pill-btn tag">HTML</span>
          <span class="default-btn pill-btn tag">CSS</span>
          <span class="default-btn pill-btn tag">JavaScript</span>
          <span class="default-btn pill-btn tag">Three.js</span>
          <span class="default-btn pill-btn tag">Vite</span>
          <span class="default-btn pill-btn tag">Vitest</span>
          <span class="default-btn pill-btn tag">Cypress</span>
          <span class="default-btn pill-btn tag">Cucumber/Gherkin</span>
          <span class="default-btn pill-btn tag">Git</span>
          <span class="default-btn pill-btn tag">GitHub</span>
        </div>
      </li>

      <li class="carousel-card">
        <div class="carousel-card-img">
          <a href="">
            <img src="../assets/presentation-home.jpg" alt="" />
          </a>
        </div>
        <div class="carousel-card-body">
          <h3>This page! &#x1F609;</h3>
          <p>I've never published anything on GitHub Pages before, and I've also never had a presentation/portfolio page, so I wanted to see what I could do.</p>
        </div>
        <div class="carousel-card-footer">
          <span class="default-btn pill-btn tag">HTML</span>
          <span class="default-btn pill-btn tag">CSS</span>
          <span class="default-btn pill-btn tag">JavaScript</span>
          <span class="default-btn pill-btn tag">Vue.js</span>
          <span class="default-btn pill-btn tag">Vite</span>
          <span class="default-btn pill-btn tag">Git</span>
          <span class="default-btn pill-btn tag">GitHub</span>
        </div>
      </li>

      <li class="carousel-card ending-card">
        <span class="default-btn pill-btn">More content soon...</span>
      </li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .carousel-wrapper {
    overflow: hidden;
    overflow-x: scroll;
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    .carousel-wrapper {
      scrollbar-width: thin;
    }

    .carousel-wrapper::-webkit-scrollbar {
      width: .5rem;
    }
  }

  .carousel {
    display: flex;
    gap: var(--default-spacing-x);
    list-style: none;
    padding: 0;
    width: max-content;
  }

  .carousel-card {
    display: flex;
    flex-direction: column;
    border-radius: var(--default-border-radius);
    background-color: #fff;
    width: calc((var(--default-contained-width) / 2) - (var(--default-spacing-x) / 2));
    overflow: hidden;
  }

  @media screen and (max-width: 575px) {
    .carousel-card {
      width: var(--default-contained-width);
    }
  }

  .carousel-card.ending-card {
    background-color: transparent;
    justify-content: center;
    align-items: center;
  }

  .carousel-card.ending-card > * {
    width: 80%;
    justify-content: center;
    text-align: center;
  }

  .carousel-card-img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15rem;
    overflow: hidden;
    border-bottom: 1px solid #e6e6e6;
  }

  .carousel-card-img a, .carousel-card-img img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .carousel-card-img a {
    width: max-content;
    text-decoration: none;
    color: inherit;
  }

  .carousel-card-img img {
    font-family: 'Material Icons Outlined';
    color: #f6f6f6;
    font-size: 8rem;
    transform: scale(1.2) translateY(8%);
    filter: opacity(.5) blur(1px) brightness(.8);
    transition: transform .2s ease, filter .2s ease;
  }

  .carousel-card:hover .carousel-card-img img {
    transform: scale(1) translateY(0);
    filter: opacity(1) blur(0) brightness(1);
  }

  .carousel-card-img img.alt-icon-npm { /* NPM icon &#xf3d4; */
    font-family: 'Font Awesome 6 Brands';
    color: #c53635;
  }

  .carousel-card-img img.alt-icon-github { /* GitHub icon &#xf09b; */
    font-family: 'Font Awesome 6 Brands';
    color: #29017f;
  }

  .carousel-card-body {
    height: 10rem;
    overflow-y: auto;
    padding: var(--default-spacing);
  }

  .carousel-card-body > *:first-child {
    margin-top: var(--default-spacing-y);
  }

  .carousel-card-body > *:not(:first-child) {
    text-align: left;
  }

  .carousel-card-footer {
    display: flex;
    flex-wrap: wrap;
    margin-top: var(--default-spacing-y);
    padding: var(--default-spacing);
    gap: calc(var(--default-spacing-x) / 3);
  }

  .tag {
    display: inline-flex;
  }
</style>
