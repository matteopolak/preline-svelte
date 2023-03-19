<script lang="ts">
	import type { Color } from '$lib';

	export let color: Color = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';

	const sizes = {
		sm: 'w-4 h-4',
		md: 'w-6 h-6',
		lg: 'w-8 h-8',
	};

	const themes: Record<Color, string> = {
		primary: 'text-primary-600',
		secondary: 'text-secondary-600',
		slate: 'text-slate-600',
		gray: 'text-gray-600',
		zinc: 'text-zinc-600',
		neutral: 'text-neutral-600',
		stone: 'text-stone-600',
		red: 'text-red-600',
		orange: 'text-orange-600',
		amber: 'text-amber-600',
		yellow: 'text-yellow-600',
		lime: 'text-lime-600',
		green: 'text-green-600',
		emerald: 'text-emerald-600',
		teal: 'text-teal-600',
		cyan: 'text-cyan-600',
		sky: 'text-sky-600',
		blue: 'text-blue-600',
		indigo: 'text-indigo-600',
		violet: 'text-violet-600',
		purple: 'text-purple-600',
		fuchsia: 'text-fuchsia-600',
		pink: 'text-pink-600',
		rose: 'text-rose-600',
	};
</script>

<div
	class="animate-spin inline-block {sizes[
		size
	]} border-[3px] border-current border-t-transparent rounded-full {themes[
		color
	]}"
	role="status"
	aria-label="loading"
/>
