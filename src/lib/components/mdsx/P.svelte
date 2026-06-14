<script lang="ts">
  import type { Snippet } from "svelte";
  let { children }: { children: Snippet } = $props();
</script>

<p
  class="tablet:max-w-160 text-[13px] tablet:text-[14px] leading-relaxed tablet:leading-normal text-[#444444] mb-4"
>
  {@render children?.()}
</p>
