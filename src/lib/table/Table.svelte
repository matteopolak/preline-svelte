<script lang="ts">
	import { setContext } from 'svelte';

	export let striped = false;
	export let hoverable = false;

	setContext('striped', striped);
	setContext('hoverable', hoverable);
</script>

<div class="flex flex-col">
	<div class="-m-1.5 overflow-x-auto">
		<div class="p-1.5 min-w-full inline-block align-middle">
			<div class="overflow-hidden">
				<table
					class="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700"
				>
					<slot />
				</table>
			</div>
		</div>
	</div>
</div>
