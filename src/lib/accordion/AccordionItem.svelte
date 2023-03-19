<script lang="ts">
	import type { Color } from '$lib';

	export let color: Color = 'primary';
	export let open = false;
	export let border = false;
</script>

<div
	class="hs-accordion {border
		? 'bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg'
		: ''}"
	class:active={open}
>
	<button
		class="hs-accordion-toggle hs-accordion-active:text-{color}-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500"
	>
		<slot name="openIcon">
			<svg
				class="hs-accordion-active:hidden hs-accordion-active:text-{color}-600 hs-accordion-active:group-hover:text-{color}-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
		</slot>
		<slot name="closedIcon">
			<svg
				class="hs-accordion-active:block hs-accordion-active:text-{color}-600 hs-accordion-active:group-hover:text-{color}-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
		</slot>
		<slot name="title" />
	</button>
	<div
		class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
	>
		<slot />
	</div>
</div>
