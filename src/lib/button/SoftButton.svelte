<script lang="ts">
	import type { Color } from '$lib';
	import { getContext } from 'svelte';

	export let color: Color = 'primary';
	export let disabled = false;
	export let href: string | undefined = undefined;

	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let pill = false;

	let grouped = getContext('grouped') ?? false;

	const sizes = {
		xs: 'px-3 py-2 text-xs',
		sm: 'px-4 py-2 text-sm',
		md: 'px-5 py-2.5 text-sm',
		lg: 'px-5 py-3 text-base',
		xl: 'px-6 py-3.5 text-base',
	};

	const themes: Record<Color, string> = {
		primary:
			'focus:ring-primary-500 text-primary-500 bg-primary-200 hover:bg-primary-500',
		secondary:
			'focus:ring-secondary-500 text-secondary-500 bg-secondary-200 hover:bg-secondary-500',
		slate:
			'focus:ring-slate-500 text-slate-500 bg-slate-200 hover:bg-slate-500',
		gray: 'focus:ring-gray-500 text-gray-500 bg-gray-200 hover:bg-gray-500',
		zinc: 'focus:ring-zinc-500 text-zinc-500 bg-zinc-200 hover:bg-zinc-500',
		neutral:
			'focus:ring-neutral-500 text-neutral-500 bg-neutral-200 hover:bg-neutral-500',
		stone:
			'focus:ring-stone-500 text-stone-500 bg-stone-200 hover:bg-stone-500',
		red: 'focus:ring-red-500 text-red-500 bg-red-200 hover:bg-red-500',
		orange:
			'focus:ring-orange-500 text-orange-500 bg-orange-200 hover:bg-orange-500',
		amber:
			'focus:ring-amber-500 text-amber-500 bg-amber-200 hover:bg-amber-500',
		yellow:
			'focus:ring-yellow-500 text-yellow-500 bg-yellow-200 hover:bg-yellow-500',
		lime: 'focus:ring-lime-500 text-lime-500 bg-lime-200 hover:bg-lime-500',
		green:
			'focus:ring-green-500 text-green-500 bg-green-200 hover:bg-green-500',
		emerald:
			'focus:ring-emerald-500 text-emerald-500 bg-emerald-200 hover:bg-emerald-500',
		teal: 'focus:ring-teal-500 text-teal-500 bg-teal-200 hover:bg-teal-500',
		cyan: 'focus:ring-cyan-500 text-cyan-500 bg-cyan-200 hover:bg-cyan-500',
		sky: 'focus:ring-sky-500 text-sky-500 bg-sky-200 hover:bg-sky-500',
		blue: 'focus:ring-blue-500 text-blue-500 bg-blue-200 hover:bg-blue-500',
		indigo:
			'focus:ring-indigo-500 text-indigo-500 bg-indigo-200 hover:bg-indigo-500',
		violet:
			'focus:ring-violet-500 text-violet-500 bg-violet-200 hover:bg-violet-500',
		purple:
			'focus:ring-purple-500 text-purple-500 bg-purple-200 hover:bg-purple-500',
		fuchsia:
			'focus:ring-fuchsia-500 text-fuchsia-500 bg-fuchsia-200 hover:bg-fuchsia-500',
		pink: 'focus:ring-pink-500 text-pink-500 bg-pink-200 hover:bg-pink-500',
		rose: 'focus:ring-rose-500 text-rose-500 bg-rose-200 hover:bg-rose-500',
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
		: 'rounded-md'} inline-flex justify-center items-center gap-2 border border-transparent font-semibold hover:text-white focus:outline-none focus:ring-2 ring-offset-white focus:ring-offset-2 transition-all"
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
>
	<slot />
</svelte:element>
