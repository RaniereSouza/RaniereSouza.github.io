export default /* html */`
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
    <p class="text-box">Learn a little bit <a class="highlighted-text" href="#about-me" @click="scrollToSection">about me</a>, my <a class="highlighted-text" href="#portfolio" @click="scrollToSection">work</a> and my interests &#x1F604;</p>
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
`;
