<script>
  import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.es';
  import { formattedSrc, responsiveSrcSet } from '$lib/helpers';

  export let content, style;
  const resolver = new RichTextResolver();
  const id = encodeURIComponent(content.header.toLowerCase());
</script>

<section {id}>
  <img
    alt={content.image.alt}
    src={formattedSrc(content.image.filename, 400, 1)}
    srcset={responsiveSrcSet(content.image.filename, 1)}
    sizes="(min-width: 780px) 50vw, 100vw"
  />
  <div class="storyblok-content-wrapper" {style}>
    <h2>{content.header}</h2>
    {@html resolver.render(content.body)}
    {#if content.menu}
      <a alt={content.menu?.alt} rel="external" href={content.menu?.filename}
        >{content.menu?.title}</a
      >
    {/if}
  </div>
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap-reverse;
    width: 100%;
  }

  section:first-of-type,
  section:last-of-type {
    flex-direction: row-reverse;
  }

  div {
    flex: 1;
    padding: var(--bodyPadding);
    background-color: var(--bgColor);
    color: var(--bodyFontColor);
  }

  img {
    display: block;
    width: 50vw;
    height: 50vw;
    object-fit: cover;
  }

  a {
    color: var(--bodyFontColor);
    border: 2px solid var(--bodyFontColor);
    text-transform: uppercase;
    padding: 1em 3em;
    text-align: center;
    transition: color 0.3s ease-out;
    margin: 4em auto;
  }

  /* Handheld - */
  @media only screen and (max-width: 767px) {
    div {
      height: 100vw;
      padding-bottom: 0;
    }

    img {
      width: 100vw;
      height: 100vw;
    }

    a {
      margin: auto;
    }

    section:nth-child(4) {
      flex-wrap: wrap;
    }
  }
</style>
