<script>
  import '../app.postcss';
  import NavBar from '$lib/components/NavBar.svelte';
</script>

<header>
  <img src="/loft.png" alt="Loftet i cafeen" />
</header>

<main>
  <NavBar />
  <slot />
</main>

<footer />

<style>
  img {
    width: 100%;
    height: auto;
  }

  main {
    padding: 80px;
  }
</style>
