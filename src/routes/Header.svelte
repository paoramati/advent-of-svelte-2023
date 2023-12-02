<script lang="ts">
	const navLinks: { href: string; title: string }[] = [
		{
			href: '/day-1',
			title: 'Day 1'
		}
	];
</script>

<header class="flex flex-row justify-between">
	<a
		href="/"
		class="text-lg border-dashed border-l-red-500 border-r-red-500 border-t-green-600 border-b-green-600 m-1 flex flex-row items-center border-4 rounded-2xl font-semibold px-2 gap-1"
	>
		<span> Advent </span>

		<span> of </span>

		<span> Svelte </span>

		<span> 2023 </span>
	</a>

	<nav class="">
		<ul class="flex gap-3 p-3">
			{#each navLinks as { href, title }}
				<li class="p-2 bg-slate-200">
					<a {href}>{title}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	a > span:nth-child(odd) {
		color: red;
	}
	a > span:nth-child(even) {
		color: green;
	}
</style>
