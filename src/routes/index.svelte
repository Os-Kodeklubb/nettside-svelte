<script context="module">
  export const prerender = true
</script>

<script>
  import HeroSection from "../components/HeroSection.svelte";
  import AboutUsSection from "../components/AboutUsSection.svelte";
  import ExplanationSection from "../components/ExplanationSection.svelte";
  import BlogSection from "../components/BlogSection.svelte";
  import ContactSection from "../components/ContactSection.svelte";
</script>

<svelte:head>
  <title>Os Kodeklubb - Et samlested for kodeentusiaster i Bjørnefjorden</title>
</svelte:head>

<HeroSection />
<AboutUsSection />
<ExplanationSection />
<!-- <BlogSection /> -->
<ContactSection />

<style lang="scss"></style>
