<script lang="ts">
  import type { PageData } from "./$types";
  let { data }: { data: PageData } = $props();
  let posts = $derived(
    data.posts.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
  );
</script>

<div class="h-[62vh] flex flex-col justify-between pt-20 tablet:pt-32">
  <h1
    class="font-medium text-[32px] leading-tight tablet:text-[40px] tracking-tighter text-balance"
  >
    Designing digital experiences <span class="underline">that ship</span>.
  </h1>
  <div
    class="text-[13px] space-y-3 leading-relaxed tablet:leading-normal tablet:text-[14px] text-[#444444] tablet:w-140"
  >
    <p>
      I’m Adhe, a product designer with over 8 years of experience in UI/UX
      design, brand identity, and web design.
    </p>
    <p>
      I bring ideas from concept to execution — collaborating with companies and
      partners across Singapore, UAE, Japan, and Indonesia.
    </p>
    <p>Design is my craft. Building is my advantage.</p>
  </div>
  <div class="font-semibold text-[13px] tablet:text-[14px] mb-5">
    Selected work
  </div>
</div>
<div class="grid tablet:grid-cols-2 gap-5 desktop:gap-y-8">
  {#each posts as post}
    <div class="desktop:min-h-[30vh]">
      <a href="/{post.slug}">
        {#if post.image}
          <img
            src={post.image}
            alt={post.title}
            class="h-55 tablet:h-45 desktop:h-60 w-full object-cover mb-3 rounded-lg tablet:rounded-xl"
          />
        {:else}
          <div
            class="bg-gray-100 h-55 tablet:h-45 desktop:h-60 mb-3 flex items-center justify-center text-gray-400/75 text-sm rounded-lg tablet:rounded-xl"
          >
            Image
          </div>
        {/if}
      </a>
      <div class="desktop:text-[17px] leading-tight tracking-tight font-medium">
        <a href="/{post.slug}">{post.title ?? post.slug}</a>
      </div>
      {#if post.description}
        <div class="text-[12px] desktop:text-[13px] text-[#444444]/80 leading-relaxed mt-1">
          {post.description}
        </div>
      {/if}
      <div class="text-[12px] desktop:text-[13px] text-[#444444]/90">
        {post.type ?? ""}
      </div>
      <div class="text-[11px] desktop:text-[12px] text-[#929292]">
        {post.tags ?? ""}
      </div>
    </div>
  {/each}
</div>
