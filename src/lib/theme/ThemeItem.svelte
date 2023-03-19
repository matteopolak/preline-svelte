<script lang="ts">
	import type { Color } from '$lib';
	import { theme } from '../../stores/theme';

	export let name: string;
	export let description: string | undefined = undefined;

	export let primary: Exclude<Color, 'primary' | 'secondary'> = 'rose';
	export let secondary: Exclude<Color, 'primary' | 'secondary'> = 'red';
	export let neutral: Exclude<Color, 'primary' | 'secondary'> = 'neutral';

	$: checked =
		$theme.primary === primary &&
		$theme.secondary === secondary &&
		$theme.neutral === neutral;

	function setColor() {
		console.trace('name', name);

		theme.set({
			primary,
			secondary,
			neutral,
		});
	}

	const themes: Record<Color, { label: string; text: string; div: string }> = {
		primary: {
			label: 'text-primary-600 focus:ring-primary-500',
			text: 'text-primary-800',
			div: 'hover:bg-primary-600/10',
		},
		secondary: {
			label: 'text-secondary-600 focus:ring-secondary-500',
			text: 'text-secondary-800',
			div: 'hover:bg-secondary-600/10',
		},
		slate: {
			label: 'text-slate-600 focus:ring-slate-500',
			text: 'text-slate-800',
			div: 'hover:bg-slate-600/10',
		},
		gray: {
			label: 'text-gray-600 focus:ring-gray-500',
			text: 'text-gray-800',
			div: 'hover:bg-gray-600/10',
		},
		zinc: {
			label: 'text-zinc-600 focus:ring-zinc-500',
			text: 'text-zinc-800',
			div: 'hover:bg-zinc-600/10',
		},
		neutral: {
			label: 'text-neutral-600 focus:ring-neutral-500',
			text: 'text-neutral-800',
			div: 'hover:bg-neutral-600/10',
		},
		stone: {
			label: 'text-stone-600 focus:ring-stone-500',
			text: 'text-stone-800',
			div: 'hover:bg-stone-600/10',
		},
		red: {
			label: 'text-red-600 focus:ring-red-500',
			text: 'text-red-800',
			div: 'hover:bg-red-600/10',
		},
		orange: {
			label: 'text-orange-600 focus:ring-orange-500',
			text: 'text-orange-800',
			div: 'hover:bg-orange-600/10',
		},
		amber: {
			label: 'text-amber-600 focus:ring-amber-500',
			text: 'text-amber-800',
			div: 'hover:bg-amber-600/10',
		},
		yellow: {
			label: 'text-yellow-600 focus:ring-yellow-500',
			text: 'text-yellow-800',
			div: 'hover:bg-yellow-600/10',
		},
		lime: {
			label: 'text-lime-600 focus:ring-lime-500',
			text: 'text-lime-800',
			div: 'hover:bg-lime-600/10',
		},
		green: {
			label: 'text-green-600 focus:ring-green-500',
			text: 'text-green-800',
			div: 'hover:bg-green-600/10',
		},
		emerald: {
			label: 'text-emerald-600 focus:ring-emerald-500',
			text: 'text-emerald-800',
			div: 'hover:bg-emerald-600/10',
		},
		teal: {
			label: 'text-teal-600 focus:ring-teal-500',
			text: 'text-teal-800',
			div: 'hover:bg-teal-600/10',
		},
		cyan: {
			label: 'text-cyan-600 focus:ring-cyan-500',
			text: 'text-cyan-800',
			div: 'hover:bg-cyan-600/10',
		},
		sky: {
			label: 'text-sky-600 focus:ring-sky-500',
			text: 'text-sky-800',
			div: 'hover:bg-sky-600/10',
		},
		blue: {
			label: 'text-blue-600 focus:ring-blue-500',
			text: 'text-blue-800',
			div: 'hover:bg-blue-600/10',
		},
		indigo: {
			label: 'text-indigo-600 focus:ring-indigo-500',
			text: 'text-indigo-800',
			div: 'hover:bg-indigo-600/10',
		},
		violet: {
			label: 'text-violet-600 focus:ring-violet-500',
			text: 'text-violet-800',
			div: 'hover:bg-violet-600/10',
		},
		purple: {
			label: 'text-purple-600 focus:ring-purple-500',
			text: 'text-purple-800',
			div: 'hover:bg-purple-600/10',
		},
		fuchsia: {
			label: 'text-fuchsia-600 focus:ring-fuchsia-500',
			text: 'text-fuchsia-800',
			div: 'hover:bg-fuchsia-600/10',
		},
		pink: {
			label: 'text-pink-600 focus:ring-pink-500',
			text: 'text-pink-800',
			div: 'hover:bg-pink-600/10',
		},
		rose: {
			label: 'text-rose-600 focus:ring-rose-500',
			text: 'text-rose-800',
			div: 'hover:bg-rose-600/10',
		},
	};
</script>

<div
	class="relative flex items-start py-2 px-3 rounded-md {themes[primary].div}"
	on:click={setColor}
	on:keypress
>
	<div class="flex items-center h-5">
		<input
			id="hs-dropdown-item-radio-delete"
			name="hs-dropdown-item-radio"
			type="radio"
			class="rounded-full border-gray-200 {themes[primary].label}"
			aria-describedby="hs-dropdown-item-radio-delete-description"
			{checked}
		/>
	</div>
	<label for="hs-dropdown-item-radio-delete" class="ml-3.5">
		<span class="block text-sm font-semibold {themes[primary].text}">
			{name}
		</span>
		{#if description}
			<span
				id="hs-dropdown-item-radio-delete-description"
				class="block text-sm text-neutral-600 dark:text-neutral-400"
			>
				{description}
			</span>
		{/if}
	</label>
</div>
