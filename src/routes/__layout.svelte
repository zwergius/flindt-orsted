<script context="module">
  import client, { defaultRequestConfig as reqConfig } from '$lib/storyBlokClient';

  export async function load() {
    const res = await client.getAll('cdn/stories', reqConfig);
    const { header: headerImg, body, footer } = res[0].content;
    return { context: { body }, props: { body, headerImg, footer: footer[0] } };
  }
</script>

<script>
  import { onMount } from 'svelte';
  import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.es';
  import '../app.postcss';
  import { formattedSrc, responsiveSrcSet } from '$lib/helpers';
  import NavBar from '$lib/components/NavBar.svelte';
  import Hamburger from '$lib/components/Hamburger.svelte';

  export let body, headerImg, footer;
  const sections = body.map((section) => section.header);
  const resolver = new RichTextResolver();

  onMount(async () => {
    const smoothscroll = await import('smoothscroll-polyfill');
    smoothscroll.polyfill();
  });
</script>

<header>
  <img
    alt="Loftet i cafeen"
    class="header"
    src={formattedSrc(headerImg.filename, 400, 1080 / 1920)}
    srcset={responsiveSrcSet(headerImg.filename, 1080 / 1920)}
    sizes="calc(100vh * (1920 / 1080))"
  />
  <Hamburger {sections} />
  <NavBar titles={sections} />
</header>

<main>
  <slot />
</main>

<footer>
  <div class="image-wrapper">
    <a
      rel="external"
      href="https://maps.apple.com/?address=N%C3%B8rre%20Farimagsgade%206,%201364%20K%C3%B8benhavn%20K,%20Denmark&auid=5475723140101208995&ll=55.680731,12.564043&lsp=9902&q=Flindt%20%26%20%C3%98rsted&_ext=ChgKBAgEEHAKBAgFEAMKBAgGEAgKBAgKEAASJimmEH6JydZLQDHI+Hp60x0pQDkk5qPl79dLQEEKQ5r1+yUpQFAE"
    >
      <img
        alt={footer.image.alt}
        class="footer"
        src={formattedSrc(footer.image.filename, 400, 1205 / 1920)}
        srcset={responsiveSrcSet(footer.image.filename, 1205 / 1920)}
        sizes="(min-width: 1220px) calc(50vw - 200px), (min-width: 780px) calc(50vw - 70px), calc(100vw - 110px)"
      />
    </a>
  </div>
  <div class="storyblok-content-wrapper">{@html resolver.render(footer.body)}</div>
</footer>

<style>
  header {
    position: relative;
    height: 100vh;
    width: 100%;
  }
  img.header {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  footer {
    padding: var(--footerPadding);
    background-color: var(--dustyGreen);
    display: flex;
    flex-wrap: wrap-reverse;
  }

  img.footer {
    display: block;
    width: 100%;
    height: auto;
  }

  footer > div {
    flex-basis: 50%;
  }

  .image-wrapper {
    padding: var(--footerImagePadding);
  }

  .storyblok-content-wrapper {
    padding: 0 var(--bodyPadding);
  }
  @media only screen and (max-width: 767px) {
    footer > div {
      flex-basis: 100%;
    }
    .storyblok-content-wrapper {
      padding-right: 0;
    }
  }
</style>
