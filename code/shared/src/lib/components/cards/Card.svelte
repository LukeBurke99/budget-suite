<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		text: string;
		children: Snippet;
	}
	const { text, children }: Props = $props();
</script>

<a
	href="#"
	class="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{text}
	</h5>
	<div class="font-normal text-gray-700 dark:text-gray-400">
		{@render children()}
	</div>
</a>
