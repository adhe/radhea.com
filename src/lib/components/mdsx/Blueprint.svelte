<script module>
  export { default as h1 } from "./H1.svelte";
  export { default as p } from "./P.svelte";
  export { default as img } from "./Img.svelte";
</script>

<script lang="ts">
  import type { Snippet } from "svelte";
  let { children }: { children: Snippet } = $props();
</script>

{@render children()}
