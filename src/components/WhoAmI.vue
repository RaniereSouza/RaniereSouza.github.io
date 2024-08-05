<template>
  <ul ref="topicsListRef" class="topics-list">
    <li class="text-box topic">
      <h3 class="topic-title">#Who Am I</h3>
      <ul>
        <li>Hello! My name is <span class="highlighted-text">Raniere Souza Santos</span>, my pronouns are <span class="highlighted-text">he/him</span>, and I'm a <span class="highlighted-text">{{myAge}}yo cis man</span>. I'm a <span class="highlighted-text">Brazilian</span> person living in <span class="highlighted-text">Salvador, Bahia</span>. I can communicate a little bit in <span class="highlighted-text">English</span> but my native language is <span class="highlighted-text">Portuguese</span>. I'm  racially <span class="highlighted-text">biracial</span> (<span class="highlighted-text">black</span> dad and <span class="highlighted-text">white</span> mom), and ethnically <span class="highlighted-text">latino</span> by both of my parents and myself. And last but not least, I'm a <span class="highlighted-text">Software Developer</span>, specialized in the last few years in <span class="highlighted-text">Front-End</span> development.</li>
      </ul>
    </li>

    <li class="text-box topic">
      <h3 class="topic-title">#Technologies, Tools and Programming Languages</h3>
      <ul>
        <li><span class="highlighted-text">HTML/CSS/JavaScript</span>: The "meat and potatoes" (or for us Brazilians, "rice and beans") of Web and <span class="highlighted-text">Front-End</span> development. It's behind every page we access on the web, so we might as well know how to work with it.</li>
        <li><span class="highlighted-text">Git</span>: Source code versioning is essential, it doesn't matter which category of Developer you are. And the most popular tool to do that is <span class="highlighted-text">Git</span>, so it's important to be confortable with it. I've also been working with cloud based repository platforms, like <span class="highlighted-text">GitHub</span>, <span class="highlighted-text">GitLab</span>, and <span class="highlighted-text">Bitbucket</span>.</li>
        <li><span class="highlighted-text">Vue.js</span>: The <span class="highlighted-text">JavaScript</span> community has been bubbling up with new libs, new packages, new frameworks, every day... But since 2021 I've chosen <span class="highlighted-text">Vue</span> as my favorite, with some influence of my current job (but I've been learning a bit of <span class="highlighted-text">React</span> too).</li>
        <li><span class="highlighted-text">Vite</span>: It's fast, it's very "to the point" and simple, and with a lot of available configuration, it's a really cool bundler/builder. It also works very well with <span class="highlighted-text">TypeScript</span>, <span class="highlighted-text">Vue</span>, <span class="highlighted-text">React</span>, and other technologies. It is currently my favorite bundler/builder.</li>
        <li><span class="highlighted-text">Automated Testing</span>: Pairing up with <span class="highlighted-text">Vite</span> we've got <span class="highlighted-text">Vitest</span> as a JavaScript <span class="highlighted-text">Unit Testing</span> platform. I really like it, but I also learned a bit of <span class="highlighted-text">Jest</span>, since it's more popular. I also learned to combine the <span class="highlighted-text">Cypress</span> platform for <span class="highlighted-text">End-to-End Testing</span> with the <span class="highlighted-text">Cucumber/Gherkin</span> technologies for <span class="highlighted-text">BDD</span> test scenarios.</li>
        <li><span class="highlighted-text">Containers</span>: It's becoming more and more evident that knowing how to create, manage and use containers is essential for every developer. The most well known and reliable basic tools for it that we have today are <span class="highlighted-text">Docker</span> along with <span class="highlighted-text">Docker Compose</span>, so it's been a while since I've started my journey to dominate those tools.</li>
        <li>(More soon...)</li>
      </ul>
    </li>

    <li class="text-box topic">
      <h3 class="topic-title">#Soft Skills</h3>
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
      <h3 class="topic-title">#Hobbies</h3>
      <ul>
        <li>I love <span class="highlighted-text">movies</span>! I think my favorite movie series is <span class="highlighted-text">The Lord Of The Rings</span> trilogy. Two great recommendations I have are the <span class="highlighted-text">Spider-Verse animations</span> and <span class="highlighted-text">Everything Everywhere All At Once</span>.</li>
        <li>I love <span class="highlighted-text">music</span>! Jazz, Electronic, Rock, you name it, I dabble a little bit into everything. At first my favorite genre was <span class="highlighted-text">Metal</span> music, but I've been listening to <span class="highlighted-text">Hip-Hop</span> and <span class="highlighted-text">R&amp;B</span> a lot more recently. And of course, I cannot leave out my beloved <span class="highlighted-text">Brazilian music</span> (Samba, Funk, Pagode, Forró, etc).</li>
        <li>I've been watching <span class="highlighted-text">anime</span> since I was a teen, but in the lockdown times I begun watching it a lot more. Some personal recommendations are <span class="highlighted-text">Dr. Stone</span>, <span class="highlighted-text">Spy x Family</span>, and <span class="highlighted-text">Eizouken</span>.</li>
        <li>I've been playing <span class="highlighted-text">tabletop roleplaying games</span> a lot, <span class="highlighted-text">Dungeons &amp; Dragons</span> more specifically. At one of the tables, the campaign has been going on for like, 5 years at least! (Related: I love <span class="highlighted-text">Critical Role</span>)</li>
        <li>I've been practicing <span class="highlighted-text">Capoeira</span> for a few years now, I'm back to it since October 2022 after a looong break.</li>
        <li>I occasionally play the <span class="highlighted-text">bass guitar</span>, I love it but I've not been practicing a lot.</li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  import { debounce } from '../lib/helpers';

  const topicsListRef = ref();

  const now = new Date();
  now.setDate(now.getDate() - 6); // go to last month if now is before current month's 7th
  now.setMonth(now.getMonth() - 9); // go to last year if now is before October
  const birthYear = 1991;
  const myAge = now.getFullYear() - birthYear;

  onMounted(() => {
    const topicsListEl = topicsListRef.value;
    const windowHeightPx = window.innerHeight;
    const horizontalThreshold = windowHeightPx / 2;
    const acceptableDistFromThreshold = windowHeightPx / 4;

    function handleTopicActivation() {
      const topicsListRect = topicsListEl.getClientRects()[0];
      if (
        (topicsListRect.top > windowHeightPx) 
        || (topicsListRect.bottom < 0)
      ) {
        topicsListEl.querySelectorAll('.topic').forEach(topicEl =>
          topicEl.classList.remove('active')
        );
        return;
      }

      topicsListEl.querySelectorAll('.topic').forEach(topicEl => {
        const topicRect = topicEl.getClientRects()[0];
        if (
          ((topicRect.top - horizontalThreshold) >= acceptableDistFromThreshold)
          || ((horizontalThreshold - topicRect.bottom) >= acceptableDistFromThreshold)
        ) topicEl.classList.remove('active');
        else topicEl.classList.add('active');
      });
    }
    handleTopicActivation();

    const debouncedHandler = debounce(20, handleTopicActivation);
    window.addEventListener('main-scroll', debouncedHandler);
    onUnmounted(() => {
      window.removeEventListener('main-scroll', debouncedHandler);
    });
  });
