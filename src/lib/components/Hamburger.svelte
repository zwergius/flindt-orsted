<script>
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  export let open = false,
    sections;

  const lineW = 50;
  const svgH = 50;

  function handleClick(title) {
    const id = encodeURIComponent(title.toLowerCase());
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    open = false;
  }
</script>

<button class:open on:click={() => (open = !open)}>
  <svg width={lineW} height={svgH}>
    <line id="top-1" x1="0" y1="2" x2={lineW} y2="2" />
    <line id="top-2" x1="0" y1="2" x2={lineW} y2="2" />
    <line id="middle" x1="0" y1="17" x2={lineW} y2="17" />
    <line id="bottom" x1="0" y1="32" x2={lineW} y2="32" />
  </svg>
</button>

{#if open}
  <nav transition:fade={{ easing: quintOut }}>
    <ul>
      {#each sections as section, i (section)}
        <li in:fly={{ delay: 300 + i * 50, duration: 300, easing: quintOut, y: -100 }}>
          <a
            on:click|preventDefault={() => handleClick(section)}
            href={`#${encodeURIComponent(section.toLowerCase())}`}>{section.split(' ')[0]}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
{/if}

<style>
  button {
    position: absolute;
    left: 50%;
    top: 40px;
    transform: translateX(-50%);
    z-index: 20;
    stroke: var(--white);
  }

  nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: var(--headerLevel);
    background-color: var(--overlayBg);
    display: flex;
    justify-content: center;
  }

  ul {
    margin-top: 150px;
  }

  li {
    width: var(--navWidth);
    font-size: var(--navFontSize);
    margin-bottom: 30px;
  }

  a {
    font-family: Roboto;
    display: block;
    color: var(--black);
    border: var(--navBorderWidth) solid var(--black);
    text-transform: uppercase;
    font-weight: 600;
    padding: 0.4em 0.6em;
    text-align: center;
  }

  svg {
    transition: transform 0.3s ease-in-out;
  }

  svg line {
    stroke-width: 3;
    transition: all 0.3s ease-in-out;
  }

  .open {
    stroke: var(--black);
  }

  .open #top-1 {
    transform-origin: top left;
    transform: translate(0px, 0px) rotate(90deg);
  }

  .open #top-2 {
    transform-origin: top right;
    transform: translate(-0px, 0px) rotate(-90deg);
  }

  .open #middle {
    transform-origin: top left;
    transform: translate(19px, -10px) rotate(45deg);
    stroke: var(--black);
  }

  .open #bottom {
    transform-origin: top left;
    transform: translate(-16px, 15px) rotate(-45deg);
    stroke: var(--black);
  }
  /* Handheld - */
  @media only screen and (min-width: 767px) {
    button {
      display: none;
    }
  }
</style>
