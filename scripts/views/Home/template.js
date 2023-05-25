export default /* html */`
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
        <p>Hello! My name is <span class="highlighted-text">Raniere Souza Santos</span>, my pronouns are <span class="highlighted-text">he/him</span>, and I'm a <span class="highlighted-text">31yo cis man</span>. I'm a <span class="highlighted-text">Brazilian</span> person living in <span class="highlighted-text">Salvador, Bahia</span>. I can communicate a little bit in <span class="highlighted-text">English</span> but my native language is <span class="highlighted-text">Portuguese</span>. I'm  racially <span class="highlighted-text">biracial</span> (<span class="highlighted-text">black</span> dad and <span class="highlighted-text">white</span> mom), and ethnically <span class="highlighted-text">latino</span> by both of my parents and myself. And last but not least, I'm a <span class="highlighted-text">Software Developer</span>, specialized in the last few years in <span class="highlighted-text">Front-End</span> development.</p>
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
`;
