<nav>
  <ul>
    <li><a href="#mad">Mad</a></li>
    <li><a href="#drikke">Drikke</a></li>
    <li><a href="#info">Info</a></li>
    <li><a href="#bunker">Bunker</a></li>
  </ul>
</nav>

<style>
  nav {
    display: flex;
  }
  ul {
    margin: auto;
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    max-width: 1280px;
  }

  a {
    font-family: Roboto-Regular;
    display: block;
    color: var(--red);
    border: 4px solid var(--red);
    text-transform: uppercase;
    font-size: var(--font1);
    font-weight: 500;
    padding: 0.5em 0;
    text-align: center;
    width: 200px;
  }
</style>
