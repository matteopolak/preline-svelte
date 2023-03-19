<script context="module" lang="ts">
	export type BadgeType = 'solid' | 'soft';
</script>

<script lang="ts">
	import type { Color } from '$lib';

	export let color: Color = 'primary';
	export let pill = false;
	export let type: BadgeType = 'solid';

	const themes: Record<Color, string> = {
		primary:
			type === 'solid'
				? 'bg-primary-500 text-neutral-200'
				: 'bg-primary-100 text-primary-800',
		secondary:
			type === 'solid'
				? 'bg-secondary-500 text-neutral-200'
				: 'bg-secondary-100 text-secondary-800',
		slate:
			type === 'solid'
				? 'bg-slate-500 text-neutral-200'
				: 'bg-slate-100 text-slate-800',
		gray:
			type === 'solid'
				? 'bg-gray-500 text-neutral-200'
				: 'bg-gray-100 text-gray-800',
		zinc:
			type === 'solid'
				? 'bg-zinc-500 text-neutral-200'
				: 'bg-zinc-100 text-zinc-800',
		neutral:
			type === 'solid'
				? 'bg-neutral-500 text-neutral-200'
				: 'bg-neutral-100 text-neutral-800',
		stone:
			type === 'solid'
				? 'bg-stone-500 text-neutral-200'
				: 'bg-stone-100 text-stone-800',
		red:
			type === 'solid'
				? 'bg-red-500 text-neutral-200'
				: 'bg-red-100 text-red-800',
		orange:
			type === 'solid'
				? 'bg-orange-500 text-neutral-200'
				: 'bg-orange-100 text-orange-800',
		amber:
			type === 'solid'
				? 'bg-amber-500 text-neutral-200'
				: 'bg-amber-100 text-amber-800',
		yellow:
			type === 'solid'
				? 'bg-yellow-500 text-neutral-200'
				: 'bg-yellow-100 text-yellow-800',
		lime:
			type === 'solid'
				? 'bg-lime-500 text-neutral-200'
				: 'bg-lime-100 text-lime-800',
		green:
			type === 'solid'
				? 'bg-green-500 text-neutral-200'
				: 'bg-green-100 text-green-800',
		emerald:
			type === 'solid'
				? 'bg-emerald-500 text-neutral-200'
				: 'bg-emerald-100 text-emerald-800',
		teal:
			type === 'solid'
				? 'bg-teal-500 text-neutral-200'
				: 'bg-teal-100 text-teal-800',
		cyan:
			type === 'solid'
				? 'bg-cyan-500 text-neutral-200'
				: 'bg-cyan-100 text-cyan-800',
		sky:
			type === 'solid'
				? 'bg-sky-500 text-neutral-200'
				: 'bg-sky-100 text-sky-800',
		blue:
			type === 'solid'
				? 'bg-blue-500 text-neutral-200'
				: 'bg-blue-100 text-blue-800',
		indigo:
			type === 'solid'
				? 'bg-indigo-500 text-neutral-200'
				: 'bg-indigo-100 text-indigo-800',
		violet:
			type === 'solid'
				? 'bg-violet-500 text-neutral-200'
				: 'bg-violet-100 text-violet-800',
		purple:
			type === 'solid'
				? 'bg-purple-500 text-neutral-200'
				: 'bg-purple-100 text-purple-800',
		fuchsia:
			type === 'solid'
				? 'bg-fuchsia-500 text-neutral-200'
				: 'bg-fuchsia-100 text-fuchsia-800',
		pink:
			type === 'solid'
				? 'bg-pink-500 text-neutral-200'
				: 'bg-pink-100 text-pink-800',
		rose:
			type === 'solid'
				? 'bg-rose-500 text-neutral-200'
				: 'bg-rose-100 text-rose-800',
	};
</script>

<span
	class="inline-flex items-center gap-1.5 py-1.5 px-3 {pill
		? 'rounded-full'
		: 'rounded-md'} text-xs font-medium {themes[color]}"
>
	<slot />
</span>
