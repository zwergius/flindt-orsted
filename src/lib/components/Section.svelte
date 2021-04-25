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
  /* Handheld - */
  @media only screen and (max-width: 767px) {
    div {
      height: 100vw;
    }

    img {
      width: 100vw;
      height: 100vw;
    }

    section:nth-child(4) {
      flex-wrap: wrap;
    }
  }
</style>
