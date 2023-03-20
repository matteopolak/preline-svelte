<script lang="ts">
	import '@preline/dropdown';

	import { Button } from '$lib';
</script>

<div
	class="hs-dropdown relative inline-flex"
	data-hs-dropdown-auto-close="inside"
>
	<slot name="button">
		<Button>
			<svg
				class="hs-dropdown-open:rotate-180 w-2.5 h-2.5"
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
		</Button>
	</slot>

	<div
		class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
	>
		<slot />
	</div>
</div>
