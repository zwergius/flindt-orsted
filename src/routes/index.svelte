<script context="module">
  export async function load({ context }) {
    const { body = [], metaDescription, ogImage, title } = context;
    return { props: { body, metaDescription, ogImage, title } };
  }
</script>

<script>
  import Section from '$lib/components/Section.svelte';

  export let body, metaDescription, ogImage, title;
  const [food, drinks, info, bunker] = body;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={metaDescription} />
  <!-- MUST be below 300kb for whatsapp to show -->
  <meta property="og:image" content={ogImage} />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={title} />
</svelte:head>

<Section content={food} style="--bgColor: inherit; --bodyFontColor: var(--red);" />
<Section content={drinks} style="--bgColor: var(--dustyGreen)" />
<Section content={info} style="--bgColor: var(--cphGreen)" />
<Section content={bunker} style="--bgColor: var(--red)" />
