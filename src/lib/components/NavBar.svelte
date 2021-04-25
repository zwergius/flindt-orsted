<script>
  export let titles;

  function handleClick(title) {
    const id = encodeURIComponent(title.toLowerCase());
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
</script>

<nav>
  <ul>
    {#each titles as title}
      <li>
        <a
          on:click|preventDefault={() => handleClick(title)}
          href={`#${encodeURIComponent(title.toLowerCase())}`}>{title.split(' ')[0]}</a
        >
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    display: flex;
    padding: var(--navBarPadding);
  }

  ul {
    margin: auto;
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    max-width: 1280px;
  }

  li {
    width: var(--navWidth);
    font-size: var(--navFontSize);
  }

  a {
    position: relative;
    z-index: 0;
    overflow: hidden;
    font-family: Roboto;
    display: block;
    color: var(--red);
    border: var(--navBorderWidth) solid var(--red);
    text-transform: uppercase;
    font-weight: 600;
    padding: 0.5em 0;
    text-align: center;
    transition: color 0.3s ease-out;
  }

  a:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    transform: translateY(calc(100%));
    width: 100%;
    height: 100%;
    transition: transform 0.25s ease-out;
  }
  a:hover {
    color: var(--beige);
  }
  a:hover::before {
    background-color: var(--red);
    transform: translateY(0);
  }
  /* Handheld - */
  @media only screen and (max-width: 767px) {
    ul {
      justify-content: space-around;
    }
    li:nth-child(n + 3) {
      display: none;
    }
  }
</style>
