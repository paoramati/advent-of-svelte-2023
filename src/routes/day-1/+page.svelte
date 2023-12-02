<script lang="ts">
	import type { NaughtyOrNiceType } from './santa-service.js';

	export let data;

	let nice: NaughtyOrNiceType[] = [];
	let naughty: NaughtyOrNiceType[] = [];

	$: nice = data.naughtyOrNiceList.filter((i) => i.tally > 0);
	$: naughty = data.naughtyOrNiceList.filter((i) => i.tally <= 0);
</script>

<main>
	<h1 class="font-semibold text-2xl pb-3">Day 1 - The Naughty or Nice List</h1>

	<div class="p-4 border-dashed border-red-500 border-2">
		<form action="?/add-child" method="post" class="flex flex-row gap-3">
			<label for="name" class="label">Name</label>
			<input type="text" name="name" id="name" required class="form-control input input-bordered" />
			<label for="tally" class="label">Tally</label>
			<input
				type="number"
				name="tally"
				id="tally"
				min="-100"
				max="100"
				step="1"
				required
				class="form-control input input-bordered"
			/>
			<button type="submit" class="btn"> Add child </button>
		</form>
	</div>

	<div class="grid grid-cols-2 gap-3 p-3">
		<div>
			<h3 class="font-semibold text-lg">Nice ({nice.length})</h3>
			{#each nice as { name, tally }}
				<div>
					{name} = {tally}
				</div>
			{/each}
		</div>
		<div>
			<h3 class="font-semibold text-lg">Naughty ({naughty.length})</h3>
			{#each naughty as { name, tally }}
				<div>
					{name} = {tally}
				</div>
			{/each}
		</div>
	</div>

	<!-- <pre>
		{JSON.stringify(data.naughtyOrNiceList, null, 2)}
	</pre> -->
</main>
