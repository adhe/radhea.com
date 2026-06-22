<script lang="ts">
  let { src, alt }: { src?: string; alt?: string } = $props();
</script>

<img
  {src}
  {alt}
  class="mb-4 tablet:mb-6 rounded-lg tablet:rounded-xl border border-gray-400/10"
/>
