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
		primary:
			'bg-primary-500 text-neutral-200 hover:bg-primary-600 focus:ring-primary-500',
		secondary:
			'bg-secondary-500 text-neutral-200 hover:bg-secondary-600 focus:ring-secondary-500',
		slate: 'bg-slate-500 text-white hover:bg-slate-600 focus:ring-slate-500',
		gray: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
		zinc: 'bg-zinc-500 text-white hover:bg-zinc-600 focus:ring-zinc-500',
		neutral:
			'bg-neutral-500 text-white hover:bg-neutral-600 focus:ring-neutral-500',
		stone: 'bg-stone-500 text-white hover:bg-stone-600 focus:ring-stone-500',
		red: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
		orange:
			'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500',
		amber: 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500',
		yellow:
			'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500',
		lime: 'bg-lime-500 text-white hover:bg-lime-600 focus:ring-lime-500',
		green: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
		emerald:
			'bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-500',
		teal: 'bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500',
		cyan: 'bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-500',
		sky: 'bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500',
		blue: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
		indigo:
			'bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-500',
		violet:
			'bg-violet-500 text-white hover:bg-violet-600 focus:ring-violet-500',
		purple:
			'bg-purple-500 text-white hover:bg-purple-600 focus:ring-purple-500',
		fuchsia:
			'bg-fuchsia-500 text-white hover:bg-fuchsia-600 focus:ring-fuchsia-500',
		pink: 'bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-500',
		rose: 'bg-rose-500 text-white hover:bg-rose-600 focus:ring-rose-500',
	};
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	type={!href ? 'button' : undefined}
	{disabled}
	class="{sizes[size]} {themes[
		color
	]} inline-flex justify-center items-center gap-2 {grouped
		? pill
			? '-ml-px first:rounded-l-full first:ml-0 last:rounded-r-full'
			: '-ml-px first:rounded-l-md first:ml-0 last:rounded-r-md'
		: pill
		? 'rounded-full'
		: 'rounded-md'} border border-transparent font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
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
