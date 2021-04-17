<script context="module">
  import client, { defaultRequestConfig as reqConfig } from '$lib/storyBlokClient';

  export async function load() {
    const res = await client.getAll('cdn/stories', reqConfig);
    return { props: { stories: res || [] } };
  }
</script>

<script>
  import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.es';
  export let stories;

  const resolver = new RichTextResolver();

  const [food, drinks, info, bunker] = stories[0].content.body;
  console.log(food);
</script>

<svelte:head>
  <title>Flindt & Ørsted</title>
</svelte:head>

<section>
  <h2>{food.header}</h2>
  {@html resolver.render(food.body)}
</section>

<section>
  <h2>{drinks.header}</h2>
  {@html resolver.render(drinks.body)}
</section>

<section>
  <h2>{info.header}</h2>
  {@html resolver.render(info.body)}
</section>

<section>
  <h2>{bunker.header}</h2>
  {@html resolver.render(bunker.body)}
</section>

<style style lang="postcss">
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 4rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 2rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
