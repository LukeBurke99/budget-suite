<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		color?: string;
	}
	const { color = 'primary', type = 'button', children, ...rest }: Props = $props();
</script>

<button
	{type}
	{...rest}
	class="cursor-pointer rounded-lg px-4 py-2 shadow {color} {rest.class ?? ''}">
	{#if children}
		{@render children()}
	{/if}
</button>
