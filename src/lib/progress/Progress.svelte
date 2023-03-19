<script lang="ts">
	import type { Color } from '$lib';

	export let progress = 0.5;
	export let color: Color = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let vertical = false;
	export let height: `h-${string}` = 'h-32';

	const sizes = {
		sm: vertical ? 'w-1.5' : 'h-1.5',
		md: vertical ? 'w-4' : 'h-4',
		lg: vertical ? 'w-6' : 'h-6',
	};

	const themes: Record<Color, string> = {
		primary: 'bg-primary-500',
		secondary: 'bg-secondary-500',
		slate: 'bg-slate-500',
		neutral: 'bg-neutral-500',
		zinc: 'bg-zinc-500',
		gray: 'bg-gray-500',
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

<div
	class="flex {vertical
		? `flex-col flex-nowrap justify-end ${height}`
		: 'w-full'} {sizes[
		size
	]} bg-neutral-200 rounded-full overflow-hidden dark:bg-neutral-700"
>
	<div
		class="{vertical
			? ''
			: 'flex flex-col justify-center'} overflow-hidden {themes[
			color
		]} {$$slots.default ? 'text-xs text-white text-center' : ''}"
		role="progressbar"
		style="{vertical ? 'height' : 'width'}: {progress * 100}%"
		aria-valuenow={progress * 100}
		aria-valuemin={0}
		aria-valuemax={100}
	>
		<slot />
	</div>
</div>
