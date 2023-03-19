<script lang="ts">
	import type { Color } from '$lib';
	import { getContext } from 'svelte';

	export let color: Color = getContext('accordion_color') ?? 'primary';
	export let style: 'plus' | 'arrow' = getContext('accordion_style') ?? 'arrow';

	const themes: Record<Color, { button: string; icon: string }> = {
		primary: {
			button:
				'hs-accordion-active:text-primary-600 dark:hs-accordion-active:text-primary-500',
			icon: 'hs-accordion-active:text-primary-600 hs-accordion-active:group-hover:text-primary-600',
		},
		secondary: {
			button:
				'hs-accordion-active:text-secondary-600 dark:hs-accordion-active:text-secondary-500',
			icon: 'hs-accordion-active:text-secondary-600 hs-accordion-active:group-hover:text-secondary-600',
		},
		slate: {
			button:
				'hs-accordion-active:text-slate-600 dark:hs-accordion-active:text-slate-500',
			icon: 'hs-accordion-active:text-slate-600 hs-accordion-active:group-hover:text-slate-600',
		},
		gray: {
			button:
				'hs-accordion-active:text-gray-600 dark:hs-accordion-active:text-gray-500',
			icon: 'hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600',
		},
		zinc: {
			button:
				'hs-accordion-active:text-zinc-600 dark:hs-accordion-active:text-zinc-500',
			icon: 'hs-accordion-active:text-zinc-600 hs-accordion-active:group-hover:text-zinc-600',
		},
		neutral: {
			button:
				'hs-accordion-active:text-neutral-600 dark:hs-accordion-active:text-neutral-500',
			icon: 'hs-accordion-active:text-neutral-600 hs-accordion-active:group-hover:text-neutral-600',
		},
		stone: {
			button:
				'hs-accordion-active:text-stone-600 dark:hs-accordion-active:text-stone-500',
			icon: 'hs-accordion-active:text-stone-600 hs-accordion-active:group-hover:text-stone-600',
		},
		red: {
			button:
				'hs-accordion-active:text-red-600 dark:hs-accordion-active:text-red-500',
			icon: 'hs-accordion-active:text-red-600 hs-accordion-active:group-hover:text-red-600',
		},
		orange: {
			button:
				'hs-accordion-active:text-orange-600 dark:hs-accordion-active:text-orange-500',
			icon: 'hs-accordion-active:text-orange-600 hs-accordion-active:group-hover:text-orange-600',
		},
		amber: {
			button:
				'hs-accordion-active:text-amber-600 dark:hs-accordion-active:text-amber-500',
			icon: 'hs-accordion-active:text-amber-600 hs-accordion-active:group-hover:text-amber-600',
		},
		yellow: {
			button:
				'hs-accordion-active:text-yellow-600 dark:hs-accordion-active:text-yellow-500',
			icon: 'hs-accordion-active:text-yellow-600 hs-accordion-active:group-hover:text-yellow-600',
		},
		lime: {
			button:
				'hs-accordion-active:text-lime-600 dark:hs-accordion-active:text-lime-500',
			icon: 'hs-accordion-active:text-lime-600 hs-accordion-active:group-hover:text-lime-600',
		},
		green: {
			button:
				'hs-accordion-active:text-green-600 dark:hs-accordion-active:text-green-500',
			icon: 'hs-accordion-active:text-green-600 hs-accordion-active:group-hover:text-green-600',
		},
		emerald: {
			button:
				'hs-accordion-active:text-emerald-600 dark:hs-accordion-active:text-emerald-500',
			icon: 'hs-accordion-active:text-emerald-600 hs-accordion-active:group-hover:text-emerald-600',
		},
		teal: {
			button:
				'hs-accordion-active:text-teal-600 dark:hs-accordion-active:text-teal-500',
			icon: 'hs-accordion-active:text-teal-600 hs-accordion-active:group-hover:text-teal-600',
		},
		cyan: {
			button:
				'hs-accordion-active:text-cyan-600 dark:hs-accordion-active:text-cyan-500',
			icon: 'hs-accordion-active:text-cyan-600 hs-accordion-active:group-hover:text-cyan-600',
		},
		sky: {
			button:
				'hs-accordion-active:text-sky-600 dark:hs-accordion-active:text-sky-500',
			icon: 'hs-accordion-active:text-sky-600 hs-accordion-active:group-hover:text-sky-600',
		},
		blue: {
			button:
				'hs-accordion-active:text-blue-600 dark:hs-accordion-active:text-blue-500',
			icon: 'hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600',
		},
		indigo: {
			button:
				'hs-accordion-active:text-indigo-600 dark:hs-accordion-active:text-indigo-500',
			icon: 'hs-accordion-active:text-indigo-600 hs-accordion-active:group-hover:text-indigo-600',
		},
		violet: {
			button:
				'hs-accordion-active:text-violet-600 dark:hs-accordion-active:text-violet-500',
			icon: 'hs-accordion-active:text-violet-600 hs-accordion-active:group-hover:text-violet-600',
		},
		purple: {
			button:
				'hs-accordion-active:text-purple-600 dark:hs-accordion-active:text-purple-500',
			icon: 'hs-accordion-active:text-purple-600 hs-accordion-active:group-hover:text-purple-600',
		},
		fuchsia: {
			button:
				'hs-accordion-active:text-fuchsia-600 dark:hs-accordion-active:text-fuchsia-500',
			icon: 'hs-accordion-active:text-fuchsia-600 hs-accordion-active:group-hover:text-fuchsia-600',
		},
		pink: {
			button:
				'hs-accordion-active:text-pink-600 dark:hs-accordion-active:text-pink-500',
			icon: 'hs-accordion-active:text-pink-600 hs-accordion-active:group-hover:text-pink-600',
		},
		rose: {
			button:
				'hs-accordion-active:text-rose-600 dark:hs-accordion-active:text-rose-500',
			icon: 'hs-accordion-active:text-rose-600 hs-accordion-active:group-hover:text-rose-600',
		},
	};
</script>

<div class="hs-accordion" id="hs-basic-heading-three">
	<button
		class="{themes[color]
			.button} hs-accordion-toggle group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-neutral-800 transition hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-400"
		aria-controls="hs-basic-collapse-three"
	>
		{#if style === 'plus'}
			<svg
				class="{themes[color]
					.icon} hs-accordion-active:hidden block w-3 h-3 text-neutral-600 group-hover:text-neutral-500 dark:text-neutral-400"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.62421 7.86L13.6242 7.85999"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path
					d="M8.12421 13.36V2.35999"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
			<svg
				class="{themes[color]
					.icon} hs-accordion-active:block hidden w-3 h-3 text-neutral-600 group-hover:text-neutral-500 dark:text-neutral-400"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.62421 7.86L13.6242 7.85999"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
		{:else}
			<svg
				class="{themes[color]
					.icon} hs-accordion-active:hidden block w-3 h-3 text-neutral-600 group-hover:text-neutral-500 dark:text-neutral-400"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
			<svg
				class="{themes[color]
					.icon} hs-accordion-active:block hidden w-3 h-3 text-neutral-600 group-hover:text-neutral-500 dark:text-neutral-400"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
		{/if}
		<slot name="title">Accordion</slot>
	</button>
	<div
		id="hs-basic-collapse-three"
		class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
		aria-labelledby="hs-basic-heading-three"
	>
		<span class="text-neutral-800 dark:text-neutral-200">
			<slot />
		</span>
	</div>
</div>
