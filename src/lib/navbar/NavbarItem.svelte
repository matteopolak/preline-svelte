<script lang="ts">
	import type { Color } from '$lib';
	import { getContext } from 'svelte';

	export let color: Color = getContext('navbar_color') ?? 'primary';
	export let href: string | undefined = undefined;

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

<a
	{href}
	class="{themes[
		color
	]} py-2.5 pr-5 last:pr-0 text-sm inline-flex gap-2 border border-transparent font-semibold transition-all cursor-pointer"
>
	<slot />
</a>
