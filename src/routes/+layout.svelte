<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="container mx-auto font-avio">
  <Header />
  <div class="min-h-screen p-3 desktop:p-0 flex flex-col">
    {@render children()}
  </div>
  <Footer></Footer>
</div>
