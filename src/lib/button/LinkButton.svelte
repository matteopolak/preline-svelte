<script lang="ts">
	import type { Color } from '$lib';
	import { getContext } from 'svelte';

	export let color: Color = 'primary';
	export let disabled = false;
	export let href: string | undefined = undefined;

	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let pill = false;

	let grouped = getContext('button_grouped') ?? false;

	const sizes = {
		xs: 'px-3 py-2 text-xs',
		sm: 'px-4 py-2 text-sm',
		md: 'px-5 py-2.5 text-sm',
		lg: 'px-5 py-3 text-base',
		xl: 'px-6 py-3.5 text-base',
	};

	const themes: Record<Color, string> = {
		primary: 'hover:text-primary-700 text-primary-500',
		secondary: 'hover:text-secondary-700 text-secondary-500',
		slate: 'hover:text-slate-700 text-slate-500',
		gray: 'hover:text-gray-700 text-gray-500',
		zinc: 'hover:text-zinc-700 text-zinc-500',
		neutral: 'hover:text-neutral-700 text-neutral-500',
		stone: 'hover:text-stone-700 text-stone-500',
		red: 'hover:text-red-700 text-red-500',
		orange: 'hover:text-orange-700 text-orange-500',
		amber: 'hover:text-amber-700 text-amber-500',
		yellow: 'hover:text-yellow-700 text-yellow-500',
		lime: 'hover:text-lime-700 text-lime-500',
		green: 'hover:text-green-700 text-green-500',
		emerald: 'hover:text-emerald-700 text-emerald-500',
		teal: 'hover:text-teal-700 text-teal-500',
		cyan: 'hover:text-cyan-700 text-cyan-500',
		sky: 'hover:text-sky-700 text-sky-500',
		blue: 'hover:text-blue-700 text-blue-500',
		indigo: 'hover:text-indigo-700 text-indigo-500',
		violet: 'hover:text-violet-700 text-violet-500',
		purple: 'hover:text-purple-700 text-purple-500',
		fuchsia: 'hover:text-fuchsia-700 text-fuchsia-500',
		pink: 'hover:text-pink-700 text-pink-500',
		rose: 'hover:text-rose-700 text-rose-500',
	};
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	type={!href ? 'button' : undefined}
	{disabled}
	class="{sizes[size]} {themes[color]} {grouped
		? pill
			? '-ml-px first:rounded-l-full first:ml-0 last:rounded-r-full'
			: '-ml-px first:rounded-l-md first:ml-0 last:rounded-r-md'
		: pill
		? 'rounded-full'
		: 'rounded-md'} inline-flex justify-center items-center gap-2 border border-transparent font-semibold transition-all"
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	{...$$restProps}
>
	<slot />
</svelte:element>
