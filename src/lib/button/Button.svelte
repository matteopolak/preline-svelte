<script context="module" lang="ts">
	export type ButtonType = 'solid' | 'outline' | 'ghost' | 'soft' | 'link';
</script>

<script lang="ts">
	import type { Color } from '$lib';

	import GhostButton from './GhostButton.svelte';
	import OutlineButton from './OutlineButton.svelte';
	import SolidButton from './SolidButton.svelte';
	import SoftButton from './SoftButton.svelte';
	import LinkButton from './LinkButton.svelte';

	export let color: Color = 'primary';
	export let disabled = false;
	export let type: ButtonType = 'solid';
	export let href: string | undefined = undefined;
	export let pill = false;

	export let size: 'sm' | 'md' | 'lg' = 'md';
</script>

{#if type === 'solid'}
	<SolidButton
		{color}
		{disabled}
		{size}
		{href}
		{pill}
		on:click
		on:change
		on:keydown
		on:keyup
		on:mouseenter
		on:mouseleave
		{...$$restProps}
	>
		<slot />
	</SolidButton>
{:else if type === 'outline'}
	<OutlineButton
		{color}
		{disabled}
		{size}
		{href}
		{pill}
		on:click
		on:change
		on:keydown
		on:keyup
		on:mouseenter
		on:mouseleave
		{...$$restProps}
	>
		<slot />
	</OutlineButton>
{:else if type === 'ghost'}
	<GhostButton
		{color}
		{disabled}
		{size}
		{href}
		{pill}
		on:click
		on:change
		on:keydown
		on:keyup
		on:mouseenter
		on:mouseleave
		{...$$restProps}
	>
		<slot />
	</GhostButton>
{:else if type === 'soft'}
	<SoftButton
		{color}
		{disabled}
		{size}
		{href}
		{pill}
		on:click
		on:change
		on:keydown
		on:keyup
		on:mouseenter
		on:mouseleave
		{...$$restProps}
	>
		<slot />
	</SoftButton>
{:else if type === 'link'}
	<LinkButton
		{color}
		{disabled}
		{size}
		{href}
		{pill}
		on:click
		on:change
		on:keydown
		on:keyup
		on:mouseenter
		on:mouseleave
		{...$$restProps}
	>
		<slot />
	</LinkButton>
{/if}
