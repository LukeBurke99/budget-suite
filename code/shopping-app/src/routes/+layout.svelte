<script lang="ts">
	import '@budget-suite/shared/app.css';
	import type { Snippet } from 'svelte';
	import '../app.css';

	const { children }: { children: Snippet } = $props();
</script>

<div class="p-6">
	{@render children()}
</div>