</script>

<style scoped>
  .topics-list {
    --topic-background-color: rgba(255, 255, 255, .375);

    list-style: none;
    padding: 0;
  }

  .topics-list .topic {
    width: calc(100% - 4rem);
    padding: 1.5rem 3rem 2rem 3rem;
    transition: background-color .2s, border-color .2s;
  }

  .topics-list .topic:nth-of-type(even) {
    margin-right: 4rem;
    border-left: .2rem solid #fff;
  }

  .topics-list .topic:nth-of-type(odd) {
    margin-left: 4rem;
    border-right: .2rem solid #fff;
  }

  @media screen and (max-width: 767px) {
    .topics-list .topic {
      width: 100%;
      padding: .75rem 1rem;
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
    content: 'arrow_right';
    font-family: 'Material Icons';
    position: absolute;
    right: calc(-1.5rem - .25rem);
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
    font-size: 3rem;
    width: 3rem;
    height: 3rem;
    color: var(--topic-background-color);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color .2s;
  }

  .topics-list .topic:nth-of-type(odd)::before {
    content: 'arrow_left';
    right: auto;
    left: calc(-1.5rem - .25rem);
  }

  .topics-list .topic.text-box {
    background-color: var(--topic-background-color);
    border-bottom: .2rem solid #fff;
  }

  .topics-list .topic.text-box:hover,
  .topics-list .topic.text-box.active {
    background-color: rgba(255, 255, 255, 1);
    border-color: var(--highlight-color-lighter);
  }
  .topics-list .topic.text-box:hover::before,
  .topics-list .topic.text-box.active::before {
    color: rgba(255, 255, 255, 1);
  }

  .topics-list .topic.text-box .highlighted-text {
    color: #444;
    font-weight: bold;
  }

  .topics-list .topic > * {
    margin: 0;
  }

  .topics-list .topic > * + * {
    margin-top: 1.5rem;
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
</style>