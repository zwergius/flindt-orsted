<script context="module">
  export async function load({ context }) {
    return { props: { body: context.body || [] } };
  }
</script>

<script>
  import Section from '$lib/components/Section.svelte';

  export let body;
  const [food, drinks, info, bunker] = body;
</script>

<svelte:head>
  <title>Flindt & Ørsted</title>
</svelte:head>

<Section content={food} style="--bgColor: inherit; --bodyFontColor: var(--red);" />
<Section content={drinks} style="--bgColor: var(--dustyGreen)" />
<Section content={info} style="--bgColor: var(--cphGreen)" />
<Section content={bunker} style="--bgColor: var(--red)" />
