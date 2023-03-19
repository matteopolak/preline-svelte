<script lang="ts">
	import type { Color } from '$lib';
	import '@preline/accordion';
	import { getContext, setContext } from 'svelte';

	export let multiple = false;
	export let color: Color = getContext('accordion_color') ?? 'primary';
	export let style: 'plus' | 'arrow' = getContext('accordion_style') ?? 'arrow';

	let nested = (getContext('accordion_nested') as number) ?? 0;

	setContext('accordion_nested', nested + 1);
	setContext('accordion_style', style);
	setContext('accordion_color', color);
</script>

{#if multiple}
	<div
		class="hs-accordion-group"
		data-hs-accordion-always-open
		style={nested > 0 ? `padding-left: ${nested * 1.5}rem` : ''}
	>
		<slot />
	</div>
{:else}
	<div
		class="hs-accordion-group"
		style={nested > 0 ? `padding-left: ${nested * 1.5}rem` : ''}
	>
		<slot />
	</div>
{/if}
