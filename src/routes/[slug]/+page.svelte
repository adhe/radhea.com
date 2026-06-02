<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  {#if data.metadata?.title}
    <title>{data.metadata.title}</title>
  {/if}
  {#if data.metadata?.description}
    <meta name="description" content={data.metadata.description} />
  {/if}
</svelte:head>

<data.component />
