<!-- Following the implementation on https://www.cssscript.com/demo/animated-waves-svg/ -->
<template>
  <div id="waves-animation" title="https://www.cssscript.com/demo/animated-waves-svg/">
    <svg
      class="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="hsla(217, 71%, 70%, .1)" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="hsla(217, 71%, 65%, .2)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="hsla(217, 71%, 60%, .3)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="hsla(217, 71%, 55%, .4)" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
  #waves-animation {
    overflow: hidden;
  }

  svg {
    margin-bottom: -5px;
    padding-top: 5px;
  }

  @keyframes move-forever {
    0% {
      transform: translate3d(-90px,0,0) translateY(5px);
    }
    50% {
      transform:translateY(0);
    }
    100% { 
      transform: translate3d(85px,0,0) translateY(5px);
    }
  }

  .parallax > use {
    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
</style>
