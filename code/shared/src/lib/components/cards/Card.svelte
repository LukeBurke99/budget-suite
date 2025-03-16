<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		text: string;
		children: Snippet;
	}
	const { text, children }: Props = $props();
</script>

<div class="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
		{text}
	</h5>
	<div class="font-normal text-gray-700 dark:text-gray-400">
		{@render children()}
	</div>
</div>
