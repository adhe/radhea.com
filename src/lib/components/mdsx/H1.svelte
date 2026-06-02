<script lang="ts">
  import type { Snippet } from 'svelte';
  let { children }: { children: Snippet } = $props();
</script>

<h1 class="font-medium text-[28px] tablet:text-[36px] leading-tight tracking-tighter mb-4">
  {@render children?.()}
</h1>
