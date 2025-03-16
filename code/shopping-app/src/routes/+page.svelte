<script lang="ts">
	import { Button, Card } from '@budget-suite/shared';
	import { onMount } from 'svelte';
	import { capitalize, splitCamelCase } from 'svelte-core';

	function handleScroll(): void {
		console.log(capitalize('mounted'), splitCamelCase('I WantToUseCamelCase'));
	}

	onMount(() => {
		handleScroll();
	});
</script>

<Card text="Welcome to Svelte!">
	<p class="mb-2 text-sm font-thin text-gray-600">
		Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
	</p>
	<Button
		color="bg-amber-500"
		class="text-black"
		onclick={(): void => {
			console.log('Button has been clicked');
		}}>Hello World</Button>
</Card>
