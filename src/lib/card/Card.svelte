<script lang="ts">
	export let overlay = false;
	export let flip = false;
	export let horizontal = false;

	export let src: string | undefined = undefined;
	export let alt: string | undefined = undefined;
</script>

{#if overlay && src}
	<div
		class="relative bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-slate-700/[.7]"
	>
		<img class="w-full h-auto rounded-xl" {src} {alt} />
		<div class="absolute top-0 left-0 right-0">
			<div class="p-4 md:p-5">
				<h3 class="text-lg font-bold text-neutral-800 dark:text-white">
					<slot name="title">Card title</slot>
				</h3>

				<p class="mt-1 text-neutral-800 dark:text-neutral-400">
					<slot />
				</p>

				{#if $$slots.footer}
					<p class="mt-5 text-xs text-neutral-500 dark:text-neutral-500">
						<slot name="footer" />
					</p>
				{/if}
			</div>
		</div>
	</div>
{:else if src && !horizontal}
	<div
		class="flex flex-col bg-neutral-100 border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-slate-700/[.7]"
	>
		{#if src && !flip}
			<img class="w-full h-auto rounded-t-xl" {src} {alt} />
		{/if}

		<div class="p-4 {src ? 'md:p-7' : 'md:p-5'}">
			<h3 class="text-lg font-bold text-neutral-800 dark:text-white">
				<slot name="title">Card title</slot>
			</h3>

			<p class="mt-1 text-neutral-800 dark:text-neutral-400">
				<slot />
			</p>

			{#if $$slots.footer}
				<p class="mt-5 text-xs text-neutral-500 dark:text-neutral-500">
					<slot name="footer" />
				</p>
			{/if}
		</div>

		{#if src && flip}
			<img class="w-full h-auto rounded-b-xl" {src} {alt} />
		{/if}
	</div>
{:else if src}
	<div
		class="bg-neutral-100 border rounded-xl shadow-sm sm:flex dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-slate-700/[.7]"
	>
		<div
			class="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs"
		>
			<img
				class="w-full h-full absolute top-0 left-0 object-cover"
				{src}
				{alt}
			/>
		</div>
		<div class="flex flex-wrap">
			<div class="p-4 flex flex-col h-full sm:p-7">
				<h3 class="text-lg font-bold text-neutral-800 dark:text-white">
					<slot name="title">Card title</slot>
				</h3>
				<p class="mt-1 text-neutral-800 dark:text-neutral-400">
					<slot />
				</p>

				{#if $$slots.footer}
					<div class="mt-5 sm:mt-auto">
						<p class="text-xs text-neutral-500 dark:text-neutral-500">
							Last updated 5 mins ago
						</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
{:else}
	<div
		class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-slate-700/[.7]"
	>
		<div class="p-4 md:p-5">
			<h3 class="text-lg font-bold text-neutral-800 dark:text-white">
				<slot name="title">Card title</slot>
			</h3>
			<p class="mt-2 text-neutral-800 dark:text-neutral-400">
				<slot />
			</p>
		</div>

		{#if $$slots.footer}
			<div
				class="bg-neutral-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-800 dark:border-neutral-700"
			>
				<p class="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
					<slot name="footer" />
				</p>
			</div>
		{/if}
	</div>
{/if}
