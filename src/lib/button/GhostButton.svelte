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
		primary: 'text-primary-500 hover:bg-primary-100 focus:ring-primary-500',
		secondary:
			'text-secondary-500 hover:bg-secondary-100 focus:ring-secondary-500',
		slate: 'text-slate-500 hover:bg-slate-100 focus:ring-slate-500',
		gray: 'text-gray-500 hover:bg-gray-100 focus:ring-gray-500',
		zinc: 'text-zinc-500 hover:bg-zinc-100 focus:ring-zinc-500',
		neutral: 'text-neutral-500 hover:bg-neutral-100 focus:ring-neutral-500',
		stone: 'text-stone-500 hover:bg-stone-100 focus:ring-stone-500',
		red: 'text-red-500 hover:bg-red-100 focus:ring-red-500',
		orange: 'text-orange-500 hover:bg-orange-100 focus:ring-orange-500',
		amber: 'text-amber-500 hover:bg-amber-100 focus:ring-amber-500',
		yellow: 'text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-500',
		lime: 'text-lime-500 hover:bg-lime-100 focus:ring-lime-500',
		green: 'text-green-500 hover:bg-green-100 focus:ring-green-500',
		emerald: 'text-emerald-500 hover:bg-emerald-100 focus:ring-emerald-500',
		teal: 'text-teal-500 hover:bg-teal-100 focus:ring-teal-500',
		cyan: 'text-cyan-500 hover:bg-cyan-100 focus:ring-cyan-500',
		sky: 'text-sky-500 hover:bg-sky-100 focus:ring-sky-500',
		blue: 'text-blue-500 hover:bg-blue-100 focus:ring-blue-500',
		indigo: 'text-indigo-500 hover:bg-indigo-100 focus:ring-indigo-500',
		violet: 'text-violet-500 hover:bg-violet-100 focus:ring-violet-500',
		purple: 'text-purple-500 hover:bg-purple-100 focus:ring-purple-500',
		fuchsia: 'text-fuchsia-500 hover:bg-fuchsia-100 focus:ring-fuchsia-500',
		pink: 'text-pink-500 hover:bg-pink-100 focus:ring-pink-500',
		rose: 'text-rose-500 hover:bg-rose-100 focus:ring-rose-500',
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
		: 'rounded-md'} inline-flex justify-center items-center gap-2 border border-transparent font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
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
