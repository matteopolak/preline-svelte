<script lang="ts">
	import type { Color } from '$lib';

	export let color: Color = 'primary';
	export let soft = false;
	export let withIcon = false;

	const themes: Record<
		Color,
		{
			solid: string;
			soft: string;
			icon: string;
			softTitle: string;
			softDesc: string;
		}
	> = {
		primary: {
			solid: 'bg-primary-500 text-neutral-200',
			soft: 'bg-primary-200 border-primary-300 text-primary-600',
			icon: 'text-primary-500',
			softTitle: 'text-primary-800',
			softDesc: 'text-primary-700',
		},
		secondary: {
			solid: 'bg-secondary-500 text-neutral-200',
			soft: 'bg-secondary-200 border-secondary-300 text-secondary-600',
			icon: 'text-secondary-500',
			softTitle: 'text-secondary-800',
			softDesc: 'text-secondary-700',
		},
		slate: {
			solid: 'bg-slate-500 text-neutral-200',
			soft: 'bg-slate-200 border-slate-300 text-slate-600',
			icon: 'text-slate-500',
			softTitle: 'text-slate-800',
			softDesc: 'text-slate-700',
		},
		gray: {
			solid: 'bg-gray-500 text-neutral-200',
			soft: 'bg-gray-200 border-gray-300 text-gray-600',
			icon: 'text-gray-500',
			softTitle: 'text-gray-800',
			softDesc: 'text-gray-700',
		},
		zinc: {
			solid: 'bg-zinc-500 text-neutral-200',
			soft: 'bg-zinc-200 border-zinc-300 text-zinc-600',
			icon: 'text-zinc-500',
			softTitle: 'text-zinc-800',
			softDesc: 'text-zinc-700',
		},
		neutral: {
			solid: 'bg-neutral-500 text-neutral-200',
			soft: 'bg-neutral-200 border-neutral-300 text-neutral-600',
			icon: 'text-neutral-500',
			softTitle: 'text-neutral-800',
			softDesc: 'text-neutral-700',
		},
		stone: {
			solid: 'bg-stone-500 text-neutral-200',
			soft: 'bg-stone-200 border-stone-300 text-stone-600',
			icon: 'text-stone-500',
			softTitle: 'text-stone-800',
			softDesc: 'text-stone-700',
		},
		red: {
			solid: 'bg-red-500 text-neutral-200',
			soft: 'bg-red-200 border-red-300 text-red-600',
			icon: 'text-red-500',
			softTitle: 'text-red-800',
			softDesc: 'text-red-700',
		},
		orange: {
			solid: 'bg-orange-500 text-neutral-200',
			soft: 'bg-orange-200 border-orange-300 text-orange-600',
			icon: 'text-orange-500',
			softTitle: 'text-orange-800',
			softDesc: 'text-orange-700',
		},
		amber: {
			solid: 'bg-amber-500 text-neutral-200',
			soft: 'bg-amber-200 border-amber-300 text-amber-600',
			icon: 'text-amber-500',
			softTitle: 'text-amber-800',
			softDesc: 'text-amber-700',
		},
		yellow: {
			solid: 'bg-yellow-500 text-neutral-200',
			soft: 'bg-yellow-200 border-yellow-300 text-yellow-600',
			icon: 'text-yellow-500',
			softTitle: 'text-yellow-800',
			softDesc: 'text-yellow-700',
		},
		lime: {
			solid: 'bg-lime-500 text-neutral-200',
			soft: 'bg-lime-200 border-lime-300 text-lime-600',
			icon: 'text-lime-500',
			softTitle: 'text-lime-800',
			softDesc: 'text-lime-700',
		},
		green: {
			solid: 'bg-green-500 text-neutral-200',
			soft: 'bg-green-200 border-green-300 text-green-600',
			icon: 'text-green-500',
			softTitle: 'text-green-800',
			softDesc: 'text-green-700',
		},
		emerald: {
			solid: 'bg-emerald-500 text-neutral-200',
			soft: 'bg-emerald-200 border-emerald-300 text-emerald-600',
			icon: 'text-emerald-500',
			softTitle: 'text-emerald-800',
			softDesc: 'text-emerald-700',
		},
		teal: {
			solid: 'bg-teal-500 text-neutral-200',
			soft: 'bg-teal-200 border-teal-300 text-teal-600',
			icon: 'text-teal-500',
			softTitle: 'text-teal-800',
			softDesc: 'text-teal-700',
		},
		cyan: {
			solid: 'bg-cyan-500 text-neutral-200',
			soft: 'bg-cyan-200 border-cyan-300 text-cyan-600',
			icon: 'text-cyan-500',
			softTitle: 'text-cyan-800',
			softDesc: 'text-cyan-700',
		},
		sky: {
			solid: 'bg-sky-500 text-neutral-200',
			soft: 'bg-sky-200 border-sky-300 text-sky-600',
			icon: 'text-sky-500',
			softTitle: 'text-sky-800',
			softDesc: 'text-sky-700',
		},
		blue: {
			solid: 'bg-blue-500 text-neutral-200',
			soft: 'bg-blue-200 border-blue-300 text-blue-600',
			icon: 'text-blue-500',
			softTitle: 'text-blue-800',
			softDesc: 'text-blue-700',
		},
		indigo: {
			solid: 'bg-indigo-500 text-neutral-200',
			soft: 'bg-indigo-200 border-indigo-300 text-indigo-600',
			icon: 'text-indigo-500',
			softTitle: 'text-indigo-800',
			softDesc: 'text-indigo-700',
		},
		violet: {
			solid: 'bg-violet-500 text-neutral-200',
			soft: 'bg-violet-200 border-violet-300 text-violet-600',
			icon: 'text-violet-500',
			softTitle: 'text-violet-800',
			softDesc: 'text-violet-700',
		},
		purple: {
			solid: 'bg-purple-500 text-neutral-200',
			soft: 'bg-purple-200 border-purple-300 text-purple-600',
			icon: 'text-purple-500',
			softTitle: 'text-purple-800',
			softDesc: 'text-purple-700',
		},
		fuchsia: {
			solid: 'bg-fuchsia-500 text-neutral-200',
			soft: 'bg-fuchsia-200 border-fuchsia-300 text-fuchsia-600',
			icon: 'text-fuchsia-500',
			softTitle: 'text-fuchsia-800',
			softDesc: 'text-fuchsia-700',
		},
		pink: {
			solid: 'bg-pink-500 text-neutral-200',
			soft: 'bg-pink-200 border-pink-300 text-pink-600',
			icon: 'text-pink-500',
			softTitle: 'text-pink-800',
			softDesc: 'text-pink-700',
		},
		rose: {
			solid: 'bg-rose-500 text-neutral-200',
			soft: 'bg-rose-200 border-rose-300 text-rose-600',
			icon: 'text-rose-500',
			softTitle: 'text-rose-800',
			softDesc: 'text-rose-700',
		},
	};
</script>

<div
	class="{themes[color][soft ? 'soft' : 'solid']} text-sm rounded-md p-4"
	role="alert"
>
	{#if withIcon && (soft || $$slots.icon)}
		<div class="flex">
			<div class="flex-shrink-0">
				<slot name="icon">
					<svg
						class="h-4 w-4 mt-0.5 {themes[color].icon}"
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path
							d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
						/>
					</svg>
				</slot>
			</div>
			<div class="ml-4">
				{#if !$$slots.description}
					<slot />
				{:else}
					<h3
						class="text-sm {soft ? themes[color].softTitle : ''} font-semibold"
					>
						<slot />
					</h3>
					<div class="mt-1 text-sm {soft ? themes[color].softDesc : ''}">
						<slot name="description" />
					</div>
				{/if}
			</div>
		</div>
	{:else if !$$slots.description}
		<slot />
	{:else}
		<h3 class="text-sm {soft ? themes[color].softTitle : ''} font-semibold">
			<slot />
		</h3>
		<div class="mt-1 text-sm {soft ? themes[color].softDesc : ''}">
			<slot name="description" />
		</div>
	{/if}
</div>
