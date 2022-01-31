<script>
	import Header from "$lib/header/Header.svelte";
	import Footer from "$lib/footer/Footer.svelte";
</script>

<Header />

<main>
	<slot />
</main>

<style lang="scss" global>
	@import "../../../static/scss/style.scss";
	main {}
</style>
