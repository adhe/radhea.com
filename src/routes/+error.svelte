<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="min-h-[70vh] p-3 desktop:p-0 flex flex-col justify-center">
  <div class="text-[13px] text-[#929292] font-medium mb-3">{$page.status}</div>
  <h1 class="font-medium text-[32px] leading-tight tablet:text-[40px] tracking-tighter mb-4">
    {$page.error?.message ?? 'Something went wrong'}
  </h1>
  <a href="/" class="text-[13px] tablet:text-[14px] underline">Go back home</a>
</div>
