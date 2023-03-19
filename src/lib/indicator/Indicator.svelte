<script lang="ts">
	import type { Color } from '$lib';

	export let color: Color = 'primary';

	const themes: Record<Color, string> = {
		primary: 'bg-primary-500',
		secondary: 'bg-secondary-500',
		slate: 'bg-slate-500',
		gray: 'bg-gray-500',
		zinc: 'bg-zinc-500',
		neutral: 'bg-neutral-500',
		stone: 'bg-stone-500',
		red: 'bg-red-500',
		orange: 'bg-orange-500',
		amber: 'bg-amber-500',
		yellow: 'bg-yellow-500',
		lime: 'bg-lime-500',
		green: 'bg-green-500',
		emerald: 'bg-emerald-500',
		teal: 'bg-teal-500',
		cyan: 'bg-cyan-500',
		sky: 'bg-sky-500',
		blue: 'bg-blue-500',
		indigo: 'bg-indigo-500',
		violet: 'bg-violet-500',
		purple: 'bg-purple-500',
		fuchsia: 'bg-fuchsia-500',
		pink: 'bg-pink-500',
		rose: 'bg-rose-500',
	};
</script>

<div class="inline-flex items-center">
	<span class="w-2 h-2 inline-block {themes[color]} rounded-full mr-2" />
	<span class="text-neutral-600 dark:text-neutral-400"><slot /></span>
</div>
