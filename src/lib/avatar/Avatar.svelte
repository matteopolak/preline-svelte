<script lang="ts">
	import type { Color } from '$lib';

	export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
	export let rounded = false;

	export let src: string;
	export let alt: string;
	export let color: Color | undefined = undefined;

	const sizes = {
		xs: 'h-8 w-8',
		sm: 'h-[2.375rem] w-[2.375rem]',
		md: 'h-[2.875rem] w-[2.875rem]',
		lg: 'h-[3.875rem] w-[3.875rem]',
	};

	const themes: Record<Color, string> = {
		primary: 'bg-primary-800',
		secondary: 'bg-secondary-800',
		slate: 'bg-slate-800',
		gray: 'bg-gray-800',
		zinc: 'bg-zinc-800',
		neutral: 'bg-neutral-800',
		stone: 'bg-stone-800',
		red: 'bg-red-800',
		orange: 'bg-orange-800',
		amber: 'bg-amber-800',
		yellow: 'bg-yellow-800',
		lime: 'bg-lime-800',
		green: 'bg-green-800',
		emerald: 'bg-emerald-800',
		teal: 'bg-teal-800',
		cyan: 'bg-cyan-800',
		sky: 'bg-sky-800',
		blue: 'bg-blue-800',
		indigo: 'bg-indigo-800',
		violet: 'bg-violet-800',
		purple: 'bg-purple-800',
		fuchsia: 'bg-fuchsia-800',
		pink: 'bg-pink-800',
		rose: 'bg-rose-800',
	};
</script>

{#if color}
	<div class="relative inline-block">
		<img
			class="{rounded ? 'rounded-md' : 'rounded-full'} {sizes[
				size
			]} inline-block ring-2 ring-white dark:ring-gray-800"
			{src}
			{alt}
		/>
		<span
			class="absolute top-0 right-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white {themes[
				color
			]}"
		/>
	</div>
{:else}
	<img
		class="{rounded ? 'rounded-md' : 'rounded-full'} {sizes[
			size
		]} inline-block ring-2 ring-white dark:ring-gray-800"
		{src}
		{alt}
	/>
{/if}
