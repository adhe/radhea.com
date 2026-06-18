<script lang="ts">
  import type { Snippet } from "svelte";
  let { children }: { children: Snippet } = $props();
</script>

<h1
  class="font-medium text-[28px] tablet:text-[36px] leading-tight tracking-tighter text-balance mb-4 tablet:mb-6"
>
  {@render children?.()}
</h1>
