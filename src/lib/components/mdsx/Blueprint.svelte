<script module>
  export { default as h1 } from "./H1.svelte";
</script>

<script lang="ts">
  import type { Snippet } from "svelte";
  let { children }: { children: Snippet } = $props();
</script>

{@render children()}
