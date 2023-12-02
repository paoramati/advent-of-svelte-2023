<script>
	import '../app.css';
	import Header from './Header.svelte';
</script>

<div>
	<Header />

	<main class="px-16 py-8">
		<slot />
	</main>
</div>
