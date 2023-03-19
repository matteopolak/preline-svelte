<script lang="ts">
	import type { Color, ColorClass } from '$lib';

	export let color: Color = 'primary';
	export let iconColor: ColorClass<'text'> | undefined = undefined;

	export let withIcon = false;

	const colors: Record<Color, string> = {
		primary: 'bg-primary-200 text-primary-800',
		secondary: 'bg-secondary-200 text-secondary-800',
		slate: 'bg-slate-200 text-slate-800',
		gray: 'bg-gray-200 text-gray-800',
		zinc: 'bg-zinc-200 text-zinc-800',
		neutral: 'text-neutral-200 text-neutral-800',
		stone: 'bg-stone-200 text-stone-800',
		red: 'bg-red-200 text-red-800',
		orange: 'bg-orange-200 text-orange-800',
		amber: 'bg-amber-200 text-amber-800',
		yellow: 'bg-yellow-200 text-yellow-800',
		lime: 'bg-lime-200 text-lime-800',
		green: 'bg-green-200 text-green-800',
		emerald: 'bg-emerald-200 text-emerald-800',
		teal: 'bg-teal-200 text-teal-800',
		cyan: 'bg-cyan-200 text-cyan-800',
		sky: 'bg-sky-200 text-sky-800',
		blue: 'bg-blue-200 text-blue-800',
		indigo: 'bg-indigo-200 text-indigo-800',
		violet: 'bg-violet-200 text-violet-800',
		purple: 'bg-purple-200 text-purple-800',
		fuchsia: 'bg-fuchsia-200 text-fuchsia-800',
		pink: 'bg-pink-200 text-pink-800',
		rose: 'bg-rose-200 text-rose-800',
	};
</script>

<div class="{colors[color]} text-sm rounded-md p-4" role="alert">
	{#if withIcon}
		<div class="flex">
			<div class="flex-shrink-0">
				<slot name="icon">
					<svg
						class="h-4 w-4 mt-0.5 {iconColor ?? ''}"
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
				<slot />
			</div>
		</div>
	{:else}
		<slot />
	{/if}
</div>
