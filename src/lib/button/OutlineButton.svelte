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
		sm: 'px-4 py-[.688rem] text-sm',
		md: 'px-5 py-2.5 text-sm',
		lg: 'px-5 py-3 text-base',
		xl: 'px-6 py-3.5 text-base',
	};

	const themes: Record<Color, string> = {
		primary:
			'text-primary-500 hover:bg-primary-500 hover:border-primary-500 focus:ring-primary-500',
		secondary:
			'text-secondary-500 hover:bg-secondary-500 hover:border-secondary-500 focus:ring-secondary-500',
		slate:
			'text-slate-500 hover:bg-slate-500 hover:border-slate-500 focus:ring-slate-500',
		gray: 'text-gray-500 hover:bg-gray-500 hover:border-gray-500 focus:ring-gray-500',
		zinc: 'text-zinc-500 hover:bg-zinc-500 hover:border-zinc-500 focus:ring-zinc-500',
		neutral:
			'text-neutral-500 hover:bg-neutral-500 hover:border-neutral-500 focus:ring-neutral-500',
		stone:
			'text-stone-500 hover:bg-stone-500 hover:border-stone-500 focus:ring-stone-500',
		red: 'text-red-500 hover:bg-red-500 hover:border-red-500 focus:ring-red-500',
		orange:
			'text-orange-500 hover:bg-orange-500 hover:border-orange-500 focus:ring-orange-500',
		amber:
			'text-amber-500 hover:bg-amber-500 hover:border-amber-500 focus:ring-amber-500',
		yellow:
			'text-yellow-500 hover:bg-yellow-500 hover:border-yellow-500 focus:ring-yellow-500',
		lime: 'text-lime-500 hover:bg-lime-500 hover:border-lime-500 focus:ring-lime-500',
		green:
			'text-green-500 hover:bg-green-500 hover:border-green-500 focus:ring-green-500',
		emerald:
			'text-emerald-500 hover:bg-emerald-500 hover:border-emerald-500 focus:ring-emerald-500',
		teal: 'text-teal-500 hover:bg-teal-500 hover:border-teal-500 focus:ring-teal-500',
		cyan: 'text-cyan-500 hover:bg-cyan-500 hover:border-cyan-500 focus:ring-cyan-500',
		sky: 'text-sky-500 hover:bg-sky-500 hover:border-sky-500 focus:ring-sky-500',
		blue: 'text-blue-500 hover:bg-blue-500 hover:border-blue-500 focus:ring-blue-500',
		indigo:
			'text-indigo-500 hover:bg-indigo-500 hover:border-indigo-500 focus:ring-indigo-500',
		violet:
			'text-violet-500 hover:bg-violet-500 hover:border-violet-500 focus:ring-violet-500',
		purple:
			'text-purple-500 hover:bg-purple-500 hover:border-purple-500 focus:ring-purple-500',
		fuchsia:
			'text-fuchsia-500 hover:bg-fuchsia-500 hover:border-fuchsia-500 focus:ring-fuchsia-500',
		pink: 'text-pink-500 hover:bg-pink-500 hover:border-pink-500 focus:ring-pink-500',
		rose: 'text-rose-500 hover:bg-rose-500 hover:border-rose-500 focus:ring-rose-500',
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
		: 'rounded-md'} hover:text-white inline-flex justify-center items-center gap-2 border-2 border-gray-200 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
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
