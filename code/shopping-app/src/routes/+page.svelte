<script lang="ts">
	import { Button, Card } from '@budget-suite/shared';
	import { onMount } from 'svelte';

	function handleScroll(): void {
		console.log('Mounted');
	}

	onMount(() => {
		handleScroll();
	});
</script>

<Card text="Welcome to Svelte!">
	<p class="text-sm font-thin text-gray-600">
		Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
	</p>
	<Button color="bg-amber-500">Hello World</Button>
</Card>
