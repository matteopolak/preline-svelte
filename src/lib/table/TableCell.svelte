<script lang="ts">
	import type { Color } from '$lib';

	export let color: Color | undefined = undefined;

	const themes: Record<Color, string> = {
		primary: 'bg-primary-100 text-neutral-800',
		secondary: 'bg-secondary-100 text-neutral-800',
		slate: 'bg-slate-100 text-neutral-800',
		gray: 'bg-gray-100 text-neutral-800',
		zinc: 'bg-zinc-100 text-neutral-800',
		neutral: 'bg-neutral-100 text-neutral-800',
		stone: 'bg-stone-100 text-neutral-800',
		red: 'bg-red-100 text-neutral-800',
		orange: 'bg-orange-100 text-neutral-800',
		amber: 'bg-amber-100 text-neutral-800',
		yellow: 'bg-yellow-100 text-neutral-800',
		lime: 'bg-lime-100 text-neutral-800',
		green: 'bg-green-100 text-neutral-800',
		emerald: 'bg-emerald-100 text-neutral-800',
		teal: 'bg-teal-100 text-neutral-800',
		cyan: 'bg-cyan-100 text-neutral-800',
		sky: 'bg-sky-100 text-neutral-800',
		blue: 'bg-blue-100 text-neutral-800',
		indigo: 'bg-indigo-100 text-neutral-800',
		violet: 'bg-violet-100 text-neutral-800',
		purple: 'bg-purple-100 text-neutral-800',
		fuchsia: 'bg-fuchsia-100 text-neutral-800',
		pink: 'bg-pink-100 text-neutral-800',
		rose: 'bg-rose-100 text-neutral-800',
	};
</script>

<td
	class="px-6 py-4 whitespace-nowrap text-sm font-medium {color
		? themes[color]
		: 'text-neutral-800 dark:text-neutral-200'}"
>
	<slot />
</td>
